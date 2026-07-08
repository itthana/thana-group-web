'use client';
import { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // ==========================================
  // 🔥 เปิดโหมดทดสอบ (เปลี่ยนเป็น false เมื่อพร้อมใช้งานจริง)
  // ==========================================
  const FORCE_SHOW_FOR_TESTING = true; 

  useEffect(() => {
    if (FORCE_SHOW_FOR_TESTING) {
      setIsVisible(true);
    } else {
      const hasVisited = sessionStorage.getItem('thana_welcome_seen');
      if (!hasVisited) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleEnterSite = () => {
    setIsFadingOut(true);
    sessionStorage.setItem('thana_welcome_seen', 'true');
    
    setTimeout(() => {
      setIsVisible(false);
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a2540] transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* 📸 ภาพพื้นหลัง */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="สวัสดี.JPG" 
          alt="Welcome to THANA GROUP" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* แผ่นสีน้ำเงินไล่ระดับฉาบทับหน้าจอ */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/85 to-[#0a2540]/40"></div>

      {/* 📦 คอนเทนเนอร์หลัก (เอากรอบออกแล้ว เหลือแค่จัดระเบียบตรงกลาง) */}
      <div className="relative z-10 text-center max-w-lg mx-auto w-full px-6 transition-all duration-500">
        
       {/* ========================================================= */}
        {/* 🎯 จุดที่ 2: เปลี่ยนรูปโลโก้ตรงนี้ (ปรับให้เต็มกรอบวงกลม) */}
        {/* ========================================================= */}
        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-white/10 overflow-hidden">
          <img 
            src="/tng.png" 
            alt="Thana Group Logo" 
            // ใช้ w-full h-full และ scale ขยายรูปให้พอดีขอบ ตัดขอบขาวส่วนเกินออก
            className="w-full h-full object-cover scale-[1.15]" 
          />
        </div>
        
       {/* ======================= แทนที่ h1 ตัวเดิมด้วยโค้ดนี้ ======================= */}
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
          <span className="block mb-3 md:mb-4">ยินดีต้อนรับสู่</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400 drop-shadow-xl text-4xl md:text-6xl">THANA GROUP</span>
        </h1>
        {/* ===================================================================== */}
        <p className="text-gray-200 mb-10 text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
          ผู้ให้บริการโลจิสติกส์ ไทย - ลาว ครบวงจร <br/>
          ยินดีต้อนรับพันธมิตรและลูกค้าทุกท่านด้วยความยินดียิ่ง
        </p>

        {/* ปุ่มกดเข้าเว็บ */}
        <button 
          onClick={handleEnterSite}
          className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(0,36,156,0.6)] hover:shadow-[0_0_30px_rgba(0,36,156,0.9)] hover:-translate-y-1 text-lg w-full sm:w-auto tracking-wider"
        >
          เข้าสู่เว็บไซต์ <i className="fas fa-arrow-right ml-2 animate-bounce-horizontal"></i>
        </button>
      </div>

    </div>
  );
}