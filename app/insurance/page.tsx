'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ============================================================================
// 📊 Data Structure: ข้อมูลเงื่อนไขการรับประกัน (รองรับไฟล์รูปภาพและ PDF)
// 📍 วิธีแก้ไข: เปลี่ยนลิงก์ imageUrl เป็นไฟล์รูปที่กราฟิกทำไว้ (เช่น /insurance-th.jpg)
// ============================================================================
const insuranceConditions = [
  {
    id: 'lang-th',
    language: 'ภาษาไทย (TH)',
    icon: 'fa-language',
    title: 'เงื่อนไขการรับประกันสินค้าและข้อตกลงการขนส่ง',
    description: 'โปรดอ่านและทำความเข้าใจเงื่อนไขความคุ้มครอง ข้อยกเว้น และขั้นตอนการเรียกร้องค่าสินไหมทดแทน',
    lastUpdate: '1 กรกฎาคม 2569',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/00249c?text=พื้นที่สำหรับใส่รูปภาพเงื่อนไขการประกัน\n(ภาษาไทย)',
    pdfUrl: '/insurance-terms-th.pdf',
    downloadBtn: 'ดาวน์โหลดเงื่อนไข (PDF)',
    ctaTitle: 'ต้องการสอบถามรายละเอียดการทำประกันภัยเพิ่มเติม?'
  },
  {
    id: 'lang-la',
    language: 'ພາສາລາວ (LA)',
    icon: 'fa-language',
    title: 'ເງື່ອນໄຂການຮັບປະກັນສິນຄ້າ ແລະ ຂໍ້ຕົກລົງການຂົນສົ່ງ',
    description: 'ກະລຸນາອ່ານ ແລະ ເຮັດຄວາມເຂົ້າໃຈເງື່ອນໄຂຄວາມຄຸ້ມຄອງ, ຂ້ອຍົກເວັ້ນ ແລະ ຂັ້ນຕອນການຮຽກຮ້ອງຄ່າຊົດເຊີຍ',
    lastUpdate: '1 ກໍລະກົດ 2569',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/ef4444?text=พื้นที่สำหรับใส่รูปภาพเงื่อนไขการประกัน\n(ພາສາລາວ)',
    pdfUrl: '/insurance-terms-la.pdf',
    downloadBtn: 'ດາວໂຫຼດເງື່ອນໄຂ (PDF)',
    ctaTitle: 'ຕ້ອງການສອບຖາມລາຍລະອຽດການເຮັດປະກັນໄພເພີ່ມເຕີມ?'
  }
];

export default function InsuranceConditionsPage() {
  const [activeLang, setActiveLang] = useState(0);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#00249c]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              Cargo Insurance Policy
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              เงื่อนไขการประกันสินค้า
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              นโยบายความคุ้มครองสินค้าและข้อกำหนดในการให้บริการขนส่ง <br className="hidden md:block" />
              เพื่อความมั่นใจและโปร่งใสในการดำเนินธุรกิจร่วมกัน
            </p>
          </div>
        </section>

        {/* =========================================
            2. INSURANCE IMAGE TAB SECTION
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-slide-up">
            
            {/* 2.1 Tab Navigation (Language Selector) */}
            <div className="flex border-b border-gray-200">
              {insuranceConditions.map((lang, index) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(index)}
                  className={`flex-1 py-4 px-6 text-center transition-all duration-300 relative ${
                    activeLang === index 
                      ? 'bg-white' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-500'
                  }`}
                >
                  {/* แถบสีด้านบน */}
                  {activeLang === index && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#00249c]"></div>
                  )}
                  
                  <div className={`font-bold text-lg ${activeLang === index ? 'text-[#00249c]' : 'text-gray-500'}`}>
                    {lang.language}
                  </div>
                </button>
              ))}
            </div>

            {/* 2.2 Content Area (รูปภาพ) */}
            <div className="p-6 md:p-10">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-l-4 border-[#0a2540] pl-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540] mb-1">
                    {insuranceConditions[activeLang].title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {insuranceConditions[activeLang].description}
                  </p>
                </div>
                
                {/* Download PDF Button */}
                <a 
                  href={insuranceConditions[activeLang].pdfUrl}
                  download
                  className="shrink-0 bg-red-50 hover:bg-[#ff0000] text-[#ff0000] hover:text-white border border-red-100 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm flex items-center gap-2 shadow-sm"
                >
                  <i className="fas fa-file-pdf"></i> {insuranceConditions[activeLang].downloadBtn}
                </a>
              </div>

              {/* พื้นที่สำหรับแปะรูปภาพเงื่อนไขการประกัน */}
              <div 
                key={activeLang} 
                className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 animate-fade-in group"
              >
                {/* คำแนะนำให้ซูมดูบนมือถือ */}
                <div className="md:hidden bg-[#00249c] text-white text-xs text-center py-2.5 font-bold tracking-wide">
                  <i className="fas fa-search-plus mr-1 text-[#00e5ff]"></i> แตะที่รูปเพื่อขยาย / เลื่อนดูรายละเอียด
                </div>

                {/* 
                   🖼️ ส่วนนี้คือจุดที่แสดงรูปภาพ
                   ดึงข้อมูล imageUrl มาจากตัวแปรด้านบน 
                */}
                <div className="overflow-x-auto w-full">
                  <img 
                    src={insuranceConditions[activeLang].imageUrl} 
                    alt={`เงื่อนไขการประกัน ${insuranceConditions[activeLang].language}`} 
                    className="w-full h-auto min-w-[600px] object-cover mx-auto"
                  />
                </div>
              </div>

            </div>
            
            {/* Information Note */}
            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 flex items-start gap-2">
                <i className="fas fa-info-circle text-[#0a2540] mt-1"></i>
                อัปเดตข้อมูลล่าสุดเมื่อ: {insuranceConditions[activeLang].lastUpdate} (บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า)
              </p>
            </div>

          </div>
        </section>

        {/* =========================================
            3. CALL TO ACTION (ปรึกษาเรื่องประกัน)
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-[#0a2540] to-[#1e3a8a] rounded-3xl p-8 text-center shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1e40af]/30">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl"></div>
            
            <div className="text-left relative z-10 md:w-2/3">
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                {insuranceConditions[activeLang].ctaTitle}
              </h3>
              <p className="text-blue-200 text-sm">
                ทีมงานของเราพร้อมให้คำแนะนำในการเลือกแผนประกันภัย (All Risks) ที่ครอบคลุมและเหมาะสมกับประเภทสินค้าของคุณที่สุด
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto shrink-0 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="w-full sm:w-auto bg-[#00e5ff] hover:bg-cyan-400 text-[#0a2540] font-black py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="fas fa-shield-alt"></i> ติดต่อที่ปรึกษา
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}