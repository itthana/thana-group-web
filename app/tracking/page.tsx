'use client';

import { useState } from 'react';

// ==========================================
// 1. ข้อมูลจำลองสำหรับ Timeline
// ==========================================
const mockTimelineEvents = [
  {
    id: 1,
    title: 'จัดส่งสำเร็จ (Delivered)',
    description: 'พัสดุถูกจัดส่งถึงมือผู้รับเรียบร้อยแล้ว',
    date: 'รอการอัปเดต',
    time: '-',
    location: 'เวียงจันทน์',
    icon: 'fas fa-check-circle',
    isCompleted: false,
    isCurrent: false,
  },
  {
    id: 2,
    title: 'กำลังจัดส่ง (Out for Delivery)',
    description: 'พนักงานกำลังนำพัสดุไปส่งให้ผู้รับ',
    date: '12 ก.ค. 2026',
    time: '09:00',
    location: 'เวียงจันทน์',
    icon: 'fas fa-motorcycle',
    isCompleted: false,
    isCurrent: true,
  },
  {
    id: 3,
    title: 'ถึงศูนย์คัดแยกสินค้าปลายทาง',
    description: 'พัสดุเดินทางมาถึงศูนย์กระจายสินค้า เวียงจันทน์',
    date: '11 ก.ค. 2026',
    time: '18:45',
    location: 'เวียงจันทน์',
    icon: 'fas fa-building-circle-check',
    isCompleted: true,
    isCurrent: false,
  },
  {
    id: 4,
    title: 'อยู่ระหว่างการขนส่งข้ามแดน',
    description: 'พัสดุกำลังเดินทางผ่านด่านพรมแดน ไทย-ลาว',
    date: '10 ก.ค. 2026',
    time: '22:15',
    location: 'ด่านศุลกากร หนองคาย',
    icon: 'fas fa-truck-fast',
    isCompleted: true,
    isCurrent: false,
  },
  {
    id: 5,
    title: 'รับพัสดุเข้าระบบ (Item Accepted)',
    description: 'รับพัสดุเข้าสู่ระบบ THANA LOGISTICS เรียบร้อย',
    date: '10 ก.ค. 2026',
    time: '10:30',
    location: 'กรุงเทพฯ',
    icon: 'fas fa-box',
    isCompleted: true,
    isCurrent: false,
  },
];

// ==========================================
// 2. Component Timeline (เอาไว้ใช้ในไฟล์เดียวกัน จะได้ไม่ Error)
// ==========================================
function TrackingTimeline() {
  return (
    <div className="w-full mt-6 bg-[#0d1424] rounded-3xl p-6 md:p-8 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      <h3 className="text-xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <i className="fas fa-route text-blue-500 mr-3"></i>
        สถานะการจัดส่ง (Tracking History)
      </h3>

      <div className="relative pl-4 md:pl-0">
        {mockTimelineEvents.map((event, index) => {
          const isLast = index === mockTimelineEvents.length - 1;
          return (
            <div key={event.id} className="relative flex flex-col md:flex-row mb-8 group">
              <div className="md:w-32 flex-shrink-0 md:text-right md:pr-8 mb-2 md:mb-0 pt-1">
                <div className={`text-sm font-bold ${event.isCompleted || event.isCurrent ? 'text-blue-400' : 'text-gray-500'}`}>
                  {event.date}
                </div>
                <div className="text-xs text-gray-500">{event.time}</div>
              </div>

              <div className="absolute left-[7px] md:left-32 md:ml-[5px] top-2 bottom-[-2rem] flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  {event.isCurrent && (
                    <div className="absolute w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                  )}
                  <div className={`relative z-10 w-4 h-4 rounded-full border-4 flex items-center justify-center ${event.isCurrent ? 'bg-[#0d1424] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : event.isCompleted ? 'bg-blue-500 border-blue-500' : 'bg-[#0d1424] border-gray-700'}`}></div>
                </div>
                {!isLast && (
                  <div className={`w-0.5 h-full mt-2 ${event.isCompleted ? 'bg-gradient-to-b from-blue-500 to-blue-500/50' : 'bg-gray-800 border-l border-dashed border-gray-700'}`}></div>
                )}
              </div>

              <div className="ml-10 md:ml-12 flex-1 pt-0.5">
                <div className={`text-lg font-bold ${event.isCompleted || event.isCurrent ? 'text-white' : 'text-gray-400'}`}>
                  {event.title}
                </div>
                <div className="text-sm text-gray-400 mt-1 mb-2">
                  {event.description}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15233e] border border-gray-700 text-xs text-gray-300">
                  <i className={`${event.icon} text-blue-400`}></i>
                  {event.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 3. หน้าเว็บหลัก (มี export default ตัวเดียวเท่านั้น!)
// ==========================================
export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState('THN2026THLA001');

  return (
    <div className="min-h-screen bg-[#070b14] p-4 md:p-8 font-prompt flex justify-center">
      <div className="max-w-4xl w-full mt-10">
        
        {/* ช่องค้นหา */}
        <div className="bg-[#131b2c] p-2 rounded-full flex items-center shadow-lg border border-gray-800 mb-4">
          <div className="pl-6 text-gray-400">
            <i className="fas fa-box-open"></i>
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white px-4 font-bold tracking-wider"
            placeholder="กรอกหมายเลขพัสดุ..."
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <i className="fas fa-search mr-2"></i> ตรวจสอบ
          </button>
        </div>
        
        <p className="text-[#00e5ff] text-sm mb-8 pl-4">
          <i className="fas fa-info-circle mr-2"></i> เลขอ้างอิงทดสอบระบบ: THN2026THLA001
        </p>

        {/* การ์ดแสดงผลพัสดุ (ส่วนบน) */}
        <div className="bg-[#0d1424] border-t-4 border-blue-600 border-x border-b border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <p className="text-gray-400 text-sm font-bold tracking-widest mb-1">TRACKING NUMBER</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider">{searchQuery}</h2>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-[#1a2942] rounded-full border border-blue-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <span className="text-blue-400 font-bold text-sm">กำลังขนส่ง</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#131b2c] p-6 rounded-2xl border border-gray-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-500 text-2xl">
                <i className="fas fa-plane-departure"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold mb-1">ต้นทาง (Origin)</p>
                <h4 className="text-white text-xl font-bold">กรุงเทพฯ</h4>
                <p className="text-gray-400 text-xs mt-1">ผู้ส่ง: คุณสมชาย</p>
              </div>
            </div>
            
            <div className="bg-[#131b2c] p-6 rounded-2xl border border-gray-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0a2e2c] rounded-xl flex items-center justify-center text-[#2dd4bf] text-2xl">
                <i className="fas fa-plane-arrival"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold mb-1">ปลายทาง (Destination)</p>
                <h4 className="text-white text-xl font-bold">เวียงจันทน์</h4>
                <p className="text-gray-400 text-xs mt-1">ผู้รับ: คุณบัวคำ</p>
              </div>
            </div>
          </div>
        </div>

        {/* เรียกใช้ Timeline (ส่วนล่าง) */}
        <TrackingTimeline />

      </div>
    </div>
  );
}