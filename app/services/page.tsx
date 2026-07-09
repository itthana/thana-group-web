'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO SECTION
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
              alt="THANA GROUP Services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-layer-group"></i> Our Comprehensive Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-lg">
              บริการโลจิสติกส์ <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">ครบวงจร</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              ตอบโจทย์ทุกธุรกิจด้วยบริการที่ได้มาตรฐานสากล รวดเร็ว ปลอดภัย และครอบคลุมที่สุด ตั้งแต่ต้นทางจนถึงมือผู้รับ
            </p>
          </div>
        </section>

        {/* ============================================================================
            📦 2. CORE SERVICES (บริการที่ 1 - 6)
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 -mt-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. ขนส่งระหว่างประเทศ */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="International Transport" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-globe-asia"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">01</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">ขนส่งระหว่างประเทศ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">บริการขนส่งข้ามพรมแดน ไทย-ลาว และประเทศเพื่อนบ้าน รวดเร็ว ปลอดภัย ตลอด 24 ชั่วโมง พร้อมระบบติดตามสถานะแบบเรียลไทม์</p>
              </div>
            </div>

            {/* 2. ขนส่งภายในประเทศ */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Domestic Transport" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-truck-pickup"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">02</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">ขนส่งภายในประเทศ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">กระจายสินค้าทั่วประเทศไทย ครอบคลุมทุกจังหวัด ด้วยกองทัพรถบรรทุกที่ได้มาตรฐานและพนักงานขับรถผู้เชี่ยวชาญ</p>
              </div>
            </div>

            {/* 3. นำเข้าและส่งออก */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Import Export" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-ship"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">03</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">นำเข้าและส่งออก</h3>
                <p className="text-gray-600 text-sm leading-relaxed">จัดการระบบโลจิสติกส์ระหว่างประเทศแบบครบวงจร (Freight Forwarding) ทั้งทางบก ทางเรือ และทางอากาศ เชื่อมต่อธุรกิจคุณสู่ตลาดโลก</p>
              </div>
            </div>

            {/* 4. รับสั่งสินค้าออนไลน์ */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Online Orders" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-cart-shopping"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">04</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">รับสั่งสินค้าออนไลน์</h3>
                <p className="text-gray-600 text-sm leading-relaxed">บริการช่วยสั่งซื้อสินค้าจากแพลตฟอร์มออนไลน์ต่างประเทศ (Pre-order) พร้อมจัดการนำเข้าและจัดส่งถึงมือคุณอย่างปลอดภัย</p>
              </div>
            </div>

            {/* 5. ชิปปิ้งครบวงจร ตรวจปล่อย */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Customs Clearance" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-file-signature"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">05</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">ชิปปิ้งครบวงจร ตรวจปล่อย</h3>
                <p className="text-gray-600 text-sm leading-relaxed">ดำเนินการด้านเอกสาร พิธีการศุลกากร และตรวจปล่อยสินค้าอย่างแม่นยำ ถูกต้องตามกฎหมาย โดยทีมชิปปิ้งผู้ได้รับใบอนุญาต</p>
              </div>
            </div>

            {/* 6. จำหน่ายสินค้าอุปโภคบริโภค */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent z-10 opacity-80"></div>
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Consumer Goods" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"><i className="fas fa-store"></i></div>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-300 font-black text-xl">06</div>
                <h3 className="font-black text-xl text-[#0a2540] mb-3">จำหน่ายสินค้าอุปโภคบริโภค</h3>
                <p className="text-gray-600 text-sm leading-relaxed">บริการจัดหา จัดจำหน่าย และกระจายสินค้าอุปโภคบริโภคคุณภาพสูง (Trading & Distribution) เพื่อตอบสนองความต้องการของตลาด</p>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================================
            ⚡ 3. PREMIUM HIGHLIGHT (บริการที่ 7 - ส่งด่วน 1 วัน เน้นความโดดเด่น)
        ============================================================================ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(255,0,0,0.15)] group hover:shadow-[0_20px_60px_rgba(255,0,0,0.25)] transition-all duration-500 hover:-translate-y-2">
            
            {/* พื้นหลัง และ เอฟเฟกต์สีแดง */}
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Express Delivery 1 Day" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-red-900/80 z-10"></div>
            
            {/* แสง Flare แต่งเติมความพรีเมียม */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 blur-[100px] rounded-full z-10 pointer-events-none"></div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10">
              <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                  <i className="fas fa-bolt animate-pulse"></i> Premium Service 07
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  บริการส่งด่วนสินค้า <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">ภายใน 1 วัน (Express Delivery)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-light mb-8">
                  ส่งพัสดุด่วนพิเศษแบบ Same Day หรือ Next Day Delivery การันตีถึงที่หมายภายใน 24 ชั่วโมง เหมาะสำหรับสินค้าที่ต้องการความเร่งด่วน ควบคุมอุณหภูมิ หรือเอกสารสำคัญ ด้วยมาตรฐานการจัดส่งระดับสูงสุด
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><i className="fas fa-clock text-red-400"></i> การันตี 24 ชม.</span>
                  <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><i className="fas fa-shield-halved text-red-400"></i> ประกันภัยคุ้มครอง 100%</span>
                </div>
              </div>
              
              <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
                <Link href="/contact" className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-lg py-5 px-10 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] flex flex-col items-center justify-center gap-1 group/btn">
                  <span className="flex items-center gap-2">จองคิวรถด่วน <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i></span>
                  <span className="text-xs font-normal text-red-200">Call Center 24 ชั่วโมง</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}