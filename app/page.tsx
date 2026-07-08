'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ============================================================================
// 🖼️ ข้อมูลภาพสไลด์แบนเนอร์หลัก (Hero Slides)
// 📍 วิธีแก้ไข: เปลี่ยนแปลงคำโปรย (Title, Subtitle) และลิงก์รูปภาพ (image) ได้ตามใจชอบเลยครับ
// ============================================================================
const heroSlides = [
  {
    id: 1,
    title: 'ยกระดับธุรกิจคุณด้วย',
    highlight: 'ขนส่งด่วน ไทย-ลาว',
    suffix: 'ระดับสากล',
    subtitle: 'เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค ดำเนินการโดยทีมงานมืออาชีพ',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center 60%'
  },
  {
    id: 2,
    title: 'บริการชิปปิ้งและเอกสาร',
    highlight: 'ผ่านแดนครบวงจร',
    suffix: 'ถูกต้อง รวดเร็ว',
    subtitle: 'หมดกังวลเรื่องพิธีการศุลกากรไทย-ลาว ดูแลโดยทีมชิปปิ้งผู้เชี่ยวชาญจาก TSP เอกสารครบถ้วน ถูกต้องตามกฎหมาย สินค้าผ่านด่านฉลุยไม่มีติดขัด',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center center'
  },
  {
    id: 3,
    title: 'ผู้นำด้านการขนส่งสีเขียว',
    highlight: 'Green Logistics',
    suffix: 'เพื่ออนาคตที่ยั่งยืน',
    subtitle: 'THANA GROUP มุ่งมั่นขับเคลื่อนธุรกิจด้วยพลังงานสะอาด ลดการปล่อยคาร์บอนในทุกเส้นทางขนส่ง เพื่อส่งมอบสิ่งที่ดีที่สุดให้แก่คู่ค้าและสิ่งแวดล้อม',
    image: 'https://images.unsplash.com/photo-1516501349896-f64243b35583?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center 45%'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔄 ระบบเล่นสไลด์อัตโนมัติ (Autoplay) ทุกๆ 5 วินาที
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // ⬅️ ฟังก์ชันกดไปสไลด์ก่อนหน้า
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // ➡️ ฟังก์ชันกดไปสไลด์ถัดไป
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      
      {/* pt- ดันเนื้อหาลงมาจาก Navbar ไม่ให้มุดหาย */}
      <main className="min-h-screen bg-slate-50 font-prompt pt-[110px] sm:pt-[130px] lg:pt-[140px] pb-16">
        
        {/* ============================================================================
            💥 1. INTERACTIVE HERO CAROUSEL (ระบบภาพสไลด์หน้าแรกแบบพรีเมียม)
        ============================================================================ */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative group">
          
          {/* ตัวคอนเทนเนอร์สไลด์ */}
          <div className="relative min-h-[500px] md:min-h-[630px] rounded-3xl overflow-hidden shadow-2xl bg-[#0a2540]">
            
            {/* วนลูปการ์ดแบนเนอร์แต่ละหน้า */}
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full bg-cover bg-center flex items-center transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ 
                  backgroundImage: `url('${slide.image}')`,
                  backgroundPosition: slide.bgPosition
                }}
              >
                {/* เกลี่ยสีเงาดำด้านซ้ายเพื่อให้อ่านข้อความง่าย */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/40 via-transparent to-transparent"></div>

                {/* เนื้อหาข้อความภายในสไลด์ */}
                <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 py-12 md:py-20 animate-fade-in">
                  <div className="max-w-3xl">
                    
                    {/* Badge เล็ก */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 select-none">
                      <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse"></span>
                      Cross-Border Logistics Expert
                    </div>

                    {/* หัวเรื่องตัดคำคมชัดทรงพลัง */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[1.15] mb-6 tracking-wide drop-shadow-md">
                      {slide.title} <br />
                      <span className="text-[#ff0000] drop-shadow-lg">{slide.highlight}</span> <br className="hidden sm:block" />
                      {slide.suffix}
                    </h1>
                    
                    {/* คำโปรยย่อย */}
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
                      {slide.subtitle}
                    </p>

                    {/* ปุ่มแอคชัน */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <Link 
                        href="/services" 
                        className="whitespace-nowrap bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 btn-shine"
                      >
                        <span>สำรวจบริการ</span> 
                        <i className="fas fa-arrow-right text-sm"></i>
                      </Link>
                      
                      <Link 
                        href="/contact" 
                        className="whitespace-nowrap bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md font-bold py-3.5 px-8 rounded-xl transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 shadow-md"
                      >
                        <i className="fas fa-headset text-[#00e5ff]"></i> 
                        <span>ติดต่อที่ปรึกษา</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* ⬅️ ปุ่มลูกศรซ้าย (โชว์เมื่อเอาเมาส์มาวางบนสไลด์) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-md border border-white/10"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>

            {/* ➡️ ปุ่มลูกศรขวา (โชว์เมื่อเอาเมาส์มาวางบนสไลด์) */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-md border border-white/10"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>

            {/* ⚪ จุดวงกลมบอกตำแหน่งสไลด์ (Indicators) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-[#ff0000]' : 'w-2.5 bg-white/50 hover:bg-white'
                  }`}
                ></button>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================================
            📌 ส่วนที่ 2: ฟีเจอร์เด่น/ข้อมูลย่อเพิ่มเติมด้านล่างสไลด์
        ============================================================================ */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl text-[#ff0000] flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-truck-fast"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">ส่งด่วนถึงไวใน 24 ชม.</h3>
                <p className="text-gray-500 text-xs leading-relaxed">รอบวิ่งรถออกทุกวัน มั่นใจได้ว่าสินค้าถึงปลายทางรวดเร็วและปลอดภัยสูงสุด</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl text-[#00249c] flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">ประกันภัยสินค้าเต็มวงเงิน</h3>
                <p className="text-gray-500 text-xs leading-relaxed">มีนโยบายคุ้มครองและรับประกันความเสียหาย เพิ่มความอุ่นใจให้กับทุกชิปเม้นท์</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">เคลียร์พิธีการศุลกากรครบวงจร</h3>
                <p className="text-gray-500 text-xs leading-relaxed">ทีมชิปปิ้งผู้เชี่ยวชาญ ดูแลงานเอกสารผ่านแดนอย่างรวดเร็ว ถูกต้องตามกฎหมาย</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}