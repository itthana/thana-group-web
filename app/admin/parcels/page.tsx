import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function ParcelsAdminPage() {
  // 📥 ดึงข้อมูลพัสดุทั้งหมดจาก Database มาโชว์ในตาราง
  const parcels = await prisma.tracking.findMany({
    orderBy: { updatedAt: 'desc' },
  });

  // 🚀 SERVER ACTION: ฟังก์ชันเวทมนตร์สำหรับรับข้อมูลจากฟอร์มบันทึกลง Database
  async function updateStatus(formData: FormData) {
    'use server';
    
    // 1. ดึงข้อมูลที่พิมพ์ลงในฟอร์ม
    const trackingNo = formData.get('trackingNo') as string;
    const status = formData.get('status') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;

    if (!trackingNo || !status) return; // ถ้าไม่กรอกเลขพัสดุหรือสถานะ ให้หยุดทำงาน

    // 2. เช็คว่ามีเลขพัสดุนี้ในตารางหลัก (Tracking) ไหม?
    const parcel = await prisma.tracking.findUnique({
      where: { trackingNumber: trackingNo }
    });

    // 3. บันทึกประวัติสถานะใหม่ลงตาราง TrackingHistory เสมอ!
    await prisma.trackingHistory.create({
      data: {
        trackingNumber: trackingNo,
        status: status,
        location: location,
        description: description,
        parcelId: parcel?.id, // ถ้าเจอพัสดุในระบบ ก็ผูก ID เข้าไปด้วย
      }
    });

    // 4. ถ้าเจอพัสดุในตารางหลัก ให้อัปเดตสถานะล่าสุด (currentStatus) ด้วย
    if (parcel) {
      await prisma.tracking.update({
        where: { id: parcel.id },
        data: { currentStatus: status }
      });
    }

    // 5. สั่งให้เว็บรีเฟรชตัวเองเบาๆ 1 ครั้ง เพื่อดึงข้อมูลใหม่มาโชว์ทันที
    revalidatePath('/admin/parcels');
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      
      {/* ==========================================
          ส่วนที่ 1: ฟอร์มอัปเดตสถานะพัสดุ
      ========================================== */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6 bg-[#0a2540] text-white p-4 rounded-lg">
          <i className="fas fa-satellite-dish text-blue-400"></i>
          <h2 className="text-lg font-bold">อัปเดตสถานะพัสดุ (Status Update)</h2>
        </div>

        {/* 🌟 ฟอร์มที่ผูกกับ Server Action updateStatus */}
        <form action={updateStatus} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">1. หมายเลขพัสดุ (TRACKING NO.)</label>
            <input 
              type="text" 
              name="trackingNo" 
              required
              placeholder="เช่น THN12345678" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">2. สถานะใหม่ที่ต้องการอัปเดต</label>
            <select 
              name="status" 
              required
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">-- เลือกสถานะ --</option>
              <option value="รับพัสดุเข้าระบบ (Picked Up)">📦 1. รับพัสดุเข้าระบบ (Picked Up)</option>
              <option value="อยู่ระหว่างขนส่ง (In Transit)">🚚 2. อยู่ระหว่างขนส่ง (In Transit)</option>
              <option value="ถึงศูนย์คัดแยก (At Sort Facility)">🏢 3. ถึงศูนย์คัดแยก (At Sort Facility)</option>
              <option value="กำลังนำจ่าย (Out for Delivery)">🛵 4. กำลังนำจ่าย (Out for Delivery)</option>
              <option value="จัดส่งสำเร็จ (Delivered)">✅ 5. จัดส่งสำเร็จ (Delivered)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">3. สถานที่ / จุดสแกนพัสดุ (LOCATION)</label>
            <input 
              type="text" 
              name="location" 
              placeholder="เช่น ด่านศุลกากรหนองคาย" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">4. หมายเหตุเพิ่มเติม (DESCRIPTION)</label>
            <input 
              type="text" 
              name="description" 
              placeholder="เช่น เปลี่ยนถ่ายรถบรรทุก" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-2">
            <button type="submit" className="bg-[#00249c] hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold shadow-md flex items-center gap-2 transition-colors">
              <i className="fas fa-cloud-arrow-up"></i> บันทึกสถานะพัสดุ
            </button>
          </div>
        </form>
      </div>

      {/* ==========================================
          ส่วนที่ 2: ตารางแสดงข้อมูลพัสดุ (รอดึงข้อมูลจริง)
      ========================================== */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#0a2540]">📦 จัดการสถานะพัสดุทั้งหมด</h2>
          <Link href="/admin/parcels/new" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm">
  <i className="fas fa-plus"></i> เพิ่มพัสดุใหม่
</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="p-4 rounded-tl-lg font-semibold">หมายเลขพัสดุ (Tracking)</th>
                <th className="p-4 font-semibold">ผู้ส่ง</th>
                <th className="p-4 font-semibold">ผู้รับ</th>
                <th className="p-4 font-semibold">สถานะปัจจุบัน</th>
                <th className="p-4 rounded-tr-lg font-semibold text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {parcels.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-8 text-gray-500 font-medium">ยังไม่มีข้อมูลพัสดุในระบบ (ลองสร้างข้อมูลดูสิครับ)</td>
                </tr>
              ) : (
                parcels.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-bold text-blue-600">{p.trackingNumber}</td>
                    <td className="p-4 text-sm">{p.sender}</td>
                    <td className="p-4 text-sm">{p.receiver}</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        {p.currentStatus}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-yellow-500 hover:text-yellow-600 px-3 py-1 text-lg">
                        <i className="fas fa-pen-to-square"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}