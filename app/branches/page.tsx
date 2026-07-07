import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'สาขาของเรา | THANA GROUP',
  description: 'ศูนย์กระจายสินค้าและสำนักงานสาขา THANA GROUP ครอบคลุมจุดยุทธศาสตร์สำคัญ ไทย - สปป.ลาว',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลสาขาทั้ง 8 สาขา (พร้อมระบบ Action Links จริง)
// ============================================================================
const branchesData = [
  {
    country: '🇹🇭 ประเทศไทย (Thailand)',
    branches: [
      {
        id: 'b-1',
        name: 'สาขาอุบลราชธานี (สำนักงานใหญ่)',
        address: '123 ม.4 ต.ในเมือง อ.เมืองอุบลราชธานี จ.อุบลราชธานี 34000',
        tel: '045-123456',
        lineId: '@thanagroup',
        mapUrl: 'https://maps.google.com',
        isHQ: true,
        icon: 'fa-building'
      },
      {
        id: 'b-2',
        name: 'สาขาเพชรเกษม กรุงเทพมหานคร',
        address: '456 ถ.เพชรเกษม แขวงบางหว้า เขตภาษีเจริญ กรุงเทพฯ 10160',
        tel: '02-1234567',
        lineId: '@thanagroup-bkk',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-hubspot'
      },
      {
        id: 'b-3',
        name: 'สาขาช่องเม็ก อุบลราชธานี',
        address: '789 ม.1 ต.ช่องเม็ก อ.สิรินธร จ.อุบลราชธานี 34350 (ด่านพรมแดนช่องเม็ก)',
        tel: '045-789012',
        lineId: '@thanachongmek',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-truck-ramp-box'
      },
      {
        id: 'b-4',
        name: 'สาขามุกดาหาร',
        address: '101 ถ.ชะยานนท์ ต.มุกดาหาร อ.เมืองมุกดาหาร จ.มุกดาหาร 49000 (ใกล้สะพานมิตรภาพ 2)',
        tel: '042-345678',
        lineId: '@thanamukdahan',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-warehouse'
      },
      {
        id: 'b-5',
        name: 'สาขาหนองคาย',
        address: '202 ม.2 ต.มีชัย อ.เมืองหนองคาย จ.หนองคาย 43000 (ด่านพรมแดนหนองคาย)',
        tel: '042-789012',
        lineId: '@thananongkhai',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-truck-fast'
      }
    ]
  },
  {
    country: '🇱🇦 สปป.ลาว (Lao PDR)',
    branches: [
      {
        id: 'b-6',
        name: 'สาขาปากเซ สปป.ลาว',
        address: 'บ้านโพนสนาม เมืองปากเซ แขวงจำปาสัก สปป.ลาว (เชื่อมต่อด่านวังเต่า-ช่องเม็ก)',
        tel: '+856-20-1234567',
        lineId: '@thanapakse',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-warehouse'
      },
      {
        id: 'b-7',
        name: 'สาขาสะหวันนะเขต สปป.ลาว',
        address: 'โซนเศรษฐกิจพิเศษสะหวัน-เซโน เมืองไกสอน พมวิหาน แขวงสะหวันนะเขต สปป.ลาว',
        tel: '+856-20-7654321',
        lineId: '@thanasavannakhet',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-truck-ramp-box'
      },
      {
        id: 'b-8',
        name: 'สาขานครหลวงเวียงจันทน์ สปป.ลาว',
        address: 'บ้านดงโพสี เมืองหาดซายฟอง นครหลวงเวียงจันทน์ สปป.ลาว (ใกล้สถานีรถไฟคำสะหวาด/ท่าบก)',
        tel: '+856-20-9999888',
        lineId: '@thanavientiane',
        mapUrl: 'https://maps.google.com',
        isHQ: false,
        icon: 'fa-train-subway'
      }
    ]
  }
];

export default function BranchesPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#0a2540]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              Our Network
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              เครือข่ายสาขาของเรา
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              THANA GROUP พร้อมให้บริการกระจายสินค้าผ่าน 8 สาขาหลักบนจุดยุทธศาสตร์สำคัญ <br className="hidden md:block" />
              เชื่อมโยงโครงข่ายโลจิสติกส์อย่างไร้รอยต่อทั่วไทยและ สปป.ลาว
            </p>
          </div>
        </section>

        {/* =========================================
            2. BRANCHES GRID LAYOUT
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="space-y-16">
            
            {branchesData.map((group) => (
              <div key={group.country} className="animate-fade-in">
                
                {/* แถบหัวข้อประเทศ */}
                <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6 mb-8 border-l-8 border-[#0a2540] flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540]">{group.country}</h2>
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {group.branches.length} Branches
                  </span>
                </div>

                {/* Grid แสดงรายชื่อสาขา */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {group.branches.map((branch) => (
                    <div 
                      key={branch.id} 
                      className={`bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border overflow-hidden group flex flex-col justify-between ${
                        branch.isHQ ? 'border-[#ff0000] ring-1 ring-[#ff0000]/30' : 'border-gray-100'
                      }`}
                    >
                      {/* ส่วนหัวการ์ด */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner ${
                            branch.isHQ ? 'bg-red-50 text-[#ff0000]' : 'bg-slate-50 text-[#0a2540]'
                          }`}>
                            <i className={`fas ${branch.isHQ ? 'fa-building' : branch.icon}`}></i>
                          </div>
                          
                          {branch.isHQ && (
                            <span className="bg-[#ff0000] text-white font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase shadow-sm animate-pulse">
                              Headquarters
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl font-black text-[#0a2540] mb-3 group-hover:text-[#ff0000] transition-colors leading-tight">
                          {branch.name}
                        </h3>
                        
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                          {branch.address}
                        </p>
                      </div>

                      {/* ส่วนท้ายการ์ด: ปุ่มช่องทางการติดต่อ (Action Buttons) */}
                      <div className="p-6 bg-slate-50/50 border-t border-gray-100 mt-auto grid grid-cols-3 gap-2">
                        {/* 📞 ปุ่มโทรออก */}
                        <a 
                          href={`tel:${branch.tel.replace(/[^0-9+]/g, '')}`} 
                          className="flex flex-col items-center justify-center py-2.5 bg-white border border-gray-200 rounded-2xl text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition-all shadow-sm font-medium text-xs gap-1"
                          title="โทรติดต่อสาขา"
                        >
                          <i className="fas fa-phone text-sm"></i>
                          <span>โทรสายตรง</span>
                        </a>

                        {/* 💬 ปุ่ม LINE */}
                        <a 
                          href={`https://line.me/ti/p/~${branch.lineId}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center justify-center py-2.5 bg-white border border-gray-200 rounded-2xl text-green-600 hover:bg-[#00c300] hover:text-white transition-all shadow-sm font-medium text-xs gap-1"
                          title="คุยไลน์ผ่านแชท"
                        >
                          <i className="fab fa-line text-base"></i>
                          <span>แอดไลน์</span>
                        </a>

                        {/* 🗺️ ปุ่มแอปแผนที่ */}
                        <a 
                          href={branch.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex flex-col items-center justify-center py-2.5 bg-white border border-gray-200 rounded-2xl text-red-500 hover:bg-[#ff0000] hover:text-white transition-all shadow-sm font-medium text-xs gap-1"
                          title="เปิด Google Maps นำทาง"
                        >
                          <i className="fas fa-location-dot text-sm"></i>
                          <span>ดูแผนที่</span>
                        </a>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}