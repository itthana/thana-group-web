import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function NewParcelPage() {
  
  // 🚀 SERVER ACTION: ฟังก์ชันรับข้อมูลจากฟอร์มบันทึกลง Database
  async function createParcel(formData: FormData) {
    'use server';
    
    // 1. ดึงข้อมูลจากฟอร์ม
    const trackingNumber = formData.get('trackingNumber') as string;
    const origin = formData.get('origin') as string;
    const destination = formData.get('destination') as string;
    const sender = formData.get('sender') as string;
    const receiver = formData.get('receiver') as string;
    const estimatedDelivery = formData.get('estimatedDelivery') as string;
    const serviceType = formData.get('serviceType') as string;
    const pieces = Number(formData.get('pieces'));
    const weight = formData.get('weight') as string;

    // 2. สร้างพัสดุใหม่ในฐานข้อมูล
    await prisma.tracking.create({
      data: {
        trackingNumber,
        origin,
        destination,
        sender,
        receiver,
        estimatedDelivery,
        serviceType,
        pieces,
        weight,
        currentStatus: 'รับพัสดุเข้าระบบ (Picked Up)', // สถานะเริ่มต้น
      }
    });

    // 3. บันทึกเสร็จ ให้เด้งกลับไปหน้าตารางพัสดุหลัก
    redirect('/admin/parcels');
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-black text-[#0a2540]">
          <i className="fas fa-box-open text-emerald-600 mr-2"></i> สร้างรายการพัสดุใหม่
        </h2>
        <Link href="/admin/parcels" className="text-gray-500 hover:text-gray-800 font-medium text-sm">
          <i className="fas fa-arrow-left mr-1"></i> กลับไปหน้าจัดการพัสดุ
        </Link>
      </div>

      <form action={createParcel} className="space-y-6">
        
        {/* แถวที่ 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">หมายเลขพัสดุ (Tracking Number) *</label>
            <input type="text" name="trackingNumber" required placeholder="เช่น THN2026..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">ประเภทบริการ (Service Type) *</label>
            <select name="serviceType" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500">
              <option value="ขนส่งด่วน (Express)">ขนส่งด่วน (Express)</option>
              <option value="ขนส่งเหมาคัน (FTL)">ขนส่งเหมาคัน (FTL)</option>
              <option value="ขนส่งข้ามแดน (Cross-border)">ขนส่งข้ามแดน (Cross-border)</option>
            </select>
          </div>
        </div>

        {/* แถวที่ 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-[#00249c] mb-4"><i className="fas fa-user-tag mr-2"></i>ข้อมูลผู้ส่ง</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">ชื่อผู้ส่ง *</label>
                <input type="text" name="sender" required className="w-full p-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">ต้นทาง (Origin) *</label>
                <input type="text" name="origin" required placeholder="เช่น กรุงเทพฯ, ไทย" className="w-full p-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
            <h3 className="font-bold text-emerald-700 mb-4"><i className="fas fa-map-location-dot mr-2"></i>ข้อมูลผู้รับ</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">ชื่อผู้รับ *</label>
                <input type="text" name="receiver" required className="w-full p-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">ปลายทาง (Destination) *</label>
                <input type="text" name="destination" required placeholder="เช่น เวียงจันทน์, ลาว" className="w-full p-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* แถวที่ 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">จำนวนชิ้น (Pieces) *</label>
            <input type="number" name="pieces" required min="1" defaultValue="1" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">น้ำหนักรวม (Weight) *</label>
            <input type="text" name="weight" required placeholder="เช่น 15 kg" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">วันที่คาดว่าจะถึง *</label>
            <input type="text" name="estimatedDelivery" required placeholder="เช่น 12 ก.ค. 2026" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500" />
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-end">
          <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold shadow-md flex items-center gap-2 transition-colors">
            <i className="fas fa-save"></i> บันทึกข้อมูลพัสดุ
          </button>
        </div>

      </form>
    </div>
  );
}