'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ==========================================
          1. TOP BAR (แถบสีดำด้านบน ตามต้นฉบับเป๊ะ)
      ========================================== */}
      <div className="bg-[#1e293b] text-gray-300 text-[11px] md:text-xs py-1.5 px-4 font-prompt border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* ฝั่งซ้าย: ข้อมูล Real-time */}
          <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
            <div className="flex items-center gap-2 shrink-0">
               <span className="text-red-500 font-bold animate-pulse"><i className="fas fa-podcast"></i> LIVE UPDATES:</span>
               <span className="text-gray-300 hidden md:inline">สถานะด่านหนองคาย: <span className="text-green-400 font-bold">Normal</span></span>
            </div>
            <div className="hidden lg:flex items-center gap-6">
               <span className="flex items-center gap-1.5"><i className="fas fa-gas-pump text-gray-400"></i> FSC (Fuel Surcharge): <span className="text-red-400 font-bold">24.5% <i className="fas fa-caret-down"></i></span></span>
               <span className="flex items-center gap-1.5"><i className="fas fa-dollar-sign text-gray-400"></i> USD/THB: <span className="text-green-400 font-bold">33.47</span></span>
            </div>
          </div>

          {/* ฝั่งขวา: Login & Language */}
          <div className="flex items-center gap-4 shrink-0 font-bold tracking-wider">
            <Link href="/admin/login" className="hidden md:flex items-center gap-1.5 text-amber-500 hover:text-amber-400 transition-colors">
              <i className="fas fa-user-tie"></i> STAFF ONLY
            </Link>
            <Link href="#" className="flex items-center gap-1.5 text-[#00e5ff] hover:text-blue-300 transition-colors md:border-l md:border-gray-600 md:pl-4">
              <i className="fas fa-globe"></i> E-SERVICES LOGIN
            </Link>
            <div className="flex items-center gap-1.5 border-l border-gray-600 pl-4 cursor-pointer hover:text-white">
              <img src="https://flagcdn.com/w20/th.png" alt="TH" className="w-4 h-3 rounded-sm shadow-sm" /> TH
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          2. MAIN NAVBAR (เมนูหลักสีขาว)
      ========================================== */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm font-prompt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            
            {/* โลโก้ และ ป้ายกำกับ (จำลองตามรูปภาพ) */}
            <div className="flex items-center gap-4">
               <Link href="/" className="flex flex-col justify-center group">
                 <div className="flex items-center">
                    <span className="text-4xl font-black text-[#00249c] italic tracking-tighter leading-none">TLT</span>
                    <i className="fas fa-location-arrow text-red-600 text-2xl -rotate-45 ml-1 mb-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                 </div>
                 <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mt-0.5">THANA LOGISTICS CO.,LTD.</span>
               </Link>
               
               {/* ป้าย ขนส่งด่วน ไทย-ลาว */}
               <div className="hidden lg:flex flex-col items-center justify-center border-l-2 border-gray-200 pl-4">
                  <span className="text-xs font-bold text-[#0a2540]">ขนส่งด่วน</span>
                  <span className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded font-black tracking-wider">ไทย - ลาว</span>
               </div>
            </div>

            {/* ==========================================
                เมนูกลาง (หน้าแรก, องค์กร, บริการ...)
            ========================================== */}
            <div className="hidden xl:flex items-center space-x-7">
              <Link href="/" className="text-[15px] font-bold text-gray-700 hover:text-red-600 transition-colors">หน้าแรก</Link>
              
              {/* Dropdown: องค์กร */}
              <div className="relative group h-full flex items-center">
                <button className="text-[15px] font-bold text-gray-700 group-hover:text-red-600 flex items-center gap-1.5 py-8 outline-none transition-colors">
                  องค์กร <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-red-600 transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-[75px] left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
                   <Link href="#" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">ประวัติบริษัท</Link>
                   <Link href="#" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">วิสัยทัศน์ & พันธกิจ</Link>
                </div>
              </div>

              {/* Dropdown: บริการ */}
              <div className="relative group h-full flex items-center">
                <button className="text-[15px] font-bold text-gray-700 group-hover:text-red-600 flex items-center gap-1.5 py-8 outline-none transition-colors">
                  บริการ <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-red-600 transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-[75px] left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
                   <Link href="/services" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">ขนส่งข้ามแดน</Link>
                   <Link href="/services" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">พิธีการศุลกากร</Link>
                </div>
              </div>

              {/* Dropdown: ข้อมูล */}
              <div className="relative group h-full flex items-center">
                <button className="text-[15px] font-bold text-gray-700 group-hover:text-red-600 flex items-center gap-1.5 py-8 outline-none transition-colors">
                  ข้อมูล <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-red-600 transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-[75px] left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
                   <Link href="#" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">ตารางราคาน้ำมัน</Link>
                   <Link href="#" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">อัตราแลกเปลี่ยน</Link>
                </div>
              </div>

              <Link href="#" className="text-[15px] font-bold text-gray-700 hover:text-red-600 transition-colors">แผนการทำงาน</Link>
            </div>

            {/* ==========================================
                ฝั่งขวา (เบอร์โทร + ปุ่มประเมินราคา + ติดต่อเรา)
            ========================================== */}
            <div className="hidden lg:flex items-center gap-5">
               
               {/* เบอร์โทรศัพท์ */}
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                     <i className="fas fa-headset"></i>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[9px] text-gray-400 font-bold leading-none tracking-wider">ติดต่อเจ้าหน้าที่ 24 ชม.</span>
                     <a href="tel:0930237931" className="text-[#0a2540] font-black text-[15px] hover:text-red-600 transition-colors">093-023-7931</a>
                  </div>
               </div>

               {/* 🚀 ปุ่มประเมินราคา (ดีไซน์กลมกลืน) */}
               <div className="flex items-center gap-3 ml-2 border-l border-gray-200 pl-5">
                 <Link href="/calculator" className="bg-blue-50 text-[#00249c] border border-blue-200 hover:bg-[#00249c] hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-sm group">
                   <i className="fas fa-calculator text-[#00249c] group-hover:text-[#00e5ff] transition-colors"></i> ประเมินราคา
                 </Link>
                 
                 <Link href="/contact" className="bg-[#e62e2d] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                   ติดต่อเรา
                 </Link>
               </div>
            </div>

            {/* ปุ่มเมนูสำหรับมือถือ */}
            <div className="flex items-center lg:hidden gap-3">
               <Link href="/calculator" className="w-10 h-10 bg-blue-50 text-[#00249c] rounded-full flex items-center justify-center text-sm shadow-sm">
                  <i className="fas fa-calculator"></i>
               </Link>
               <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none text-2xl w-10 h-10 flex items-center justify-center">
                  <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
               </button>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. MOBILE MENU (หน้าจอมือถือ)
        ========================================== */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors">หน้าแรก</Link>
              
              <div className="pt-2 pb-1 border-t border-gray-100 mt-2">
                <div className="px-4 py-2 text-xs font-black text-red-600 uppercase tracking-wider">หมวดหมู่ข้อมูล</div>
                <Link href="#" className="block px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-red-50"><i className="fas fa-building text-gray-400 w-5"></i> องค์กร</Link>
                <Link href="/services" className="block px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-red-50"><i className="fas fa-truck-fast text-gray-400 w-5"></i> บริการ</Link>
                <Link href="#" className="block px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-red-50"><i className="fas fa-folder-open text-gray-400 w-5"></i> ข้อมูล</Link>
                <Link href="#" className="block px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-red-50"><i className="fas fa-map-location-dot text-gray-400 w-5"></i> แผนการทำงาน</Link>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
                <Link href="/calculator" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-[#00249c] bg-blue-50 hover:bg-blue-100 transition-colors">
                  <i className="fas fa-calculator"></i> ประเมินราคา
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#e62e2d] hover:bg-red-700 transition-colors shadow-md">
                  ติดต่อเรา
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}