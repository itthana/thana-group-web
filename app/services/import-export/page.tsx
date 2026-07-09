'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function ImportExportServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop" alt="Import Export" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-amber-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                <i className="fas fa-ship"></i> Core Service 03
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
                บริการบริหารจัดการ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">นำเข้าและส่งออก</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8">
                Freight Forwarding ครบวงจร เชื่อมต่อธุรกิจคุณสู่ตลาดโลก ไม่ว่าจะเป็นทางเรือ (Sea Freight), ทางอากาศ (Air Freight) หรือทางบก (Cross-border)
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  ติดต่อฝ่ายต่างประเทศ <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-2">Global Network</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">โซลูชันเพื่อการค้าไร้พรมแดน</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-ship"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">Sea Freight (ทางเรือ)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">บริการแบบ FCL (เต็มตู้) และ LCL (แชร์ตู้) ประหยัดต้นทุน เหมาะสำหรับสินค้าจำนวนมาก</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-plane-departure"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">Air Freight (ทางอากาศ)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">จัดส่งรวดเร็วข้ามทวีป เหมาะสำหรับสินค้าที่มีมูลค่าสูง หรือต้องการความเร่งด่วนเป็นพิเศษ</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-handshake"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">เครือข่ายพันธมิตรทั่วโลก</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ประสานงานกับเอเย่นต์ในประเทศปลายทาง เพื่อจัดการแบบ Door-to-Door ได้อย่างไร้รอยต่อ</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}