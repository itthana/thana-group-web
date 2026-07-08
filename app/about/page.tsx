'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO SECTION (ส่วนหัวของหน้า)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
              alt="THANA GROUP Background" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-building"></i> Corporate Profile
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-lg">
              เกี่ยวกับ <span className="text-[#ff0000]">THANA GROUP</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              ผู้นำด้านการให้บริการโลจิสติกส์แบบครบวงจร ไทย-ลาว ด้วยประสบการณ์กว่า 20 ปี ที่มุ่งมั่นส่งมอบบริการที่รวดเร็ว ปลอดภัย และได้มาตรฐานสากล
            </p>
          </div>
        </section>

        {/* ============================================================================
            🏢 2. COMPANY HISTORY (ประวัติความเป็นมา)
        ============================================================================ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Logistics Fleet" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#ff0000] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-inner">
                    20+
                  </div>
                  <div>
                    <p className="text-[#0a2540] font-black text-xl">ปีแห่งความเชี่ยวชาญ</p>
                    <p className="text-gray-500 font-medium text-sm">ในวงการขนส่งข้ามแดน</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540] leading-tight">
                จุดเริ่มต้นแห่งความสำเร็จ <br className="hidden md:block" />
                บนเส้นทางสาย<span className="text-[#00249c]">โลจิสติกส์</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                บริษัท ธนาโลจิสติกส์ จำกัด (THANA GROUP) ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะยกระดับมาตรฐานการขนส่งสินค้าระหว่างประเทศไทยและสาธารณรัฐประชาธิปไตยประชาชนลาว 
              </p>
              <p className="text-gray-600 leading-relaxed">
                ตลอดระยะเวลากว่าสองทศวรรษ เราได้พัฒนาเครือข่ายและโซลูชันด้านโลจิสติกส์อย่างไม่หยุดยั้ง จากจุดเริ่มต้นของการให้บริการขนส่งข้ามแดน เราได้ขยายบริการครอบคลุมถึงพิธีการศุลกากร (Customs Clearance) และการขนส่งด้วยพลังงานสะอาด (Green Logistics) จนก้าวขึ้นเป็นผู้นำที่ได้รับความไว้วางใจจากองค์กรชั้นนำระดับประเทศ
              </p>
              <div className="pt-4">
                <Link href="/services" className="inline-flex items-center gap-2 bg-[#0a2540] hover:bg-[#00249c] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  ดูบริการทั้งหมดของเรา <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            🎯 3. VISION & MISSION (วิสัยทัศน์ และ พันธกิจ - แก้ไขสีตัวหนังสือแล้ว)
        ============================================================================ */}
        <section className="bg-gray-100 py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#ff0000] tracking-widest uppercase mb-2">Core Purpose</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">ทิศทางและเป้าหมายองค์กร</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 👁️ การ์ดวิสัยทัศน์ (Vision) */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#00249c]/10 text-[#00249c] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-6 drop-shadow-sm">
                    วิสัยทัศน์ (Vision)
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    "มุ่งมั่นที่จะเป็นผู้ให้บริการโลจิสติกส์ระดับแนวหน้าของภูมิภาคอาเซียน 
                    ที่ขับเคลื่อนด้วยนวัตกรรมและมาตรฐานสากล 
                    เพื่อสร้างความได้เปรียบทางการแข่งขันให้กับลูกค้า"
                  </p>
                </div>
              </div>

              {/* 🎯 การ์ดพันธกิจ (Mission) */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#ff0000]/10 text-[#ff0000] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-6 drop-shadow-sm">
                    พันธกิจ (Mission)
                  </h3>
                  <ul className="text-gray-600 text-lg leading-relaxed font-medium space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#ff0000] mt-1.5 text-base shrink-0"></i>
                      <span>ส่งมอบบริการขนส่งที่รวดเร็ว ปลอดภัย และตรงต่อเวลา</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#ff0000] mt-1.5 text-base shrink-0"></i>
                      <span>พัฒนาระบบเทคโนโลยีเพื่อเพิ่มประสิทธิภาพในการติดตามสถานะสินค้า</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#ff0000] mt-1.5 text-base shrink-0"></i>
                      <span>ดำเนินธุรกิจด้วยความรับผิดชอบต่อสังคมและสิ่งแวดล้อม</span>
                    </li>
                  </ul>
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