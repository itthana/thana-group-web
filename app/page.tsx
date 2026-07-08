'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ============================================================================
// 🖼️ ข้อมูลภาพสไลด์แบนเนอร์หลัก
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
  const [trackingNumber, setTrackingNumber] = useState('');

  // 🔄 ระบบเล่นสไลด์อัตโนมัติ ทุกๆ 6 วินาที
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(trackingNumber) {
      alert(`กำลังพัฒนาระบบเช็คสถานะสำหรับหมายเลข: ${trackingNumber}`);
      // ในอนาคตสามารถสั่ง Router.push ไปหน้า /tracking?id=... ได้ครับ
    }
  };

  return (
    <>
      <Navbar />
      
      {/* เอา pt- ออก เพื่อให้ภาพชนขอบจอด้านบนสุดทะลุ Navbar ไปเลย */}
      <main className="min-h-screen bg-slate-50 font-prompt">
        
        {/* ============================================================================
            💥 1. FULL-SCREEN HERO CAROUSEL (ภาพเต็มจอ 100vh)
        ============================================================================ */}
        <section className="relative h-screen w-full group overflow-hidden bg-[#0a2540]">
          
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full bg-cover flex items-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: slide.bgPosition
              }}
            >
              {/* Overlays เพื่อดรอปแสงรูปภาพให้ข้อความและ Navbar สว่างขึ้น */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/50 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-black/20"></div> {/* เพิ่มความมืดภาพรวมนิดหน่อย */}

              {/* เนื้อหาภายใน - ใส่ pt-32 เพื่อดึงข้อความลงมาไม่ให้ชน Navbar */}
              <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20 pt-32 md:pt-40 animate-fade-in mx-auto max-w-screen-2xl">
                <div className="max-w-3xl">
                  
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse"></span>
                    THANA GROUP • Logistics Solutions
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-wide drop-shadow-lg">
                    {slide.title} <br />
                    <span className="text-[#ff0000] drop-shadow-xl">{slide.highlight}</span> <br className="hidden sm:block" />
                    {slide.suffix}
                  </h1>
                  
                  <p className="text-gray-200 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-2xl drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link href="/services" className="whitespace-nowrap bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:-translate-y-1 text-center flex items-center justify-center gap-2 text-lg">
                      <span>สำรวจบริการ</span> 
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                    <Link href="/contact" className="whitespace-nowrap bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-bold py-4 px-10 rounded-xl transition-all hover:-translate-y-1 text-center flex items-center justify-center gap-2 shadow-lg text-lg">
                      <i className="fas fa-headset text-[#00e5ff]"></i> 
                      <span>ติดต่อที่ปรึกษา</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-xl border border-white/10">
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-xl border border-white/10">
            <i className="fas fa-chevron-right text-xl"></i>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroSlides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full transition-all duration-300 shadow-md ${index === currentSlide ? 'w-10 bg-[#ff0000]' : 'w-3 bg-white/50 hover:bg-white'}`}></button>
            ))}
          </div>
        </section>

        {/* ============================================================================
            📦 2. TRACK & TRACE SECTION (ซ้อนทับกรอบแบนเนอร์เล็กน้อยให้ดูมีมิติ)
        ============================================================================ */}
        <section className="relative z-40 -mt-16 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 text-center md:text-left">
              <h3 className="text-xl font-black text-[#0a2540] flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-box-open text-[#ff0000]"></i> ติดตามสถานะสินค้า
              </h3>
              <p className="text-gray-500 text-sm mt-1">Track & Trace Your Shipment</p>
            </div>
            
            <form onSubmit={handleTrackSubmit} className="flex-1 w-full flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="กรอกหมายเลข Tracking Number..." 
                className="flex-1 px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-all"
                required
              />
              <button type="submit" className="bg-[#0a2540] hover:bg-[#00249c] text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-md whitespace-nowrap">
                <i className="fas fa-search mr-2"></i> ค้นหา
              </button>
            </form>
          </div>
        </section>

        {/* ============================================================================
            🏢 3. CORPORATE STATS (ความน่าเชื่อถือ)
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Why Choose THANA GROUP</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">ประสบการณ์ที่มากกว่า 20 ปี <br className="hidden md:block"/> ในวงการโลจิสติกส์ ไทย-ลาว</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#00249c] mb-2 drop-shadow-sm">20<span className="text-[#ff0000]">+</span></div>
              <p className="text-gray-500 font-bold text-sm">ปีแห่งประสบการณ์</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#00249c] mb-2 drop-shadow-sm">10K<span className="text-[#ff0000]">+</span></div>
              <p className="text-gray-500 font-bold text-sm">รอบวิ่งรถต่อปี</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#00249c] mb-2 drop-shadow-sm">7</div>
              <p className="text-gray-500 font-bold text-sm">บริษัทในเครือข่าย</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#00249c] mb-2 drop-shadow-sm">100<span className="text-[#ff0000]">%</span></div>
              <p className="text-gray-500 font-bold text-sm">รับประกันความพึงพอใจ</p>
            </div>
          </div>
        </section>

        {/* ============================================================================
            🚛 4. CORE SERVICES (กล่องบริการหลัก)
        ============================================================================ */}
        <section className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Our Core Services</h2>
                <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">บริการของเรา</h3>
              </div>
              <Link href="/services" className="text-[#00249c] hover:text-[#ff0000] font-bold flex items-center gap-2 transition-colors">
                ดูบริการทั้งหมด <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0a2540]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop" alt="Cross Border" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-red-50 text-[#ff0000] rounded-xl flex items-center justify-center text-xl mb-6 shadow-inner">
                    <i className="fas fa-truck-fast"></i>
                  </div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-3">ขนส่งข้ามแดน (Cross-Border)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">บริการขนส่งสินค้าด่วน ไทย-ลาว ด้วยรถบรรทุกหลากหลายประเภท ครอบคลุมทุกความต้องการ ส่งตรงถึงปลายทางอย่างปลอดภัย</p>
                  <span className="text-[#00249c] font-bold text-sm group-hover:text-[#ff0000] transition-colors">รายละเอียด <i className="fas fa-angle-right ml-1"></i></span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0a2540]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Customs Clearance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-xl mb-6 shadow-inner">
                    <i className="fas fa-file-signature"></i>
                  </div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-3">ตัวแทนออกของ (Customs Broker)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">ดำเนินการด้านพิธีการศุลกากรทั้งฝั่งไทยและลาว บริการให้คำปรึกษาพิกัดอัตราภาษี โดยทีมชิปปิ้งที่มีใบอนุญาตถูกต้อง (TSP)</p>
                  <span className="text-[#00249c] font-bold text-sm group-hover:text-[#ff0000] transition-colors">รายละเอียด <i className="fas fa-angle-right ml-1"></i></span>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0a2540]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Green Logistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-6 shadow-inner">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-3">ขนส่งพลังงานสะอาด (Green)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">บริการขนส่งด้วยรถบรรทุกพลังงานไฟฟ้า (EV Trucks) เพื่อลดการปล่อยคาร์บอน ตอบโจทย์ธุรกิจที่มุ่งเน้นความยั่งยืน (ESG)</p>
                  <span className="text-[#00249c] font-bold text-sm group-hover:text-[#ff0000] transition-colors">รายละเอียด <i className="fas fa-angle-right ml-1"></i></span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}