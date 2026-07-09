TypeScript
'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ==========================================
// 👥 ข้อมูลทีมผู้ชำนาญการ (Team of Experts)
// ==========================================
const expertTeam = [
  {
    id: 1,
    name: 'คุณเฟื้องยศ ยิ่งยงชัยวงศ์',
    role: 'ผู้ชำนาญการด้านการวิเคราะห์ข้อมูล',
    engRole: 'Data Analytics Expert',
    icon: 'fas fa-chart-pie',
    color: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    name: 'คุณเพ็ญศรี คำแสนราช',
    role: 'ผู้ชำนาญการด้านชิปปิ้ง ระหว่างประเทศ',
    engRole: 'International Shipping & Customs Expert',
    icon: 'fas fa-ship',
    color: 'from-[#00249c] to-blue-600',
    iconBg: 'bg-indigo-50 text-[#00249c]',
  },
  {
    id: 3,
    name: 'คุณตาลี ฝนพระจันทน์',
    role: 'ผู้ชำนาญการด้านงานบริหารงานประเทศลาว',
    engRole: 'Laos Operations Management Expert',
    icon: 'fas fa-globe-asia',
    color: 'from-[#e62e2d] to-red-500',
    iconBg: 'bg-red-50 text-[#e62e2d]',
  },
  {
    id: 4,
    name: 'คุณณัฐพงษ์ ชินวัน',
    role: 'ผู้ชำนาญการด้านคลังสินค้าและขนส่ง',
    engRole: 'Warehouse & Transportation Expert',
    icon: 'fas fa-warehouse',
    color: 'from-emerald-500 to-green-400',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 5,
    name: 'คุณทรงศักดิ์ เงาศรี',
    role: 'ผู้ชำนาญการด้านงานขาย',
    engRole: 'Sales & Business Development Expert',
    icon: 'fas fa-handshake',
    color: 'from-amber-500 to-orange-400',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    id: 6,
    name: 'คุณนันธิยา สง่าจิต',
    role: 'ผู้ชำนาญงานด้านบัญชีและการเงิน',
    engRole: 'Accounting & Financial Expert',
    icon: 'fas fa-file-invoice-dollar',
    color: 'from-purple-500 to-fuchsia-400',
    iconBg: 'bg-purple-50 text-purple-600',
  },
  {
    id: 7,
    name: 'คุณอมรศาสตร์ นามวงษา',
    role: 'ผู้ชำนาญงานด้านไอที',
    engRole: 'Information Technology Expert',
    icon: 'fas fa-laptop-code',
    color: 'from-slate-700 to-slate-500',
    iconBg: 'bg-slate-100 text-slate-700',
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen font-prompt bg-[#f8fafc] pb-24">
        
        {/* ==========================================
            1. HEADER SECTION (ส่วนหัว)
        ========================================== */}
        <section className="relative bg-[#0a2540] py-20 px-6 overflow-hidden">
          {/* Pattern พื้นหลัง */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-users-gear"></i> Our Core Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-lg">
              ทีมผู้ชำนาญการ <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">THANA GROUP</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              เบื้องหลังความสำเร็จและบริการที่เหนือระดับ คือทีมงานผู้เชี่ยวชาญเฉพาะด้านที่พร้อมดูแลทุกขั้นตอนของระบบโลจิสติกส์ให้ราบรื่นที่สุด
            </p>
          </div>
        </section>

        {/* ==========================================
            2. EXPERT CARDS SECTION (ส่วนการ์ดทีมงาน)
        ========================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {expertTeam.map((expert, index) => (
              <div 
                key={expert.id} 
                className={`bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(10,37,64,0.06)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)] group relative overflow-hidden ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                {/* แถบสีตกแต่งด้านบน */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${expert.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                
                {/* ไอคอนสายงาน */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300 ${expert.iconBg}`}>
                    <i className={expert.icon}></i>
                  </div>
                  
                  {/* ลายน้ำ Icon จางๆ ด้านหลัง */}
                  <div className="absolute -right-4 -top-4 text-8xl opacity-[0.03] text-gray-900 pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    <i className={expert.icon}></i>
                  </div>
                </div>

                {/* ข้อมูลบุคคล */}
                <div>
                  <h3 className="text-xl font-black text-[#0a2540] mb-1 tracking-wide group-hover:text-[#00249c] transition-colors">
                    {expert.name}
                  </h3>
                  <div className="inline-block mt-2">
                    <p className="text-[#e62e2d] font-bold text-sm bg-red-50 px-3 py-1 rounded-lg border border-red-100/50">
                      {expert.role}
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-4 border-t border-gray-100 pt-4">
                    {expert.engRole}
                  </p>
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