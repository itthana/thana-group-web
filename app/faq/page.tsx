'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function FaqPage() {
  // สร้าง State สำหรับจดจำว่าคำถามข้อไหนกำลังถูกเปิดอยู่ (null = ปิดหมด)
  const [openIndex, setOpenIndex] = useState<number | null>(0); // เปิดข้อแรกไว้เป็นค่าเริ่มต้น

  // ฟังก์ชันสลับการเปิด/ปิด
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // หมวดหมู่และข้อมูลคำถาม (Clean Code: แยก Data ออกจาก UI)
  const faqs = [
    {
      category: 'การติดตามสถานะสินค้า (Tracking)',
      questions: [
        {
          q: 'ฉันสามารถตรวจสอบสถานะสินค้าได้อย่างไร?',
          a: 'คุณสามารถนำหมายเลข Tracking Number หรือ B/L Number ที่ได้รับจากเจ้าหน้าที่ ไปกรอกในช่อง "ตรวจสอบสถานะสินค้า (Track & Trace)" ที่หน้าแรกของเว็บไซต์ ระบบจะแสดงสถานะแบบ Real-time ตลอด 24 ชั่วโมงครับ'
        },
        {
          q: 'สถานะไม่ชี้แจงความคืบหน้า หรือระบบแจ้งว่า "ไม่พบข้อมูล" ต้องทำอย่างไร?',
          a: 'หากพึ่งทำการส่งสินค้าเข้าระบบ อาจใช้เวลา 1-2 ชั่วโมงในการอัปเดตข้อมูลเบื้องต้น หากเกิน 24 ชั่วโมงแล้วยังไม่พบข้อมูล กรุณาติดต่อฝ่าย Customer Service ที่เบอร์ 02-123-4567 ครับ'
        }
      ]
    },
    {
      category: 'บริการขนส่งและชิปปิ้ง',
      questions: [
        {
          q: 'ให้บริการขนส่งสินค้าประเภทใดบ้าง?',
          a: 'เรารองรับการขนส่งสินค้าทั่วไป (General Cargo), สินค้าควบคุมอุณหภูมิ, เครื่องจักรขนาดใหญ่ และสินค้าอันตรายบางประเภท (โปรดสอบถามเจ้าหน้าที่เพื่อตรวจสอบเงื่อนไขเพิ่มเติม)'
        },
        {
          q: 'ระยะเวลาขนส่งข้ามแดน ไทย-ลาว ใช้เวลากี่วัน?',
          a: 'สำหรับการขนส่งแบบด่วน (Express) จะใช้เวลาเพียง 1-2 วันทำการนับจากวันที่รถออกจากต้นทาง (ไม่รวมเวลาในการเดินพิธีการศุลกากรซึ่งอาจแตกต่างกันไปตามประเภทสินค้า)'
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Help Center</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">คำถามที่พบบ่อย (FAQ)</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              รวบรวมคำตอบสำหรับทุกข้อสงสัย เพื่อให้การใช้บริการของคุณราบรื่นที่สุด
            </p>
          </div>

          {/* FAQ Accordion Section */}
          <div className="space-y-10">
            {faqs.map((group, groupIndex) => (
              <div key={groupIndex} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 100}ms` }}>
                <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3 border-b border-gray-200 pb-3">
                  <i className="fas fa-folder-open text-thana-red"></i> {group.category}
                </h2>
                
                <div className="space-y-4">
                  {group.questions.map((item, qIndex) => {
                    // คำนวณ Index รวมเพื่อให้เปิดปิดแยกกันได้อย่างถูกต้อง
                    const globalIndex = groupIndex * 100 + qIndex; 
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div 
                        key={qIndex} 
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-thana-blue shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
                      >
                        <button 
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                        >
                          <span className={`font-bold pr-8 ${isOpen ? 'text-thana-blue' : 'text-gray-800'}`}>
                            {item.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-thana-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                            <i className="fas fa-chevron-down text-sm"></i>
                          </div>
                        </button>
                        
                        {/* ส่วนเนื้อหาคำตอบ (ซ่อน/แสดง) */}
                        <div 
                          className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="pt-4 border-t border-gray-100 text-gray-600 leading-relaxed">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Box */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-thana-blue text-2xl mx-auto mb-4 shadow-sm">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ไม่พบคำตอบที่คุณตามหาใช่หรือไม่?</h3>
            <p className="text-gray-600 mb-6">ทีมงานผู้เชี่ยวชาญของเราพร้อมให้ความช่วยเหลือคุณเสมอ</p>
            <Link href="/contact" className="inline-block bg-thana-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
              ติดต่อทีมงาน (Contact Us)
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}