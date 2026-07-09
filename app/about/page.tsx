'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ==========================================
// 👥 ข้อมูลทีมผู้ชำนาญการ (Team of Experts)
// ==========================================
const expertTeam = [
  {
    id: 1,
    name: 'คุณเฟื้องยศ ยิ่งยงชัยวงศ์',
    role: 'ผู้ชำนาญการด้านการวิเคราะห์ข้อมูล',
    engRole: 'Data Analytics Expert',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'คุณเพ็ญศรี คำแสนราช',
    role: 'ผู้ชำนาญการด้านชิปปิ้ง ระหว่างประเทศ',
    engRole: 'International Shipping & Customs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'คุณตาลี ฝนพระจันทน์',
    role: 'ผู้ชำนาญการด้านงานบริหารประเทศลาว',
    engRole: 'Laos Operations Management',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'คุณณัฐพงษ์ ชินวัน',
    role: 'ผู้ชำนาญการด้านคลังสินค้าและขนส่ง',
    engRole: 'Warehouse & Transportation Expert',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'คุณทรงศักดิ์ เงาศรี',
    role: 'ผู้ชำนาญการด้านงานขาย',
    engRole: 'Sales & Business Development',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'คุณนันธิยา สง่าจิต',
    role: 'ผู้ชำนาญงานด้านบัญชีและการเงิน',
    engRole: 'Accounting & Financial Expert',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'คุณอมรศาสตร์ นามวงษา',
    role: 'ผู้ชำนาญงานด้านไอที',
    engRole: 'Information Technology Expert',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80',
  },
];

export default function TeamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ฟังก์ชันเลื่อนสไลด์
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === expertTeam.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? expertTeam.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play (เปลี่ยนสไลด์อัตโนมัติทุกๆ 5 วินาที)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // ฟังก์ชันคำนวณตำแหน่ง (3D Carousel Logic)
  const getCardStyle = (index: number) => {
    const total = expertTeam.length;
    let diff = index - currentIndex;

    // ทำให้เป็นวงกลมลูป (Infinite Loop)
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    // สไตล์พื้นฐานของการ์ด
    const baseStyle = "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-3xl overflow-hidden shadow-2xl";

    if (diff === 0) {
      // ตัวที่อยู่ตรงกลาง
      return `${baseStyle} transform translate-x-0 scale-100 z-30 opacity-100 brightness-100 shadow-[0_20px_50px_rgba(0,36,156,0.3)]`;
    } else if (diff === -1) {
      // ซ้าย 1
      return `${baseStyle} transform -translate-x-[45%] sm:-translate-x-[65%] scale-[0.8] z-20 opacity-80 brightness-75`;
    } else if (diff === 1) {
      // ขวา 1
      return `${baseStyle} transform translate-x-[45%] sm:translate-x-[65%] scale-[0.8] z-20 opacity-80 brightness-75`;
    } else if (diff === -2) {
      // ซ้าย 2
      return `${baseStyle} transform -translate-x-[80%] sm:-translate-x-[120%] scale-[0.6] z-10 opacity-50 brightness-50`;
    } else if (diff === 2) {
      // ขวา 2
      return `${baseStyle} transform translate-x-[80%] sm:translate-x-[120%] scale-[0.6] z-10 opacity-50 brightness-50`;
    } else {
      // ซ่อนตัวที่เหลือ (ไกลเกินไป)
      return `${baseStyle} transform translate-x-0 scale-[0.4] z-0 opacity-0`;
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-prompt bg-[#f8fafc] overflow-hidden">
        
        {/* ==========================================
            ส่วน 3D MODERN CAROUSEL 
        ========================================== */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20">
          
          {/* ลายน้ำ OUR TEAM จางๆ ด้านหลังแบบในรูปเป๊ะ */}
          <h1 className="absolute top-10 md:top-20 left-0 w-full text-center text-6xl md:text-8xl lg:text-[150px] font-black text-gray-200/60 uppercase tracking-widest z-0 pointer-events-none select-none">
            OUR TEAM
          </h1>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
            
            {/* โซนแสดงรูปภาพสไลด์ */}
            <div className="relative w-full flex items-center justify-center mt-12 mb-10 h-[350px] md:h-[450px]">
              
              {/* ปุ่มลูกศรซ้าย */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-10 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#00249c] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 border border-gray-100"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              {/* คอนเทนเนอร์หลักของการ์ด */}
              <div className="relative w-[220px] h-[300px] md:w-[280px] md:h-[380px] perspective-1000">
                {expertTeam.map((expert, index) => (
                  <div 
                    key={expert.id} 
                    className={getCardStyle(index)}
                    onClick={() => goToSlide(index)}
                  >
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* ปุ่มลูกศรขวา */}
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-10 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#00249c] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 border border-gray-100"
              >
                <i className="fas fa-chevron-right"></i>
              </button>

            </div>

            {/* โซนแสดงชื่อ และ ตำแหน่ง (ปรับดีไซน์ให้มีเส้นขีดข้างๆ แบบในรูป) */}
            <div className="text-center z-30 mt-4 animate-fade-in-up">
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-2">
                <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#00249c]"></div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0a2540] tracking-wide">
                  {expertTeam[currentIndex].name}
                </h2>
                <div className="w-8 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#00249c]"></div>
              </div>
              
              <p className="text-[#e62e2d] font-bold text-sm md:text-base tracking-widest uppercase mb-1">
                {expertTeam[currentIndex].role}
              </p>
              <p className="text-gray-400 font-semibold text-xs tracking-widest uppercase">
                {expertTeam[currentIndex].engRole}
              </p>
            </div>

            {/* โซนจุด Navigation (Dots) */}
            <div className="flex items-center justify-center gap-2 mt-8 z-30">
              {expertTeam.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? 'w-8 h-2 bg-[#00249c]' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}