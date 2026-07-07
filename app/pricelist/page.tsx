'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// หมายเหตุ: ลบ export const metadata ออกเมื่อใช้ 'use client' 
// (ถ้าต้องการทำ SEO แนะนำให้ย้าย metadata ไปไว้ใน layout.tsx ของโฟลเดอร์นี้แทนครับ)

// ============================================================================
// 📊 Data Structure: ข้อมูลเขตพื้นที่บริการ (Zones)
// 📍 วิธีแก้ไข: เปลี่ยนลิงก์ imageUrl เป็นไฟล์รูปตารางราคาของแต่ละเขตได้เลย
// ============================================================================
const priceZones = [
  {
    id: 'zone-1',
    name: 'เขต 1',
    route: 'อุบลราชธานี - ปากเซ',
    description: 'ศูนย์กลางขนส่งสินค้าข้ามแดน เชื่อมต่ออีสานตอนล่างสู่ตอนใต้ของ สปป.ลาว',
    icon: 'fa-map-location-dot',
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/00249c?text=Price+List+Zone+1\n(Ubon-Pakse)',
    pdfUrl: '/pricelist-zone1.pdf'
  },
  {
    id: 'zone-2',
    name: 'เขต 2',
    route: 'มุกดาหาร - สะหวันนะเขต',
    description: 'เส้นทางระเบียงเศรษฐกิจตะวันออก-ตะวันตก (EWEC) สะดวกรวดเร็ว',
    icon: 'fa-bridge',
    color: 'bg-red-600',
    textColor: 'text-red-600',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/ff0000?text=Price+List+Zone+2\n(Mukdahan-Savannakhet)',
    pdfUrl: '/pricelist-zone2.pdf'
  },
  {
    id: 'zone-3',
    name: 'เขต 3',
    route: 'หนองคาย - เวียงจันทน์',
    description: 'ประตูสู่เมืองหลวง ศูนย์กลางกระจายสินค้าหลัก และจุดเชื่อมต่อรถไฟลาว-จีน',
    icon: 'fa-train-tram',
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/10b981?text=Price+List+Zone+3\n(NongKhai-Vientiane)',
    pdfUrl: '/pricelist-zone3.pdf'
  },
  {
    id: 'zone-4',
    name: 'เขต 4',
    route: 'เพชรเกษม กทม.',
    description: 'ศูนย์กระจายสินค้าส่วนกลาง รับ-ส่งสินค้าระดับประเทศและระหว่างประเทศ',
    icon: 'fa-building',
    color: 'bg-amber-500',
    textColor: 'text-amber-500',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/f59e0b?text=Price+List+Zone+4\n(Phetkasem-BKK)',
    pdfUrl: '/pricelist-zone4.pdf'
  }
];

