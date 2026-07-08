import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-prompt">
      
      {/* ==========================================
          1. TOP BAR: แถบสถานะด้านบนสุด (Live Updates)
          ========================================== */}
      <div className="bg-[#0a2540] text-white text-xs py-2 px-4 flex justify-between items-center overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap">
          <span className="font-bold"><i className="fas fa-bolt text-yellow-400 mr-1"></i> LIVE UPDATES:</span>
          <span>THB/LAK: 671.43 (Steady)</span>
          <span className="hidden sm:inline">BKK PORT Status: Moderate Traffic</span>
          <span className="hidden md:inline">NONG KHAI Border: Normal</span>
        </div>
        <div className="flex gap-4 items-center shrink-0 ml-4">
          <span className="hidden md:inline">🇹🇭 TH | 🇬🇧 EN</span>
          {/* ลิงก์ไปหน้าแอดมินที่เราทำระบบล็อกอินไว้แล้ว */}
          <Link href="/admin/login" className="bg-white text-[#0a2540] px-3 py-1 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-sm">
            <i className="fas fa-user-circle mr-1"></i> e-Services Login
          </Link>
        </div>
      </div>

      {/* ==========================================
          2. NAVBAR: แถบเมนูหลัก
          ========================================== */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* โลโก้บริษัท */}
          <div className="flex items-center gap-3">
            <div className="text-[#00249c] text-5xl font-black italic tracking-tighter">TLT</div>
            <div className="text-xs font-black text-gray-800 leading-tight border-l-2 border-gray-300 pl-3">
              THANA LOGISTICS<br/>CO., LTD.
            </div>
          </div>

          {/* เมนูตรงกลาง (ซ่อนในมือถือ) */}
          <div className="hidden lg:flex gap-8 font-bold text-sm text-gray-700">
            <Link href="/" className="text-[#00249c] border-b-2 border-[#00249c] pb-1">HOME</Link>
            <div className="group relative cursor-pointer hover:text-[#00249c] transition-colors">
              COMPANY <i className="fas fa-chevron-down text-[10px] ml-1 text-gray-400"></i>
            </div>
            <div className="group relative cursor-pointer hover:text-[#00249c] transition-colors">
              SERVICES <i className="fas fa-chevron-down text-[10px] ml-1 text-gray-400"></i>
            </div>
            <Link href="#" className="hover:text-[#00249c] transition-colors">DATA</Link>
            <Link href="#" className="hover:text-[#00249c] transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-[#00249c] transition-colors">CONTACT</Link>
          </div>

          {/* เบอร์โทรศัพท์ Hotline */}
          <div className="hidden md:flex items-center gap-3 text-[#00249c]">
            <i className="fas fa-headset text-4xl"></i>
            <div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">24/7 Hotline</div>
              <div className="font-black text-xl leading-none">093-023-7931</div>
            </div>
          </div>
        </div>
      </nav>

      {/* ==========================================
          3. HERO SECTION: แบนเนอร์ภาพขนาดใหญ่
          ========================================== */}
      <section className="relative h-[400px] md:h-[500px] flex items-center bg-slate-900 overflow-hidden">
        {/* รูปภาพพื้นหลัง (ดึงภาพชั่วคราวจาก Unsplash) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg tracking-tight">
            THANA GROUP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">- LOGISTICS</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium mb-8 drop-shadow-md max-w-2xl">
            Expedited Transport: Thailand - Laos | Door-to-Door Service
          </p>
          <button className="bg-white text-[#00249c] px-8 py-4 rounded-xl font-black text-lg hover:bg-[#00249c] hover:text-white border-2 border-transparent hover:border-white transition-all shadow-xl hover:-translate-y-1">
            Request a Quote <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>

      {/* ==========================================
          4. MAIN CONTENT: ข้อมูลบริษัท & บริการ
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* ฝั่งซ้าย: About Us */}
        <div>
          <h2 className="text-3xl font-black text-[#0a2540] mb-6 flex items-center gap-3">
            ABOUT US
            <div className="h-1 w-20 bg-[#00249c] rounded-full"></div>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed font-light">
            Thana Logistics Co., Ltd. ก่อตั้งขึ้นเพื่อให้บริการด้านลอจิสติกส์แบบครบวงจร ด้วยประสบการณ์ที่ยาวนานในการขนส่งระหว่างประเทศ โดยเฉพาะเส้นทาง ไทย-ลาว เรามุ่งมั่นพัฒนาเทคโนโลยีและบริการเพื่อส่งมอบสินค้าของคุณอย่างปลอดภัย ตรงเวลา
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed font-light">
            ด้วยทีมงานมืออาชีพและเครือข่ายที่ครอบคลุม เราพร้อมเป็นพันธมิตรที่ช่วยขับเคลื่อนธุรกิจของคุณให้ก้าวไปข้างหน้าอย่างไร้รอยต่อ และเป็นมิตรต่อสิ่งแวดล้อม
          </p>
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
            alt="Warehouse" 
            className="rounded-3xl shadow-2xl w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* ฝั่งขวา: Our Services (ดีไซน์แบบ Card Grid) */}
        <div>
          <h2 className="text-3xl font-black text-[#0a2540] mb-6 flex items-center gap-3">
            OUR SERVICES
            <div className="h-1 w-20 bg-[#00249c] rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,36,156,0.1)] transition-all border border-gray-100 cursor-pointer group">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                <i className="fas fa-leaf text-2xl text-green-600 group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="font-black text-lg text-gray-800 mb-1">GREEN LOGISTICS</h3>
              <p className="text-sm text-gray-500 font-light">บริการขนส่งรักษ์โลกด้วยพลังงานสะอาด ลดคาร์บอน</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,36,156,0.1)] transition-all border border-gray-100 cursor-pointer group">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00249c] transition-colors">
                <i className="fas fa-network-wired text-2xl text-[#00249c] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="font-black text-lg text-gray-800 mb-1">BRANCH NETWORK</h3>
              <p className="text-sm text-gray-500 font-light">เครือข่ายสาขาครอบคลุมทั่วภูมิภาค เชื่อมต่อไร้รอยต่อ</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,36,156,0.1)] transition-all border border-gray-100 cursor-pointer group">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                <i className="fas fa-file-invoice-dollar text-2xl text-yellow-600 group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="font-black text-lg text-gray-800 mb-1">PRICE LIST & RATES</h3>
              <p className="text-sm text-gray-500 font-light">ตรวจสอบอัตราค่าบริการที่โปร่งใสและคุ้มค่าที่สุด</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,36,156,0.1)] transition-all border border-gray-100 cursor-pointer group">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                <i className="fas fa-truck-fast text-2xl text-red-600 group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="font-black text-lg text-gray-800 mb-1">EXPRESS DELIVERY</h3>
              <p className="text-sm text-gray-500 font-light">จัดส่งด่วนพิเศษแบบ Door-to-Door ตรงเวลา</p>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}