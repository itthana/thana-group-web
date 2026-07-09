'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function AboutUsPage() {
  // ระบบสลับแท็บข้อมูลองค์กรเพื่อความล้ำสมัยและใช้งานง่าย
  const [activeTab, setActiveTab] = useState<'vision' | 'ceo' | 'history' | 'structure'>('vision');

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* ============================================================================
            🌟 1. HERO BANNER (สร้าง First Impression ที่ยิ่งใหญ่และน่าเชื่อถือ)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" 
              alt="THANA GROUP Corporate" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/90 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-building"></i> Corporate Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">
              ขับเคลื่อนความสำเร็จ <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">เชื่อมโยงสองแผ่นดิน</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              ทำความรู้จัก THANA GROUP ผู้นำการให้บริการโลจิสติกส์ ไทย-ลาว ครบวงจร ด้วยความมุ่งมั่น มั่นคง และโปร่งใส ระดับสากล
            </p>
          </div>
        </section>

        {/* ============================================================================
            🎛️ 2. INTERACTIVE NAVIGATION TABS (เมนูสลับข้อมูลแบบล้ำๆ)
        ============================================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-8 mb-16">
          <div className="bg-white p-3 rounded-2xl sm:rounded-full shadow-[0_15px_40px_rgba(10,37,64,0.08)] border border-gray-100 flex flex-col sm:flex-row gap-2 justify-between items-center">
            
            <button 
              onClick={() => setActiveTab('vision')}
              className={`w-full sm:w-auto flex-1 py-4 px-6 rounded-xl sm:rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2.5 ${activeTab === 'vision' ? 'bg-gradient-to-r from-[#00249c] to-blue-700 text-white shadow-md scale-[1.02]' : 'text-gray-500 hover:text-[#00249c] hover:bg-slate-50'}`}
            >
              <i className="fas fa-eye text-base"></i> วิสัยทัศน์และค่านิยม
            </button>
            
            <button 
              onClick={() => setActiveTab('ceo')}
              className={`w-full sm:w-auto flex-1 py-4 px-6 rounded-xl sm:rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2.5 ${activeTab === 'ceo' ? 'bg-gradient-to-r from-[#00249c] to-blue-700 text-white shadow-md scale-[1.02]' : 'text-gray-500 hover:text-[#00249c] hover:bg-slate-50'}`}
            >
              <i className="fas fa-quote-left text-base"></i> สารจากผู้บริหาร
            </button>
            
            <button 
              onClick={() => setActiveTab('history')}
              className={`w-full sm:w-auto flex-1 py-4 px-6 rounded-xl sm:rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2.5 ${activeTab === 'history' ? 'bg-gradient-to-r from-[#00249c] to-blue-700 text-white shadow-md scale-[1.02]' : 'text-gray-500 hover:text-[#00249c] hover:bg-slate-50'}`}
            >
              <i className="fas fa-hourglass-half text-base"></i> ประวัติและความเป็นมา
            </button>
            
            <button 
              onClick={() => setActiveTab('structure')}
              className={`w-full sm:w-auto flex-1 py-4 px-6 rounded-xl sm:rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2.5 ${activeTab === 'structure' ? 'bg-gradient-to-r from-[#00249c] to-blue-700 text-white shadow-md scale-[1.02]' : 'text-gray-500 hover:text-[#00249c] hover:bg-slate-50'}`}
            >
              <i className="fas fa-[#structure] fa-sitemap text-base"></i> โครงสร้างองค์กร
            </button>
            
          </div>
        </section>

        {/* ============================================================================
            📄 3. TAB CONTENTS (เนื้อหาแปรเปลี่ยนตามปุ่มที่กด)
        ============================================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          
          {/* 📍 TAB 1: วิสัยทัศน์และค่านิยม (Vision & Values) */}
          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
              <div className="bg-gradient-to-br from-[#0a2540] to-[#00249c] rounded-[2.5rem] p-8 lg:p-12 text-white lg:col-span-1 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div>
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-[#00e5ff] mb-8"><i className="fas fa-bullseye"></i></div>
                  <h3 className="text-sm font-bold text-[#00e5ff] uppercase tracking-wider mb-2">Our Vision</h3>
                  <h4 className="text-3xl font-black mb-6 leading-tight">วิสัยทัศน์องค์กร</h4>
                  <p className="text-gray-300 font-light leading-relaxed text-base">
                    "มุ่งสู่การเป็นผู้นำอันดับหนึ่งด้านการให้บริการโลจิสติกส์และซัพพลายเชนแบบครบวงจร บนเส้นทางยุทธศาสตร์ ไทย - สปป.ลาว ด้วยเทคโนโลยีที่ทันสมัย การบริหารที่โปร่งใส และการเติบโตที่ยั่งยืนร่วมกับพันธมิตร"
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-xl mb-5"><i className="fas fa-handshake"></i></div>
                  <h4 className="font-black text-[#0a2540] text-lg mb-2">ความซื่อสัตย์โปร่งใส (Integrity)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">ดำเนินธุรกิจด้วยความถูกต้อง ตรงไปตรงมา ตรวจสอบสถานะได้จริงในทุกขั้นตอนเพื่อสร้างความมั่นใจสูงสุดให้กับคู่ค้า</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-50 text-[#ff0000] rounded-xl flex items-center justify-center text-xl mb-5"><i className="fas fa-bolt"></i></div>
                  <h4 className="font-black text-[#0a2540] text-lg mb-2">รวดเร็ว ตรงเวลา (Speed & Precision)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">การันตีเวลาจัดส่งด้วยระบบกระจายสินค้าที่แม่นยำ เพราะเราตระหนักดีว่าเวลาคือหัวใจสำคัญที่สุดของธุรกิจคุณ</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl mb-5"><i className="fas fa-microchip"></i></div>
                  <h4 className="font-black text-[#0a2540] text-lg mb-2">นวัตกรรมล้ำสมัย (Innovation)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">พัฒนาและเชื่อมต่อเทคโนโลยีอย่างระบบ GPS, Real-time Tracking และระบบจัดการคลังสินค้า เพื่อประสิทธิภาพสูงสุด</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-5"><i className="fas fa-users-gear"></i></div>
                  <h4 className="font-black text-[#0a2540] text-lg mb-2">พลังแห่งทีมงาน (Synergy)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">ผสานความเชี่ยวชาญของบุคลากรทั้งในฝั่งไทยและ สปป.ลาว ทำงานร่วมกันแบบไร้รอยต่อเพื่อตอบโจทย์ทุกความต้องการ</p>
                </div>
              </div>
            </div>
          )}

          {/* 📍 TAB 2: สารจากผู้บริหาร (CEO Message) */}
          {activeTab === 'ceo' && (
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center animate-fade-in-up">
              <div className="lg:col-span-1 text-center relative">
                {/* กรอบรูปภาพผู้บริหารแบบพรีเมียมหรูหรา */}
                <div className="w-64 h-64 mx-auto rounded-[2rem] bg-gradient-to-tr from-[#0a2540] to-blue-900 border-4 border-white shadow-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" alt="CEO THANA GROUP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-black text-[#0a2540] mb-1">คณะผู้บริหารระดับสูง</h4>
                  <p className="text-sm font-bold text-[#ff0000] uppercase tracking-wider">THANA GROUP Executive Board</p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="text-[#00249c] text-4xl opacity-30"><i className="fas fa-quote-left"></i></div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0a2540] leading-tight">
                  "มุ่งมั่นพัฒนา เพื่อยกระดับโลจิสติกส์อาเซียนให้เป็นหนึ่งเดียว"
                </h3>
                <div className="text-gray-600 space-y-4 font-light text-base leading-relaxed">
                  <p>
                    ยินดีต้อนรับพันธมิตรทางธุรกิจ และลูกค้าทุกท่านด้วยความยินดียิ่ง ตลอดระยะเวลากว่า 20 ปีที่ผ่านมา <strong>THANA GROUP</strong> ได้ทำหน้าที่เป็นสะพานเชื่อมโยงเศรษฐกิจและการจัดส่งสินค้าระหว่างประเทศไทย และ สปป.ลาว ด้วยความซื่อสัตย์ มั่นคง และปลอดภัย
                  </p>
                  <p>
                    ในโลกปัจจุบันที่โครงสร้างธุรกิจหมุนไปอย่างรวดเร็ว โลจิสติกส์ไม่ได้เป็นเพียงแค่การย้ายสิ่งของจากจุดหนึ่งไปยังอีกจุดหนึ่ง แต่คือรากฐานความสำเร็จและข้อได้เปรียบในการแข่งขันของธุรกิจ เราจึงไม่หยุดยั้งที่จะนำนวัตกรรมระบบฐานข้อมูลกลางและกองรถที่ทันสมัยเข้ามาขับเคลื่อนองค์กร
                  </p>
                  <p>
                    เราขอสัญญาว่าจะยังคงรักษามาตรฐานการทำงานระดับสูง ซื่อตรงต่อคำมั่นสัญญา และพร้อมเดินเคียงข้างสนับสนุนธุรกิจของท่านให้เติบโตไปด้วยกันอย่างยั่งยืนครับ
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-800 text-sm">คณะกรรมการบริหารสูงสุด</p>
                    <p className="text-xs text-gray-400">ธนากรุ๊ป โลจิสติกส์ มั่นคง ปลอดภัย ครบวงจร</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 📍 TAB 3: ประวัติและความเป็นมา (Our Journey) */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 animate-fade-in-up">
              <div className="text-center mb-12">
                <h3 className="font-black text-[#0a2540] text-2xl">ประวัติแห่งความภาคภูมิใจ</h3>
                <p className="text-gray-400 text-sm mt-1">เส้นทางความสำเร็จที่หล่อหลอมจากประสบการณ์ยาวนาน</p>
              </div>

              {/* เส้นไทม์ไลน์ประวัติบริษัทแนวตั้งดีไซน์ล้ำสมัย */}
              <div className="relative border-l-2 border-slate-100 ml-4 md:ml-32 space-y-12 pb-4">
                
                {/* Milestone 1 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[45px] md:-left-[153px] top-1 w-24 text-right hidden md:block">
                    <span className="text-2xl font-black text-[#00249c]">ปี 2006</span>
                  </div>
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-blue-100 border-4 border-white"></div>
                  <div>
                    <span className="text-xs font-bold text-[#00249c] md:hidden block mb-1">ปี 2006</span>
                    <h4 className="font-black text-lg text-[#0a2540] mb-2">จุดเริ่มต้นก้าวแรก (Foundation)</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">ก่อตั้งบริษัทเพื่อดำเนินธุรกิจขนส่งสินค้าภายในประเทศ เริ่มสะสมประสบการณ์ และจัดตั้งกองรถบรรทุกพรีเมียมชุดแรก</p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[45px] md:-left-[153px] top-1 w-24 text-right hidden md:block">
                    <span className="text-2xl font-black text-[#00249c]">ปี 2012</span>
                  </div>
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-blue-100 border-4 border-white"></div>
                  <div>
                    <span className="text-xs font-bold text-[#00249c] md:hidden block mb-1">ปี 2012</span>
                    <h4 className="font-black text-lg text-[#0a2540] mb-2">ขยายปีกสู่สากล ไทย - สปป.ลาว</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">เปิดศูนย์กระจายสินค้าชายแดนจังหวัดหนองคาย และขยายสิทธิ์การเดินรถขนส่งข้ามพรมแดนเข้าสู่ นครหลวงเวียงจันทน์ สปป.ลาว อย่างเป็นทางการ</p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[45px] md:-left-[153px] top-1 w-24 text-right hidden md:block">
                    <span className="text-2xl font-black text-[#ff0000]">ปี 2020</span>
                  </div>
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#ff0000] ring-4 ring-red-100 border-4 border-white"></div>
                  <div>
                    <span className="text-xs font-bold text-[#ff0000] md:hidden block mb-1">ปี 2020</span>
                    <h4 className="font-black text-lg text-[#0a2540] mb-2">ก้าวสู่ระบบกลุ่มเครือข่ายครบวงจร (THANA GROUP)</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">รวบรวมบริษัทในเครือข่ายเข้าด้วยกัน เปิดบริการชิปปิ้ง ดำเนินพิธีการศุลกากรแบบเบ็ดเสร็จ และเพิ่มแผนกส่งสินค้าด่วนภายใน 1 วัน</p>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[45px] md:-left-[153px] top-1 w-24 text-right hidden md:block">
                    <span className="text-2xl font-black text-green-600">ปัจจุบัน</span>
                  </div>
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-green-500 ring-4 ring-green-100 border-4 border-white animate-pulse"></div>
                  <div>
                    <span className="text-xs font-bold text-green-600 md:hidden block mb-1">ปัจจุบัน</span>
                    <h4 className="font-black text-lg text-[#0a2540] mb-2">ผู้นำระบบโลจิสติกส์อัจฉริยะ (Digital Logistics Era)</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">ยกระดับสู่ระบบฐานข้อมูลกลาง เชื่อมต่อระบบ Track & Trace ผ่านฐานข้อมูล Neon ตรวจสอบสถานะแบบ Real-time และเริ่มทดสอบรถบรรทุกพลังงานไฟฟ้า (EV Platform)</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 📍 TAB 4: โครงสร้างองค์กร (Corporate Structure) */}
          {activeTab === 'structure' && (
            <div className="space-y-8 animate-fade-in-up">
              
              {/* แผงโครงสร้างจำลองแบบ responsive เฉียบคมน่าเชื่อถือ */}
              <div className="bg-[#0a2540] text-white p-8 rounded-[2rem] text-center shadow-lg">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-1">Ultimate Holding Corporation</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-wide">THANA GROUP HOLDINGS</h3>
                <p className="text-gray-400 text-xs mt-1">คณะกรรมการบริหารและศูนย์ควบคุมการปฏิบัติการกลาง</p>
              </div>

              {/* ลูกศรเชื่อมโยง */}
              <div className="text-center text-gray-300 text-2xl -my-4"><i className="fas fa-arrow-down-long"></i></div>

              {/* แบ่งกลุ่มธุรกิจในเครืออย่างเป็นระบบ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Core Network 1 */}
                <div className="bg-white p-6 rounded-2xl border-t-4 border-[#00249c] shadow-sm text-center">
                  <div className="w-10 h-10 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-lg mx-auto mb-4"><i className="fas fa-truck-moving"></i></div>
                  <h4 className="font-black text-[#0a2540] text-base mb-1">กลุ่มบริการขนส่ง</h4>
                  <p className="text-xs text-gray-400 mb-4">Logistics & Express Fleet</p>
                  <ul className="text-xs text-gray-500 space-y-2 text-left bg-slate-50 p-3 rounded-xl border border-gray-100 font-medium">
                    <li>• ฝ่ายรถขนส่งระหว่างประเทศ (Cross-Border)</li>
                    <li>• ฝ่ายกระจายสินค้าภายในประเทศ (Domestic)</li>
                    <li>• ฝ่ายบริหารคลังสินค้าอัจฉริยะ (WMS)</li>
                  </ul>
                </div>

                {/* Core Network 2 */}
                <div className="bg-white p-6 rounded-2xl border-t-4 border-sky-500 shadow-sm text-center">
                  <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center text-lg mx-auto mb-4"><i className="fas fa-file-signature"></i></div>
                  <h4 className="font-black text-[#0a2540] text-base mb-1">กลุ่มพิธีการศุลกากร</h4>
                  <p className="text-xs text-gray-400 mb-4">Customs & Shipping Brokerage</p>
                  <ul className="text-xs text-gray-500 space-y-2 text-left bg-slate-50 p-3 rounded-xl border border-gray-100 font-medium">
                    <li>• ทีมชิปปิ้งผ่านด่านหนองคาย - เวียงจันทน์</li>
                    <li>• แผนกประสานงานใบอนุญาตและพิกัดภาษี</li>
                    <li>• ศูนย์เอกสารนำเข้า-ส่งออกสากล</li>
                  </ul>
                </div>

                {/* Core Network 3 */}
                <div className="bg-white p-6 rounded-2xl border-t-4 border-amber-500 shadow-sm text-center">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-lg mx-auto mb-4"><i className="fas fa-store"></i></div>
                  <h4 className="font-black text-[#0a2540] text-base mb-1">กลุ่มการค้าและธุรกิจพิเศษ</h4>
                  <p className="text-xs text-gray-400 mb-4">Trading & Lifestyle Ventures</p>
                  <ul className="text-xs text-gray-500 space-y-2 text-left bg-slate-50 p-3 rounded-xl border border-gray-100 font-medium">
                    <li>• ฝ่ายจัดหาและจำหน่ายสินค้าอุปโภคบริโภค</li>
                    <li>• แผนกรับสั่งและนำเข้าพัสดุออนไลน์ข้ามแดน</li>
                    <li>• ธุรกิจไลฟ์สไตล์ในเครือ (CC1971 Cafe)</li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </section>

      </main>

      <Footer />
    </>
  );
}