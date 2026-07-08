'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  // ฟังก์ชันช่วยเหลือเผื่อพี่ต้องการทำระบบสลับรูปแบนเนอร์ในอนาคต (Carousel)
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* เรียกใช้งาน Navbar หลัก */}
      <Navbar />
      
      {/* 💡 จุดสำคัญ: pt-[120px] md:pt-[140px] คือส่วนที่เพิ่มเข้ามา 
        เพื่อชดเชยพื้นที่ที่โดน Fixed Navbar บัง ทำให้เนื้อหาแสดงผลครบถ้วน 100% ไม่มุดหัวอีกต่อไป
      */}
      <main className="min-h-screen bg-slate-50 font-prompt pt-[110px] sm:pt-[130px] lg:pt-[140px] pb-16">
        
        {/* ============================================================================
            💥 1. HERO BANNER SECTION (ส่วนที่แก้ไขเรื่องแสดงผลไม่ครบถ้วน)
        ============================================================================ */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center flex items-center transition-all duration-700"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop')",
              backgroundPosition: 'center 60%'
            }}
          >
            {/* 🎨 Layer 1: แผ่นกรองแสงสีน้ำเงินเข้มไล่ระดับ ช่วยให้ตัวหนังสืออ่านง่าย สวยงาม มีมิติพรีเมียม */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/80 to-transparent"></div>
            
            {/* 🎨 Layer 2: เพิ่มมิติแสงเงาจากด้านล่าง */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 via-transparent to-transparent"></div>

            {/* Content Area */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-12 md:py-20 animate-fade-in">
              <div className="max-w-3xl">
                
                {/* 🏷️ Badge เล็กๆ สไตล์เว็บ Corporate ยุคใหม่ */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 select-none">
                  <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse"></span>
                  Cross-Border Logistics Expert
                </div>

                {/* ✍️ ควบคุมการตัดคำแบบผู้เชี่ยวชาญ (Typography Control) เพื่อไม่ให้คำตกหล่นผิดสัดส่วน */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[1.15] mb-6 tracking-wide drop-shadow-md">
                  ยกระดับธุรกิจคุณด้วย <br />
                  <span className="text-[#ff0000] drop-shadow-lg">ขนส่งด่วน ไทย-ลาว</span> <br className="hidden sm:block" />
                  ระดับสากล
                </h1>
                
                <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
                  เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time 
                  และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค ดำเนินการโดยทีมงานมืออาชีพ
                </p>

                {/* 🎯 ปุ่มควบคุมแอคชัน บรรทัดเดียวจัดสัดส่วนพอดี */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  
                  {/* ปุ่มสีแดงสดสไตล์ด่วน */}
                  <Link 
                    href="/services" 
                    className="whitespace-nowrap bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
                  >
                    <span>สำรวจบริการ</span> 
                    <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                  </Link>
                  
                  {/* ปุ่มโปร่งใส ทักหาเซลล์ */}
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
        </section>

        {/* ============================================================================
            📌 ส่วนที่ 2: ฟีเจอร์เด่น/ข้อมูลย่อเพิ่มเติม (พี่สามารถขยายต่อจากตรงนี้ได้เลย)
        ============================================================================ */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* กล่องที่ 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-50 rounded-xl text-[#ff0000] flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-truck-fast"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">ส่งด่วนถึงไวใน 24 ชม.</h3>
                <p className="text-gray-500 text-xs leading-relaxed">รอบวิ่งรถทุกวัน มั่นใจได้ว่าสินค้าถึงปลายทางรวดเร็วและปลอดภัยที่สุด</p>
              </div>
            </div>

            {/* กล่องที่ 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-xl text-[#00249c] flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">ประกันภัยสินค้าเต็มวงเงิน</h3>
                <p className="text-gray-500 text-xs leading-relaxed">มีนโยบายรับประกันความเสียหาย เพิ่มความอุ่นใจให้กับทุกการจัดส่ง</p>
              </div>
            </div>

            {/* กล่องที่ 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex gap-4 items-start">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center shrink-0 text-xl shadow-inner">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2540] mb-1">เคลียร์พิธีการศุลกากรครบวงจร</h3>
                <p className="text-gray-500 text-xs leading-relaxed">ทีมชิปปิ้งผู้เชี่ยวชาญ ดูแลเรื่องเอกสารผ่านแดนอย่างถูกต้องตามกฎหมาย</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* เรียกใช้งาน Footer หลัก */}
      <Footer />
    </>
  );
}