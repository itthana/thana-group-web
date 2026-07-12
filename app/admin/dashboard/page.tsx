'use client';

export default function AdminDashboard() {
  return (
    <main className="p-8 max-w-7xl mx-auto w-full font-prompt animate-fade-in-up">
      <h3 className="text-2xl font-black text-[#0a2540] mb-6">ระบบหลังบ้าน (Dashboard)</h3>
      
      {/* Grid สถิติ 3 กล่อง */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* กล่องที่ 1 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
            <i className="fas fa-users"></i>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500 mb-1">คนเข้าเว็บ (เดือนนี้)</p>
            <h4 className="text-3xl font-black text-[#0a2540]">12,543</h4>
          </div>
        </div>

        {/* กล่องที่ 2 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-3xl flex-shrink-0">
            <i className="fas fa-file-signature"></i>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500 mb-1">คำขอใบเสนอราคาใหม่</p>
            <h4 className="text-3xl font-black text-[#0a2540]">24</h4>
          </div>
        </div>

        {/* กล่องที่ 3 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-3xl flex-shrink-0">
            <i className="fas fa-newspaper"></i>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500 mb-1">ข่าวสารที่ออนไลน์</p>
            <h4 className="text-3xl font-black text-[#0a2540]">8</h4>
          </div>
        </div>

      </div>

      {/* กราฟหลอก (Placeholder) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-96 flex flex-col items-center justify-center text-center p-6">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-chart-line text-5xl text-gray-300"></i>
        </div>
        <h5 className="text-lg font-bold text-gray-600">พื้นที่สำหรับแสดงกราฟสถิติคนเข้าเว็บไซต์ (Google Analytics)</h5>
        <p className="text-sm text-gray-400 mt-2">รอการเชื่อมต่อฐานข้อมูลระบบกราฟ</p>
      </div>

    </main>
  );
}