'use client';

import { useState } from 'react';

// 1. จำลองข้อมูลจาก Database (Mock Data)
const mockGallery = [
  { id: 1, title: 'รถบรรทุกขนส่งสินค้าระหว่างประเทศ', category: 'Transport', imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'คลังสินค้าและศูนย์กระจายสินค้า', category: 'Warehouse', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'การขนส่งผ่านท่าเรือน้ำลึก', category: 'Port', imageUrl: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'ระบบโลจิสติกส์อัจฉริยะ', category: 'Warehouse', imageUrl: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'ขบวนรถบรรทุก EV ลดมลพิษ', category: 'Transport', imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'การจัดการตู้คอนเทนเนอร์ระดับโลก', category: 'Port', imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop' },
];

const categories = ['All', 'Transport', 'Warehouse', 'Port'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | typeof mockGallery[0]>(null);

  // กรองรูปภาพตามหมวดหมู่ที่เลือก
  const filteredGallery = activeCategory === 'All' 
    ? mockGallery 
    : mockGallery.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-prompt">
      <div className="max-w-7xl mx-auto">
        
        {/* ส่วนหัวของหน้า Gallery */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
            บรรยากาศการทำงาน
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ประมวลภาพการปฏิบัติงานจริงของทีมงาน THANA GROUP ที่มุ่งมั่นส่งมอบบริการโลจิสติกส์ที่ดีที่สุด
          </p>
        </div>

        {/* ระบบปุ่มกรองหมวดหมู่ (Filter) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'All' ? 'ทั้งหมด' : cat === 'Transport' ? 'การขนส่ง' : cat === 'Warehouse' ? 'คลังสินค้า' : 'ท่าเรือ'}
            </button>
          ))}
        </div>

        {/* ระบบ Grid จัดเรียงรูปภาพ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[4/3] bg-gray-200"
            >
              {/* ใช้ img แท็กปกติไปก่อนเพื่อดึงภาพจากเว็บนอกโดยไม่ติด Error */}
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* เลเยอร์สีดำโปร่งแสงตอนเอาเมาส์ชี้ (Hover Effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-medium leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ระบบ Popup ดูรูปขนาดใหญ่ (Lightbox) */}
        {selectedImage && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-10"
            >
              <i className="fa-solid fa-xmark text-3xl"></i>
            </button>
            
            <div className="relative max-w-5xl w-full flex flex-col items-center animate-fade-in">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-sm"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">{selectedImage.title}</h3>
                <span className="text-gray-400 text-sm">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}