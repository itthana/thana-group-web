'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// สมมติว่ามีคอมโพเนนต์เหล่านี้พร้อมใช้งาน
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WelcomeScreen from '../components/layout/WelcomeScreen';

const heroSlides = [
  {
    id: 1,
    title: 'ยกระดับธุรกิจคุณด้วย',
    highlight: 'ขนส่งด่วน ไทย-ลาว',
    suffix: 'ระดับสากล',
    subtitle: 'เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ ครอบคลุมทุกพื้นที่ด้วยกองทัพรถบรรทุกประสิทธิภาพสูง พร้อมระบบติดตามสถานะอัจฉริยะแบบ Real-time ตลอด 24 ชั่วโมง',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop',
    bgPosition: 'center 60%'
  }
];

// ข้อมูลจำลองพัสดุสำหรับค้นหา
const mockDatabase = [
  { 
    tracking: 'THN2026THLA001', 
    sender: 'คุณสมชาย', receiver: 'คุณบัวคำ', origin: 'กรุงเทพฯ', destination: 'เวียงจันทน์', 
    status: 'กำลังขนส่ง', 
    history: [
      { status: 'รอรับเข้าระบบ', date: '10/07/2026 14:00', location: 'กรุงเทพฯ' }, 
      { status: 'กำลังขนส่ง', date: '11/07/2026 09:30', location: 'ระหว่างทางไป หนองคาย' }
    ] 
  },
];

// 7 บริการหลักจากเว็บเดิม แปลงโฉมสไตล์หรูหรา
const ourServices = [
  { id: 1, title: 'ขนส่งระหว่างประเทศ', icon: 'fa-globe-asia', color: 'from-blue-500 to-indigo-600', desc: 'บริการขนส่งสินค้าข้ามแดน ไทย-ลาว ที่ได้มาตรฐานความปลอดภัยรวดเร็วระดับสากล' },
  { id: 2, title: 'ขนส่งภายในประเทศ', icon: 'fa-truck-fast', color: 'from-amber-500 to-orange-600', desc: 'กระจายสินค้าครอบคลุมทุกภูมิภาคทั่วประเทศ ด้วยกองทัพรถบรรทุกที่ทันสมัยและปลอดภัย' },
  { id: 3, title: 'นำเข้าและส่งออก', icon: 'fa-ship', color: 'from-cyan-500 to-blue-600', desc: 'จัดการระบบนำเข้าและส่งออกแบบครบวงจร ทั้งทางบก ทางน้ำ และทางอากาศ อย่างมืออาชีพ' },
  { id: 4, title: 'รับสั่งสินค้าออนไลน์', icon: 'fa-cart-arrow-down', color: 'from-purple-500 to-pink-600', desc: 'บริการสั่งซื้อสินค้าจากต่างประเทศ พร้อมเคลียร์เอกสารนำเข้าและจัดส่งตรงถึงหน้าบ้านคุณ' },
  { id: 5, title: 'ชิปปิ้งครบวงจร ตรวจปล่อย', icon: 'fa-file-signature', color: 'from-teal-500 to-emerald-600', desc: 'ดำเนินพิธีการศุลกากรและตรวจปล่อยสินค้าอย่างถูกต้อง รวดเร็ว ลดปัญหาความล่าช้าที่หน้าด่าน' },
  { id: 6, title: 'จำหน่ายสินค้าอุปโภคบริโภค', icon: 'fa-store', color: 'from-rose-500 to-red-600', desc: 'จัดจำหน่ายและบริการประเมินราคาสินค้าอุปโภคบริโภคล็อตใหญ่ คุณภาพดี ในราคามิตรภาพ' },
  { id: 7, title: 'บริการส่งด่วนพิเศษ 1 วัน', icon: 'fa-bolt', color: 'from-yellow-400 to-orange-500', desc: 'บริการกระจายพัสดุด่วนพิเศษแบบ Same Day / Next Day ทันใจ ถึงมือผู้รับภายใน 24 ชั่วโมง' },
];

