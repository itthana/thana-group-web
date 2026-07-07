'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ============================================================================
// 📊 Data Structure: ข้อมูลสินค้าต้องห้าม (รองรับไฟล์รูปภาพและ PDF)
// 📍 วิธีแก้ไข: นำไฟล์รูปจากกราฟิกไปใส่ใน public แล้วเปลี่ยนชื่อไฟล์ตรง imageUrl
// ============================================================================
const prohibitedItemsData = [
  {
    id: 'banned',
    tabName: 'สินค้าต้องห้ามเด็ดขาด',
    icon: 'fa-ban',
    color: 'bg-red-600',
    textColor: 'text-red-600',
    title: 'รายการสินค้าต้องห้ามจัดส่งทุกกรณี (Strictly Prohibited Items)',
    description: 'สินค้าที่ผิดกฎหมายของประเทศไทย และ สปป.ลาว รวมถึงสิ่งของที่เป็นอันตรายต่อตัวรถและทรัพย์สินอื่นในระหว่างการขนส่ง',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/ff0000?text=พื้นที่สำหรับใส่รูปภาพ\nสินค้าต้องห้ามเด็ดขาด',
    pdfUrl: '/prohibited-items-list.pdf'
  },
  {
    id: 'restricted',
    tabName: 'สินค้าควบคุม/ต้องมีใบอนุญาต',
    icon: 'fa-file-shield',
    color: 'bg-amber-500',
    textColor: 'text-amber-500',
    title: 'รายการสินค้าควบคุมที่ต้องมีใบอนุญาต (Restricted Items)',
    description: 'สินค้าที่สามารถจัดส่งได้ แต่ผู้ส่งหรือผู้รับต้องยื่นเอกสาร/ใบอนุญาตจากหน่วยงานราชการที่เกี่ยวข้องก่อนทำการผ่านพิธีการศุลกากร',
    imageUrl: 'https://placehold.co/1200x1600/f8fafc/f59e0b?text=พื้นที่สำหรับใส่รูปภาพ\nสินค้าควบคุมที่ต้องมีใบอนุญาต',
    pdfUrl: '/restricted-items-list.pdf'
  }
];

export default function ProhibitedItemsPage() {
  const [activeTab, setActiveTab] = useState(0);

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
              Shipping Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              สินค้าต้องห้ามและสินค้าควบคุม
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              แนวทางปฏิบัติเพื่อความปลอดภัยในการขนส่งข้ามแดน <br className="hidden md:block" />
              โปรดตรวจสอบประเภทสินค้าของท่านก่อนทำการส่ง เพื่อหลีกเลี่ยงการถูกกักหรือยึดสินค้า ณ ด่านศุลกากร
            </p>
          </div>
        </section>

        {/* =========================================
            2. INTERACTIVE IMAGE CONTAINER (TAB SYSTEM)
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-slide-up">
            
            {/* 2.1 แถบปุ่มกดสลับหน้า (Tabs) */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              {prohibitedItemsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-5 px-6 text-center transition-all duration-300 relative flex items-center justify-center gap-2 ${
                    activeTab === index 
                      ? 'bg-white' 
                      : 'hover:bg-gray-100/50 opacity-70'
                  }`}
                >
                  {/* แถบสีไฮไลต์ด้านบน */}
                  {activeTab === index && (
                    <div className={`absolute top-0 left-0 w-full h-1 ${tab.color}`}></div>
                  )}
                  
                  <i className={`fas ${tab.icon} text-lg ${activeTab === index ? tab.textColor : 'text-gray-400'}`}></i>
                  <span className={`font-bold text-sm md:text-base ${activeTab === index ? 'text-[#0a2540]' : 'text-gray-500'}`}>
                    {tab.tabName}
                  </span>
                </button>
              ))}
            </div>

            {/* 2.2 Content Area (แสดงรูปภาพกราฟิก) */}
            <div className="p-6 md:p-10">
              
              {/* รายละเอียดหัวข้อ */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-l-4 border-[#0a2540] pl-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540] mb-1">
                    {prohibitedItemsData[activeTab].title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-3xl">
                    {prohibitedItemsData[activeTab].description}
                  </p>
                </div>
                
                {/* ปุ่มโหลดไฟล์เอกสารรายชื่อสินค้าแบบละเอียด */}
                <a 
                  href={prohibitedItemsData[activeTab].pdfUrl}
                  download
                  className="shrink-0 bg-gray-50 hover:bg-[#00249c] text-[#00249c] hover:text-white border border-gray-200 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm flex items-center gap-2 shadow-sm"
                >
                  <i className="fas fa-file-pdf"></i> ดาวน์โหลดรายชื่อ (PDF)
                </a>
              </div>

              {/* บล็อกวางรูปภาพ */}
              <div 
                key={activeTab} 
                className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 animate-fade-in group"
              >
                {/* ดักมือถือให้เลื่อนซ้ายขวาได้ */}
                <div className="md:hidden bg-[#0a2540] text-white text-xs text-center py-2.5 font-bold tracking-wide">
                  <i className="fas fa-search-plus mr-1 text-[#00e5ff]"></i> แตะที่รูปเพื่อขยายซูมดูรายละเอียด
                </div>

                {/* รูปภาพที่ดึงมาจากข้อมูลด้านบน */}
                <div className="overflow-x-auto w-full">
                  <img 
                    src={prohibitedItemsData[activeTab].imageUrl} 
                    alt={prohibitedItemsData[activeTab].tabName} 
                    className="w-full h-auto min-w-[600px] object-cover mx-auto"
                  />
                </div>
              </div>

            </div>

            {/* คำเตือนและข้อกำหนดส่วนกลาง */}
            <div className="bg-red-50/50 p-6 md:p-8 border-t border-red-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-lg">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-900 mb-2">บทลงโทษและขอบเขตความรับผิดชอบ (Compliance Notice)</h4>
                <p className="text-xs text-red-700 leading-relaxed">
                  หากพบการลักลอบจัดส่งสิ่งของต้องห้ามเด็ดขาด บริษัทฯ จะปฏิเสธการรับผิดชอบความเสียหายทุกกรณี และจะส่งมอบข้อมูลให้แก่เจ้าหน้าที่ตำรวจหรือเจ้าหน้าที่ศุลกากรเพื่อดำเนินคดีตามกฎหมายทันที นอกจากนี้ ผู้ส่งสินค้าจะต้องเป็นผู้รับผิดชอบค่าปรับและค่าเสียหายทั้งหมดที่เกิดขึ้นต่อยานพาหนะและสินค้าชิ้นอื่นในตู้คอนเทนเนอร์
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            3. CALL TO ACTION (ปรึกษาชิปปิ้ง/ผู้เชี่ยวชาญ)
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-[#00249c] to-[#0a2540] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <i className="fas fa-headset"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                ไม่แน่ใจว่าสินค้าของคุณ จัดส่งได้หรือไม่?
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto font-light">
                สินค้าบางประเภท เช่น สารเคมี, วัตถุเจือปนอาหาร หรืออุปกรณ์อิเล็กทรอนิกส์ จำเป็นต้องได้รับการประเมินจากผู้เชี่ยวชาญด้านศุลกากรข้ามแดน (TSP/TLT Shipping Team)
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base">
                  <i className="fas fa-shield-halved"></i> ตรวจสอบกับเจ้าหน้าที่ชิปปิ้ง
                </Link>
                <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="bg-[#00c300] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base">
                  <i className="fab fa-line text-xl"></i> สอบถามด่วนผ่าน LINE
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