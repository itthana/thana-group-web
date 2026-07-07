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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 15, 15, 0.75), rgba(10, 10, 10, 0.95)), url("/thai-pattern-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 
        ปรับให้เนื้อหาทั้งหมดอยู่กลางจอ และไม่ล้นเฟรม 
        ใช้ max-h-[95dvh] เพื่อบังคับให้อยู่ในหน้าจอเสมอ 
      */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center animate-fade-in relative z-10 h-full max-h-[95dvh]">
        
        {/* ส่วนที่ 1: พระรูป (ปรับขนาดให้เล็กลง เพื่อเผื่อที่ว่างให้ตัวหนังสือ) */}
        <div className="flex justify-center mb-6 md:mb-8 shrink-0">
          <img 
            src="royal-portrait.png" 
            alt="พระรูป" 
            className="h-[30dvh] sm:h-[35dvh] md:h-[45dvh] lg:h-[50dvh] max-h-[420px] w-auto object-contain drop-shadow-2xl grayscale"
          />
        </div>

        {/* ส่วนที่ 2: ข้อความและปุ่ม (ใช้ shrink-0 เพื่อไม่ให้โดนบีบจนผิดรูป) */}
        <div className="flex flex-col items-center shrink-0">
          
          <h1 className="text-[#F2E5C5] text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 tracking-wider leading-relaxed drop-shadow-md">
            น้อมส่งเสด็จสู่สวรรคาลัย
          </h1>
          
          <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-loose max-w-2xl drop-shadow-sm">
            สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี <br className="hidden sm:block" />
            กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา
          </p>

          {/* นำชื่อกลุ่มบริษัทกลับมา พร้อมปรับสีให้ดูมีมิติ */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 leading-relaxed">
            ข้าพระพุทธเจ้า คณะผู้บริหาร และพนักงาน <br />
            <span className="text-gray-300 font-medium tracking-wide">กลุ่มบริษัท THANA GROUP</span>
          </p>

          <button 
            onClick={handleEnterSite}
            className="px-6 sm:px-10 py-2.5 sm:py-3 bg-transparent border border-[#9CA3AF] text-gray-300 text-xs sm:text-sm hover:text-[#F2E5C5] hover:border-[#F2E5C5] transition-all duration-500 tracking-widest uppercase rounded-sm backdrop-blur-sm"
          >
            เข้าสู่เว็บไซต์หลัก (Enter Site)
          </button>

        </div>
      </div>
    </div>
  );
}