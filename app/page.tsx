'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WelcomeScreen from '../components/layout/WelcomeScreen';

// ==========================================
// 🖼️ ข้อมูลภาพสไลด์ 7 บริการหลัก (7 Core Services)
// ==========================================
const heroSlides = [
  {
    id: 1,
    badge: 'SERVICE 1',
    title: 'บริการขนส่งด่วน',
    highlight: 'ข้ามแดน ไทย-ลาว',
    subtitle: 'บริการรถบรรทุกส่งสินค้าข้ามประเทศแบบ Door-to-Door รวดเร็ว ปลอดภัย พร้อมระบบติดตามสถานะพัสดุแบบ Real-time ตลอด 24 ชั่วโมง',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'SERVICE 2',
    title: 'ผู้เชี่ยวชาญด้าน',
    highlight: 'พิธีการศุลกากร',
    subtitle: 'บริการเดินพิธีการศุลกากร นำเข้า-ส่งออก แบบครบวงจร (Customs Clearance) ดำเนินการโดยทีมชิปปิ้งผู้เชี่ยวชาญ ถูกต้อง แม่นยำ',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    badge: 'SERVICE 3',
    title: 'คลังสินค้าและ',
    highlight: 'ศูนย์กระจายสินค้า',
    subtitle: 'พื้นที่จัดเก็บสินค้าขนาดใหญ่ รองรับสินค้าทุกประเภท พร้อมระบบบริหารจัดการคลังสินค้าที่ทันสมัย ปลอดภัยระดับมาตรฐานสากล',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7fc51f7?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 4,
    badge: 'SERVICE 4',
    title: 'ขนส่งสินค้า',
    highlight: 'ควบคุมอุณหภูมิ',
    subtitle: 'บริการรถบรรทุกห้องเย็น (Cold Chain Logistics) รักษาอุณหภูมิสินค้าอย่างแม่นยำ เหมาะสำหรับสินค้าเกษตร อาหาร และยา',
    image: 'https://images.unsplash.com/photo-1558230248-cb5478de24a9?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 5,
    badge: 'SERVICE 5',
    title: 'บริการขนส่ง',
    highlight: 'เหมาคัน (FTL)',
    subtitle: 'บริการขนส่งแบบเหมาคัน (Full Truck Load) มีรถบรรทุกให้เลือกหลายขนาด ตั้งแต่กระบะจนถึงรถเทรลเลอร์ ตอบโจทย์ทุกสเกลธุรกิจ',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 6,
    badge: 'SERVICE 6',
    title: 'รักษ์โลกด้วย',
    highlight: 'รถบรรทุก EV',
    subtitle: 'ก้าวสู่ความยั่งยืน (Green Logistics) ด้วยการใช้กองทัพรถบรรทุกพลังงานไฟฟ้า 100% ลดการปล่อยคาร์บอน เพื่อสิ่งแวดล้อมที่ดีกว่า',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 7,
    badge: 'SERVICE 7',
    title: 'ที่ปรึกษาด้าน',
    highlight: 'ซัพพลายเชน',
    subtitle: 'บริการให้คำปรึกษาและวางแผนกลยุทธ์ด้านซัพพลายเชน (Supply Chain Consulting) เพื่อลดต้นทุนและเพิ่มประสิทธิภาพให้ธุรกิจคุณ',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2000&auto=format&fit=crop',
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000); // เปลี่ยนสไลด์ทุก 6 วินาที
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <WelcomeScreen />
      <Navbar />
      
      <main className="min-h-screen font-prompt bg-slate-50">
        
        {/* ============================================================================
            🌟 HERO BANNER (สไลด์โชว์ 7 บริการ)
        ============================================================================ */}
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#0a2540]">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              
              {/* แบ็คกราวด์ไล่สีเข้ม */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-[#0a192f]/20 z-10"></div>
              <img 
                src={slide.image} 
                alt={slide.highlight} 
                className={`w-full h-full object-cover ${index === currentSlide ? 'animate-slow-zoom scale-105' : ''}`}
                style={{ objectPosition: 'center 60%' }}
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mt-10">
                <div className="max-w-3xl">
                  
                  {/* Badge บริการ */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                    <i className="fas fa-star text-amber-400"></i> {slide.badge} | THANA GROUP
                  </div>
                  
                  {/* หัวข้อ */}
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title} <br />
                    <span className="text-[#e62e2d] drop-shadow-md">{slide.highlight}</span>
                  </h1>
                  
                  {/* ขีดแดง + ซับไตเติ้ล */}
                  <div className="border-l-4 border-[#e62e2d] pl-5 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  {/* 🚀 ชุดปุ่ม 3 ปุ่มสุดพรีเมียม */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link href="/track" className="bg-[#e62e2d] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_8px_20px_rgba(230,46,45,0.4)] flex items-center justify-center gap-2 text-sm md:text-base w-fit">
                      <i className="fas fa-search"></i> ติดตามพัสดุ
                    </Link>
                    <Link href="/calculator" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 text-sm md:text-base w-fit">
                      <i className="fas fa-calculator text-blue-200"></i> ประเมินราคา
                    </Link>
                    <Link href="/services" className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base w-fit">
                      ดูบริการทั้งหมด <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* จุด Navigation สำหรับสไลด์ (Dots) */}
          <div className="absolute bottom-20 md:bottom-28 left-0 right-0 z-30 flex justify-center gap-2">
            {heroSlides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-8 h-2.5 bg-[#e62e2d]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* เส้นโค้งสีขาวด้านล่าง (Curved shape) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.36,199.39,109.84Z" fill="#f8fafc"></path>
            </svg>
          </div>
        </section>

        {/* ============================================================================
            สถิติและข้อมูล (ปรับแต่งให้เข้ากับความพรีเมียม)
        ============================================================================ */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white -mt-10">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
                <i className="fas fa-medal"></i> THE LOGISTICS LEADER
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-[#0a2540] tracking-tight">
                ขับเคลื่อนธุรกิจคุณ สู่ทุกจุดหมาย
              </h3>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
                THANA GROUP ผู้นำด้านการขนส่งข้ามแดนที่มีประสบการณ์กว่า 20 ปี เราพร้อมส่งมอบบริการที่รวดเร็ว ปลอดภัย และได้มาตรฐานระดับสากล
              </p>
            </div>

            {/* การ์ดสถิติ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">20<span className="text-[#e62e2d]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">ปีแห่งประสบการณ์</p>
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">10K<span className="text-[#e62e2d]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รอบวิ่งรถต่อปี</p>
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">7</div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">บริษัทในเครือข่าย</p>
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">100<span className="text-[#e62e2d]">%</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รับประกันความพึงพอใจ</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* ============================================================================
            CALL TO ACTION
        ============================================================================ */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a2540] z-0"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">เริ่มก้าวไปกับเราวันนี้</h2>
            <p className="text-blue-100 text-lg mb-10">ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาและประเมินราคาฟรี 24 ชั่วโมง</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#e62e2d] text-white hover:bg-red-700 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                <i className="fas fa-paper-plane"></i> ขอใบเสนอราคา
              </Link>
              <a href="tel:0930237931" className="bg-white text-[#0a2540] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                <i className="fas fa-phone-alt text-red-600"></i> โทรด่วน: 093-023-7931
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}