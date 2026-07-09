'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ==========================================
// 📦 Mock Data (ข้อมูลจำลองสำหรับการค้นหา)
// ==========================================
const mockTrackingData = {
  trackingNumber: '',
  status: 'in_transit', // pending, picked_up, in_transit, out_for_delivery, delivered
  statusText: 'กำลังเดินทางข้ามพรมแดน (In Transit)',
  estimatedDelivery: '10 กรกฎาคม 2026, 14:00 น.',
  origin: 'กรุงเทพมหานคร, ประเทศไทย',
  destination: 'นครหลวงเวียงจันทน์, สปป.ลาว',
  weight: '450 kg',
  serviceType: 'THANA Premium Express (ส่งด่วน 1 วัน)',
  history: [
    { id: 1, date: '09 ก.ค. 2026', time: '08:30 น.', status: 'อยู่ระหว่างดำเนินการข้ามแดน ณ ด่านศุลกากรหนองคาย', icon: 'fa-truck-fast', color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 2, date: '08 ก.ค. 2026', time: '22:15 น.', status: 'รถบรรทุกเดินทางถึงศูนย์กระจายสินค้า หนองคาย', icon: 'fa-building', color: 'text-gray-500', bg: 'bg-gray-100' },
    { id: 3, date: '08 ก.ค. 2026', time: '16:45 น.', status: 'พัสดุออกจากศูนย์กระจายสินค้า กรุงเทพมหานคร', icon: 'fa-truck-arrow-right', color: 'text-gray-500', bg: 'bg-gray-100' },
    { id: 4, date: '08 ก.ค. 2026', time: '10:20 น.', status: 'พัสดุเข้าระบบรับเข้าระบบ (Picked Up)', icon: 'fa-box-check', color: 'text-gray-500', bg: 'bg-gray-100' },
  ]
};

export default function TrackAndTracePage() {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<typeof mockTrackingData | null>(null);
  const [error, setError] = useState('');

  // ฟังก์ชันจำลองการค้นหาข้อมูล
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      setError('กรุณาระบุหมายเลขติดตามพัสดุ (Tracking Number)');
      setResult(null);
      return;
    }

    setError('');
    setIsLoading(true);
    setResult(null);

    // จำลองเวลาโหลดข้อมูล 1.5 วินาที เพื่อให้เห็น Loading Animation สวยๆ
    setTimeout(() => {
      setIsLoading(false);
      // ในระบบจริงตรงนี้จะยิง API ไปเช็คข้อมูลครับ ตอนนี้ใช้ Mock Data ไปก่อน
      setResult({ ...mockTrackingData, trackingNumber: searchInput.toUpperCase() });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen font-prompt bg-[#f8fafc] pt-20 lg:pt-28 pb-20">
        
        {/* ============================================================================
            🔍 1. SEARCH HERO SECTION (ส่วนค้นหาดีไซน์ล้ำสมัย)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* พื้นหลังลายตาราง (Grid Pattern) แบจางๆ ให้ดูมีความเป็น Tech / Logistics */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.3)] mb-8 rotate-3">
              <i className="fas fa-box-tracking text-white text-4xl -rotate-3"></i>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
              ระบบติดตามสถานะพัสดุ <span className="text-[#00e5ff]">Real-Time</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 font-light">
              กรอกหมายเลข Tracking Number ของคุณเพื่อตรวจสอบสถานะการจัดส่งแบบวินาทีต่อวินาที
            </p>

            {/* กล่องค้นหา (Search Box) */}
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur-md opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="กรอกหมายเลขพัสดุ เช่น THN123456789" 
                  className="relative w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e5ff] rounded-full px-8 py-5 text-lg md:text-xl shadow-2xl transition-all uppercase tracking-wider"
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#da251d] to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold rounded-full px-8 md:px-12 flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(218,37,29,0.5)] disabled:opacity-70 disabled:cursor-not-allowed z-10"
                >
                  {isLoading ? (
                    <i className="fas fa-circle-notch fa-spin text-xl"></i>
                  ) : (
                    <>
                      <span className="hidden md:block">ค้นหา</span>
                      <i className="fas fa-search text-lg"></i>
                    </>
                  )}
                </button>
              </div>
              {/* Alert Message กรณีไม่ได้กรอกเลข */}
              {error && (
                <div className="absolute -bottom-10 left-0 w-full text-center text-red-400 text-sm font-bold animate-bounce">
                  <i className="fas fa-exclamation-circle mr-1"></i> {error}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ============================================================================
            📊 2. TRACKING RESULT (แสดงผลการค้นหา)
        ============================================================================ */}
        {result && (
          <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 md:p-10 animate-fade-in-up">
              
              {/* หัวข้อพัสดุ */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <h2 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">หมายเลขพัสดุ / Tracking Number</h2>
                  <div className="text-3xl md:text-4xl font-black text-[#0a2540] tracking-widest">{result.trackingNumber}</div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="font-bold">{result.statusText}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* ฝั่งซ้าย: ข้อมูลพัสดุ และ Progress Bar */}
                <div className="lg:col-span-1 space-y-8">
                  {/* ข้อมูลการจัดส่ง */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-black text-[#0a2540] mb-4 text-lg border-l-4 border-[#00249c] pl-3">ข้อมูลการจัดส่ง</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">บริการ</div>
                        <div className="text-sm font-semibold text-[#0a2540]">{result.serviceType}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">กำหนดส่งโดยประมาณ</div>
                        <div className="text-sm font-black text-red-600 bg-red-50 inline-block px-3 py-1 rounded-md">{result.estimatedDelivery}</div>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1"><i className="fas fa-map-marker-alt text-gray-400 mr-1"></i> ต้นทาง (Origin)</div>
                        <div className="text-sm font-bold text-[#0a2540]">{result.origin}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1"><i className="fas fa-flag-checkered text-gray-400 mr-1"></i> ปลายทาง (Destination)</div>
                        <div className="text-sm font-bold text-[#0a2540]">{result.destination}</div>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">น้ำหนักรวม</div>
                        <div className="text-sm font-bold text-[#0a2540]">{result.weight}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ฝั่งขวา: Timeline ประวัติการเดินทาง */}
                <div className="lg:col-span-2">
                  <h3 className="font-black text-[#0a2540] mb-6 text-lg border-l-4 border-red-500 pl-3">ประวัติการเดินทาง (Tracking History)</h3>
                  
                  <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-8 pb-4">
                    {result.history.map((item, index) => (
                      <div key={item.id} className="relative pl-8 md:pl-10">
                        {/* จุดวงกลม Timeline */}
                        <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${item.bg} ${item.color}`}>
                          <i className={`fas ${item.icon} text-xs`}></i>
                        </div>
                        
                        <div className={`bg-white p-5 rounded-2xl border ${index === 0 ? 'border-blue-100 shadow-md' : 'border-gray-50 shadow-sm'} transition-all hover:shadow-md`}>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                            <span className={`font-black ${index === 0 ? 'text-[#00249c]' : 'text-gray-700'} text-base`}>
                              {item.status}
                            </span>
                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full w-max">
                              {item.date} • {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}