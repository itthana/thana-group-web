'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt overflow-hidden">
        
        {/* =========================================
            CSS Animations สำหรับหน้าแรก
        ========================================= */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInUp {
            0% { opacity: 0; transform: translateY(60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes scrollLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide-right {
            opacity: 0;
            animation: slideInRight 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-up {
            opacity: 0;
            animation: slideInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-logo-scroll {
            display: flex;
            width: 200%;
            animation: scrollLogos 25s linear infinite;
          }
          .animate-logo-scroll:hover {
            animation-play-state: paused;
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
            style={{ backgroundImage: "url('green-hub.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 via-[#0a2540]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a2540]/90"></div>

          {isVisible && (
            <div className="relative z-10 text-left px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto w-full -mt-20">
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
              
              <h1 className="animate-slide-right delay-300 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl tracking-wide max-w-4xl">
                ยกระดับธุรกิจคุณด้วย <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-orange-500">
                  ขนส่งด่วน ไทย-ลาว
                </span> ระดับสากล
              </h1>
              
              <p className="animate-slide-up delay-500 text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed">
                เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ พร้อมระบบติดตามสถานะแบบ Real-time 
                และกองทัพรถบรรทุกพลังงานสะอาดที่ใหญ่ที่สุดในภูมิภาค
              </p>
              
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
        </section>

        {/* =========================================
            2. TRACKING WIDGET (กล่องค้นหาสถานะสินค้าลอยตัว)
        ========================================= */}
        <section className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-gray-100 animate-slide-up delay-700">
            <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#ff0000] text-2xl hidden md:flex">
              <i className="fas fa-box-open"></i>
            </div>
            <div className="flex-grow w-full">
              <h3 className="text-[#0a2540] font-black text-xl mb-1">ติดตามสถานะสินค้า (Track & Trace)</h3>
              <p className="text-gray-500 text-sm mb-4">กรุณากรอกหมายเลข Tracking Number ของท่าน เพื่อตรวจสอบสถานะแบบ Real-time</p>
              <div className="flex flex-col sm:flex-row w-full gap-3">
                <div className="relative flex-grow">
                  <i className="fas fa-barcode absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="text" 
                    placeholder="เช่น TNG123456789" 
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-colors font-medium text-[#0a2540]" 
                  />
                </div>
                <button className="bg-[#0a2540] hover:bg-[#ff0000] text-white px-8 py-3.5 rounded-xl font-bold transition-colors whitespace-nowrap shadow-md flex items-center justify-center gap-2">
                  <i className="fas fa-search"></i> ค้นหา
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. CORE SERVICES (บริการหลัก)
        ========================================= */}
        <section id="business-units" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-[#ff0000] font-bold tracking-widest uppercase mb-2 text-sm">Our Expertise</h4>
            <h2 className="text-3xl md:text-5xl font-black text-[#0a2540] mb-6">บริการโลจิสติกส์แบบครบวงจร</h2>
            <div className="h-1.5 w-24 bg-[#ff0000] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-[#0a2540]/5 text-[#0a2540] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#0a2540] group-hover:text-white transition-all duration-500">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#ff0000] transition-colors">Cross-Border Trucking</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">ขนส่งทางบกข้ามแดน ไทย-ลาว ด้วยกองทัพรถบรรทุกและ EV Truck ตรวจสอบพิกัด GPS ได้ 24 ชม.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                <i className="fas fa-ship"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">Ocean Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">ขนส่งทางทะเลระหว่างประเทศ ทั้งแบบ FCL และ LCL ครอบคลุมท่าเรือพาณิชย์หลักทั่วโลก</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#ff0000] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#ff0000] group-hover:text-white transition-all duration-500">
                <i className="fas fa-plane"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#ff0000] transition-colors">Air Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">บริการขนส่งทางอากาศสำหรับสินค้าเร่งด่วน ประหยัดเวลา จัดการเอกสารและพิธีการครบวงจร</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                <i className="fas fa-train"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-amber-500 transition-colors">Rail Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">บริการขนส่งทางราง (รถไฟความเร็วสูง จีน-ลาว-ไทย) ประหยัดต้นทุน ขนส่งสินค้าปริมาณมหาศาล</p>
            </div>
          </div>
        </section>

        {/* =========================================
            4. WHY CHOOSE US (ทำไมต้องเลือกเรา)
        ========================================= */}
        <section className="py-20 bg-[#0a2540] mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-[#00e5ff] font-bold tracking-widest uppercase mb-2 text-sm">Why THANA GROUP</h4>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">พันธมิตรที่ธุรกิจ <br /> ไว้วางใจมากว่า 20 ปี</h2>
                <div className="h-1.5 w-24 bg-[#ff0000] rounded-full mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  เราไม่ใช่แค่บริษัทขนส่ง แต่เราคือ "ที่ปรึกษาด้านโลจิสติกส์" ที่ช่วยออกแบบระบบการขนส่งให้เหมาะสมกับธุรกิจของคุณที่สุด เพื่อลดต้นทุน ประหยัดเวลา และเพิ่มขีดความสามารถในการแข่งขัน
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-white font-bold bg-[#ff0000] px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
                  รู้จักเรามากขึ้น <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <i className="fas fa-clock text-3xl text-[#00e5ff] mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-400 text-sm">ทีมงานและระบบ GPS ติดตามสินค้าตลอด 24 ชั่วโมง มั่นใจได้ในความปลอดภัย</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <i className="fas fa-leaf text-3xl text-[#00c300] mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Green Logistics</h3>
                  <p className="text-gray-400 text-sm">มุ่งมั่นสู่การขนส่งไร้มลพิษ ด้วยการนำรถบรรทุกไฟฟ้า (EV) เข้ามาใช้ในระบบ</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <i className="fas fa-file-signature text-3xl text-amber-400 mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Customs Expert</h3>
                  <p className="text-gray-400 text-sm">เชี่ยวชาญพิธีการศุลกากรข้ามแดน เคลียร์เอกสารรวดเร็ว ถูกต้องตามกฎหมาย</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <i className="fas fa-network-wired text-3xl text-[#ff0000] mb-4"></i>
                  <h3 className="text-xl font-bold text-white mb-2">ASEAN Network</h3>
                  <p className="text-gray-400 text-sm">เครือข่ายครอบคลุม ไทย ลาว จีนตอนใต้ พร้อมศูนย์กระจายสินค้า 8 แห่ง</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            5. PARTNERS MARQUEE (พันธมิตรทางธุรกิจ)
        ========================================= */}
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
          <div className="text-center mb-8">
            <h4 className="text-gray-400 font-bold tracking-widest uppercase text-xs">Trusted By Leading Companies</h4>
          </div>
          {/* ใช้ CSS animation วิ่งสไลด์อัตโนมัติ */}
          <div className="relative flex overflow-x-hidden">
            <div className="animate-logo-scroll flex items-center justify-around whitespace-nowrap opacity-60">
              {/* รายชื่อโลโก้พันธมิตร (ใช้ Icon แทนโลโก้ชั่วคราว) */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="mx-12 flex items-center gap-3 text-2xl font-black text-gray-400 grayscale hover:grayscale-0 hover:text-[#0a2540] transition-all cursor-pointer">
                  <i className="fas fa-building"></i> PARTNER {item}
                </div>
              ))}
            </div>
            <div className="animate-logo-scroll flex items-center justify-around whitespace-nowrap opacity-60 absolute top-0">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item + 8} className="mx-12 flex items-center gap-3 text-2xl font-black text-gray-400 grayscale hover:grayscale-0 hover:text-[#0a2540] transition-all cursor-pointer">
                  <i className="fas fa-building"></i> PARTNER {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            6. LATEST NEWS (ข่าวสารล่าสุด)
        ========================================= */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-[#ff0000] font-bold tracking-widest uppercase mb-2 text-sm">Updates</h4>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a2540]">ข่าวสารและกิจกรรมล่าสุด</h2>
            </div>
            <Link href="/news" className="text-[#0a2540] font-bold hover:text-[#ff0000] transition-colors mt-4 md:mt-0 flex items-center gap-2">
              ดูข่าวสารทั้งหมด <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ข่าวที่ 1 */}
            <Link href="/news" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop" alt="News 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#ff0000] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-sm">Corporate News</div>
              </div>
              <div className="p-6">
                <div className="text-gray-400 text-xs font-medium mb-2"><i className="far fa-calendar-alt mr-1"></i> 15 มิ.ย. 2569</div>
                <h3 className="text-lg font-bold text-[#0a2540] group-hover:text-[#ff0000] transition-colors line-clamp-2">THANA GROUP ขยายกองทัพ EV Truck มุ่งหน้าสู่ Green Logistics</h3>
              </div>
            </Link>
            {/* ข่าวที่ 2 */}
            <Link href="/news" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" alt="News 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#ff0000] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-sm">Expansion</div>
              </div>
              <div className="p-6">
                <div className="text-gray-400 text-xs font-medium mb-2"><i className="far fa-calendar-alt mr-1"></i> 28 พ.ค. 2569</div>
                <h3 className="text-lg font-bold text-[#0a2540] group-hover:text-[#ff0000] transition-colors line-clamp-2">เปิดตัวศูนย์กระจายสินค้าแห่งใหม่ ณ นครหลวงเวียงจันทน์</h3>
              </div>
            </Link>
            {/* ข่าวที่ 3 */}
            <Link href="/news" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=600&auto=format&fit=crop" alt="News 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#ff0000] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-sm">Awards</div>
              </div>
              <div className="p-6">
                <div className="text-gray-400 text-xs font-medium mb-2"><i className="far fa-calendar-alt mr-1"></i> 10 พ.ค. 2569</div>
                <h3 className="text-lg font-bold text-[#0a2540] group-hover:text-[#ff0000] transition-colors line-clamp-2">รับรางวัล ผู้ให้บริการโลจิสติกส์ยอดเยี่ยม ประจำปี 2569</h3>
              </div>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}