// ตัวเลขสถิติเพื่อความน่าเชื่อถือระดับสากล
const companyStats = [
  { id: 1, value: '500,000+', label: 'พัสดุจัดส่งสำเร็จ', icon: 'fa-box-open' },
  { id: 2, value: '150+', label: 'รถบรรทุกในเครือข่าย', icon: 'fa-truck' },
  { id: 3, value: '99.8%', label: 'คะแนนความพึงพอใจ', icon: 'fa-star' },
  { id: 4, value: '24/7', label: 'การสนับสนุนลูกค้า', icon: 'fa-headset' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setError('');
    setResult(null);

    setTimeout(() => {
      const found = mockDatabase.find(p => p.tracking.toUpperCase() === searchQuery.trim().toUpperCase());
      if (found) {
        setResult(found);
      } else {
        setError('ไม่พบหมายเลขพัสดุนี้ในระบบ โปรดตรวจสอบความถูกต้องอีกครั้ง');
      }
      setIsSearching(false);
    }, 1200);
  };

  return (
    <>
      <WelcomeScreen />
      <Navbar />
      
      {/* ============================================================================
          🌟 1. แถบ LIVE UPDATES สไตล์กระดานหุ้นสุดโก้ พร้อมเอฟเฟกต์ Marquee แบบสมูท
      ============================================================================ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="bg-[#07111e] border-b border-white/5 text-gray-400 text-xs py-3 overflow-hidden relative z-30 flex items-center shadow-lg">
        <div className="bg-[#07111e] px-5 font-black text-[#00e5ff] z-10 flex items-center gap-2 border-r border-white/10 uppercase tracking-widest whitespace-nowrap">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Live Market Data
        </div>
        
        {/* ตัวหนังสือวิ่ง (Marquee) */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <div className="animate-marquee-smooth flex items-center gap-10 px-6 font-medium tracking-wide">
              {/* ชุดที่ 1 */}
              <div className="flex items-center gap-10 px-4">
                <span className="flex items-center gap-2"><i className="fas fa-gas-pump text-cyan-400"></i> FSC (Fuel Surcharge): <span className="text-white font-bold">24.5%</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-money-bill-transfer text-emerald-400"></i> USD/THB: <span className="text-white font-bold">35.42</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-coins text-yellow-400"></i> CNY/THB: <span className="text-white font-bold">4.95</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-money-bill-wave text-sky-400"></i> THB/LAK: <span className="text-white font-bold">620.50</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-anchor text-amber-400"></i> BKK Port: <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">MODERATE TRAFFIC</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-bridge text-blue-400"></i> ด่านหนองคาย: <span className="text-green-400 bg-green-500/10 px-2 py-0.5 rounded text-[10px] font-bold">NORMAL</span></span>
              </div>
              {/* ชุดที่ 2 (เพื่อวิ่งลูป) */}
              <div className="flex items-center gap-10 px-4">
                <span className="flex items-center gap-2"><i className="fas fa-gas-pump text-cyan-400"></i> FSC (Fuel Surcharge): <span className="text-white font-bold">24.5%</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-money-bill-transfer text-emerald-400"></i> USD/THB: <span className="text-white font-bold">35.42</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-coins text-yellow-400"></i> CNY/THB: <span className="text-white font-bold">4.95</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-money-bill-wave text-sky-400"></i> THB/LAK: <span className="text-white font-bold">620.50</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-anchor text-amber-400"></i> BKK Port: <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">MODERATE TRAFFIC</span></span>
                <span className="flex items-center gap-2"><i className="fas fa-bridge text-blue-400"></i> ด่านหนองคาย: <span className="text-green-400 bg-green-500/10 px-2 py-0.5 rounded text-[10px] font-bold">NORMAL</span></span>
              </div>
            </div>
        </div>
      </div>

      <main className="min-h-screen font-prompt bg-slate-900 text-white">
        
        {/* ============================================================================
            🌟 2. PREMIUM HERO BANNER
        ============================================================================ */}
        <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-[#0a192f]">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              
              {/* Overlay ไล่เฉดสีลึกมีมิติ */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#060c18] via-[#0a192f]/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              
              <img 
                src={slide.image} 
                alt={slide.highlight} 
                className="w-full h-full object-cover scale-100 animate-slow-zoom"
                style={{ objectPosition: slide.bgPosition }}
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                  
                  {/* Badge บนหัวข้อ */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-2xl animate-fade-in-up">
                    <span className="h-2 w-2 rounded-full bg-[#e62e2d] animate-pulse"></span>
                    Thana Group Logistics Network
                  </div>
                  
                  {/* หัวข้อขนาดใหญ่ดึงดูดสายตา */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.05] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {slide.title} <br />
                    <span className="bg-gradient-to-r from-[#e62e2d] to-orange-500 bg-clip-text text-transparent">{slide.highlight}</span> <br />
                    {slide.suffix}
                  </h1>
                  
                  {/* คำโปรยพร้อมขีดแดงหรูหรา */}
                  <div className="border-l-4 border-[#e62e2d] pl-6 mb-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  {/* ปุ่มกด Call to Action */}
                  <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a href="#track-section" className="bg-gradient-to-r from-[#e62e2d] to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-3 text-base group">
                      <i className="fas fa-search group-hover:scale-110 transition-transform"></i> ติดตามสถานะพัสดุ
                    </a>
                    <a href="#services-section" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-base">
                      บริการของเรา <i className="fas fa-arrow-right text-xs text-slate-400"></i>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* ดีไซน์เส้นโค้งด้านล่างตัดเข้าส่วนถัดไป */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V120H1200V0C958.33,90,708.33,90,0,0Z" fill="#0f172a"></path>
            </svg>
          </div>
        </section>

        {/* ============================================================================
            🌟 3. โซนติดตามพัสดุอัจฉริยะ (THANA TRACK แบบ GLASSMORPHISM)
        ============================================================================ */}
        <section id="track-section" className="py-24 bg-[#0f172a] relative overflow-hidden">
          {/* เอฟเฟกต์ไฟเรืองแสงพื้นหลัง */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-[#e62e2d] rounded-2xl mx-auto mb-6 shadow-xl shadow-red-500/10 flex items-center justify-center animate-bounce">
              <i className="fas fa-location-crosshairs text-2xl text-white"></i>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              ระบบติดตามพัสดุอัจฉริยะ <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-black">THANA TRACK</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-sm md:text-base font-medium">
              เชื่อมโยงข้อมูลโดยตรงจากคลังสินค้าและด่านศุลกากร ไทย-ลาว อัปเดตสถานะแม่นยำนาทีต่อนาที
            </p>

            {/* ฟอร์มค้นหาสุดล้ำแบบกระจกฝ้าเรืองแสง */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#e62e2d] to-blue-600 rounded-full blur-lg opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
              
              <div className="relative flex items-center bg-slate-900/90 border border-white/10 p-2.5 rounded-full shadow-2xl backdrop-blur-xl transition-all focus-within:border-blue-500 focus-within:bg-slate-950">
                <i className="fas fa-box absolute left-6 text-slate-500 text-xl"></i>
                <input 
                  type="text" 
                  placeholder="ป้อนหมายเลขพัสดุของคุณ เช่น THNXXXXXXX" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-4 pl-14 pr-44 text-lg font-black text-white placeholder-slate-600 focus:outline-none uppercase tracking-widest"
                />
                <button 
                  type="submit" 
                  disabled={isSearching}
                  className="absolute right-2.5 top-2.5 bottom-2.5 bg-gradient-to-r from-[#00249c] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 rounded-full font-black transition-all flex items-center gap-2 shadow-lg disabled:from-slate-700 disabled:to-slate-800"
                >
                  {isSearching ? <i className="fas fa-circle-notch fa-spin"></i> : <i className="fas fa-magnifying-glass"></i>}
                  <span>{isSearching ? 'กำลังค้นหา...' : 'ตรวจสอบ'}</span>
                </button>
              </div>
              <p className="text-left text-xs text-slate-500 mt-4 ml-6 font-medium"><i className="fas fa-circle-info text-cyan-500 mr-1.5"></i>เลขอ้างอิงทดสอบระบบ: <span className="text-slate-300 font-bold underline cursor-pointer" onClick={() => setSearchQuery('THN2026THLA001')}>THN2026THLA001</span></p>
            </form>

            {/* แสดงการแจ้งเตือนเมื่อไม่พบข้อมูล */}
            {error && (
              <div className="mt-8 max-w-2xl mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center animate-fade-in-up">
                <i className="fas fa-triangle-exclamation text-red-500 text-4xl mb-3"></i>
                <p className="text-red-400 font-bold text-base">{error}</p>
              </div>
            )}

            {/* แสดงกล่องผลลัพธ์พัสดุหรูหราอลังการ */}
            {result && (
              <div className="mt-12 max-w-3xl mx-auto bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl text-left border-t-4 border-t-blue-500 animate-fade-in-up">
                <div className="bg-slate-950 p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5">
                  <div>
                    <p className="text-slate-500 font-bold text-xs tracking-wider mb-1">TRACKING NUMBER</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-widest">{result.tracking}</h3>
                  </div>
                  <div className="bg-blue-500/10 px-5 py-2.5 rounded-xl border border-blue-500/20 text-blue-400 font-black text-sm flex items-center gap-2 self-start sm:self-auto">
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
                    {result.status}
                  </div>
                </div>
                
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-900/50">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center text-xl flex-shrink-0"><i className="fas fa-plane-departure"></i></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 mb-0.5">ต้นทาง (Origin)</p>
                      <p className="font-black text-white text-lg">{result.origin}</p>
                      <p className="text-xs text-slate-400 mt-0.5">ผู้ส่ง: {result.sender}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center text-xl flex-shrink-0"><i className="fas fa-plane-arrival"></i></div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 mb-0.5">ปลายทาง (Destination)</p>
                      <p className="font-black text-white text-lg">{result.destination}</p>
                      <p className="text-xs text-slate-400 mt-0.5">ผู้รับ: {result.receiver}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ============================================================================
            🌟 4. แผงตัวเลขสถิติความสำเร็จ (เพิ่มความน่าเชื่อถือระดับสากล)
        ============================================================================ */}
        <section className="bg-slate-950 py-16 border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat) => (
              <div key={stat.id} className="p-4 space-y-2 group">
                <div className="text-slate-600 group-hover:text-cyan-400 text-2xl mb-2 transition-colors duration-300">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <p className="text-3xl sm:text-5xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================================
            🌟 5. บริการทั้งหมดของเรา (การ์ด 3D สุดหรูหรา 7 บริการ)
        ============================================================================ */}
        <section id="services-section" className="py-28 bg-[#0a1120] relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            
            <div className="text-center mb-20">
              <span className="text-[#e62e2d] font-black tracking-widest text-xs uppercase bg-red-500/10 px-4 py-1.5 rounded-full">Premium Solutions</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight">บริการโลจิสติกส์ครบวงจร</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">
                ตอบสนองทุกธุรกิจอย่างไร้ขีดจำกัด ด้วยโซลูชันการขนส่งข้ามแดนที่มีประสิทธิภาพสูงสุด
              </p>
            </div>

            {/* Grid 7 บริการสุดโมเดิร์น */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`bg-slate-900 border border-white/5 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-white/10 hover:shadow-cyan-950/20 transition-all duration-300 group flex flex-col justify-between min-h-[320px] ${
                    index === 6 ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''
                  }`}
                >
                  <div>
                    {/* ไอคอนไล่เฉดสี */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-wide group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Thana Quality</span>
                    <a href="#" className="inline-flex items-center text-sm font-bold text-cyan-400 hover:text-white transition-colors">
                      อ่านต่อ <i className="fas fa-chevron-right ml-2 text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}