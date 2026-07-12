import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f7f9] flex font-prompt">
      
      {/* ============================================================================
          🌟 SIDEBAR (เมนูแถบสีน้ำเงินเข้มด้านซ้าย)
      ============================================================================ */}
      <aside className="w-64 bg-[#0a192f] text-white flex flex-col justify-between hidden md:flex h-screen sticky top-0 shadow-xl z-20">
        <div>
          {/* โลโก้ */}
          <div className="h-20 flex items-center px-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white shadow-md">
                <i className="fas fa-truck-fast"></i>
              </div>
              <div>
                <h1 className="font-black text-[15px] tracking-widest leading-none mt-1">THANA<span className="text-[#00e5ff]">ADMIN</span></h1>
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em] mt-0.5">Management System</p>
              </div>
            </div>
          </div>

          {/* เมนู */}
          <nav className="p-4 flex flex-col gap-2 mt-2">
            <Link href="/admin/dashboard" className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-white rounded-xl transition-colors font-medium text-sm">
              <i className="fas fa-chart-pie w-5 text-center"></i>
              <span>ภาพรวม (Overview)</span>
            </Link>
            <Link href="/admin/packages" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium text-sm">
              <i className="fas fa-box w-5 text-center"></i>
              <span>จัดการพัสดุ</span>
            </Link>
            <Link href="/admin/quotes" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium text-sm">
              <i className="fas fa-file-invoice-dollar w-5 text-center"></i>
              <span>ใบเสนอราคา</span>
            </Link>
            <Link href="/admin/downloads" className="flex items-center gap-4 px-4 py-3 mt-4 text-[#00e5ff] bg-blue-900/20 border border-blue-500/20 hover:bg-blue-900/40 rounded-xl transition-colors font-bold text-sm shadow-sm">
              <i className="fas fa-file-arrow-down w-5 text-center text-lg"></i>
              <span>ดาวน์โหลดเอกสาร</span>
            </Link>
          </nav>
        </div>

        {/* ออกจากระบบ */}
        <div className="p-4 border-t border-white/10 bg-[#07111e]/50">
          <Link href="/" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors font-medium text-sm">
            <i className="fas fa-power-off w-5 text-center"></i>
            <span>ออกจากระบบ</span>
          </Link>
        </div>
      </aside>

      {/* ============================================================================
          🌟 MAIN CONTENT (พื้นที่ด้านขวา)
      ============================================================================ */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* TOP BAR */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
          <h2 className="text-xl font-bold text-[#0a2540]">จัดการระบบ (System Admin)</h2>
          <div className="flex items-center gap-6">
            <button className="text-blue-500 bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors relative">
              <i className="fas fa-bell"></i>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold tracking-wider shadow-sm">AD</div>
              <div className="hidden sm:block text-right">
                <p className="font-bold text-[#0a2540] text-sm leading-tight">ผู้ดูแลระบบ</p>
                <p className="text-[11px] text-gray-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* แทรกเนื้อหาของหน้าลูกๆ (เช่น หน้าโหลดเอกสาร) ไว้ตรงนี้ */}
        {children}
      </div>
    </div>
  );
}