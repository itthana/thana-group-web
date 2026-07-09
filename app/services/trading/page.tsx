'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function TradingServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" alt="Consumer Goods Trading" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-pink-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                <i className="fas fa-store"></i> Core Service 06
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
                ตัวแทนจัดจำหน่ายและ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">กระจายสินค้าคุณภาพ</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8">
                บริการจัดหา (Sourcing) จัดจำหน่าย (Trading) และกระจายสินค้าอุปโภคบริโภคสู่ตลาด ทั้งในประเทศไทยและ สปป.ลาว อย่างมีประสิทธิภาพ
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  ติดต่อฝ่ายธุรกิจการค้า <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-pink-600 tracking-widest uppercase mb-2">Trading & Distribution</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">ทำไมต้องให้เรากระจายสินค้าให้คุณ?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-magnifying-glass-chart"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">เข้าใจพฤติกรรมตลาด</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ด้วยประสบการณ์ยาวนาน เรามีฐานข้อมูลและความเข้าใจในพฤติกรรมผู้บริโภค ช่วยนำพาสินค้าของคุณเจาะตลาดได้อย่างถูกจุด</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-warehouse"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">คลังจัดเก็บสินค้ามาตรฐาน</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ระบบบริหารคลังสินค้า (WMS) ที่ช่วยให้การจัดเก็บและเบิกจ่ายสินค้าอุปโภคบริโภคเป็นไปอย่างแม่นยำ</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-shop"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">เครือข่ายร้านค้าปลีก/ส่ง</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ส่งตรงสินค้าสู่ห้างสรรพสินค้า ซูเปอร์มาร์เก็ต และร้านค้าย่อย (Modern Trade & Traditional Trade) อย่างรวดเร็ว</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}