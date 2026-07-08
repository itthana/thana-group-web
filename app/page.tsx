'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WelcomeScreen from '../components/layout/WelcomeScreen';

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
            🌟 1. HERO BANNER SECTION 
        ============================================================================ */}
        <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-[#0a2540]">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Overlay Gradient ให้ดูหรูหราขึ้น */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 via-[#0a2540]/60 to-transparent z-10"></div>
              <img 
                src={slide.image} 
                alt={slide.highlight} 
                className="w-full h-full object-cover scale-105 animate-slow-zoom"
                style={{ objectPosition: slide.bgPosition }}
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mt-16">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                    <i className="fas fa-globe-asia"></i> THANA GROUP LOGISTICS
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">{slide.highlight}</span> <br />
                    {slide.suffix}
                  </h1>
                  <p className="text-gray-200 text-base md:text-xl font-light leading-relaxed mb-10 animate-fade-in-up border-l-4 border-red-500 pl-4" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link href="/track" className="bg-gradient-to-r from-[#da251d] to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_8px_20px_rgba(218,37,29,0.4)] hover:shadow-[0_10px_30px_rgba(218,37,29,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                      <i className="fas fa-search"></i> ติดตามสถานะพัสดุ
                    </Link>
                    <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                      บริการของเรา <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Curved shape bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.36,199.39,109.84Z" fill="#f8fafc"></path>
            </svg>
          </div>
        </section>

        {/* ============================================================================
            📦 2. OUR CORE SERVICES (ส่วนแนะนำบริการ - เพิ่มใหม่ให้เว็บดูเต็ม)
        ============================================================================ */}
        <section className="py-20 bg-slate-50 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">บริการหลักของเรา</h3>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">ครอบคลุมทุกความต้องการด้านโลจิสติกส์ ด้วยมาตรฐานการบริการระดับสากล</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl"><i className="fas fa-truck-fast"></i></div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-black text-xl text-[#0a2540] mb-3">ขนส่งข้ามแดน ไทย-ลาว</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">บริการรถบรรทุกส่งสินค้าข้ามประเทศแบบ Door-to-Door รวดเร็ว ปลอดภัย ตรวจสอบสถานะได้ตลอด 24 ชม.</p>
                  <Link href="/services" className="text-[#00249c] font-bold text-sm hover:text-red-600 transition-colors flex items-center gap-2">ดูรายละเอียด <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#00249c] rounded-xl flex items-center justify-center text-white text-xl"><i className="fas fa-file-signature"></i></div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-black text-xl text-[#0a2540] mb-3">พิธีการศุลกากร (Customs)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">ดำเนินการด้านเอกสารและพิธีการศุลกากรโดยทีมชิปปิ้งผู้เชี่ยวชาญ ถูกต้องตามกฎหมาย ราบรื่นไม่มีสะดุด</p>
                  <Link href="/services" className="text-[#00249c] font-bold text-sm hover:text-red-600 transition-colors flex items-center gap-2">ดูรายละเอียด <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl"><i className="fas fa-leaf"></i></div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-black text-xl text-[#0a2540] mb-3">รักษ์โลก (Green Logistics)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">บริการขนส่งด้วยกองทัพรถบรรทุกพลังงานไฟฟ้า (EV) ลดการปล่อยคาร์บอน เพื่อธุรกิจที่ยั่งยืนของคุณ</p>
                  <Link href="/green-logistics" className="text-[#00249c] font-bold text-sm hover:text-red-600 transition-colors flex items-center gap-2">ดูรายละเอียด <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            🏆 3. CORPORATE STATS (สถิติบริษัท)
        ============================================================================ */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-100 text-[#ff0000] text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                <i className="fas fa-award"></i> Why Choose THANA GROUP
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a2540] tracking-tight">
                ประสบการณ์ที่มากกว่า <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00249c] to-[#ff0000] drop-shadow-sm">20 ปี</span><br className="hidden md:block"/> ในวงการโลจิสติกส์ ไทย-ลาว
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-clock-rotate-left"></i></div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">20<span className="text-[#ff0000]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">ปีแห่งประสบการณ์</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 mx-auto bg-red-50 text-[#ff0000] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-truck-fast"></i></div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">10K<span className="text-[#ff0000]">+</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รอบวิ่งรถต่อปี</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-network-wired"></i></div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">7</div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">บริษัทในเครือข่าย</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,36,156,0.08)] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-handshake-angle"></i></div>
                <div className="text-4xl md:text-5xl font-black text-[#0a2540] mb-2 tracking-tight">100<span className="text-[#ff0000]">%</span></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">รับประกันความพึงพอใจ</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            📞 4. CALL TO ACTION (ส่วนติดต่อเราด้านล่าง)
        ============================================================================ */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a2540] z-0"></div>
          <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 z-0"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 z-0"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">พร้อมที่จะก้าวไปกับเราหรือยัง?</h2>
            <p className="text-blue-100 text-lg mb-10">ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและออกแบบโซลูชันโลจิสติกส์ที่เหมาะสมกับธุรกิจคุณที่สุด</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#0a2540] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                <i className="fas fa-envelope"></i> ติดต่อเราวันนี้
              </Link>
              <a href="tel:0930237931" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                <i className="fas fa-phone-alt"></i> 093-023-7931
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}