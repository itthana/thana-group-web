'use client';

import { useState } from 'react';
import Link from 'next/link';

// 1. จำลองข้อมูลรูปภาพแบบจัดเต็ม (รวมทุกบรรยากาศการทำงาน)
const mockGallery = [
  { id: 1, title: 'ขบวนรถบรรทุก EV ลดมลพิษ', imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'คลังสินค้าและศูนย์กระจายสินค้า', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'การจัดการตู้คอนเทนเนอร์ระดับโลก', imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'ระบบโลจิสติกส์อัจฉริยะ', imageUrl: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'การขนส่งผ่านท่าเรือน้ำลึก', imageUrl: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'รถบรรทุกขนส่งสินค้าระหว่างประเทศ', imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, title: 'ศูนย์ควบคุมและติดตาม GPS 24 ชม.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, title: 'บริการขนส่งทางอากาศ (Air Freight)', imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop' },
  { id: 9, title: 'การปฏิบัติงานของทีมงานมืออาชีพ', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' },
  { id: 10, title: 'จุดกระจายสินค้าข้ามแดน (Cross-border)', imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop' },
  { id: 11, title: 'ความปลอดภัยในการจัดเก็บสินค้า', imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop' },
  { id: 12, title: 'เครือข่ายขนส่งทางราง (Rail Freight)', imageUrl: 'https://images.unsplash.com/photo-1496354890695-1718817a1024?q=80&w=1000&auto=format&fit=crop' },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<null | typeof mockGallery[0]>(null);

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 font-prompt pt-32">
      <div className="max-w-7xl mx-auto">
        
        {/* ส่วนหัว: ปุ่มกลับหน้าหลัก & ชื่อหน้า */}
        <div className="mb-12 relative flex flex-col items-center">
          
          {/* ปุ่มกลับหน้าหลัก (จัดให้อยู่ซ้ายสุดบนจอใหญ่ และอยู่ตรงกลางบนจอมือถือ) */}
          <div className="w-full flex justify-center md:justify-start mb-6 md:absolute md:left-0 md:top-0">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-600 hover:text-white hover:bg-[#ff0000] border border-gray-200 hover:border-[#ff0000] rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm font-bold tracking-wide"
            >
              <i className="fas fa-arrow-left"></i> กลับสู่หน้าหลัก
            </Link>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#0a2540] mb-4 text-center tracking-tight drop-shadow-sm mt-4 md:mt-0">
            บรรยากาศการทำงาน
          </h2>
          <div className="h-1 w-24 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">
            ประมวลภาพการปฏิบัติงานจริงและโครงสร้างพื้นฐานของ THANA GROUP <br className="hidden md:block" /> 
            ที่มุ่งมั่นส่งมอบบริการโลจิสติกส์ที่ดีที่สุดอย่างไม่หยุดยั้ง
          </p>
        </div>

        {/* ระบบ Grid จัดเรียงรูปภาพ (รองรับรูปจำนวนมาก) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockGallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3] bg-gray-200 border border-gray-100"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* เลเยอร์สีดำโปร่งแสงตอนเอาเมาส์ชี้ (Hover Effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-[#ff0000] mb-2 rounded-full"></div>
                  <h3 className="text-white text-sm md:text-base font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ระบบ Popup ดูรูปขนาดใหญ่ (Lightbox) */}
        {selectedImage && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#ff0000] transition-colors z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
            
            <div className="relative max-w-6xl w-full flex flex-col items-center">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center max-w-3xl px-4">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2 tracking-wide">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}