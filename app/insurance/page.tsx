'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ============================================================================
// 📊 Data Structure: เงื่อนไขการประกัน (ภาษาไทย และ ภาษาลาว)
// ============================================================================
const insuranceConditions = [
  {
    id: 'lang-th',
    language: 'ภาษาไทย (TH)',
    icon: 'fa-language',
    title: 'เงื่อนไขการรับประกันสินค้า (Terms and Conditions of Cargo Insurance)',
    lastUpdate: '1 กรกฎาคม 2569',
    sections: [
      {
        header: '1. ความคุ้มครองเบื้องต้น (Basic Coverage)',
        content: 'บริษัท THANA GROUP ให้ความคุ้มครองความเสียหายหรือสูญหายของสินค้า ที่เกิดจากอุบัติเหตุระหว่างการขนส่งโดยยานพาหนะของบริษัทฯ ตามมูลค่าจริงของสินค้า แต่ไม่เกินวงเงินประกันพื้นฐานที่ระบุไว้ในใบเสนอราคา หรือใบรับจัดการขนส่ง (Waybill)'
      },
      {
        header: '2. ข้อยกเว้นความคุ้มครอง (Exclusions)',
        content: 'บริษัทฯ ขอสงวนสิทธิ์ไม่รับผิดชอบต่อความเสียหายในกรณีดังต่อไปนี้:\n• การบรรจุหีบห่อที่ไม่เหมาะสม หรือไม่แข็งแรงเพียงพอต่อการขนส่งโดยผู้ส่ง (Improper Packing)\n• ความเสื่อมสภาพตามธรรมชาติของสินค้า (Inherent Vice) เช่น สินค้าเน่าเสียตามกาลเวลา\n• เหตุสุดวิสัย (Force Majeure) เช่น ภัยธรรมชาติ สงคราม การจลาจล การนัดหยุดงาน\n• การยึดหรืออายัดโดยเจ้าหน้าที่รัฐ หรือกรมศุลกากร จากการสำแดงเอกสารเท็จ'
      },
      {
        header: '3. ขั้นตอนการเรียกร้องค่าสินไหมทดแทน (Claim Procedure)',
        content: 'เมื่อพบว่าสินค้าชำรุดหรือสูญหาย ผู้รับสินค้าต้องปฏิบัติดังนี้:\n1. ถ่ายภาพหรือวิดีโอสภาพสินค้าและบรรจุภัณฑ์ "ก่อนและขณะแกะกล่อง" เพื่อเป็นหลักฐาน\n2. ระบุความเสียหายลงในเอกสารรับสินค้า (Proof of Delivery) ทันที\n3. แจ้งฝ่ายบริการลูกค้า (Customer Service) และยื่นเอกสารเรียกร้องค่าเสียหาย ภายใน 7 วันทำการ นับจากวันที่ได้รับสินค้า\n4. ระยะเวลาพิจารณาและดำเนินการชดเชย จะใช้เวลาประมาณ 15-30 วันทำการ หลังจากเอกสารครบถ้วน'
      },
      {
        header: '4. การซื้อประกันภัยเพิ่มเติม (All Risks Cargo Insurance)',
        content: 'สำหรับสินค้าที่มีมูลค่าสูง สินค้าเปราะบาง หรือสินค้าเทคโนโลยี บริษัทฯ ขอแนะนำให้ลูกค้าซื้อ "ประกันภัยความเสี่ยงภัยทุกชนิด (All Risks)" เพิ่มเติม ผ่านบริษัทประกันภัยพันธมิตรของเรา (เช่น Zurich, SCG Logistics Insurance) เพื่อความคุ้มครองที่ครอบคลุมถึง 100% ของมูลค่าสินค้า (Invoice Value)'
      }
    ],
    ctaTitle: 'ต้องการสอบถามรายละเอียดการทำประกันภัยเพิ่มเติม?',
    downloadBtn: 'ดาวน์โหลดเงื่อนไข (PDF)',
    pdfUrl: '/insurance-terms-th.pdf'
  },
  {
    id: 'lang-la',
    language: 'ພາສາລາວ (LA)',
    icon: 'fa-language',
    title: 'ເງື່ອນໄຂການຮັບປະກັນສິນຄ້າ (Terms and Conditions of Cargo Insurance)',
    lastUpdate: '1 ກໍລະກົດ 2569',
    sections: [
      {
        header: '1. ຄວາມຄຸ້ມຄອງເບື້ອງຕົ້ນ (Basic Coverage)',
        content: 'ບໍລິສັດ THANA GROUP ໃຫ້ຄວາມຄຸ້ມຄອງຄວາມເສຍຫາຍ ຫຼື ສູນຫາຍຂອງສິນຄ້າ ທີ່ເກີດຈາກອຸບັດຕິເຫດລະຫວ່າງການຂົນສົ່ງໂດຍຍານພາຫະນະຂອງບໍລິສັດ ອີງຕາມມູນຄ່າຕົວຈິງຂອງສິນຄ້າ ແຕ່ບໍ່ເກີນວົງເງິນປະກັນພື້ນຖານທີ່ລະບຸໄວ້ໃນໃບສະເໜີລາຄາ ຫຼື ໃບຮັບຈັດການຂົນສົ່ງ (Waybill).'
      },
      {
        header: '2. ຂ້ອຍົກເວັ້ນຄວາມຄຸ້ມຄອງ (Exclusions)',
        content: 'ບໍລິສັດ ຂໍສະຫງວນສິດບໍ່ຮັບຜິດຊອບຕໍ່ຄວາມເສຍຫາຍໃນກໍລະນີດັ່ງຕໍ່ໄປນີ້:\n• ການຫຸ້ມຫໍ່ທີ່ບໍ່ເໝາະສົມ ຫຼື ບໍ່ແໜ້ນໜາພຽງພໍຕໍ່ການຂົນສົ່ງໂດຍຜູ້ສົ່ງ (Improper Packing).\n• ຄວາມເສື່ອມສະພາບຕາມທຳມະຊາດຂອງສິນຄ້າ (Inherent Vice) ເຊັ່ນ ສິນຄ້າເນົ່າເສຍຕາມການເວລາ.\n• ເຫດສຸດວິໄສ (Force Majeure) ເຊັ່ນ ໄພທຳມະຊາດ, ສົງຄາມ, ການກໍ່ການຮ້າຍ, ການນັດຢຸດງານ.\n• ການຍຶດ ຫຼື ອາຍັດໂດຍເຈົ້າໜ້າທີ່ລັດ ຫຼື ກົມພາສີ ຈາກການແຈ້ງເອກະສານເທັດ.'
      },
      {
        header: '3. ຂັ້ນຕອນການຮຽກຮ້ອງຄ່າຊົດເຊີຍ (Claim Procedure)',
        content: 'ເມື່ອພົບວ່າສິນຄ້າເປ່ເພ ຫຼື ສູນຫາຍ ຜູ້ຮັບສິນຄ້າຕ້ອງປະຕິບັດດັ່ງນີ້:\n1. ຖ່າຍຮູບ ຫຼື ວິດີໂອສະພາບສິນຄ້າ ແລະ ກ່ອງບັນຈຸ "ກ່ອນ ແລະ ຂະນະແກະກ່ອງ" ເພື່ອເປັນຫຼັກຖານ.\n2. ລະບຸຄວາມເສຍຫາຍລົງໃນເອກະສານຮັບສິນຄ້າ (Proof of Delivery) ທັນທີ.\n3. ແຈ້ງຝ່າຍບໍລິການລູກຄ້າ (Customer Service) ແລະ ຍື່ນເອກະສານຮຽກຮ້ອງຄ່າເສຍຫາຍ ພາຍໃນ 7 ວັນລັດຖະການ ນັບຈາກມື້ທີ່ໄດ້ຮັບສິນຄ້າ.\n4. ໄລຍະເວລາພິຈາລະນາ ແລະ ດຳເນີນການຊົດເຊີຍ ຈະໃຊ້ເວລາປະມານ 15-30 ວັນລັດຖະການ ຫຼັງຈາກເອກະສານຄົບຖ້ວນ.'
      },
      {
        header: '4. ການຊື້ປະກັນໄພເພີ່ມເຕີມ (All Risks Cargo Insurance)',
        content: 'ສຳລັບສິນຄ້າທີ່ມີມູນຄ່າສູງ, ສິນຄ້າແຕກຫັກງ່າຍ ຫຼື ສິນຄ້າເທັກໂນໂລຢີ ບໍລິສັດ ຂໍແນະນຳໃຫ້ລູກຄ້າຊື້ "ປະກັນໄພຄວາມສ່ຽງໄພທຸກຊະນິດ (All Risks)" ເພີ່ມເຕີມ ຜ່ານບໍລິສັດປະກັນໄພພັນທະມິດຂອງພວກເຮົາ ເພື່ອຄວາມຄຸ້ມຄອງທີ່ກວມເອົາເຖິງ 100% ຂອງມູນຄ່າສິນຄ້າ (Invoice Value).'
      }
    ],
    ctaTitle: 'ຕ້ອງການສອບຖາມລາຍລະອຽດການເຮັດປະກັນໄພເພີ່ມເຕີມ?',
    downloadBtn: 'ດາວໂຫຼດເງື່ອນໄຂ (PDF)',
    pdfUrl: '/insurance-terms-la.pdf'
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
            2. INSURANCE TERMS (TAB SYSTEM)
        ========================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
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

            {/* 2.2 Content Area */}
            <div className="p-6 md:p-10 min-h-[500px]">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540] mb-1">
                    {insuranceConditions[activeLang].title}
                  </h2>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <i className="far fa-clock"></i> อัปเดตล่าสุด: {insuranceConditions[activeLang].lastUpdate}
                  </p>
                </div>
                
                {/* Download Button */}
                <a 
                  href={insuranceConditions[activeLang].pdfUrl}
                  download
                  className="shrink-0 bg-red-50 hover:bg-[#ff0000] text-[#ff0000] hover:text-white border border-red-100 font-bold py-2.5 px-5 rounded-xl transition-colors text-sm flex items-center gap-2 shadow-sm"
                >
                  <i className="fas fa-file-pdf"></i> {insuranceConditions[activeLang].downloadBtn}
                </a>
              </div>

              {/* Policy Sections (Loop แสดงข้อความ) */}
              <div 
                key={activeLang} 
                className="space-y-8 animate-fade-in"
              >
                {insuranceConditions[activeLang].sections.map((section, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="text-lg font-bold text-[#00249c] mb-3">
                      {section.header}
                    </h3>
                    <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            3. CALL TO ACTION (ปรึกษาเรื่องประกัน)
        ========================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-[#0a2540] to-[#1e3a8a] rounded-3xl p-8 text-center shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1e40af]/30">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
            
            <div className="text-left relative z-10 md:w-2/3">
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                {insuranceConditions[activeLang].ctaTitle}
              </h3>
              <p className="text-blue-200 text-sm">
                ทีมงานของเราพร้อมให้คำแนะนำในการเลือกแผนประกันภัย (All Risks) ที่ครอบคลุมและเหมาะสมกับประเภทสินค้าของคุณที่สุด
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto shrink-0">
              <Link href="/contact" className="w-full bg-[#00e5ff] hover:bg-cyan-400 text-[#0a2540] font-black py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] flex items-center justify-center gap-2">
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