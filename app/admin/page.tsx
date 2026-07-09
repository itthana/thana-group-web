const mockStats = {
  visitors: '12,543',
  newRequests: 24,
  activeNews: 8,
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* การ์ดสถิติ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-users"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">คนเข้าเว็บ (เดือนนี้)</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.visitors}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-red-50 text-[#e62e2d] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-file-signature"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">คำขอใบเสนอราคาใหม่</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.newRequests}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-newspaper"></i></div>
          <div>
            <p className="text-sm text-gray-500 font-bold mb-1">ข่าวสารที่ออนไลน์</p>
            <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.activeNews}</h3>
          </div>
        </div>
      </div>

      {/* กราฟจำลอง */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] flex flex-col items-center justify-center text-gray-400">
        <i className="fas fa-chart-line text-6xl mb-4 text-gray-200"></i>
        <p className="font-bold">พื้นที่สำหรับแสดงกราฟสถิติคนเข้าเว็บไซต์ (Google Analytics)</p>
        <p className="text-sm">รอการเชื่อมต่อฐานข้อมูล</p>
      </div>
    </div>
  );
}