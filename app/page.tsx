'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // หน่วงเวลาเล็กน้อยเพื่อให้แอนิเมชันทำงานหลังจากโหลดหน้าเว็บเสร็จ
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt overflow-hidden">
        
        {/* CSS Animations พิเศษสำหรับหน้าแรก */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInUp {
            0% { opacity: 0; transform: translateY(60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-right {
            opacity: 0;
            animation: slideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-up {
            opacity: 0;
            animation: slideInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
        `}} />

        {/* =========================================
            1. HERO SECTION (หน้าปก)
        ========================================= */}
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
          
          {/* ภาพพื้นหลัง (มีเอฟเฟกต์ซูมช้าๆ) */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
            style={{ backgroundImage: "url('green-hub.jpeg')" }}
          ></div>
          
          {/* เลเยอร์สีเข้มไล่ระดับ (Gradient Overlay) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 via-[#0a2540]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a2540]/90"></div>

          {/* เนื้อหา Hero (ใช้ isVisible เพื่อคุมจังหวะการแสดงผล) */}
          {isVisible && (
            <div className="relative z-10 text-left px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto w-full">
              
              {/* Tagline */}
              <div className="animate-slide-up delay-100 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="flex gap-2 text-[#00e5ff]">
                  <i className="fas fa-ship"></i>
                  <i className="fas fa-plane"></i>
                  <i className="fas fa-train"></i>
                  <i className="fas fa-truck-fast"></i>
                </span>
                <span className="w-px h-4 bg-white/30 mx-1"></span>
                Global Multimodal Logistics
              </div>
              
              {/* หัวข้อหลัก (สไลด์จากซ้าย) */}
              <h1 className="animate-slide-right delay-300 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl tracking-wide max-w-4xl">
                ยกระดับธุรกิจคุณด้วย <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-orange-500">
                  ขนส่งด่วน ไทย-ลาว
                </span> ระดับสากล
              </h1>
              
              {/* ข้อความอธิบาย */}
              <p className="animate-slide-up delay-500 text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed">
                เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time 
                และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค
              </p>
              
              {/* ปุ่ม Call to action */}
              <div className="animate-slide-up delay-700 flex flex-col sm:flex-row gap-6 items-start">
                <Link href="/services" className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(255,0,0,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,0,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  สำรวจบริการ <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <i className="fas fa-headset text-[#00e5ff]"></i> ติดต่อที่ปรึกษา
                </Link>
              </div>
            </div>
          )}

          {/* สถิติแบบ Glassmorphism */}
          {isVisible && (
            <div className="animate-slide-up delay-700 absolute bottom-10 right-10 z-20 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-8 divide-x divide-white/20">
                <div className="text-center px-4">
                  <div className="text-4xl font-black text-white mb-1">20<span className="text-[#ff0000]">+</span></div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-4xl font-black text-[#00c300] mb-1">100<span className="text-white">%</span></div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-wider">EV Fleet Ready</div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* =========================================
            2. CORE SERVICES (บริการหลัก)
        ========================================= */}
        <section id="business-units" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="text-center mb-16">
            <h4 className="text-[#ff0000] font-bold tracking-widest uppercase mb-2 text-sm">Our Expertise</h4>
            <h2 className="text-3xl md:text-5xl font-black text-[#0a2540] mb-6">บริการโลจิสติกส์แบบครบวงจร</h2>
            <div className="h-1.5 w-24 bg-[#ff0000] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-[#0a2540]/5 text-[#0a2540] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#0a2540] group-hover:text-white transition-all duration-500">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#ff0000] transition-colors">Cross-Border Trucking</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                ขนส่งทางบกข้ามแดน ไทย-ลาว ด้วยกองทัพรถบรรทุกและ EV Truck ตรวจสอบพิกัด GPS ได้ 24 ชม.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-ship"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">Ocean Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                ขนส่งทางทะเลระหว่างประเทศ ทั้งแบบ FCL และ LCL ครอบคลุมท่าเรือพาณิชย์หลักทั่วโลก
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#ff0000] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#ff0000] group-hover:text-white transition-all duration-500">
                <i className="fas fa-plane"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#ff0000] transition-colors">Air Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                บริการขนส่งทางอากาศสำหรับสินค้าเร่งด่วน ประหยัดเวลา จัดการเอกสารและพิธีการครบวงจร
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                <i className="fas fa-train"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-amber-500 transition-colors">Rail Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                บริการขนส่งทางราง (รถไฟความเร็วสูง จีน-ลาว-ไทย) ประหยัดต้นทุน ขนส่งสินค้าปริมาณมหาศาล
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}