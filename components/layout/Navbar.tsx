'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // สำหรับเปิด/ปิดเมนูย่อยในมือถือ
  const pathname = usePathname();

  // ตรวจจับการเลื่อนจอเพื่อเปลี่ยนสี Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. โลโก้ */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/LOGO-TLT.png" alt="THANA GROUP LOGO" className="h-12 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          {/* 2. เมนูคอมพิวเตอร์ (Desktop Menu) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-[15px] uppercase tracking-wider font-bold transition-colors ${pathname === '/' ? 'text-[#ff0000]' : 'text-[#00249c] hover:text-[#ff0000]'}`}>
              หน้าแรก
            </Link>
            <Link href="/about" className={`text-[15px] uppercase tracking-wider font-bold transition-colors ${pathname === '/about' ? 'text-[#ff0000]' : 'text-[#00249c] hover:text-[#ff0000]'}`}>
              เกี่ยวกับเรา
            </Link>

            {/* 🔥 เมนู Dropdown บริการ & บริษัทในเครือ */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] uppercase tracking-wider font-bold text-[#00249c] hover:text-[#ff0000] py-6 transition-colors">
                บริการของเรา <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
              </button>
              
              {/* กล่อง Dropdown */}
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[340px] bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50 overflow-hidden">
                <div className="p-3 space-y-1">
                  
                  {/* Service 1: Logistics */}
                  <Link href="/services/logistics" className="block p-4 hover:bg-slate-50 rounded-xl transition-all group/item">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#00249c] group-hover/item:text-white transition-all shadow-sm">
                        <i className="fas fa-truck-fast text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-black text-[#0a2540] text-sm group-hover/item:text-[#00249c] transition-colors">THANA LOGISTICS</h4>
                        <p className="text-xs text-gray-500 mt-1">บริการขนส่งสินค้าข้ามแดน ไทย-ลาว</p>
                      </div>
                    </div>
                  </Link>

                  {/* Service 2: Shipping */}
                  <Link href="/services/shipping" className="block p-4 hover:bg-slate-50 rounded-xl transition-all group/item">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-50 text-[#ff0000] rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#ff0000] group-hover/item:text-white transition-all shadow-sm">
                        <i className="fas fa-file-signature text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-black text-[#0a2540] text-sm group-hover/item:text-[#ff0000] transition-colors">THANA SHIPPING</h4>
                        <p className="text-xs text-gray-500 mt-1">บริการพิธีการศุลกากรครบวงจร</p>
                      </div>
                    </div>
                  </Link>

                  {/* Service 3: EV / Green Logistics */}
                  <Link href="/services/ev" className="block p-4 hover:bg-slate-50 rounded-xl transition-all group/item">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-green-600 group-hover/item:text-white transition-all shadow-sm">
                        <i className="fas fa-leaf text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-black text-[#0a2540] text-sm group-hover/item:text-green-600 transition-colors">THANA EV (GREEN LOGISTICS)</h4>
                        <p className="text-xs text-gray-500 mt-1">บริการขนส่งด้วยรถบรรทุกพลังงานไฟฟ้า</p>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            </div>

            <Link href="/departments" className={`text-[15px] uppercase tracking-wider font-bold transition-colors ${pathname === '/departments' ? 'text-[#ff0000]' : 'text-[#00249c] hover:text-[#ff0000]'}`}>
              แผนกการทำงาน
            </Link>
            <Link href="/contact" className={`text-[15px] uppercase tracking-wider font-bold transition-colors ${pathname === '/contact' ? 'text-[#ff0000]' : 'text-[#00249c] hover:text-[#ff0000]'}`}>
              ติดต่อเรา
            </Link>

            {/* ปุ่มค้นหาสถานะมุมขวาบน */}
            <Link href="/track" className="bg-gradient-to-r from-[#da251d] to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm flex items-center gap-2">
              <i className="fas fa-search"></i> ค้นหาพัสดุ
            </Link>
          </div>

          {/* 3. ปุ่มเมนูมือถือ (Hamburger Icon) */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#00249c] hover:text-[#ff0000] text-2xl focus:outline-none p-2">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* 4. เมนูมือถือ (Mobile Menu) */}
      <div className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen border-opacity-100' : 'max-h-0 border-opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col space-y-4 shadow-inner">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c] p-2 hover:bg-slate-50 rounded-lg">หน้าแรก</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c] p-2 hover:bg-slate-50 rounded-lg">เกี่ยวกับเรา</Link>
          
          {/* Dropdown มือถือ */}
          <div className="border-y border-gray-100 py-2">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full flex justify-between items-center text-lg font-bold text-[#00249c] p-2 hover:bg-slate-50 rounded-lg">
              บริการและบริษัทในเครือ <i className={`fas fa-chevron-down text-sm transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`flex flex-col pl-6 space-y-3 mt-2 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/services/logistics" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 flex items-center gap-3 py-1"><i className="fas fa-truck-fast text-[#00249c] w-5"></i> THANA LOGISTICS</Link>
              <Link href="/services/shipping" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 flex items-center gap-3 py-1"><i className="fas fa-file-signature text-[#ff0000] w-5"></i> THANA SHIPPING</Link>
              <Link href="/services/ev" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-gray-700 flex items-center gap-3 py-1"><i className="fas fa-leaf text-green-600 w-5"></i> THANA EV (GREEN)</Link>
            </div>
          </div>

          <Link href="/departments" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c] p-2 hover:bg-slate-50 rounded-lg">แผนกการทำงาน</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c] p-2 hover:bg-slate-50 rounded-lg">ติดต่อเรา</Link>
          <Link href="/track" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#da251d] text-white text-center font-bold py-3 rounded-xl mt-2 flex justify-center items-center gap-2">
            <i className="fas fa-search"></i> ค้นหาสถานะพัสดุ
          </Link>
        </div>
      </div>
    </nav>
  );
}