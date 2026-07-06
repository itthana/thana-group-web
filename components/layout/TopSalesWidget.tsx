'use client';

import { useState } from 'react';

export default function TopSalesWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  // ข้อมูล Top Sales (สามารถเปลี่ยนชื่อและรูปภาพได้ที่นี่)
  const topSales = {
    name: 'คุณกัลยาณี ส่งมอบ',
    position: 'Senior Sales Executive',
    month: 'กรกฎาคม 2026',
    salesRecord: 'ทะลุเป้า 150%',
    image: 'https://placehold.co/400x400/0B308A/ffffff?text=Top+Sales',
    phone: '081-234-5678',
    line: 'kanla_sales' // ใส่ ID Line สำหรับให้ลูกค้ากดแอด
  };

  // ฟังก์ชันกดแล้วจุดพลุ
  const triggerCelebration = () => {
    setIsOpen(true);
    
    // สร้างเศษพลุ 80 ชิ้นกระจายไปรอบทิศทาง
    const newParticles = Array.from({ length: 80 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2; 
      const velocity = 50 + Math.random() * 150; 
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      return {
        id: i,
        tx: `${tx}px`,
        ty: `${ty}px`,
        color: ['#E53935', '#0B308A', '#FFD700', '#4CAF50', '#00e5ff', '#FF4081'][Math.floor(Math.random() * 6)],
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.2
      };
    });
    
    setParticles(newParticles);

    // พลุหายไปหลังจาก 2 วินาที 
    setTimeout(() => setParticles([]), 2000);
  };

  return (
    <>
      {/* CSS สำหรับอนิเมชันจุดพลุ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shoot {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0) rotate(360deg); opacity: 0; }
        }
        .firework-particle {
          animation: shoot 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />

      {/* ปุ่มลอยด้านซ้ายล่าง */}
      <div className="fixed bottom-6 left-6 z-40 group animate-fade-in">
        <button
          onClick={triggerCelebration}
          className="bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 border-2 border-white relative overflow-hidden"
        >
          {/* แสงวิ้งๆ วิ่งพาดปุ่ม */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white/30 skew-x-12 group-hover:animate-shine"></div>
          
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-yellow-500 shadow-inner shrink-0 relative">
            <i className="fas fa-trophy text-xl"></i>
            {/* จุดแจ้งเตือนสีแดง (Ping Alert) */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-widest font-black text-yellow-100 leading-none mb-0.5">Top Sales of the Month</span>
            <span className="text-sm font-bold leading-tight drop-shadow-md">พนักงานขายดีเด่น</span>
          </div>
        </button>
      </div>

      {/* Modal / Popup ฉลอง */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* พื้นหลังสีดำโปร่งแสง (กดเพื่อปิด) */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* กล่องการ์ด Top Sales */}
          <div className="bg-white rounded-3xl w-full max-w-sm relative z-10 shadow-2xl transform animate-bounce-in overflow-hidden border-4 border-yellow-400">
            
            {/* อนุภาคพลุ */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20 pointer-events-none">
              {particles.map(p => (
                <div 
                  key={p.id}
                  className="firework-particle absolute rounded-full"
                  style={{
                    '--tx': p.tx,
                    '--ty': p.ty,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    animationDelay: `${p.delay}s`
                  } as React.CSSProperties}
                ></div>
              ))}
            </div>

            {/* ปุ่มปิด Modal */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* ส่วนรูปภาพและมงกุฎ */}
            <div className="relative pt-10 pb-6 px-8 bg-gradient-to-b from-yellow-50 to-white text-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-5xl -mt-6 drop-shadow-lg z-10 text-yellow-500">
                <i className="fas fa-crown"></i>
              </div>
              
              <div className="w-32 h-32 mx-auto rounded-full p-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 shadow-lg relative">
                <img 
                  src={topSales.image} 
                  alt={topSales.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
              </div>
              
              <div className="bg-yellow-100 text-yellow-700 text-xs font-black px-3 py-1 rounded-full inline-block uppercase tracking-widest mb-3">
                ประจำเดือน {topSales.month}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-1">{topSales.name}</h3>
              <p className="text-thana-red font-bold text-sm uppercase tracking-wider mb-2">{topSales.position}</p>
              <p className="text-gray-500 text-sm font-medium"><i className="fas fa-chart-line text-green-500"></i> ผลงาน: {topSales.salesRecord}</p>
            </div>

            {/* ส่วนติดต่อด่วน (Call to Action) */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <p className="text-center text-gray-600 text-sm mb-4">
                ยินดีให้คำปรึกษาและออกแบบเส้นทางขนส่งที่คุ้มค่าที่สุดสำหรับคุณ
              </p>
              <div className="flex gap-3">
                <a href={`tel:${topSales.phone}`} className="flex-1 bg-thana-blue hover:bg-blue-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm">
                  <i className="fas fa-phone-alt"></i> โทรด่วน
                </a>
                <a href={`https://line.me/ti/p/~${topSales.line}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#00c300] hover:bg-[#00a000] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm">
                  <i className="fab fa-line text-lg"></i> แอดไลน์
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}