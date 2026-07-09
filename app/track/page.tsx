'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// นิยามประเภทข้อมูลให้ตรงตามโครงสร้าง Prisma API ของพี่
interface TrackingHistoryItem {
  id: string;
  status: string;
  location: string;
  description?: string;
  createdAt: string;
}

interface TrackingResultData {
  trackingNumber: string;
  histories: TrackingHistoryItem[];
}

export default function TrackAndTracePage() {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResultData | null>(null);
  const [error, setError] = useState('');

  // ฟังก์ชันยิงเข้า API จริงที่พี่เตรียมไว้ (GET /api/tracking?trackingNumber=...)
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      setError('กรุณาระบุหมายเลขติดตามพัสดุ (Tracking Number)');
      setResult(null);
      return;
    }

    setError('');
    setIsLoading(true);
    setResult(null);

    try {
      // เรียกใช้งานผ่าน Query Parameter ตามเงื่อนไขของ API: searchParams.get('trackingNumber')
      const response = await fetch(`/api/tracking?trackingNumber=${searchInput.trim().toUpperCase()}`);
      const jsonRes = await response.json();

      if (!response.ok) {
        // หากส่ง 404 หรือข้อผิดพลาดอื่นๆ กลับมาจากหลังบ้าน ให้ดึงข้อความ Error มาแสดง
        throw new Error(jsonRes.error || 'ไม่พบข้อมูลพัสดุในระบบ');
      }

      if (jsonRes.success && jsonRes.data) {
        setResult(jsonRes.data);
      } else {
        throw new Error('โครงสร้างข้อมูลไม่ถูกต้อง');
      }
      
    } catch (err: any) {
      setError(err.message || 'ไม่พบหมายเลขพัสดุนี้ในระบบ หรือเกิดข้อผิดพลาดในการเชื่อมต่อ');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  // ฟังก์ชันแปลงรูปแบบวันที่ที่มาจากฐานข้อมูลให้แสดงผลอ่านง่ายเป็นภาษาไทย
  const formatThaiDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('th-TH', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' น.';
    } catch (e) {
      return dateString;
    }
  };

  // ฟังก์ชันเลือก Icon และคลาสสีให้เหมาะสมกับข้อความสถานะแต่ละแบบอัตโนมัติ
  const getStatusConfig = (status: string, isLatest: boolean) => {
    const text = status.toLowerCase();
    if (text.includes('สำเร็จ') || text.includes('delivered') || text.includes('รับแล้ว')) {
      return { icon: 'fa-box-check', color: 'text-green-600', bg: 'bg-green-100' };
    }
    if (text.includes('จัดส่ง') || text.includes('delivery') || text.includes('นำจ่าย')) {
      return { icon: 'fa-truck-ramp-box', color: 'text-amber-600', bg: 'bg-amber-100' };
    }
    if (text.includes('ด่าน') || text.includes('ศุลกากร') || text.includes('customs')) {
      return { icon: 'fa-file-signature', color: 'text-sky-600', bg: 'bg-sky-100' };
    }
    // ค่าเริ่มต้นหากเป็นสถานะทั่วไป
    return isLatest 
      ? { icon: 'fa-truck-fast', color: 'text-blue-600', bg: 'bg-blue-100' }
      : { icon: 'fa-circle-dot', color: 'text-gray-400', bg: 'bg-gray-100' };
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen font-prompt bg-[#f8fafc] pt-20 lg:pt-28 pb-20">
        
        {/* ============================================================================
            🔍 1. SEARCH HERO SECTION
        ============================================================================ */}
        <section className="relative bg-[#0a2540] pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.3)] mb-8 rotate-3">
              <i className="fas fa-box-tracking text-white text-4xl -rotate-3"></i>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
              ระบบติดตามสถานะพัสดุ <span className="text-[#00e5ff]">Real-Time</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 font-light">
              กรอกหมายเลข Tracking Number ของคุณเพื่อตรวจสอบสถานะการจัดส่งข้ามแดนจากระบบฐานข้อมูลกลาง
            </p>

            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur-md opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="กรอกหมายเลขพัสดุ เช่น THN12345678" 
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
              {error && (
                <div className="absolute -bottom-10 left-0 w-full text-center text-red-400 text-sm font-bold animate-bounce">
                  <i className="fas fa-exclamation-circle mr-1"></i> {error}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ============================================================================
            📊 2. TRACKING RESULT (แสดงประวัติจากฐานข้อมูลจริง)
        ============================================================================ */}
        {result && (
          <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 md:p-10 animate-fade-in-up">
              
              {/* บาร์หัวข้อ */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <h2 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">หมายเลขพัสดุ / Tracking Number</h2>
                  <div className="text-3xl md:text-4xl font-black text-[#0a2540] tracking-widest">{result.trackingNumber}</div>
                </div>
                {result.histories.length > 0 && (
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="font-bold">สถานะปัจจุบัน: {result.history[0]?.status || result.histories[0].status}</span>
                  </div>
                )}
              </div>

              {/* ส่วนประวัติการเดินทาง */}
              <div className="w-full">
                <h3 className="font-black text-[#0a2540] mb-8 text-lg border-l-4 border-red-500 pl-3">เส้นทางและสถานะพัสดุแบบละเอียด (Tracking Timeline)</h3>
                
                {result.histories.length === 0 ? (
                  <div className="text-center py-10 text-gray-400 font-medium">
                    <i className="fas fa-folder-open text-4xl mb-3 block"></i>
                    พัสดุเข้าระบบแล้ว แต่ยังไม่มีการบันทึกประวัติสถานะการเดินทาง
                  </div>
                ) : (
                  <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-8 pb-4">
                    {result.histories.map((item, index) => {
                      const isLatest = index === 0;
                      const config = getStatusConfig(item.status, isLatest);
                      
                      return (
                        <div key={item.id} className="relative pl-8 md:pl-10">
                          {/* บับเบิ้ลไอคอนจำแนกสีตามสถานะดึงดูดสายตา */}
                          <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${config.bg} ${config.color} ${isLatest ? 'scale-110 ring-4 ring-blue-50' : ''}`}>
                            <i className={`fas ${config.icon} text-xs`}></i>
                          </div>
                          
                          <div className={`bg-white p-5 rounded-2xl border ${isLatest ? 'border-blue-100 shadow-md ring-1 ring-blue-50' : 'border-gray-50 shadow-sm'} transition-all hover:shadow-md`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="space-y-1">
                                <div className={`font-black ${isLatest ? 'text-[#00249c] text-lg' : 'text-gray-700 text-base'}`}>
                                  {item.status}
                                </div>
                                <div className="text-sm text-gray-500 flex items-center gap-1.5 font-medium">
                                  <i className="fas fa-location-dot text-gray-400"></i> สถานที่: {item.location}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-gray-400 mt-1 bg-slate-50 p-2.5 rounded-lg italic">
                                    หมายเหตุ: {item.description}
                                  </div>
                                )}
                              </div>
                              <div className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full h-max w-max shrink-0 shadow-inner">
                                <i className="far fa-clock mr-1"></i> {formatThaiDate(item.createdAt)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}