'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function InternationalServicePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO SECTION (โทนสีน้ำเงินพรีเมียม - ความน่าเชื่อถือระดับสากล)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" 
              alt="International Transport" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-[#00249c]/40 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                <i className="fas fa-globe-asia"></i> Core Service 01
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                บริการขนส่งสินค้า <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">ระหว่างประเทศ ไทย-ลาว</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                เชื่อมโยงธุรกิจของคุณสู่ตลาดเพื่อนบ้านด้วยกองทัพรถบรรทุกที่ได้มาตรฐาน พร้อมเครือข่ายโลจิสติกส์ที่ครอบคลุมทุกแขวงใน สปป.ลาว ปลอดภัย ตรงเวลา ตรวจสอบได้ตลอด 24 ชั่วโมง
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(0,36,156,0.4)] hover:shadow-[0_0_30px_rgba(0,36,156,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  ขอใบเสนอราคา <i className="fas fa-arrow-right"></i>
                </Link>
                <Link href="/track" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  <i className="fas fa-search"></i> เช็คสถานะพัสดุ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            ⭐ 2. WHY CHOOSE (ทำไมต้องเลือก THANA GROUP)
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#00249c] tracking-widest uppercase mb-2">Our Strengths</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">จุดแข็งด้านการขนส่งข้ามพรมแดน</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#00249c] group-hover:text-white transition-all"><i className="fas fa-truck-fast"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">กองรถขนาดใหญ่</h4>
              <p className="text-gray-600 text-sm leading-relaxed">มีรถหลากหลายประเภท ทั้งรถหัวลาก รถ 6 ล้อ และ 10 ล้อ รองรับสินค้าทุกขนาดและทุกประเภท</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#00249c] group-hover:text-white transition-all"><i className="fas fa-map-marked-alt"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">เครือข่ายครอบคลุม</h4>
              <p className="text-gray-600 text-sm leading-relaxed">มีศูนย์กระจายสินค้าและพันธมิตรครอบคลุมทุกพื้นที่ในประเทศไทยและ สปป.ลาว เข้าถึงได้ทุกจุดหมาย</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#00249c] group-hover:text-white transition-all"><i className="fas fa-shield-halved"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ความปลอดภัยสูง</h4>
              <p className="text-gray-600 text-sm leading-relaxed">พนักงานขับรถมีความเชี่ยวชาญเส้นทาง พร้อมระบบติดตาม GPS ควบคุมความเร็วและอุณหภูมิ</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#00249c] group-hover:text-white transition-all"><i className="fas fa-headset"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">บริการลูกค้า 24 ชม.</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ทีม Customer Service คอยอัปเดตสถานะและให้ความช่วยเหลือประสานงานตลอดการจัดส่ง</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}