'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// ==========================================
// 👥 ข้อมูลทีมผู้ชำนาญการ (พร้อมรูปภาพ)
// พี่สามารถเปลี่ยนลิงก์ตรงคำว่า image: '...' ให้เป็นรูปล่าสุดได้เลยครับ
// ==========================================
const expertTeam = [
  {
    id: 1,
    name: 'คุณเฟื้องยศ ยิ่งยงชัยวงศ์',
    role: 'ผู้ชำนาญการด้านการวิเคราะห์ข้อมูล',
    engRole: 'Data Analytics Expert',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    name: 'คุณเพ็ญศรี คำแสนราช',
    role: 'ผู้ชำนาญการด้านชิปปิ้ง ระหว่างประเทศ',
    engRole: 'International Shipping & Customs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    color: 'from-[#00249c] to-blue-600',
  },
  {
    id: 3,
    name: 'คุณตาลี ฝนพระจันทน์',
    role: 'ผู้ชำนาญการด้านงานบริหารประเทศลาว',
    engRole: 'Laos Operations Management',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    color: 'from-[#e62e2d] to-red-500',
  },
  {
    id: 4,
    name: 'คุณณัฐพงษ์ ชินวัน',
    role: 'ผู้ชำนาญการด้านคลังสินค้าและขนส่ง',
    engRole: 'Warehouse & Transportation Expert',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    color: 'from-emerald-500 to-green-400',
  },
  {
    id: 5,
    name: 'คุณทรงศักดิ์ เงาศรี',
    role: 'ผู้ชำนาญการด้านงานขาย',
    engRole: 'Sales & Business Development',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 6,
    name: 'คุณนันธิยา สง่าจิต',
    role: 'ผู้ชำนาญงานด้านบัญชีและการเงิน',
    engRole: 'Accounting & Financial Expert',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=300&q=80',
    color: 'from-purple-500 to-fuchsia-400',
  },
  {
    id: 7,
    name: 'คุณอมรศาสตร์ นามวงษา',
    role: 'ผู้ชำนาญงานด้านไอที',
    engRole: 'Information Technology Expert',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=300&q=80',
    color: 'from-slate-700 to-slate-500',
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
            2. EXPERT CARDS SECTION (ส่วนการ์ดทีมงานแบบมีรูป)
        ========================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {expertTeam.map((expert, index) => (
              <div 
                key={expert.id} 
                className={`bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(10,37,64,0.06)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)] group relative overflow-hidden flex flex-col items-center text-center ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                {/* แถบสีตกแต่งด้านบน */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${expert.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                
                {/* รูปภาพโปรไฟล์ */}
                <div className="relative mb-6 mt-2">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${expert.color} rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300 transform scale-110`}></div>
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* ข้อมูลบุคคล */}
                <div className="w-full">
                  <h3 className="text-xl font-black text-[#0a2540] mb-2 tracking-wide group-hover:text-[#00249c] transition-colors line-clamp-1">
                    {expert.name}
                  </h3>
                  <div className="inline-block mt-1 mb-4">
                    <p className="text-[#e62e2d] font-bold text-[13px] bg-red-50 px-4 py-1.5 rounded-lg border border-red-100/50">
                      {expert.role}
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-2 border-t border-gray-100 pt-4">
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