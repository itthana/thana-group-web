import prisma from '@/lib/prisma';

// เปลี่ยนมาใช้เป็น Server Component (ลบ 'use client' ออกถ้ามี)
export default async function AdminDashboardPage() {
  // 1. ดึงข้อมูลตัวเลขจริงจาก Database
  const totalQuotations = await prisma.quotation.count();
  const totalParcels = await prisma.tracking.count(); 
  const totalNews = await prisma.news.count();

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* การ์ดสถิติ (ข้อมูลจริง) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* การ์ด 1: จำนวนพัสดุ (แทนที่คนเข้าเว็บ) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-box"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">จำนวนพัสดุในระบบ</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{totalParcels}</h3>
          </div>
        </div>

        {/* การ์ด 2: ใบเสนอราคา */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-red-50 text-[#e62e2d] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-file-signature"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">คำขอใบเสนอราคา</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{totalQuotations}</h3>
          </div>
        </div>

        {/* การ์ด 3: ข่าวสาร */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-newspaper"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">ข่าวสารที่ออนไลน์</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{totalNews}</h3>
          </div>
        </div>

      </div>

      {/* กราฟจำลอง */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] flex flex-col items-center justify-center text-gray-400">
        <i className="fas fa-chart-line text-6xl mb-4 text-gray-200"></i>
        <p className="font-bold">พื้นที่สำหรับแสดงกราฟสถิติ (รอการเชื่อมต่อ API)</p>
      </div>
    </div>
  );
}