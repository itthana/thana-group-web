'use client';

import { useState, useEffect, FormEvent } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ============================================================================
// 📦 1. Interfaces & Types (โครงสร้างข้อมูล)
// ============================================================================
interface TrackingEvent {
  id: string;
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
  isCompleted: boolean;
}

interface TrackingData {
  trackingNumber: string;
  currentStatus: 'PENDING' | 'PICKED_UP' | 'IN_TRANSIT' | 'CUSTOMS' | 'OUT_FOR_DELIVERY' | 'DELIVERED';
  origin: string;
  destination: string;
  sender: string;
  receiver: string;
  estimatedDelivery: string;
  serviceType: string;
  pieces: number;
  weight: string;
  events: TrackingEvent[];
}

export default function TrackingPage() {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);

  // 🔄 ดึงหมายเลขจาก URL (ถ้าลูกค้าคลิกมาจากหน้าแรก)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('id');
    if (trackId) {
      setSearchInput(trackId);
      handleSearch(trackId);
    }
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  // 📡 ฟังก์ชันค้นหาข้อมูลจาก API หลังบ้าน
  const handleSearch = async (trackingNo: string) => {
    if (!trackingNo.trim()) {
      setErrorMsg('กรุณากรอกหมายเลข Tracking Number');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setTrackingResult(null);

    try {
      // ยิง Request ไปที่ API ของเรา
      const res = await fetch(`/api/tracking?id=${trackingNo}`);
      const data = await res.json();

      if (res.ok) {
        setTrackingResult(data);
      } else {
        // กรณีหาไม่เจอ (เช่น 404)
        setErrorMsg(data.error || 'ไม่พบข้อมูลการจัดส่ง กรุณาตรวจสอบหมายเลข Tracking อีกครั้ง');
      }
    } catch (err: any) {
      setErrorMsg('เกิดข้อผิดพลาดในการเชื่อมต่อระบบอินเทอร์เน็ต');
    } finally {
      setIsLoading(false);
    }
  };

  // ============================================================================
  // 🎨 2. UI Components Helpers (ฟังก์ชันช่วยแสดงผลกราฟิก)
  // ============================================================================
  const steps = [
    { key: 'PENDING', label: 'รับฝาก', icon: 'fa-clipboard-list' },
    { key: 'PICKED_UP', label: 'เข้าระบบ', icon: 'fa-dolly' },
    { key: 'IN_TRANSIT', label: 'ระหว่างขนส่ง', icon: 'fa-truck-fast' },
    { key: 'CUSTOMS', label: 'ศุลกากร', icon: 'fa-file-shield' },
    { key: 'DELIVERED', label: 'จัดส่งสำเร็จ', icon: 'fa-box-check' }
  ];

  const getStepStatus = (current: string, step: string) => {
    const currentIndex = steps.findIndex(s => s.key === current);
    const stepIndex = steps.findIndex(s => s.key === step);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-[110px] sm:pt-[130px] lg:pt-[140px] pb-24">
        
        {/* =========================================
            HEADER & SEARCH BAR
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center mb-8 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-[#00249c]/10 text-[#00249c] text-xs font-bold tracking-widest uppercase mb-4 border border-[#00249c]/20">
              Advanced Track & Trace
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#0a2540] mb-4">
              ระบบติดตามสถานะสินค้า
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              ตรวจสอบสถานะการขนส่งข้ามแดนแบบ Real-time ตลอด 24 ชั่วโมง <br className="hidden md:block"/>
              (ทดลองค้นหาด้วยรหัส: <span className="font-bold text-[#ff0000]">THN-12345</span>)
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,36,156,0.08)] border border-gray-100 p-4 md:p-6 mx-auto max-w-3xl animate-slide-up">
            <form onSubmit={onSubmit} className="relative flex flex-col sm:flex-row items-center w-full gap-4">
              <div className="relative flex-1 w-full flex items-center bg-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden focus-within:border-[#00249c] transition-all duration-300">
                <div className="pl-6 text-gray-400">
                  <i className="fas fa-barcode text-xl"></i>
                </div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="กรอกหมายเลข Tracking (เช่น THN-...)" 
                  className="w-full px-4 py-4 bg-transparent outline-none text-gray-800 font-bold uppercase placeholder:normal-case placeholder:font-normal"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full sm:w-auto bg-[#ff0000] hover:bg-red-700 text-white font-bold h-full min-h-[60px] px-10 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isLoading ? <i className="fas fa-circle-notch fa-spin text-xl"></i> : <i className="fas fa-search text-xl"></i>}
                <span>ค้นหา</span>
              </button>
            </form>

            {/* Alert Messages */}
            {errorMsg && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3 font-medium text-sm">
                <i className="fas fa-exclamation-circle text-lg"></i> {errorMsg}
              </div>
            )}
          </div>
        </section>

        {/* =========================================
            TRACKING RESULT (แสดงเมื่อค้นหาเจอ)
        ========================================= */}
        {trackingResult && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            
            {/* 1. Overview Card */}
            <div className="bg-white rounded-t-3xl shadow-md border border-gray-100 p-6 md:p-8 border-b-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Tracking Number</h2>
                  <div className="text-2xl md:text-3xl font-black text-[#00249c] flex items-center gap-3">
                    {trackingResult.trackingNumber}
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live
                    </span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Estimated Delivery</h2>
                  <div className="text-xl font-bold text-gray-800">
                    <i className="far fa-calendar-alt text-[#ff0000] mr-2"></i>{trackingResult.estimatedDelivery}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#00249c] shrink-0">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">ต้นทาง (Origin)</div>
                    <div className="font-bold text-[#0a2540]">{trackingResult.origin}</div>
                    <div className="text-sm text-gray-500 mt-1">{trackingResult.sender}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#ff0000] shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase mb-1">ปลายทาง (Destination)</div>
                    <div className="font-bold text-[#0a2540]">{trackingResult.destination}</div>
                    <div className="text-sm text-gray-500 mt-1">{trackingResult.receiver}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Visual Milestone (Stepper) */}
            <div className="bg-[#0a2540] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex justify-between items-center relative">
                  
                  {/* เส้นพื้นหลังเชื่อมจุด */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2 z-0 hidden md:block"></div>
                  
                  {/* วนลูปสร้างจุดสถานะ */}
                  {steps.map((step, index) => {
                    const status = getStepStatus(trackingResult.currentStatus, step.key);
                    return (
                      <div key={index} className="relative z-10 flex flex-col items-center gap-3 w-1/5">
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                          status === 'completed' ? 'bg-[#00e5ff] border-[#00e5ff] text-[#0a2540]' :
                          status === 'active' ? 'bg-[#ff0000] border-gray-900 text-white shadow-[0_0_15px_rgba(255,0,0,0.6)] animate-pulse' :
                          'bg-gray-800 border-gray-700 text-gray-500'
                        }`}>
                          <i className={`fas ${step.icon} text-sm md:text-xl`}></i>
                        </div>
                        <div className={`text-[10px] md:text-sm font-bold text-center ${
                          status === 'completed' ? 'text-[#00e5ff]' :
                          status === 'active' ? 'text-white' :
                          'text-gray-500'
                        }`}>
                          {step.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Shipping Details & Log History */}
            <div className="bg-white rounded-b-3xl shadow-xl border border-gray-100 p-6 md:p-8">
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">ประเภทบริการ</div>
                  <div className="font-bold text-gray-800 text-sm">{trackingResult.serviceType}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">จำนวนชิ้น</div>
                  <div className="font-bold text-gray-800 text-sm">{trackingResult.pieces} Pieces</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">น้ำหนักรวม</div>
                  <div className="font-bold text-gray-800 text-sm">{trackingResult.weight}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">อัปเดตล่าสุด</div>
                  <div className="font-bold text-gray-800 text-sm text-[#00249c]">{trackingResult.events[0]?.time} น.</div>
                </div>
              </div>

              <h3 className="text-lg font-black text-[#0a2540] mb-6 flex items-center gap-2">
                <i className="fas fa-list-ul text-[#ff0000]"></i> ประวัติการเดินทาง (Travel History)
              </h3>

              <div className="relative border-l-2 border-gray-200 ml-3 md:ml-4 space-y-8">
                {trackingResult.events.map((event, index) => (
                  <div key={event.id} className="relative pl-6 md:pl-8">
                    {/* จุดไข่ปลาบนเส้น */}
                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${index === 0 ? 'bg-[#ff0000] shadow-[0_0_10px_rgba(255,0,0,0.4)]' : 'bg-gray-300'}`}></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
                      <div>
                        <div className={`font-bold text-base mb-1 ${index === 0 ? 'text-[#0a2540]' : 'text-gray-700'}`}>
                          {event.description}
                        </div>
                        <div className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                          <i className="fas fa-location-dot text-gray-400"></i> {event.location}
                        </div>
                      </div>
                      <div className="shrink-0 text-left md:text-right mt-2 md:mt-0 bg-gray-50 md:bg-transparent p-2 md:p-0 rounded-lg">
                        <div className="text-sm font-bold text-gray-800">{event.date}</div>
                        <div className="text-xs text-gray-500">{event.time} น.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </section>
        )}

      </main>

      <Footer />
    </>
  );
}