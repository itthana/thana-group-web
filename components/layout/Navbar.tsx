'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [rates, setRates] = useState({ USD: '...', CNY: '...', LAK: '...' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const fetchExchangeRates = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/THB');
        const data = await res.json();
        
        if(data && data.rates) {
          const usd = (1 / data.rates.USD).toFixed(2);
          const cny = (1 / data.rates.CNY).toFixed(2);
          const lak = (data.rates.LAK).toFixed(2); 
          
          setRates({ USD: usd, CNY: cny, LAK: lak });
        }
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      }
    };

    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 600000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const tickerItems = (
    <>
      <span className="flex items-center gap-2"><i className="fas fa-gas-pump text-gray-500"></i> FSC (Fuel Surcharge): <span className="text-red-400 font-bold">24.5% <i className="fas fa-caret-up"></i></span></span>
      <span className="flex items-center gap-2"><i className="fas fa-dollar-sign text-gray-500"></i> USD/THB: <span className="text-green-400 font-bold">{rates.USD}</span></span>
      <span className="flex items-center gap-2"><i className="fas fa-yen-sign text-gray-500"></i> CNY/THB: <span className="text-green-400 font-bold">{rates.CNY}</span></span>
      <span className="flex items-center gap-2"><i className="fas fa-coins text-gray-500"></i> THB/LAK: <span className="text-green-400 font-bold">{rates.LAK}</span></span>
      <span className="flex items-center gap-2"><i className="fas fa-anchor text-gray-500"></i> BKK Port: <span className="text-yellow-400 font-bold">Moderate Traffic</span></span>
      <span className="flex items-center gap-2"><i className="fas fa-truck-fast text-gray-500"></i> ด่านหนองคาย: <span className="text-green-400 font-bold">Normal</span></span>
    </>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-500`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Top Bar */}
      <div className="hidden lg:flex bg-gray-900 text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-12 xl:px-20 justify-between items-center border-b border-gray-800 shadow-inner relative transition-all duration-300">
        <div className="flex items-center gap-4 overflow-hidden w-2/3">
          <span className="whitespace-nowrap text-[#ff0000] font-bold uppercase tracking-widest flex-shrink-0 flex items-center gap-2">
            <i className="fas fa-broadcast-tower animate-pulse"></i> Live Updates:
          </span>
          <div className="overflow-hidden flex-grow relative h-4 w-full" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <div className="animate-marquee gap-10 cursor-default">
              <div className="flex gap-10 items-center">{tickerItems}</div>
              <div className="flex gap-10 items-center pl-10">{tickerItems}</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="#" className="whitespace-nowrap text-[#00e5ff] hover:text-white transition-colors flex items-center gap-1.5 font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-sm border border-white/10 hover:bg-[#00e5ff] hover:text-black">
            <i className="fas fa-user-circle text-base"></i> <span>e-Services Login</span>
          </Link>
          <div className="h-4 w-px bg-gray-700 mx-1"></div>
          <div className="flex items-center gap-3 select-none text-xs font-bold">
            <span className="flex items-center gap-1.5 text-white opacity-100 drop-shadow-md cursor-pointer">
              <img src="https://flagcdn.com/w20/th.png" className="w-4 h-auto shadow-sm" alt="Thai" /> TH
            </span>
            <span className="text-gray-700 font-normal">|</span>
            <span className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors opacity-60 hover:opacity-100 cursor-pointer">
              <img src="https://flagcdn.com/w20/us.png" className="w-4 h-auto shadow-sm" alt="English" /> EN
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3'}`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 transition-all duration-300">
          
          <div className="flex justify-between items-center h-16 gap-8 lg:gap-12">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <Link href="/" className="flex items-center gap-2 sm:gap-4">
                <Image 
                  src="/LOGO-TLT.png" 
                  alt="THANA GROUP Logo" 
                  width={240} 
                  height={60} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  priority 
                />
                <div className="hidden sm:flex items-center">
                  <div className="h-12 w-[2px] bg-gray-300 mx-4 lg:mx-6 rounded-full"></div>
                  <div className="flex flex-col justify-center items-center select-none">
                    <span className="whitespace-nowrap text-[#0a2540] font-black text-lg md:text-xl leading-none tracking-wide mb-1.5 drop-shadow-sm text-center">
                      ขนส่งด่วน
                    </span>
                    <span className="whitespace-nowrap bg-[#ff0000] text-white font-bold text-xs md:text-sm leading-none tracking-[0.15em] px-3 py-1 rounded-md uppercase text-center shadow-md w-max">
                      ไทย - ลาว
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-end space-x-6 xl:space-x-8 items-center h-full">
              
              <Link href="/" className="whitespace-nowrap text-[#00249c] hover:text-[#ff0000] font-semibold transition-colors text-[15px] uppercase tracking-wider py-6">
                หน้าแรก
              </Link>
              
              {/* 1. องค์กร Dropdown */}
              <div className="relative group py-6 cursor-pointer">
                <div className="whitespace-nowrap text-[#00249c] group-hover:text-[#ff0000] font-semibold transition-colors text-[15px] uppercase tracking-wider flex items-center gap-1">
                  องค์กร <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </div>
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 flex flex-col">
                  <Link href="/ceo-message" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50 border-l-4 border-transparent hover:border-[#00249c]">สารจากผู้บริหาร</Link>
                  <Link href="/about" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ประวัติบริษัท</Link>
                  <Link href="/branches" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-[#ff0000] hover:text-[#0a2540] hover:bg-red-50 flex items-center gap-2 border-l-4 border-[#ff0000] bg-red-50/30">
                    <i className="fas fa-map-location-dot"></i> สาขาของเรา (Branches)
                  </Link>
                  <Link href="/executives" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ทีมผู้บริหารระดับสูง</Link>
                  <Link href="/group-companies" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">บริษัทในเครือ</Link>
                  <Link href="/other-ventures" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-amber-600 hover:bg-amber-50 flex items-center gap-2">
                    <i className="fas fa-coffee text-amber-500"></i> ธุรกิจอื่นๆ (CC1971)
                  </Link>
                  <Link href="/sales" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ทีมที่ปรึกษาด้านการขาย</Link>
                  <Link href="/careers" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ร่วมงานกับเรา</Link>
                  <Link href="/testimonials" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">เสียงตอบรับจากพันธมิตร</Link>
                </div>
              </div>

              {/* 2. บริการ Dropdown */}
              <div className="relative group py-6 cursor-pointer">
                <div className="whitespace-nowrap text-[#00249c] group-hover:text-[#ff0000] font-semibold transition-colors text-[15px] uppercase tracking-wider flex items-center gap-1">
                  บริการ <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </div>
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 flex flex-col">
                  <Link href="/#business-units" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">กลุ่มธุรกิจ</Link>
                  <Link href="/services" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">บริการโลจิสติกส์</Link>
                  <Link href="/green-logistics" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:bg-green-50 flex items-center gap-2"><i className="fas fa-leaf"></i> รักษ์โลก (Green)</Link>
                </div>
              </div>

              {/* 3. ข้อมูล Dropdown (เพิ่มเมนู Price List ไว้ตรงนี้) */}
              <div className="relative group py-6 cursor-pointer">
                <div className="whitespace-nowrap text-[#00249c] group-hover:text-[#ff0000] font-semibold transition-colors text-[15px] uppercase tracking-wider flex items-center gap-1">
                  ข้อมูล <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </div>
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 flex flex-col">
                  {/* 🆕 เพิ่มปุ่ม Price List ไฮไลต์สีแดงให้เด่นๆ */}
                  <Link href="/pricelist" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-[#ff0000] hover:text-[#00249c] hover:bg-red-50 flex items-center gap-2 border-l-4 border-[#ff0000] bg-red-50/30">
                    <i className="fas fa-file-invoice-dollar"></i> อัตราค่าบริการ (Price List)
                  </Link>
                  <Link href="/news" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ข่าวสารและกิจกรรม</Link>
                  <Link href="/knowledge-hub" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">คลังความรู้</Link>
                  <Link href="/customs-documents" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">ศูนย์เอกสารศุลกากร</Link>
                  <Link href="/faq" className="whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#00249c] hover:bg-blue-50">คำถามที่พบบ่อย (FAQ)</Link>
                </div>
              </div>

              {/* Gallery */}
              <Link href="/gallery" className="whitespace-nowrap text-[#00249c] hover:text-[#ff0000] font-semibold transition-colors text-[15px] uppercase tracking-wider py-6">
                บรรยากาศการทำงาน
              </Link>
              
              {/* Hotline & Contact */}
              <div className="flex items-center pl-6 border-l border-gray-200 gap-6">
                <div className="hidden xl:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#ff0000] shrink-0 relative">
                    <div className="absolute inset-0 rounded-full bg-[#ff0000] opacity-20 animate-ping"></div>
                    <i className="fas fa-headset text-lg relative z-10"></i>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="whitespace-nowrap text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">24/7 Hotline <span className="text-[#ff0000] font-medium">• เปิดบริการทุกวัน</span></span>
                    <a href="tel:0930237931" className="whitespace-nowrap text-[#0a2540] font-black text-base leading-none hover:text-[#ff0000] transition-colors tracking-wide">
                      093-023-7931
                    </a>
                  </div>
                </div>
                <Link href="/contact" className="whitespace-nowrap bg-[#ff0000] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-none transition-colors text-sm uppercase shadow-md square-box btn-shine">
                  ติดต่อเรา
                </Link>
              </div>

            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#00249c] hover:text-[#ff0000] focus:outline-none p-2 cursor-pointer">
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
            <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
              
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c]">หน้าแรก</Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#00249c]">บรรยากาศการทำงาน</Link>
              
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">รู้จักองค์กร</h3>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  <Link href="/ceo-message" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">สารจากผู้บริหาร</Link>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ประวัติบริษัท</Link>
                  <Link href="/branches" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-[#ff0000] flex items-center gap-2 bg-red-50 p-2 rounded-md border-l-4 border-[#ff0000]">
                    <i className="fas fa-map-location-dot"></i> สาขาของเรา (Branches)
                  </Link>
                  <Link href="/executives" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ทีมผู้บริหารระดับสูง</Link>
                  <Link href="/group-companies" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">บริษัทในเครือ</Link>
                  <Link href="/other-ventures" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-amber-700 flex items-center gap-2">
                    <i className="fas fa-coffee"></i> ธุรกิจอื่นๆ (CC1971)
                  </Link>
                  <Link href="/sales" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ทีมที่ปรึกษาด้านการขาย</Link>
                  <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ร่วมงานกับเรา</Link>
                  <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">เสียงตอบรับจากพันธมิตร</Link>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">บริการของเรา</h3>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">บริการโลจิสติกส์</Link>
                  <Link href="/green-logistics" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-green-600"><i className="fas fa-leaf"></i> รักษ์โลก</Link>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">ศูนย์ข้อมูล</h3>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
                  {/* 🆕 เพิ่มปุ่ม Price List สำหรับมือถือ */}
                  <Link href="/pricelist" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-[#ff0000] flex items-center gap-2 bg-red-50 p-2 rounded-md border-l-4 border-[#ff0000]">
                    <i className="fas fa-file-invoice-dollar"></i> อัตราค่าบริการ (Price List)
                  </Link>
                  <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ข่าวสาร</Link>
                  <Link href="/knowledge-hub" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">คลังความรู้</Link>
                  <Link href="/customs-documents" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">ศูนย์เอกสารศุลกากร</Link>
                  <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-600">FAQ</Link>
                </div>
              </div>

              <div className="bg-red-50/50 rounded-xl p-4 mt-2 border border-red-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#ff0000] shadow-sm shrink-0">
                  <i className="fas fa-headset"></i>
                </div>
                <div>
                  <div className="whitespace-nowrap text-[10px] font-bold text-red-500 uppercase tracking-wider mb-0.5">Hotline 24 Hrs. <span className="text-gray-500 font-medium">• เปิดบริการทุกวัน</span></div>
                  <a href="tel:0930237931" className="whitespace-nowrap text-lg font-black text-[#0a2540]">093-023-7931</a>
                </div>
              </div>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="whitespace-nowrap bg-[#ff0000] text-center text-white font-bold py-3 px-6 rounded-lg">
                ติดต่อเรา
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}