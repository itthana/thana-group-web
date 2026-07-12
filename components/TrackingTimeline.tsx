'use client';

// ข้อมูลจำลองสำหรับทดสอบ (พี่สามารถเอาไปต่อกับ API จริงทีหลังได้ครับ)
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
    isCurrent: true, // กำหนดให้เป็นสถานะปัจจุบัน (จะมีไฟกะพริบ)
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

export default function TrackingTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-[#0d1424] rounded-3xl p-8 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] font-prompt">
      <h3 className="text-xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <i className="fas fa-route text-blue-500 mr-3"></i>
        สถานะการจัดส่ง (Tracking History)
      </h3>

      <div className="relative pl-4 md:pl-0">
        {mockTimelineEvents.map((event, index) => {
          const isLast = index === mockTimelineEvents.length - 1;

          return (
            <div key={event.id} className="relative flex flex-col md:flex-row mb-8 group">
              
              {/* ส่วนวันที่และเวลา (หน้าจอมือถือจะอยู่ด้านบน, Desktop จะอยู่ซ้ายมือ) */}
              <div className="md:w-32 flex-shrink-0 md:text-right md:pr-8 mb-2 md:mb-0 pt-1">
                <div className={`text-sm font-bold ${event.isCompleted || event.isCurrent ? 'text-blue-400' : 'text-gray-500'}`}>
                  {event.date}
                </div>
                <div className="text-xs text-gray-500">{event.time}</div>
              </div>

              {/* แกนกลาง (เส้นและจุด) */}
              <div className="absolute left-[7px] md:left-32 md:ml-[5px] top-2 bottom-[-2rem] flex flex-col items-center">
                {/* จุดกลมๆ */}
                <div className="relative flex items-center justify-center">
                  {event.isCurrent && (
                    <div className="absolute w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                  )}
                  <div 
                    className={`relative z-10 w-4 h-4 rounded-full border-4 flex items-center justify-center
                      ${event.isCurrent ? 'bg-[#0d1424] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 
                        event.isCompleted ? 'bg-blue-500 border-blue-500' : 'bg-[#0d1424] border-gray-700'
                      }`}
                  ></div>
                </div>
                
                {/* เส้นนำสายตา */}
                {!isLast && (
                  <div 
                    className={`w-0.5 h-full mt-2 ${
                      event.isCompleted ? 'bg-gradient-to-b from-blue-500 to-blue-500/50' : 'bg-gray-800 border-l border-dashed border-gray-700'
                    }`}
                  ></div>
                )}
              </div>

              {/* ข้อมูลสถานะ (ด้านขวา) */}
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