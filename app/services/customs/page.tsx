'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function CustomsServicePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO SECTION (โทนสีฟ้า/สกายบลู - เน้นความโปร่งใสและถูกต้องตามกฎหมาย)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" 
              alt="Customs Clearance" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/95 to-sky-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-500/30 text-sky-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                <i className="fas fa-file-signature"></i> Core Service 05
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                ชิปปิ้งครบวงจร <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">และพิธีการศุลกากร</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                หมดปัญหายุ่งยากเรื่องเอกสารข้ามแดน ด้วยทีมงานชิปปิ้งผู้เชี่ยวชาญที่ได้รับใบอนุญาต จัดการพิธีการศุลกากร นำเข้า-ส่งออก ได้อย่างรวดเร็ว ถูกต้องตามกฎหมาย 100%
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  ปรึกษาทีมชิปปิ้งฟรี <i className="fas fa-comments"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            ⭐ 2. SERVICE HIGHLIGHTS 
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase mb-2">Professional Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">บริการด้านศุลกากรของเรา</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-file-invoice"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">จัดทำเอกสารศุลกากร (EDI)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">บันทึกและส่งข้อมูลใบขนสินค้าผ่านระบบคอมพิวเตอร์ของกรมศุลกากร (e-Customs) รวดเร็ว ไร้กระดาษ ลดข้อผิดพลาด</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-stamp"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ขอใบอนุญาตนำเข้า-ส่งออก</h4>
              <p className="text-gray-600 text-sm leading-relaxed">บริการขอใบอนุญาตจากหน่วยงานต่างๆ เช่น อย., กรมปศุสัตว์, กรมวิชาการเกษตร เพื่อให้สินค้าผ่านแดนได้อย่างฉลุย</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fas fa-percent"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ให้คำปรึกษาพิกัดภาษี</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ผู้เชี่ยวชาญพร้อมให้คำแนะนำเรื่องพิกัดอัตราศุลกากร และสิทธิประโยชน์ทางภาษีต่างๆ (เช่น Form D, Form E) เพื่อลดต้นทุน</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}