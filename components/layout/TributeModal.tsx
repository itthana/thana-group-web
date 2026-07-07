'use client';

import { useState, useEffect } from 'react';

export default function TributeModal() {
  const [showTribute, setShowTribute] = useState(false);

  // สั่งให้โชว์ทันทีเมื่อโหลดเว็บเสร็จ โดยไม่ต้องเช็กเงื่อนไขใดๆ
  useEffect(() => {
    setShowTribute(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleEnterSite = () => {
    setShowTribute(false);
    document.body.style.overflow = 'auto';
  };

  if (!showTribute) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-2xl w-full text-center flex flex-col items-center animate-fade-in my-auto py-10">
        
        <div className="mb-10 p-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm shadow-2xl">
          <div className="border border-gray-400 p-1 bg-black">
            <img 
              src="/royal-portrait.jpg" 
              alt="พระรูป" 
              className="w-full max-w-[280px] md:max-w-[320px] h-auto object-cover grayscale"
            />
          </div>
        </div>

        <h1 className="text-white text-2xl md:text-3xl font-medium mb-6 tracking-wide leading-relaxed">
          น้อมส่งเสด็จสู่สวรรคาลัย
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base mb-12 leading-loose max-w-xl">
          สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี <br />
          กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา
        </p>

        <p className="text-gray-400 text-xs md:text-sm mb-16 leading-relaxed">
          ข้าพระพุทธเจ้า คณะผู้บริหาร และพนักงาน <br />
          กลุ่มบริษัท THANA GROUP
        </p>

        <button 
          onClick={handleEnterSite}
          className="px-8 py-3 bg-transparent border border-gray-600 text-gray-400 text-sm hover:text-white hover:border-white transition-all duration-500 tracking-widest uppercase rounded-sm"
        >
          เข้าสู่เว็บไซต์หลัก (Enter Site)
        </button>

      </div>
    </div>
  );
}