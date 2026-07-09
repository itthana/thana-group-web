'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ตัวช่วยเช็คว่าตอนนี้อยู่หน้าไหน

  // ฟังก์ชันเช็คปุ่มที่กำลังใช้งาน เพื่อเปลี่ยนเป็นสีแดง
  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 font-prompt flex">
      
      {/* ==========================================
          1. SIDEBAR (เมนูด้านซ้าย)
      ========================================== */}
      <aside className="w-64 bg-[#0a2540] text-white hidden md:flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#00249c] to-blue-500 rounded-lg flex items-center justify-center text-xl shadow-md">
            <i className="fas fa-truck-fast"></i>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-wide leading-tight">THANA<span className="text-[#00e5ff]">ADMIN</span></h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Management System</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {/* เมนู 1: ภาพรวม */}
          <Link href="/admin" className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive('/admin') ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-chart-pie w-5"></i> ภาพรวม (Overview)
          </Link>

          {/* เมนู 2: จัดการพัสดุ */}
          <Link href="/admin/parcels" className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive('/admin/parcels') ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-box w-5"></i> จัดการพัสดุ
          </Link>

          {/* เมนู 3: ใบเสนอราคา */}
          <Link href="/admin/quotations" className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive('/admin/quotations') ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-file-invoice-dollar w-5"></i> ใบเสนอราคา
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <i className="fas fa-arrow-right-from-bracket w-5"></i> กลับสู่หน้าเว็บหลัก
          </Link>
        </div>
      </aside>

      {/* ==========================================
          2. MAIN CONTENT (พื้นที่แสดงผลหลัก)
      ========================================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white h-20 border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <h2 className="text-xl font-black text-[#0a2540]">
            {isActive('/admin') && 'ระบบหลังบ้าน (Dashboard)'}
            {isActive('/admin/parcels') && 'จัดการพัสดุ (Parcel Tracking)'}
            {isActive('/admin/quotations') && 'จัดการคำขอใบเสนอราคา (Quotations)'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center text-[#00249c]">
              <i className="fas fa-bell"></i>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-[#0a2540]">ผู้ดูแลระบบ</p>
                <p className="text-[10px] text-gray-500 font-medium">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto p-8">
          {children} {/* 🌟 เนื้อหาของแต่ละหน้าจะมาโผล่ตรงนี้ครับ */}
        </div>
      </main>
    </div>
  );
}