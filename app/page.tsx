'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WelcomeScreen from '../components/layout/WelcomeScreen'; // 👈 นำเข้า WelcomeScreen ตรงนี้

// ==========================================
// 🖼️ ข้อมูลภาพสไลด์แบนเนอร์หลัก
// ==========================================
const heroSlides = [
  {
    id: 1,
    title: 'ยกระดับธุรกิจคุณด้วย',
    highlight: 'ขนส่งด่วน ไทย-ลาว',
    suffix: 'ระดับสากล',
    subtitle: 'เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center 60%'
  },
  // สามารถเพิ่มสไลด์อื่นๆ เพิ่มเติมได้ในอนาคตครับ
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // เอฟเฟกต์เลื่อนสไลด์อัตโนมัติ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 🚨 เรียกใช้งานหน้าจอสวัสดี (Welcome Screen) ให้อยู่บนสุด 🚨 */}
      <WelcomeScreen />

      <Navbar />
      
      <main className="min-h-screen font-prompt bg-slate-50">
        
        {/* ============================================================================
            🌟 1. HERO BANNER SECTION (ส่วนสไลด์แบนเนอร์หน้าแรก)
        ============================================================================ */}
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#0a2540]">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img 
                src={slide.image} 
                alt={slide.highlight} 
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.bgPosition }}
              />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8 mt-16">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up">
                  {slide.title} <br className="md:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0077ff]">{slide.highlight}</span> <br className="md:hidden" />
                  {slide.suffix}
                </h1>
                <p className="text-gray-200 text-sm md:text-xl max-w-3xl font-light leading-relaxed mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Link href="/track" className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(218,37,29,0.4)] hover:shadow-[0_0_30px_rgba(218,37,29,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                    <i className="fas fa-search"></i> ติดตามสถานะพัสดุ
                  </Link>
                  <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                    บริการของเรา
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ============================================================================
            🏢 2. CORPORATE STATS (สถิติบริษัท อัปเกรด UI พรีเมียม)
        ============================================================================ */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-100 text-[#ff0000] text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                <i className="fas fa-award"></i> Why Choose THANA GROUP
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight whitespace-normal md:whitespace-nowrap">
                ประสบการณ์ที่มากกว่า <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00249c] to-[#ff0000] drop-shadow-sm">20 ปี</span> ในวงการโลจิสติกส์ ไทย-ลาว
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clock-rotate-left"></i>
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">20<span className="text-[#ff0000]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">ปีแห่งประสบการณ์</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 mx-auto bg-red-50 text-[#ff0000] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-truck-fast"></i>
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">10K<span className="text-[#ff0000]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รอบวิ่งรถต่อปี</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">7</div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">บริษัทในเครือข่าย</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-handshake-angle"></i>
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">100<span className="text-[#ff0000]">%</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รับประกันความพึงพอใจ</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}