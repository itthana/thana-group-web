'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function OnlineOrderServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop" alt="Online Orders" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-purple-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                <i className="fas fa-cart-shopping"></i> Core Service 04
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
                บริการรับสั่ง <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">สินค้าออนไลน์ข้ามพรมแดน</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8">
                ให้บริการสั่งซื้อ นำเข้า และจัดส่งสินค้าจากแพลตฟอร์ม E-Commerce ชื่อดังต่างประเทศ จัดการให้ครบจบในที่เดียวถึงหน้าบ้านคุณ
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  สอบถามเรทราคา <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-2">E-Commerce Solutions</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">สั่งซื้อง่าย ได้ของชัวร์</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-mouse-pointer"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">สั่งซื้อแทน (Pre-order)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ช่วยจัดการสั่งซื้อจากแพลตฟอร์มออนไลน์ต่างประเทศ หมดปัญหาเรื่องการชำระเงินข้ามประเทศและภาษา</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-boxes-packing"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">รวมพัสดุรีแพ็ค (Repacking)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">บริการรวมสินค้าจากหลายร้านค้าเข้าด้วยกัน และรีแพ็คเพื่อประหยัดพื้นที่และลดค่าใช้จ่ายในการขนส่ง</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-house-user"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ส่งถึงบ้าน (Door-to-Door)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">จัดการภาษีนำเข้าให้เบ็ดเสร็จ พร้อมจัดส่งถึงมือผู้รับปลายทางอย่างรวดเร็วและปลอดภัย</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}