'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WelcomeScreen from '../components/layout/WelcomeScreen';

const heroSlides = [
  {
    id: 1,
    title: 'ยกระดับธุรกิจคุณด้วย',
    highlight: 'ขนส่งด่วน ไทย-ลาว',
    suffix: 'ระดับสากล',
    subtitle: 'เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center 60%'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <WelcomeScreen />
      <Navbar />
      
      <main className="min-h-screen font-prompt bg-slate-50">
        
        {/* ============================================================================
            🌟 HERO BANNER (แบบต้นฉบับในรูปเป๊ะ)
        ============================================================================ */}
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#0a2540]">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              
              {/* แบ็คกราวด์ไล่สีเข้มๆ แบบในรูป */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent z-10"></div>
              <img 
                src={slide.image} 
                alt={slide.highlight} 
                className="w-full h-full object-cover scale-105 animate-slow-zoom"
                style={{ objectPosition: slide.bgPosition }}
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mt-10">
                <div className="max-w-3xl">
                  
                  {/* ป้าย THANA GROUP LOGISTICS */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                    <i className="fas fa-globe"></i> THANA GROUP LOGISTICS
                  </div>
                  
                  {/* หัวข้อ */}
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title} <br />
                    <span className="text-[#e62e2d]">{slide.highlight}</span> <br />
                    {slide.suffix}
                  </h1>
                  
                  {/* ขีดแดง + ซับไตเติ้ล */}
                  <div className="border-l-4 border-[#e62e2d] pl-5 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  {/* 🚀 ชุดปุ่ม 2 ปุ่มแบบในรูปเป๊ะ */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link href="/track" className="bg-[#e62e2d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_8px_20px_rgba(230,46,45,0.4)] flex items-center justify-center gap-2 text-sm md:text-base w-fit">
                      <i className="fas fa-search"></i> ติดตามสถานะพัสดุ
                    </Link>
                    <Link href="/services" className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base w-fit">
                      บริการของเรา <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* เส้นโค้งสีขาวด้านล่าง (Curved shape) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.36,199.39,109.84Z" fill="#f8fafc"></path>
            </svg>
          </div>
        </section>

        {/* ============================================================================
            ส่วนเนื้อหาด้านล่างยังคงเดิม... 
        ============================================================================ */}
        <section className="py-20 bg-slate-50 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-[#0a2540]">ขับเคลื่อนธุรกิจคุณ สู่ทุกจุดหมาย</h2>
            <p className="text-gray-500 mt-4">กรุณาเลื่อนลงเพื่อดูบริการและข้อมูลเพิ่มเติม</p>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}