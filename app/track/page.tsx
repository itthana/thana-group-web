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
      const response = await fetch(`/api/tracking?trackingNumber=${searchInput.trim().toUpperCase()}`);
      const jsonRes = await response.json();

      if (!response.ok) {
        throw new Error(jsonRes.error || 'ไม่พบข้อมูลพัสดุในระบบ');
      }

      if (jsonRes.success && jsonRes.data) {
        setResult(jsonRes.data);
      } else {
        throw new Error('โครงสร้างข้อมูลไม่ถูกต้อง');
      }
      
    } catch (err: any) {
      setError(err.message || 'ไม่พบหมายเลขพัสดุนี้ในระบบ กรุณาตรวจสอบอีกครั้ง');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  // ฟังก์ชันแปลงรูปแบบวันที่ให้หรูหราอ่านง่ายแบบสากลภาษาไทย
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

  // ฟังก์ชันวิเคราะห์สถานะเพื่อดึงไอคอน สี และความคืบหน้า (Progress) มาแสดงผลให้ล้ำสมัย
  const getTrackingStatusMeta = (histories: TrackingHistoryItem[]) => {
    if (histories.length === 0) {
      return { step: 1, text: 'รับพัสดุเข้าระบบแล้ว', icon: 'fa-box', color: 'text-blue-500', bg: 'bg-blue-50', badgeBg: 'bg-blue-500' };
    }
    
    // ดึงสถานะล่าสุด (อันบนสุด) มาวิเคราะห์
    const latestStatus = histories[0].status.toLowerCase();
    
    if (latestStatus.includes('สำเร็จ') || latestStatus.includes('delivered') || latestStatus.includes('รับแล้ว')) {
      return { step: 5, text: 'จัดส่งสำเร็จ (Delivered)', icon: 'fa-house-circle-check', color: 'text-green-600', bg: 'bg-green-50', badgeBg: 'bg-green-500' };
    }
    if (latestStatus.includes('นำจ่าย') || latestStatus.includes('delivery') || latestStatus.includes('จัดส่ง')) {
      return { step: 4, text: 'พัสดุกำลังนำจ่าย (Out for Delivery)', icon: 'fa-truck-ramp-box', color: 'text-amber-600', bg: 'bg-amber-50', badgeBg: 'bg-amber-500' };
    }
    if (latestStatus.includes('ด่าน') || latestStatus.includes('ศุลกากร') || latestStatus.includes('customs') || latestStatus.includes('ระหว่างประเทศ')) {
      return { step: 3, text: 'กำลังผ่านพิธีการศุลกากร / ข้ามแดน', icon: 'fa-file-signature', color: 'text-sky-600', bg: 'bg-sky-50', badgeBg: 'bg-sky-500' };
    }
    if (latestStatus.includes('ศูนย์') || latestStatus.includes('คลัง') || latestStatus.includes('hub') || latestStatus.includes('transit')) {
      return { step: 2, text: 'อยู่ระหว่างการขนส่ง (In Transit)', icon: 'fa-truck-fast', color: 'text-blue-600', bg: 'bg-blue-50', badgeBg: 'bg-blue-600' };
    }
    
    return { step: 1, text: histories[0].status, icon: 'fa-box-open', color: 'text-indigo-600', bg: 'bg-indigo-50', badgeBg: 'bg-indigo-600' };
  };

  const statusMeta = result ? getTrackingStatusMeta(result.histories) : null;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen font-prompt bg-slate-50 pt-20 lg:pt-28 pb-24">
        
        {/* ============================================================================
            🔍 1. SEARCH HERO SECTION (Glassmorphism หรูหราล้ำยุค)
        ============================================================================ */}
        <section className="relative bg-[#0a2540] pt-24 pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* เอฟเฟกต์แสงเรืองแสง (Neon Glow Overlays) ด้านหลัง */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl flex items-center justify-center shadow-[0_10px_30px_rgba(239,68,68,0.3)] mb-8 rotate-3 transition-transform duration-500 hover:rotate-12">
              <i className="fas fa-box-tracking text-white text-4xl -rotate-3"></i>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              ระบบติดตามพัสดุอัจฉริยะ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">THANA TRACK</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              เชื่อมโยงข้อมูลจริงจากคลังสินค้าและด่านศุลกากร ไทย-ลาว แบบวินาทีต่อวินาที
            </p>

            {/* กล่องค้นหาหรูหราโปร่งแสง */}
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-600 rounded-full blur-xl opacity-35 group-hover:opacity-60 transition-opacity duration-500"></div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="ป้อนหมายเลขพัสดุของคุณ เช่น THNXXXXXX" 
                  className="relative w-full bg-white/10 backdrop-blur-2xl border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e5ff] focus:ring-4 focus:ring-[#00e5ff]/20 rounded-full px-8 py-5 text-xl shadow-2xl transition-all uppercase tracking-widest text-center md:text-left font-bold"
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black rounded-full px-8 md:px-12 flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,36,156,0.5)] disabled:opacity-70 disabled:cursor-not-allowed z-10 text-lg group-hover:scale-[1.01]"
                >
                  {isLoading ? (
                    <i className="fas fa-circle-notch fa-spin text-xl"></i>
                  ) : (
                    <>
                      <span className="hidden md:block">ตรวจสอบ</span>
                      <i className="fas fa-arrow-right text-base animate-pulse"></i>
                    </>
                  )}
                </button>
              </div>
              {error && (
                <div className="absolute -bottom-12 left-0 w-full text-center text-red-400 text-base font-bold bg-red-500/10 backdrop-blur-md py-2 rounded-xl border border-red-500/20 max-w-md mx-auto right-0">
                  <i className="fas fa-exclamation-circle mr-1.5 animate-shake"></i> {error}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ============================================================================
            📊 2. WORLD-CLASS UI TIMELINE & TRACKING STEPPER (แสดงผลหลังเจอข้อมูล)
        ============================================================================ */}
        {result && statusMeta && (
          <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
            
            {/* 👑 การ์ดแสดงผลหลักดีไซน์พรีเมียมระดับสากล */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(10,37,64,0.07)] border border-gray-100 p-6 md:p-12 space-y-12">
              
              {/* บาร์หัวข้อหลัก */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-100 pb-8 gap-6">
                <div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-md mb-2 inline-block">Official Tracking Node</span>
                  <div className="text-3xl md:text-5xl font-black text-[#0a2540] tracking-widest flex items-center gap-3">
                    {result.trackingNumber}
                    <button onClick={() => { navigator.clipboard.writeText(result.trackingNumber); alert('คัดลอกเลขพัสดุแล้ว'); }} className="text-gray-400 hover:text-blue-600 text-lg md:text-xl transition-colors" title="คัดลอกลิงก์"><i className="far fa-copy"></i></button>
                  </div>
                </div>
                
                <div className={`${statusMeta.bg} ${statusMeta.color} border border-current/20 px-8 py-4 rounded-2xl flex items-center gap-4 shadow-sm shrink-0 w-full lg:w-auto`}>
                  <div className={`w-12 h-12 ${statusMeta.badgeBg} text-white rounded-xl flex items-center justify-center text-xl shadow-md`}>
                    <i className={`fas ${statusMeta.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">Current Logistics Status</div>
                    <div className="text-lg font-black">{statusMeta.text}</div>
                  </div>
                </div>
              </div>

              {/* 🗺️ STEPPER COMPONENT (แถบสถานะการเดินทาง 4 ขั้นระดับสากล) */}
              <div className="py-4 px-2 md:px-6 bg-slate-50 rounded-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-transparent opacity-20"></div>
                
                <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
                  {/* Step 1 */}
                  <div className="flex flex-row md:flex-col items-center flex-1 text-left md:text-center gap-4 md:gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white ${statusMeta.step >= 1 ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-4 ring-blue-100' : 'bg-gray-200 text-gray-400'}`}><i className="fas fa-box-open"></i></div>
                    <div>
                      <h4 className={`font-black text-sm ${statusMeta.step >= 1 ? 'text-[#0a2540]' : 'text-gray-400'}`}>1. เข้ารับพัสดุ</h4>
                      <p className="text-xs text-gray-400">Picked Up</p>
                    </div>
                  </div>
                  {/* Line 1 */}
                  <div className="hidden md:block flex-1 h-1 bg-gray-200 my-5 relative"><div className={`absolute top-0 left-0 h-full bg-blue-600 transition-all duration-1000 ${statusMeta.step >= 2 ? 'w-full' : 'w-0'}`}></div></div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-row md:flex-col items-center flex-1 text-left md:text-center gap-4 md:gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white ${statusMeta.step >= 2 ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-4 ring-blue-100' : 'bg-gray-200 text-gray-400'}`}><i className="fas fa-truck-moving"></i></div>
                    <div>
                      <h4 className={`font-black text-sm ${statusMeta.step >= 2 ? 'text-[#0a2540]' : 'text-gray-400'}`}>2. อยู่ระหว่างขนส่ง</h4>
                      <p className="text-xs text-gray-400">In Transit</p>
                    </div>
                  </div>
                  {/* Line 2 */}
                  <div className="hidden md:block flex-1 h-1 bg-gray-200 my-5 relative"><div className={`absolute top-0 left-0 h-full bg-blue-600 transition-all duration-1000 ${statusMeta.step >= 3 ? 'w-full' : 'w-0'}`}></div></div>

                  {/* Step 3 */}
                  <div className="flex flex-row md:flex-col items-center flex-1 text-left md:text-center gap-4 md:gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white ${statusMeta.step >= 3 ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-4 ring-blue-100' : 'bg-gray-200 text-gray-400'}`}><i className="fas fa-passport"></i></div>
                    <div>
                      <h4 className={`font-black text-sm ${statusMeta.step >= 3 ? 'text-[#0a2540]' : 'text-gray-400'}`}>3. ศุลกากร / ข้ามแดน</h4>
                      <p className="text-xs text-gray-400">Customs Clearance</p>
                    </div>
                  </div>
                  {/* Line 3 */}
                  <div className="hidden md:block flex-1 h-1 bg-gray-200 my-5 relative"><div className={`absolute top-0 left-0 h-full bg-blue-600 transition-all duration-1000 ${statusMeta.step >= 4 ? 'w-full' : 'w-0'}`}></div></div>

                  {/* Step 4 */}
                  <div className="flex flex-row md:flex-col items-center flex-1 text-left md:text-center gap-4 md:gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-white ${statusMeta.step >= 5 ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white ring-4 ring-green-100' : 'bg-gray-200 text-gray-400'}`}><i className="fas fa-house-circle-check"></i></div>
                    <div>
                      <h4 className={`font-black text-sm ${statusMeta.step >= 5 ? 'text-green-600' : 'text-gray-400'}`}>4. จัดส่งสำเร็จ</h4>
                      <p className="text-xs text-gray-400">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🛤️ TIMELINE SECTION (เชื่อมต่อฐานข้อมูล Neon ตัวจริง) */}
              <div className="w-full">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-2.5 h-6 bg-red-500 rounded-full shadow-md"></div>
                  <h3 className="font-black text-[#0a2540] text-xl tracking-tight">ประวัติการจัดส่งและสถานะอย่างละเอียด</h3>
                </div>
                
                {result.histories.length === 0 ? (
                  <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400 font-medium">
                    <i className="fas fa-folder-open text-5xl mb-4 block text-gray-300"></i>
                    พัสดุลงทะเบียนเข้าระบบหลักสำเร็จ แต่ยังไม่มีประวัติการเคลื่อนย้ายสินค้าในขณะนี้
                  </div>
                ) : (
                  <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-10 pb-4">
                    {result.histories.map((item, index) => {
                      const isLatest = index === 0;
                      // วิเคราะห์ไอคอนย่อยของการ์ดแต่ละใบเพื่อให้ไทม์ไลน์ดูมีชีวิตชีวา
                      const itemMeta = getTrackingStatusMeta([item]);
                      
                      return (
                        <div key={item.id} className="relative pl-8 md:pl-12 group animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                          
                          {/* บับเบิ้ลวงกลมซ้ายมือหรูหราไล่เฉดสี */}
                          <div className={`absolute -left-[17px] md:-left-[21px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 z-10 
                            ${isLatest ? 'bg-gradient-to-tr from-blue-600 to-blue-700 text-white ring-4 ring-blue-100 scale-110' : 'bg-white text-gray-400 border-gray-200'}`}
                          >
                            <i className={`fas ${itemMeta.icon} text-xs md:text-sm`}></i>
                          </div>
                          
                          {/* กล่องการ์ดประวัติ (Glassmorphism Effect จางๆ ล้อมกรอบสวยงาม) */}
                          <div className={`bg-white p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-0.5
                            ${isLatest 
                              ? 'border-blue-100 shadow-[0_10px_30px_rgba(37,99,235,0.06)] bg-gradient-to-r from-blue-50/20 to-white ring-1 ring-blue-50' 
                              : 'border-gray-100 shadow-sm hover:shadow-md'}`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                              <div className="space-y-2 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className={`font-black tracking-wide ${isLatest ? 'text-blue-700 text-lg md:text-xl' : 'text-[#0a2540] text-base md:text-lg'}`}>
                                    {item.status}
                                  </h4>
                                  {isLatest && (
                                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">LATEST</span>
                                  )}
                                </div>
                                
                                <div className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-gray-400 text-xs"><i className="fas fa-location-dot"></i></div>
                                  <span>สถานที่: <span className="text-gray-800">{item.location}</span></span>
                                </div>
                                
                                {item.description && (
                                  <div className="text-xs text-gray-500 bg-slate-50 border border-slate-100 p-3 rounded-2xl font-medium leading-relaxed">
                                    <span className="font-bold text-gray-700 block mb-0.5"><i className="fas fa-clipboard text-gray-400 mr-1"></i> รายละเอียด / รายงานพิเศษ:</span>
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              
                              {/* กล่องวันที่ สไตล์มินิมอลลิสต์ เรียบหรูดูแพง */}
                              <div className="text-xs font-bold text-gray-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl h-max w-max shrink-0 shadow-inner flex items-center gap-1.5">
                                <i className="far fa-clock text-blue-500"></i> {formatThaiDate(item.createdAt)}
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