'use client';

import { useState, useEffect } from 'react';

export default function TributeModal() {
  const [showTribute, setShowTribute] = useState(false);

  // ตรวจสอบสถานะการเข้าเว็บ (แสดงแค่ครั้งเดียวต่อ 1 Session)
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 overflow-y-auto"
      style={{
        // ดึงภาพพื้นหลังลายไทยมาใช้ พร้อมใส่ Gradient สีดำโปร่งแสงทับเพื่อให้อ่านตัวอักษรได้ชัดเจน
        backgroundImage: 'linear-gradient(rgba(15, 15, 15, 0.7), rgba(10, 10, 10, 0.95)), url("/thai-pattern-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-2xl w-full text-center flex flex-col items-center animate-fade-in my-auto py-10 relative z-10">
        
        {/* พระรูป (แบบพื้นหลังใส .png) */}
        <div className="mb-10 flex justify-center">
          <img 
            src="/royal-portrait.png" 
            alt="พระรูป" 
            // ใช้ drop-shadow เพื่อให้รูปดูมีมิติและโดดเด่นขึ้นจากพื้นหลัง
            className="w-full max-w-[280px] md:max-w-[380px] h-auto object-contain drop-shadow-2xl grayscale"
          />
        </div>

        {/* ข้อความถวายความอาลัย */}
        <h1 className="text-[#F2E5C5] text-2xl md:text-3xl font-medium mb-6 tracking-wider leading-relaxed drop-shadow-md">
          น้อมส่งเสด็จสู่สวรรคาลัย
        </h1>
        
        <p className="text-gray-200 text-sm md:text-base mb-12 leading-loose max-w-xl drop-shadow-sm">
          สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี <br />
          กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา
        </p>

        <p className="text-gray-400 text-xs md:text-sm mb-16 leading-relaxed">
          ข้าพระพุทธเจ้า คณะผู้บริหาร และพนักงาน <br />
          กลุ่มบริษัท THANA GROUP
        </p>

        {/* ปุ่มเข้าสู่เว็บไซต์ */}
        <button 
          onClick={handleEnterSite}
          className="px-10 py-3 bg-transparent border border-gray-500 text-gray-300 text-sm hover:text-[#F2E5C5] hover:border-[#F2E5C5] transition-all duration-500 tracking-widest uppercase rounded-sm backdrop-blur-sm"
        >
          เข้าสู่เว็บไซต์หลัก (Enter Site)
        </button>

      </div>
    </div>
  );
}