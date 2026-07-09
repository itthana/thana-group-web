'use client';

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';

export default function ExpressServicePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO SECTION (ส่วนหัว เน้นความพรีเมียมและรวดเร็ว)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* ภาพพื้นหลังรถบรรทุกวิ่งเร็วๆ หรือภาพแสงไฟกลางคืน */}
            <img 
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2000&auto=format&fit=crop" 
              alt="Express Delivery" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/90 to-red-900/60 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in-up">
                <i className="fas fa-bolt"></i> THANA Premium Express
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                บริการส่งด่วนพิเศษ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">ภายใน 1 วัน</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                การันตีจัดส่งสินค้าถึงปลายทาง (Same Day / Next Day Delivery) ข้ามแดน ไทย-ลาว ด้วยความรวดเร็ว ปลอดภัย และตรงต่อเวลาที่สุด เหมาะสำหรับธุรกิจที่แข่งกับเวลา
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/contact" className="bg-gradient-to-r from-[#da251d] to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(218,37,29,0.4)] hover:shadow-[0_0_30px_rgba(218,37,29,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  จองคิวรถด่วนทันที <i className="fas fa-arrow-right"></i>
                </Link>
                <a href="tel:0930237931" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  <i className="fas fa-phone-alt"></i> โทรปรึกษา 24 ชม.
                </a>
              </div>
            </div>

            <div className="md:w-1/3 hidden md:flex justify-center relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
               <div className="w-64 h-64 bg-gradient-to-tr from-red-600 to-amber-500 rounded-full blur-3xl opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
               <img src="/LOGO-TLT.png" alt="THANA GROUP" className="w-48 relative z-10 drop-shadow-2xl brightness-110 contrast-125" />
            </div>
          </div>
        </section>

        {/* ============================================================================
            ⭐ 2. WHY CHOOSE EXPRESS (ทำไมต้องเลือกส่งด่วนกับเรา)
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Key Advantages</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">ที่สุดของบริการจัดส่งสินค้าด่วน</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-50 text-[#ff0000] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#ff0000] group-hover:text-white transition-all"><i className="fas fa-stopwatch"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">รวดเร็ว ทันใจ</h4>
              <p className="text-gray-600 text-sm leading-relaxed">จัดส่งถึงปลายทางภายใน 24 ชั่วโมง ช่วยให้ธุรกิจของคุณไม่สะดุดและตอบสนองความต้องการตลาดได้ทันที</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#00249c] group-hover:text-white transition-all"><i className="fas fa-shield-check"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ปลอดภัย 100%</h4>
              <p className="text-gray-600 text-sm leading-relaxed">มีระบบประกันภัยครอบคลุมความเสียหายตลอดเส้นทาง พร้อมคนขับที่ผ่านการอบรมอย่างมืออาชีพ</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all"><i className="fas fa-satellite-dish"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ติดตาม 24 ชม.</h4>
              <p className="text-gray-600 text-sm leading-relaxed">ระบบ GPS Tracking ติดตามสถานะรถแบบ Real-time ให้คุณทราบทุกความเคลื่อนไหวของสินค้า</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all"><i className="fas fa-leaf"></i></div>
              <h4 className="font-black text-[#0a2540] text-xl mb-3">ขนส่งรักษ์โลก</h4>
              <p className="text-gray-600 text-sm leading-relaxed">มีตัวเลือกการขนส่งด่วนด้วยรถบรรทุกพลังงานไฟฟ้า (EV) ลดมลพิษ ตอบโจทย์ธุรกิจเพื่อความยั่งยืน</p>
            </div>
          </div>
        </section>

        {/* ============================================================================
            🛤️ 3. WORKING PROCESS (ขั้นตอนการทำงาน)
        ============================================================================ */}
        <section className="py-20 bg-[#f8fafc] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Our Process</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">ขั้นตอนการจัดส่งด่วนแบบไร้รอยต่อ</h3>
            </div>

            <div className="relative">
              {/* เส้นเชื่อมตรงกลาง (ซ่อนในมือถือ) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-[#00249c] text-[#00249c] rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-lg">1</div>
                  <h4 className="font-black text-lg text-[#0a2540] mb-2">รับสินค้า (Pick up)</h4>
                  <p className="text-gray-500 text-sm">เข้ารับสินค้าจากต้นทางตามเวลาที่กำหนดอย่างรวดเร็ว</p>
                </div>
                {/* Step 2 */}
                <div className="text-center mt-8 md:mt-0">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-[#ff0000] text-[#ff0000] rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-lg">2</div>
                  <h4 className="font-black text-lg text-[#0a2540] mb-2">พิธีการศุลกากรด่วน</h4>
                  <p className="text-gray-500 text-sm">จัดการเอกสารผ่านแดนผ่านช่องทางด่วนพิเศษ (Fast Track)</p>
                </div>
                {/* Step 3 */}
                <div className="text-center mt-8 md:mt-0">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-[#00249c] text-[#00249c] rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-lg">3</div>
                  <h4 className="font-black text-lg text-[#0a2540] mb-2">เดินทางข้ามแดน</h4>
                  <p className="text-gray-500 text-sm">รถบรรทุกวิ่งตรงสู่ปลายทาง ไม่มีการแวะพักถ่ายสินค้า</p>
                </div>
                {/* Step 4 */}
                <div className="text-center mt-8 md:mt-0">
                  <div className="w-20 h-20 mx-auto bg-[#ff0000] border-4 border-white text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-xl">4</div>
                  <h4 className="font-black text-lg text-[#0a2540] mb-2">ส่งมอบสำเร็จ</h4>
                  <p className="text-gray-500 text-sm">ส่งถึงมือผู้รับปลายทางอย่างสมบูรณ์ภายใน 24 ชั่วโมง</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            📦 4. SUITABLE FOR (เหมาะสำหรับสินค้าประเภทไหน)
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Suitable Goods</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-6">สินค้าที่เหมาะกับการจัดส่งด่วน</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                บริการนี้ออกแบบมาเป็นพิเศษเพื่อลดความเสี่ยงจากการล่าช้า และรักษาคุณภาพของสินค้าให้สมบูรณ์ที่สุดจนถึงมือผู้รับ
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center shrink-0"><i className="fas fa-file-contract"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0a2540]">เอกสารสำคัญและพัสดุเร่งด่วน</h4>
                    <p className="text-sm text-gray-500">เอกสารสัญญา, ชิ้นส่วนอะไหล่เครื่องจักรที่ต้องใช้ด่วน</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-red-50 text-[#ff0000] rounded-xl flex items-center justify-center shrink-0"><i className="fas fa-temperature-snow"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0a2540]">สินค้าควบคุมอุณหภูมิ (Cold Chain)</h4>
                    <p className="text-sm text-gray-500">อาหารสด, ยา, เวชภัณฑ์ และสินค้าทางการเกษตร</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0"><i className="fas fa-gem"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0a2540]">สินค้ามูลค่าสูง (High-Value Goods)</h4>
                    <p className="text-sm text-gray-500">อุปกรณ์อิเล็กทรอนิกส์, สินค้าแบรนด์เนม ที่ต้องการความปลอดภัยสูงสุด</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#00249c] rounded-[3rem] rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=1000&auto=format&fit=crop" 
                alt="Express Logistics" 
                className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl object-cover aspect-square"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 z-20 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#ff0000] text-white rounded-2xl flex items-center justify-center text-2xl font-black">
                    <i className="fas fa-check-double"></i>
                  </div>
                  <div>
                    <p className="text-[#0a2540] font-black text-lg">การันตีคุณภาพ</p>
                    <p className="text-gray-500 text-sm">รับประกันทุกการจัดส่ง</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}