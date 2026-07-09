'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ⛽ ข้อมูลราคาน้ำมัน 
  const oilPrices = [
    { type: 'ดีเซล (Diesel)', price: '32.94' },
    { type: 'เบนซิน (Benzine)', price: '44.94' },
    { type: 'แก๊สโซฮอล์ 95', price: '36.85' }
  ];

  return (
    <>
      {/* ==========================================
          1. TOP BAR (แถบสีดำด้านบน)
      ========================================== */}
      <div className="bg-[#1e293b] text-gray-300 text-[11px] md:text-xs py-2 px-4 font-prompt border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
               <span className="text-red-500 font-bold animate-pulse"><i className="fas fa-satellite-dish"></i> LIVE UPDATES:</span>
               <span className="text-amber-400 font-medium hidden sm:inline">Moderate Traffic</span>
            </div>
            <div className="hidden lg:flex items-center gap-6">
               <span className="flex items-center gap-1.5"><i className="fas fa-building-shield text-gray-400"></i> ด่านหนองคาย: <span className="text-green-400 font-bold">Normal</span></span>
               <span className="flex items-center gap-1.5"><i className="fas fa-gas-pump text-gray-400"></i> FSC (Fuel Surcharge): <span className="text-red-400 font-bold">24.5%</span></span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-bold tracking-wider text-[10px] md:text-xs">
            <Link href="/admin/login" className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 transition-colors bg-amber-500/10 px-3 py-1 rounded">
              <i className="fas fa-user-lock"></i> STAFF ONLY
            </Link>
            <Link href="#" className="flex items-center gap-1.5 text-[#00e5ff] hover:text-blue-300 transition-colors">
              <i className="fas fa-globe"></i> E-SERVICES LOGIN
            </Link>
            <div className="flex items-center gap-1.5 border-l border-gray-600 pl-4 cursor-pointer hover:text-white">
              <img src="https://flagcdn.com/w20/th.png" alt="TH" className="w-4 h-3 rounded-[2px]" /> TH <i className="fas fa-chevron-down text-[9px]"></i>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          2. MAIN NAVBAR
      ========================================== */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm font-prompt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 md:h-24">
            
            {/* โลโก้ */}
            <div className="flex items-center gap-5">
               <Link href="/" className="flex flex-col justify-center">
                 <div className="flex items-center">
                    <span className="text-4xl md:text-5xl font-black text-[#00249c] italic tracking-tighter">TLT</span>
                    <i className="fas fa-paper-plane text-red-600 text-xl md:text-2xl -ml-2 -mt-4"></i>
                 </div>
                 <span className="text-[7px] md:text-[9px] font-black text-gray-800 uppercase tracking-widest mt-1">THANA LOGISTICS CO.,LTD.</span>
               </Link>
               
               <div className="hidden md:flex flex-col items-center justify-center border-l-2 border-gray-200 pl-5">
                  <span className="text-xs font-bold text-gray-700 mb-0.5">ขนส่งด่วน</span>
                  <span className="text-[10px] bg-[#e62e2d] text-white px-2 py-0.5 rounded font-black tracking-widest">ไทย - ลาว</span>
               </div>
            </div>

            {/* เมนูกลาง */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-bold text-gray-700 hover:text-red-600 transition-colors">หน้าแรก</Link>
              
              <div className="relative group h-full flex items-center">
                <button className="text-sm font-bold text-gray-700 group-hover:text-red-600 flex items-center gap-1.5 outline-none transition-colors">
                  บริการ <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-red-600 transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-[65px] -left-4 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50">
                   <Link href="/services" className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg">บริการทั้งหมด</Link>
                   <Link href="/calculator" className="block px-4 py-2.5 text-sm font-bold text-[#00249c] hover:bg-blue-50 rounded-lg"><i className="fas fa-calculator mr-2"></i> ประเมินราคา</Link>
                </div>
              </div>

              {/* 🚀 ตารางราคาน้ำมัน กลับมาแล้ว! */}
              <div className="relative group h-full flex items-center">
                <button className="text-sm font-bold text-gray-700 group-hover:text-red-600 flex items-center gap-1.5 outline-none transition-colors">
                  ข้อมูล <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-red-600 transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-[65px] -left-24 w-64 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-4 z-50">
                  <div className="text-xs font-black text-[#0a2540] mb-2 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <i className="fas fa-gas-pump text-red-600"></i> ราคาน้ำมัน (PTT)
                  </div>
                  {oilPrices.map((oil, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                      <span className="font-bold text-gray-600 text-sm">{oil.type}</span>
                      <span className="font-black text-[#00249c] text-sm">{oil.price} ฿</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="#" className="text-sm font-bold text-gray-700 hover:text-red-600 transition-colors">แผนการทำงาน</Link>
            </div>

            {/* ฝั่งขวา */}
            <div className="hidden lg:flex items-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="text-red-500 text-xl"><i className="fas fa-headset"></i></div>
                  <div className="flex flex-col">
                     <span className="text-[10px] text-gray-400 font-bold uppercase">24/7 Hotline</span>
                     <a href="tel:0930237931" className="text-[#e62e2d] font-black text-lg hover:text-red-800 transition-colors">093-023-7931</a>
                  </div>
               </div>
               <Link href="/contact" className="bg-[#e62e2d] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all shadow-md">
                 ติดต่อเรา
               </Link>
            </div>

            {/* ปุ่มมือถือ */}
            <div className="flex items-center lg:hidden">
               <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-2xl w-10 h-10">
                  <i className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
               </button>
            </div>
          </div>
        </div>

        {/* เมนูมือถือ */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl pb-4">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block px-4 py-3 rounded-xl text-sm font-bold text-gray-700">หน้าแรก</Link>
              <Link href="/services" className="block px-4 py-3 rounded-xl text-sm font-bold text-gray-700">บริการของเรา</Link>
              <Link href="/calculator" className="block px-4 py-3 rounded-xl text-sm font-bold text-[#00249c] bg-blue-50">ประเมินราคาค่าขนส่ง</Link>
              
              <div className="mt-2 bg-slate-50 rounded-xl p-4">
                <div className="text-xs font-black text-[#0a2540] mb-2"><i className="fas fa-gas-pump text-red-600"></i> ราคาน้ำมันวันนี้</div>
                {oilPrices.map((oil, idx) => (
                  <div key={idx} className="flex justify-between text-xs py-1 font-bold text-gray-600">
                    <span>{oil.type}</span> <span className="text-[#00249c]">{oil.price} ฿</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="block px-4 py-3 mt-4 rounded-xl text-sm font-bold text-white bg-[#e62e2d] text-center">ติดต่อเรา</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}