'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // 🆕 อย่าลืม import Link นะครับ
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/track/${trackingNumber.trim()}`);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-prompt">
        
        {/* ==========================================
            HERO SECTION (หน้าแรกสุด)
        ========================================== */}
        <section className="relative bg-gradient-to-b from-[#0a2540] to-blue-900 py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-[#00e5ff] text-sm font-bold tracking-widest mb-6 border border-blue-400/30">
              LOGISTICS & CROSS-BORDER TRANSPORT
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              เชื่อมต่อธุรกิจคุณ สู่ทุกจุดหมาย <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">อย่างมั่นใจและปลอดภัย</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              บริการขนส่งสินค้าครอบคลุมไทยและ สปป.ลาว ติดตามสถานะได้แบบเรียลไทม์ 24 ชั่วโมง
            </p>

            {/* กล่องค้นหาพัสดุ */}
            <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
              <form onSubmit={handleTrack} className="flex-1 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <i className="fas fa-box absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
                  <input 
                    type="text" 
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                    placeholder="กรอกหมายเลขพัสดุของคุณ (Tracking Number)" 
                    className="w-full pl-14 pr-6 py-4 md:py-5 bg-slate-50 border border-gray-200 focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 rounded-2xl outline-none transition-all font-bold text-gray-800 text-lg uppercase"
                  />
                </div>
                {/* ปุ่มเดิม: ติดตามพัสดุ */}
                <button type="submit" className="bg-[#00249c] hover:bg-blue-800 text-white font-black text-lg py-4 md:py-5 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap flex items-center justify-center gap-3">
                  <i className="fas fa-magnifying-glass"></i> ติดตามพัสดุ
                </button>
              </form>
            </div>

            {/* 🆕 ปุ่มใหม่: ประเมินราคา (อยู่ใต้กล่องค้นหา) */}
            <div className="mt-8 flex justify-center">
              <Link href="/calculator" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center gap-3 group">
                <i className="fas fa-calculator text-[#00e5ff] group-hover:scale-110 transition-transform"></i> 
                ประเมินราคาค่าขนส่งเบื้องต้น
              </Link>
            </div>

          </div>
        </section>

        {/* ... (ส่วนอื่นๆ ของหน้า Home พี่ที่มีอยู่ด้านล่าง ปล่อยไว้เหมือนเดิมได้เลยครับ) ... */}

      </main>
      <Footer />
    </>
  );
}