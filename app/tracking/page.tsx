'use client';

import { useState } from 'react';

// ==========================================
// 1. ข้อมูลไทม์ไลน์
// ==========================================
const trackingHistory = [
  {
    id: 1,
    date: '12 ก.ค. 2026',
    time: '14:30',
    status: 'จัดส่งสำเร็จ',
    desc: 'พัสดุถูกจัดส่งถึงมือผู้รับเรียบร้อยแล้ว (ผู้รับ: คุณบัวคำ)',
    location: 'เวียงจันทน์',
    icon: 'fas fa-check',
    isCurrent: true,
  },
  {
    id: 2,
    date: '12 ก.ค. 2026',
    time: '09:00',
    status: 'กำลังนำจ่าย',
    desc: 'พนักงานกำลังนำพัสดุไปส่งให้ผู้รับ',
    location: 'เวียงจันทน์',
    icon: 'fas fa-motorcycle',
    isCurrent: false,
  },
  {
    id: 3,
    date: '11 ก.ค. 2026',
    time: '18:45',
    status: 'ถึงศูนย์คัดแยกปลายทาง',
    desc: 'พัสดุเดินทางมาถึงศูนย์กระจายสินค้า Vientiane SOC',
    location: 'เวียงจันทน์',
    icon: 'fas fa-box-open',
    isCurrent: false,
  },
  {
    id: 4,
    date: '10 ก.ค. 2026',
    time: '22:15',
    status: 'อยู่ระหว่างการขนส่ง',
    desc: 'พัสดุออกจากศูนย์คัดแยก กำลังเดินทางผ่านด่านพรมแดน',
    location: 'หนองคาย',
    icon: 'fas fa-truck',
    isCurrent: false,
  },
  {
    id: 5,
    date: '10 ก.ค. 2026',
    time: '10:30',
    status: 'รับเข้าระบบ',
    desc: 'ผู้ส่งทำการส่งพัสดุที่สาขาต้นทาง',
    location: 'กรุงเทพฯ',
    icon: 'fas fa-store',
    isCurrent: false,
  },
];

// ==========================================
// 2. หน้าเว็บหลัก
// ==========================================
export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState('THN2026THLA001');

  return (
    <div className="min-h-screen bg-[#070b14] p-4 md:p-8 font-prompt flex justify-center">
      <div className="max-w-3xl w-full mt-4 md:mt-10">
        
        {/* ================= ช่องค้นหา ================= */}
        <div className="bg-[#131b2c] p-2 rounded-full flex items-center shadow-lg border border-gray-800 mb-4">
          <div className="pl-6 text-gray-400">
            <i className="fas fa-box"></i>
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white px-4 font-bold tracking-wider uppercase text-sm md:text-base"
            placeholder="หมายเลขพัสดุ..."
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 text-sm md:text-base">
            <i className="fas fa-search"></i> <span className="hidden sm:inline">ตรวจสอบ</span>
          </button>
        </div>

        {/* ================= การ์ดสรุป ================= */}
        <div className="bg-[#0d1424] border-t-4 border-blue-600 border-x border-b border-gray-800 rounded-3xl p-5 md:p-8 shadow-xl relative overflow-hidden mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest mb-1">TRACKING NUMBER</p>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-wider">{searchQuery}</h2>
            </div>
            <div className="px-3 py-1.5 bg-[#1a2942] rounded-full border border-blue-900 flex items-center gap-2">
              <span className="text-blue-400 font-bold text-xs md:text-sm">กำลังขนส่ง</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#131b2c] p-4 rounded-2xl border border-gray-800 flex flex-col justify-center">
              <p className="text-gray-500 text-[10px] md:text-xs font-bold mb-1">ต้นทาง</p>
              <h4 className="text-white text-base md:text-lg font-bold flex items-center gap-2">
                <i className="fas fa-plane-departure text-blue-500 text-sm"></i> กรุงเทพฯ
              </h4>
            </div>
            
            <div className="bg-[#131b2c] p-4 rounded-2xl border border-gray-800 flex flex-col justify-center">
              <p className="text-gray-500 text-[10px] md:text-xs font-bold mb-1">ปลายทาง</p>
              <h4 className="text-white text-base md:text-lg font-bold flex items-center gap-2">
                <i className="fas fa-plane-arrival text-[#2dd4bf] text-sm"></i> เวียงจันทน์
              </h4>
            </div>
          </div>
        </div>

        {/* ================= Timeline (สไตล์แอปมือถือ สะอาดตา) ================= */}
        <div className="bg-[#0d1424] rounded-3xl p-5 md:p-8 border border-gray-800 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
            <i className="fas fa-list-ul text-blue-500"></i>
            สถานะการจัดส่ง
          </h3>

          <div className="pl-2">
            {trackingHistory.map((item, index) => {
              const isLast = index === trackingHistory.length - 1;
              
              return (
                <div key={item.id} className="relative flex gap-4 md:gap-6 pb-8">
                  
                  {/* เส้นเชื่อมต่อ (ซ่อนในรายการสุดท้าย) */}
                  {!isLast && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gray-800"></div>
                  )}

                  {/* ไอคอนวงกลม */}
                  <div className={`
                    relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm mt-1
                    ${item.isCurrent 
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' 
                      : 'bg-[#1a2942] text-gray-400 border border-gray-700'
                    }
                  `}>
                    <i className={item.icon}></i>
                  </div>

                  {/* เนื้อหา */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h4 className={`text-base font-bold ${item.isCurrent ? 'text-white' : 'text-gray-300'}`}>
                        {item.status}
                      </h4>
                      <div className="text-gray-500 text-xs font-medium flex gap-2 sm:flex-col sm:gap-0 sm:text-right">
                        <span>{item.date}</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-1">
                      {item.desc}
                    </p>
                    
                    <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-1 rounded bg-[#131b2c] border border-gray-800 text-[11px] text-blue-400">
                      <i className="fas fa-location-dot"></i>
                      {item.location}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}