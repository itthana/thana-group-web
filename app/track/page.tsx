'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function TrackPage() {
  const [trackingNo, setTrackingNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // State สำหรับเก็บข้อมูลผลลัพธ์การค้นหา
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!trackingNo.trim()) {
      setError('กรุณาระบุหมายเลข Tracking หรือ B/L');
      setTrackingData(null);
      return;
    }

    setError('');
    setIsLoading(true);
    setTrackingData(null);

    // จำลองการดึงข้อมูลจาก Database (API Simulation)
    setTimeout(() => {
      setIsLoading(false);
      
      // ถ้าพิมพ์คำว่า THANA123 ให้แสดงผลสำเร็จ
      if (trackingNo.toUpperCase() === 'THANA123') {
        setTrackingData({
          id: 'THANA123',
          status: 'In Transit',
          origin: 'Bangkok, Thailand',
          destination: 'Vientiane, Laos',
          eta: '8 กรกฎาคม 2026',
          // ข้อมูลจำลองสำหรับ Timeline
          timeline: [
            { id: 1, title: 'รับพัสดุเข้าระบบ', desc: 'สาขาต้นทาง กรุงเทพมหานคร', time: '5 ก.ค. 2026, 09:30', completed: true },
            { id: 2, title: 'ออกจากศูนย์คัดแยก', desc: 'ศูนย์กระจายสินค้าภาคอีสาน', time: '5 ก.ค. 2026, 18:45', completed: true },
            { id: 3, title: 'อยู่ระหว่างการขนส่ง', desc: 'มุ่งหน้าสู่ด่านพรมแดนหนองคาย', time: '6 ก.ค. 2026, 10:15', completed: true, active: true },
            { id: 4, title: 'พิธีการศุลกากร', desc: 'รอดำเนินการข้ามแดน', time: '', completed: false },
            { id: 5, title: 'จัดส่งสำเร็จ', desc: 'ผู้รับปลายทางเซ็นรับเรียบร้อย', time: '', completed: false },
          ]
        });
      } else {
        // ถ้าพิมพ์เลขอื่น ให้แสดงว่าไม่พบข้อมูล
        setError('ไม่พบข้อมูลสำหรับหมายเลขนี้ กรุณาตรวจสอบความถูกต้องอีกครั้งครับ');
      }
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ส่วนหัวข้อค้นหา */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-thana-blue mb-4">
              <i className="fas fa-search-location text-thana-red mr-3"></i> 
              ตรวจสอบสถานะสินค้า
            </h1>
            <p className="text-gray-600">ติดตามสถานะการจัดส่งของคุณได้ตลอด 24 ชั่วโมง</p>
          </div>

          {/* กล่องค้นหา */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  className={`w-full px-5 py-4 rounded-xl border ${error ? 'border-thana-red focus:ring-thana-red' : 'border-gray-200 focus:ring-thana-blue'} focus:outline-none focus:ring-2 focus:border-transparent transition-all text-lg font-medium bg-gray-50 focus:bg-white uppercase`}
                  placeholder="กรอกหมายเลข Tracking (ทดลองพิมพ์ THANA123)"
                  value={trackingNo}
                  onChange={(e) => {
                    setTrackingNo(e.target.value);
                    if (error) setError('');
                  }}
                />
                {error && (
                  <p className="mt-2 text-thana-red text-sm font-bold flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-thana-blue hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md md:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isLoading ? (
                  <><i className="fas fa-circle-notch fa-spin"></i> ค้นหา...</>
                ) : (
                  <><i className="fas fa-search"></i> ค้นหา</>
                )}
              </button>
            </form>
          </div>

          {/* ส่วนแสดงผลลัพธ์ (จะโชว์เมื่อมีข้อมูลเท่านั้น) */}
          {trackingData && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
              
              {/* ข้อมูลสรุป */}
              <div className="bg-gray-900 p-6 text-white grid grid-cols-2 md:grid-cols-4 gap-6 border-b-4 border-thana-red">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase mb-1">Tracking No.</p>
                  <p className="font-black text-lg text-thana-blue bg-white inline-block px-2 py-0.5 rounded-sm">{trackingData.id}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase mb-1">Status</p>
                  <p className="font-bold text-yellow-400 flex items-center gap-1">
                    <i className="fas fa-truck-fast"></i> {trackingData.status}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <p className="text-gray-400 text-xs font-bold uppercase mb-1">Route</p>
                  <p className="font-bold text-sm">
                    {trackingData.origin} <i className="fas fa-arrow-right text-gray-500 mx-2"></i> {trackingData.destination}
                  </p>
                </div>
              </div>

              {/* Timeline ย้อนหลัง */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4">ประวัติการเดินทาง (Tracking History)</h3>
                
                <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-8">
                  {trackingData.timeline.map((item: any, index: number) => (
                    <div key={item.id} className="relative pl-8 md:pl-10">
                      {/* จุด Timeline */}
                      <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${item.completed ? (item.active ? 'bg-thana-blue shadow-[0_0_0_4px_rgba(11,48,138,0.2)] animate-pulse' : 'bg-green-500') : 'bg-gray-300'}`}></div>
                      
                      {/* เนื้อหา Timeline */}
                      <div className={`${item.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                          <h4 className={`font-bold text-lg ${item.active ? 'text-thana-blue' : ''}`}>{item.title}</h4>
                          {item.time && (
                            <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded-md text-gray-600 mt-2 md:mt-0 w-max">
                              {item.time}
                            </span>
                          )}
                        </div>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}