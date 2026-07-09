import prisma from '@/lib/prisma';

export default async function ParcelsAdminPage() {
  // ดึงข้อมูลพัสดุทั้งหมด เรียงจากอัปเดตล่าสุด
  const parcels = await prisma.tracking.findMany({
    orderBy: { updatedAt: 'desc' },
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#0a2540]">📦 จัดการสถานะพัสดุ</h2>
        <button className="bg-[#00249c] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
          <i className="fas fa-plus"></i> เพิ่มพัสดุใหม่
        </button>
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
                <td colSpan={5} className="text-center p-8 text-gray-500">ยังไม่มีข้อมูลพัสดุในระบบ</td>
              </tr>
            ) : (
              parcels.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-bold text-blue-600">{p.trackingNumber}</td>
                  <td className="p-4 text-sm">{p.sender}</td>
                  <td className="p-4 text-sm">{p.receiver}</td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                      {p.currentStatus}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-bold shadow-sm">
                      อัปเดตสถานะ
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}