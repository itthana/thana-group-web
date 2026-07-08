'use client';
import { useState, useEffect } from 'react';

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // ==========================================
  // 🔥 เปิดโหมดทดสอบ (Developer Mode) 
  // เปลี่ยนเป็น true = หน้าสวัสดีจะขึ้นทุกครั้งที่กดรีเฟรชหน้าเว็บ (เอาไว้เล็งความสวยงาม)
  // เปลี่ยนเป็น false = ระบบจริง ลูกค้าเห็นแค่ครั้งเดียวต่อการเปิดเว็บหนึ่งรอบ
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
      
      {/* 📸 ภาพพนักงาน หรือภาพบรรยากาศการต้อนรับพรีเมียม */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" 
          alt="Welcome to THANA GROUP" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* แผ่นสีน้ำเงินไล่ระดับฉาบทับหน้าจอให้ดูหรูหรา */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/85 to-[#0a2540]/40"></div>

      {/* 📦 กล่องข้อความต้อนรับ Glassmorphism (สวยหรูโปร่งแสง) */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-14 rounded-3xl text-center max-w-lg mx-4 shadow-2xl transition-all duration-500">
        
        {/* โลโก้บริษัทตรงกลางแบบวงกลมมีรัศมี */}
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-blue-500/20">
          <img src="/LOGO-TLT.png" alt="Thana Group Logo" className="w-16 object-contain" />
        </div>
        
        <h1 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-wide leading-tight">
          ยินดีต้อนรับสู่ <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400 drop-shadow-md">THANA GROUP</span>
        </h1>
        
        <p className="text-gray-200 mb-8 text-sm md:text-base font-medium leading-relaxed">
          ผู้ให้บริการโลจิสติกส์ ไทย - ลาว ครบวงจร <br/>
          ยินดีต้อนรับพันธมิตรและลูกค้าทุกท่านด้วยความยินดียิ่ง
        </p>

        {/* ปุ่มกดเข้าเว็บแบบเอฟเฟกต์สะท้อนแสง */}
        <button 
          onClick={handleEnterSite}
          className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg w-full md:w-auto tracking-wider"
        >
          เข้าสู่เว็บไซต์ <i className="fas fa-arrow-right ml-2 animate-bounce-horizontal"></i>
        </button>
      </div>

    </div>
  );
}