export default function PricelistPage() {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#00249c]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              Standard Rates
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              อัตราค่าบริการขนส่ง
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              โปร่งใส คุ้มค่า ครอบคลุมทุกจุดยุทธศาสตร์ <br className="hidden md:block" />
              ตรวจสอบอัตราค่าบริการมาตรฐาน แบ่งตามเขตพื้นที่ให้บริการของเรา
            </p>
          </div>
        </section>

        {/* =========================================
            2. PRICELIST TABS & IMAGE SECTION
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-slide-up">
            
            {/* 2.1 Tab Navigation */}
            <div className="flex overflow-x-auto hide-scrollbar bg-gray-50 border-b border-gray-200">
              {priceZones.map((zone, index) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(index)}
                  className={`flex-1 min-w-[200px] py-4 px-6 text-center transition-all duration-300 relative ${
                    activeZone === index 
                      ? 'bg-white' 
                      : 'hover:bg-gray-100/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* แถบสีด้านบนของ Tab ที่ถูกเลือก */}
                  {activeZone === index && (
                    <div className={`absolute top-0 left-0 w-full h-1 ${zone.color}`}></div>
                  )}
                  
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${activeZone === index ? zone.textColor : 'text-gray-400'}`}>
                    <i className={`fas ${zone.icon} mr-1`}></i> {zone.name}
                  </div>
                  <div className={`font-bold ${activeZone === index ? 'text-[#0a2540] text-base' : 'text-gray-600 text-sm'}`}>
                    {zone.route}
                  </div>
                </button>
              ))}
            </div>

            {/* 2.2 Active Content (เปลี่ยนตาม Tab ที่กด) */}
            <div className="p-6 md:p-10">
              
              {/* Header ของเนื้อหาที่ถูกเลือก */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-l-4 border-[#0a2540] pl-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540]">
                    ตารางราคา {priceZones[activeZone].name}: <span className={priceZones[activeZone].textColor}>{priceZones[activeZone].route}</span>
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {priceZones[activeZone].description}
                  </p>
                </div>
                
                {/* ปุ่มโหลด PDF ของแต่ละเขต */}
                <a 
                  href={priceZones[activeZone].pdfUrl}
                  download
                  className="shrink-0 bg-white hover:bg-gray-50 text-[#00249c] border border-gray-200 font-bold py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2 shadow-sm"
                >
                  <i className="fas fa-download"></i> โหลด PDF
                </a>
              </div>

              {/* พื้นที่แสดงรูปภาพ */}
              <div 
                key={activeZone} // ใส่ key เพื่อให้เกิดแอนิเมชันตอนสลับ Tab
                className="relative w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 animate-fade-in"
              >
                {/* คำแนะนำบนมือถือ */}
                <div className="md:hidden bg-[#0a2540] text-white text-xs text-center py-2.5 font-bold tracking-wide">
                  <i className="fas fa-search-plus mr-1 text-[#00e5ff]"></i> แตะที่รูปเพื่อขยายซูมดูรายละเอียด
                </div>

                {/* 🖼️ รูปภาพตารางราคา (ดึง URL จาก Data Structure ด้านบน) */}
                <div className="overflow-x-auto w-full">
                  <img 
                    src={priceZones[activeZone].imageUrl} 
                    alt={`ตารางราคา ${priceZones[activeZone].route}`} 
                    className="w-full h-auto min-w-[600px] object-cover mx-auto"
                  />
                </div>
              </div>

            </div>

            {/* ข้อกำหนดและเงื่อนไขส่วนกลาง */}
            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-[#0a2540] mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-[#ff0000]"></i> หมายเหตุและเงื่อนไขการให้บริการ (Terms & Conditions)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                <div className="flex gap-2"><i className="fas fa-check text-green-500 mt-1"></i> <span>ราคายังไม่รวมภาษีมูลค่าเพิ่ม (VAT 7%) และค่าธรรมเนียมน้ำมัน (FSC)</span></div>
                <div className="flex gap-2"><i className="fas fa-check text-green-500 mt-1"></i> <span>สินค้าอันตราย (DG) หรือสินค้าควบคุมอุณหภูมิ มีค่าใช้จ่ายเพิ่มเติม</span></div>
                <div className="flex gap-2"><i className="fas fa-check text-green-500 mt-1"></i> <span>ระยะเวลาขนส่งอาจเปลี่ยนแปลงตามสภาพการจราจรและด่านพรมแดน</span></div>
                <div className="flex gap-2"><i className="fas fa-check text-green-500 mt-1"></i> <span>บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาโดยไม่ต้องแจ้งล่วงหน้า</span></div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            3. CALL TO ACTION (ติดต่อเซลล์เพื่อขอราคาพิเศษ)
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-[#00249c] to-[#0a2540] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff0000] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <i className="fas fa-handshake"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                ต้องการราคาพิเศษ สำหรับลูกค้าองค์กร?
              </h2>
              <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto">
                หากคุณมีปริมาณการขนส่งประจำ (Volume) หรืองานโปรเจกต์ขนาดใหญ่ 
                ทีมที่ปรึกษาด้านการขายของเรายินดีนำเสนอ <span className="text-[#00e5ff] font-bold">"ราคาพิเศษและเงื่อนไขที่ดีที่สุด"</span> สำหรับธุรกิจคุณโดยเฉพาะ
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/sales" className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <i className="fas fa-users"></i> ติดต่อทีมที่ปรึกษาการขาย
                </Link>
                <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="bg-[#00c300] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <i className="fab fa-line text-xl"></i> แชทผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}