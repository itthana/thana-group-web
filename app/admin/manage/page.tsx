'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ManageParcelsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [parcels, setParcels] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // โหลดข้อมูลพัสดุทั้งหมดเมื่อเปิดหน้านี้
  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const res = await fetch('/api/admin/parcels');
        const json = await res.json();
        if (json.success) {
          setParcels(json.data);
        }
      } catch (error) {
        console.error('Error fetching parcels', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchParcels();
  }, []);

  // ระบบค้นหาพัสดุในตาราง
  const filteredParcels = parcels.filter(p => 
    p.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (p.trackingHistories[0]?.status || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-slate-50 font-prompt">
      
      {/* ==========================================
          📱 1. SIDEBAR (เมนูด้านข้าง)
      ========================================== */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#0a2540] text-white transition-all duration-300 flex flex-col fixed h-full z-20 shadow-2xl`}>
        <div className="h-16 md:h-20 flex items-center justify-between px-4 border-b border-white/10">
          {isSidebarOpen ? (
            <div className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">
              THANA ADMIN
            </div>
          ) : (
            <div className="font-black text-xl text-[#00e5ff] mx-auto">TA</div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white transition-colors">
            <i className={`fas ${isSidebarOpen ? 'fa-angle-left' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-2 px-3 overflow-y-auto custom-scrollbar">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-chart-pie w-6 text-center text-lg group-hover:text-blue-400"></i>
            {isSidebarOpen && <span className="font-medium">ภาพรวมระบบ</span>}
          </Link>
          {/* เมนูจัดการพัสดุ (สถานะกำลังใช้งาน Active) */}
          <Link href="/admin/manage" className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-[#00e5ff] rounded-xl border border-blue-500/30 group">
            <i className="fas fa-boxes-packing w-6 text-center text-lg"></i>
            {isSidebarOpen && <span className="font-bold">จัดการพัสดุ</span>}
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-users w-6 text-center text-lg group-hover:text-emerald-400"></i>
            {isSidebarOpen && <span className="font-medium">รายชื่อลูกค้า</span>}
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-file-invoice-dollar w-6 text-center text-lg group-hover:text-red-400"></i>
            {isSidebarOpen && <span className="font-medium">ใบเสนอราคา</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-arrow-right-from-bracket w-6 text-center text-lg group-hover:text-red-500"></i>
            {isSidebarOpen && <span className="font-medium">กลับหน้าเว็บไซต์</span>}
          </Link>
        </div>
      </aside>

      {/* ==========================================
          🖥️ 2. MAIN CONTENT (พื้นที่ทำงานหลัก)
      ========================================== */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Header */}
        <header className="h-16 md:h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-10 shadow-sm">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-[#0a2540]">จัดการพัสดุทั้งหมด</h1>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">Parcel Management Data</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00249c] to-blue-500 flex items-center justify-center text-white font-bold shadow-md">AD</div>
              <div className="hidden md:block">
                <div className="text-sm font-bold text-[#0a2540]">ผู้ดูแลระบบ</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* แถบเครื่องมือ (Toolbar) */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="relative w-full sm:w-96">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  placeholder="ค้นหาเลขพัสดุ หรือ สถานะ..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm font-medium"
                />
              </div>
              <Link href="/admin" className="w-full sm:w-auto bg-[#00249c] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                <i className="fas fa-plus"></i> อัปเดตสถานะใหม่
              </Link>
            </div>

            {/* ตารางข้อมูล (Data Table) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="p-5 font-bold border-b border-gray-100">เลขพัสดุ (Tracking No.)</th>
                    <th className="p-5 font-bold border-b border-gray-100">สถานะล่าสุด (Latest Status)</th>
                    <th className="p-5 font-bold border-b border-gray-100 hidden md:table-cell">อัปเดตล่าสุดเมื่อ</th>
                    <th className="p-5 font-bold border-b border-gray-100 text-center">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {isLoading ? (
                    <tr><td colSpan={4} className="text-center py-10 text-gray-400 font-bold"><i className="fas fa-circle-notch fa-spin text-2xl mb-2"></i><br/>กำลังโหลดข้อมูล...</td></tr>
                  ) : filteredParcels.length === 0 ? (
                    <tr><td colSpan={4} className="text-center py-10 text-gray-400 font-bold"><i className="fas fa-box-open text-3xl mb-2"></i><br/>ไม่พบข้อมูลพัสดุในระบบ</td></tr>
                  ) : (
                    filteredParcels.map((parcel) => {
                      const latestHistory = parcel.trackingHistories?.[0];
                      const isDelivered = latestHistory?.status?.includes('สำเร็จ');
                      
                      return (
                        <tr key={parcel.id} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="p-5">
                            <div className="font-black text-[#0a2540] text-base">{parcel.trackingNumber}</div>
                          </td>
                          <td className="p-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${isDelivered ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                              <i className={`fas ${isDelivered ? 'fa-check-circle' : 'fa-truck-fast'}`}></i>
                              {latestHistory?.status || 'ยังไม่มีสถานะ'}
                            </span>
                          </td>
                          <td className="p-5 text-sm text-gray-500 font-medium hidden md:table-cell">
                            {latestHistory?.createdAt ? new Date(latestHistory.createdAt).toLocaleString('th-TH') : '-'}
                          </td>
                          <td className="p-5 text-center">
                            {/* ส่งเลขพัสดุ และสถานะล่าสุด แนบไปกับ URL */}
                            <Link 
                              href={`/admin?tracking=${parcel.trackingNumber}&currentStatus=${encodeURIComponent(latestHistory?.status || '')}`} 
                              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shadow-sm hover:shadow-md" 
                              title="อัปเดตสถานะ"
                            >
                              <i className="fas fa-pen-to-square"></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer ตาราง */}
            <div className="bg-slate-50 p-4 border-t border-gray-100 text-xs font-bold text-gray-400 text-right">
              ข้อมูลทั้งหมด {filteredParcels.length} รายการ
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}