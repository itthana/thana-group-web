'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function DomesticServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* HERO SECTION */}
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" alt="Domestic Transport" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-emerald-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                <i className="fas fa-truck-pickup"></i> Core Service 02
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
                บริการขนส่งสินค้า <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">ภายในประเทศ</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8">
                กระจายสินค้าครอบคลุมทุกจังหวัดทั่วประเทศไทย ด้วยระบบบริหารจัดการเส้นทางที่แม่นยำ กองทัพรถบรรทุกที่ได้มาตรฐาน และพนักงานขับรถผู้เชี่ยวชาญเส้นทาง
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  สอบถามเส้นทางและราคา <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-2">Service Strengths</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">จุดเด่นบริการขนส่งภายในประเทศ</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-map-location-dot"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ครอบคลุม 77 จังหวัด</h4>
              <p className="text-gray-600 text-sm leading-relaxed">เข้าถึงทุกพื้นที่หมายทั่วประเทศไทย ไม่ว่าจะเป็นศูนย์กระจายสินค้า นิคมอุตสาหกรรม หรือห้างสรรพสินค้า</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-truck-moving"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ประเภทรถหลากหลาย</h4>
              <p className="text-gray-600 text-sm leading-relaxed">มีรถกระบะ, รถบรรทุก 6 ล้อ, 10 ล้อ และรถพ่วง (Trailer) พร้อมตอบโจทย์สินค้าทุกขนาด ทุกน้ำหนัก</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-box-check"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">รักษาความปลอดภัยสูงสุด</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ตรวจสอบความพร้อมของรถและพนักงานขับรถเสมอ สินค้าถึงมือผู้รับอย่างสมบูรณ์แบบตามเวลาที่กำหนด</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}