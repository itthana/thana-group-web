'use client';

import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center text-[40rem] text-thana-blue font-black">
          404
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Animated Icon */}
          <div className="mb-8 relative inline-block">
            <div className="text-thana-red text-9xl drop-shadow-xl animate-pulse">
              <i className="fas fa-map-signs"></i>
            </div>
            {/* ก้อนเมฆตกแต่ง */}
            <div className="absolute -top-4 -right-12 text-gray-300 text-5xl animate-bounce" style={{ animationDuration: '3s' }}>
              <i className="fas fa-cloud"></i>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-thana-blue mb-4 tracking-tighter">
            4<span className="text-thana-red">0</span>4
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            โอ๊ะโอ! ดูเหมือนสินค้า... เอ้ย! หน้าเว็บนี้จะหาไม่เจอครับ
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            หน้าเว็บที่คุณกำลังค้นหาอาจถูกย้าย ลบไปแล้ว หรือคุณอาจพิมพ์ URL ผิด 
            ไม่ต้องกังวลครับ ให้เรานำทางคุณกลับสู่เส้นทางที่ถูกต้อง
          </p>

          {/* ปุ่มนำทาง (Quick Links) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto bg-thana-blue hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 btn-shine group"
            >
              <i className="fas fa-home transition-transform group-hover:-translate-y-1"></i>
              กลับสู่หน้าหลัก
            </Link>
            
            <Link 
              href="/track" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-thana-blue border-2 border-thana-blue font-bold py-3.5 px-8 rounded-xl transition-all shadow-sm flex items-center justify-center gap-3 group"
            >
              <i className="fas fa-search-location transition-transform group-hover:scale-110 text-thana-red"></i>
              เช็คสถานะสินค้า
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}