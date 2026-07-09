'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm font-prompt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* โลโก้ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#00249c] to-blue-500 rounded-xl flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
                <i className="fas fa-truck-fast"></i>
              </div>
              <span className="font-black text-2xl text-[#0a2540] tracking-wide">THANA<span className="text-[#00e5ff]">GROUP</span></span>
            </Link>
          </div>

          {/* เมนูสำหรับคอมพิวเตอร์ */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-bold text-gray-600 hover:text-[#00249c] transition-colors">หน้าแรก</Link>
            <Link href="/contact" className="font-bold text-gray-600 hover:text-[#00249c] transition-colors">ติดต่อเรา</Link>
            
            {/* 🆕 ปุ่มประเมินราคาที่เพิ่มเข้ามาใหม่ */}
            <Link href="/calculator" className="bg-blue-50 hover:bg-[#00249c] text-[#00249c] hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all border border-blue-100 flex items-center gap-2">
              <i className="fas fa-calculator"></i> ประเมินราคา
            </Link>

            {/* ปุ่มเข้าสู่ระบบ Admin เดิม */}
            <Link href="/admin/login" className="bg-[#0a2540] hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2">
              <i className="fas fa-user-shield"></i> ผู้ดูแลระบบ
            </Link>
          </div>

          {/* ปุ่มเมนูสำหรับมือถือ (Hamburger) */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#0a2540] focus:outline-none text-2xl">
              <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* เมนูมือถือเมื่อกดปุ่ม Hamburger */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:text-[#00249c] hover:bg-blue-50">หน้าแรก</Link>
            <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:text-[#00249c] hover:bg-blue-50">ติดต่อเรา</Link>
            
            {/* 🆕 ปุ่มประเมินราคาสำหรับมือถือ */}
            <Link href="/calculator" className="block px-3 py-3 rounded-md text-base font-bold text-[#00249c] bg-blue-50 hover:bg-blue-100 mt-2">
              <i className="fas fa-calculator mr-2"></i> ประเมินราคาขนส่ง
            </Link>

            <Link href="/admin/login" className="block px-3 py-3 rounded-md text-base font-bold text-white bg-[#0a2540] hover:bg-slate-800 mt-4 text-center">
              <i className="fas fa-user-shield mr-2"></i> เข้าสู่ระบบผู้ดูแล
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}