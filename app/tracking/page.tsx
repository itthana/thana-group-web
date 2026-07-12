'use client';

import { useState } from 'react';

// ==========================================
// 1. ข้อมูลจำลองสำหรับ Timeline สไตล์ขนส่งชั้นนำ
// ==========================================
const trackingHistory = [
  {
    id: 1,
    date: '12 ก.ค. 2026',
    time: '14:30',
    status: 'จัดส่งสำเร็จ (Delivered)',
    desc: 'พัสดุถูกจัดส่งถึงมือผู้รับเรียบร้อยแล้ว ผู้รับ: คุณบัวคำ',
    location: 'เวียงจันทน์',
    icon: 'fas fa-check',
    isCurrent: true, // สถานะล่าสุด
    isCompleted: true,
  },
  {
    id: 2,
    date: '12 ก.ค. 2026',
    time: '09:00',
    status: 'กำลังนำจ่าย (Out for Delivery)',
    desc: 'พนักงานกำลังนำพัสดุไปส่งให้ผู้รับ (พนักงาน: ท้าวคำสิงห์ 020-5xxx-xxxx)',
    location: 'เวียงจันทน์',
    icon: 'fas fa-motorcycle',
    isCurrent: false,
    isCompleted: true,
  },
  {
    id: 3,
    date: '11 ก.ค. 2026',
    time: '18:45',
    status: 'พัสดุถึงศูนย์คัดแยกปลายทาง',
    desc: 'พัสดุเดินทางมาถึงศูนย์กระจายสินค้า Vientiane SOC',
    location: 'เวียงจันทน์ (VTE)',
    icon: 'fas fa-building',
    isCurrent: false,
    isCompleted: true,
  },
  {
    id: 4,
    date: '10 ก.ค. 2026',
    time: '22:15',
    status: 'อยู่ระหว่างการขนส่งข้ามแดน',
    desc: 'พัสดุออกจากศูนย์คัดแยก กำลังเดินทางผ่านด่านพรมแดน ไทย-ลาว',
    location: 'ด่านศุลกากร หนองคาย',
    icon: 'fas fa-truck-fast',
    isCurrent: false,
    isCompleted: true,
  },
  {
    id: 5,
    date: '10 ก.ค. 2026',
    time: '10:30',
    status: 'รับพัสดุเข้าระบบ (Item Accepted)',
    desc: 'พัสดุเข้าสู่ระบบ THANA LOGISTICS สาขาต้นทางเรียบร้อย',
    location: 'กรุงเทพฯ (BKK)',
    icon: 'fas fa-box',
    isCurrent: false,
    isCompleted: true,
  },
];

// ==========================================
// 2. หน้าเว็บหลัก + Timeline
// ==========================================
export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState('THN2026THLA001');

  return (
    <div className="min-h-screen bg-[#070b14] p-4 md:p-8 font-prompt flex justify-center">
      <div className="max-w-4xl w-full mt-10">
        
        {/* ================= ส่วนที่ 1: ช่องค้นหา ================= */}
        <div className="bg-[#131b2c] p-2 rounded-full flex items-center shadow-lg border border-gray-800 mb-4 transition-all focus-within:border-blue-500 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <div className="pl-6 text-gray-400">
            <i className="fas fa-box-open"></i>
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white px-4 font-bold tracking-wider uppercase"
            placeholder="กรอกหมายเลขพัสดุ..."
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] flex items-center gap-2">
            <i className="fas fa-search"></i> <span className="hidden md:inline">ตรวจสอบ</span>
          </button>
        </div>
        
        <p className="text-[#00e5ff] text-sm mb-8 pl-4 flex items-center gap-2">
          <i className="fas fa-info-circle"></i> เลขอ้างอิงทดสอบระบบ: {searchQuery}
        </p>

        {/* ================= ส่วนที่ 2: การ์ดสรุปข้อมูลพัสดุ ================= */}
        <div className="bg-[#0d1424] border-t-4 border-blue-600 border-x border-b border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest mb-1">TRACKING NUMBER</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider">{searchQuery}</h2>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-[#1a2942] rounded-full border border-blue-900 flex items-center gap-2 shadow-inner">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              <span className="text-blue-300 font-bold text-sm">จัดส่งสำเร็จ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#131b2c] p-6 rounded-2xl border border-gray-800 flex items-center gap-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-500 text-xl">
                <i className="fas fa-plane-departure"></i>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold mb-1">ต้นทาง (Origin)</p>
                <h4 className="text-white text-lg font-bold">กรุงเทพฯ</h4>
                <p className="text-gray-400 text-xs mt-1">ผู้ส่ง: คุณสมชาย</p>
              </div>
            </div>
            
            <div className="bg-[#131b2c] p-6 rounded-2xl border border-gray-800 flex items-center gap-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-[#0a2e2c] rounded-xl flex items-center justify-center text-[#2dd4bf] text-xl">
                <i className="fas fa-plane-arrival"></i>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold mb-1">ปลายทาง (Destination)</p>
                <h4 className="text-white text-lg font-bold">เวียงจันทน์</h4>
                <p className="text-gray-400 text-xs mt-1">ผู้รับ: คุณบัวคำ</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ส่วนที่ 3: Timeline สไตล์แอปชั้นนำ ================= */}
        <div className="bg-[#0d1424] rounded-3xl p-6 md:p-8 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500">
              <i className="fas fa-list-ul"></i>
            </div>
            รายละเอียดการจัดส่ง
          </h3>

          <div className="relative">
            {/* เส้นแนวตั้งที่เป็นแกนหลักของ Timeline */}
            <div className="absolute left-[27px] md:left-[147px] top-4 bottom-4 w-0.5 bg-gray-800"></div>

            <div className="space-y-8">
              {trackingHistory.map((item, index) => {
                const isLast = index === trackingHistory.length - 1;
                
                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row group">
                    
                    {/* [ฝั่งซ้าย] วันที่และเวลา (Desktop จะอยู่ซ้าย, Mobile จะอยู่บน) */}
                    <div className="md:w-32 flex-shrink-0 md:text-right md:pr-8 mb-2 md:mb-0 pt-0.5 pl-14 md:pl-0">
                      <div className={`text-sm font-bold ${item.isCurrent ? 'text-blue-400' : 'text-gray-400'}`}>
                        {item.date}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{item.time}</div>
                    </div>

                    {/* [ตรงกลาง] ไอคอนสถานะ */}
                    <div className="absolute left-0 md:left-[120px] top-0 flex items-center justify-center w-14 md:w-14 h-full pointer-events-none">
                      <div className={`
                        relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300
                        ${item.isCurrent 
                          ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] ring-4 ring-[#0d1424]' 
                          : 'bg-[#1a2942] text-gray-400 border border-gray-700 group-hover:bg-[#203354] ring-4 ring-[#0d1424]'
                        }
                      `}>
                        <i className={item.icon}></i>
                      </div>
                    </div>

                    {/* [ฝั่งขวา] รายละเอียดสถานะ */}
                    <div className="ml-14 md:ml-12 flex-1 bg-[#131b2c] p-4 rounded-2xl border border-gray-800/50 hover:border-gray-700 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                        <h4 className={`text-base font-bold ${item.isCurrent ? 'text-white' : 'text-gray-300'}`}>
                          {item.status}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a1120] border border-gray-800 text-[11px] text-gray-400 w-fit">
                          <i className="fas fa-location-dot text-blue-500/70"></i>
                          {item.location}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}