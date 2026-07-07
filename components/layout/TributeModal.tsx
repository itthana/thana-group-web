'use client';

import { useState, useEffect } from 'react';

export default function TributeModal() {
  const [showTribute, setShowTribute] = useState(false);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem('hasEnteredTribute');
    if (!hasEntered) {
      setShowTribute(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleEnterSite = () => {
    sessionStorage.setItem('hasEnteredTribute', 'true');
    setShowTribute(false);
    document.body.style.overflow = 'auto';
  };

  if (!showTribute) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto sm:overflow-hidden p-4 md:p-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 15, 15, 0.75), rgba(10, 10, 10, 0.95)), url("/thai-pattern-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 
        ระบบ Responsive Layout: 
        ใช้ flex-col เป็นหลัก แต่ถ้าเป็นแนวนอนบนจอมือถือ/แท็บเล็ต (landscape:max-lg) จะสลับเป็น flex-row (ซ้าย-ขวา) 
      */}
      <div className="w-full max-w-6xl mx-auto flex flex-col landscape:max-lg:flex-row lg:flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 animate-fade-in relative z-10 my-auto py-6">
        
        {/* ส่วนที่ 1: พระรูป (ปรับขนาดอัตโนมัติตามความสูงหน้าจอ - dvh) */}
        <div className="flex justify-center landscape:max-lg:w-1/2 landscape:max-lg:justify-end">
          <img 
            src="royal-portrait.png" 
            alt="พระรูป" 
            className="h-[35dvh] sm:h-[45dvh] md:h-[55dvh] lg:h-[60dvh] max-h-[600px] w-auto object-contain drop-shadow-2xl grayscale"
          />
        </div>

        {/* ส่วนที่ 2: ข้อความถวายความอาลัย (ปรับขนาดฟอนต์ตามอุปกรณ์อัตโนมัติ) */}
        <div className="flex flex-col items-center landscape:max-lg:items-start text-center landscape:max-lg:text-left landscape:max-lg:w-1/2">
          
          <h1 className="text-[#F2E5C5] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 tracking-wider leading-relaxed drop-shadow-md">
            น้อมส่งเสด็จสู่สวรรคาลัย
          </h1>
          
          <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-10 leading-loose max-w-xl drop-shadow-sm">
            สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี <br className="hidden sm:block" />
            กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา
          </p>

          <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base mb-8 sm:mb-12 leading-relaxed">
            ข้าพระพุทธเจ้า คณะผู้บริหาร และพนักงาน <br />
            กลุ่มบริษัท THANA GROUP
          </p>

          <button 
            onClick={handleEnterSite}
            className="px-6 sm:px-10 py-2.5 sm:py-3 bg-transparent border border-gray-500 text-gray-300 text-xs sm:text-sm hover:text-[#F2E5C5] hover:border-[#F2E5C5] transition-all duration-500 tracking-widest uppercase rounded-sm backdrop-blur-sm"
          >
            เข้าสู่เว็บไซต์หลัก (Enter Site)
          </button>

        </div>
      </div>
    </div>
  );
}