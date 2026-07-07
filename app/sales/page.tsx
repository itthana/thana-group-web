import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'ทีมที่ปรึกษาด้านการขาย | THANA GROUP',
  description: 'ทีมที่ปรึกษาด้านการขายและการจัดการโลจิสติกส์ ประจำเขตพื้นที่ชายแดน ไทย-ลาว',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลรายชื่อพนักงานแยกตามเขตการขาย (Actionable Links Ready)
// ============================================================================
const salesZones = [
  {
    id: 'zone-1',
    title: 'เขต 1: อุบลราชธานี - ปากเซ',
    description: 'ศูนย์กลางโลจิสติกส์เชื่อมต่อภาคอีสานตอนล่างและลาวใต้',
    members: [
      { id: 1, name: 'คุณเสาวลักษ์ บัวงาม', role: 'หัวหน้าฝ่ายขาย (Zone Manager)', tel: '0812345670', lineId: 'somchai.thana', email: 'somchai@thanagroup.com', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' }, // แอมมี่ (ใส่รูปจำลองไว้ให้ก่อนเพื่อไม่ให้พัง สามารถเปลี่ยน url รูปจริงได้ตรงนี้)
      { id: 2, name: 'คุณณัฐฐา จรรยากรณณ์', role: 'ฝ่ายขาย Telesales', tel: '0812345671', lineId: 'wipawee.sales', email: 'wipawee@thanagroup.com', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
      { id: 3, name: 'คุณอุไรรักษ์ ปะพรม', role: 'เจ้าหน้าที่การขาย', tel: '0812345672', lineId: 'natthapon.t', email: 'natthapon@thanagroup.com', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
      { id: 4, name: 'คุณสุวิมล  แต้มทา', role: 'เจ้าหน้าที่การขาย', tel: '0812345673', lineId: 'pornpan.sale', email: 'pornpan@thanagroup.com', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
      { id: 5, name: 'คุณสายพลอย  แก้วพรไช', role: 'เจ้าหน้าที่บริการแอดมิน', tel: '0812345674', lineId: 'anon.cs', email: 'anon@thanagroup.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
    ]
  },
  {
    id: 'zone-2',
    title: 'เขต 2: มุกดาหาร - สะหวันนะเขต',
    description: 'เส้นทางระเบียงเศรษฐกิจตะวันออก-ตะวันตก (EWEC)',
    members: [
      { id: 6, name: 'คุณธนวัต นำชัย', role: 'ผู้จัดการเขตการขาย (Zone Manager)', tel: '0823456780', lineId: 'thanawat.m', email: 'thanawat@thanagroup.com', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop' },
      { id: 7, name: 'คุณศิริพร ยอดเยี่ยม', role: 'ที่ปรึกษาด้านการขาย', tel: '0823456781', lineId: 'siriporn.y', email: 'siriporn@thanagroup.com', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop' },
      { id: 8, name: 'คุณกฤษฎา ชำนาญ', role: 'เจ้าหน้าที่การขาย', tel: '0823456782', lineId: 'kritsada.c', email: 'kritsada@thanagroup.com', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    ]
  },
  {
    id: 'zone-3',
    title: 'เขต 3: หนองคาย - เวียงจันทน์',
    description: 'ประตูสู่เมืองหลวงลาว และจุดเชื่อมต่อรถไฟความเร็วสูง',
    members: [
      { id: 9, name: 'คุณเอกราช เก่งกล้า', role: 'ผู้จัดการเขตการขาย (Zone Manager)', tel: '0834567890', lineId: 'ekkarat.k', email: 'ekkarat@thanagroup.com', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
      { id: 10, name: 'คุณนภัสสร รุ่งเรือง', role: 'ที่ปรึกษาด้านการขายอาวุโส', tel: '0834567891', lineId: 'napassorn.r', email: 'napassorn@thanagroup.com', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
      { id: 11, name: 'คุณทวีศักดิ์ มั่นคง', role: 'ที่ปรึกษาด้านการขาย', tel: '0834567892', lineId: 'taweesak.m', email: 'taweesak@thanagroup.com', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop' },
      { id: 12, name: 'คุณรัตนา ใจสว่าง', role: 'เจ้าหน้าที่การขาย', tel: '0834567893', lineId: 'rattana.j', email: 'rattana@thanagroup.com', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' },
    ]
  }
];

export default function SalesTeamPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-20">
        
        {/* =========================================
            ส่วนหัว (Hero Section)
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#0a2540]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              ทีมที่ปรึกษาด้านการขาย
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              พร้อมให้คำปรึกษาและวางแผนระบบโลจิสติกส์ที่คุ้มค่าที่สุดสำหรับธุรกิจคุณ <br className="hidden md:block" />
              ครอบคลุมทุกจุดยุทธศาสตร์สำคัญบริเวณพรมแดนไทย-ลาว
            </p>
          </div>
        </section>

        {/* =========================================
            ส่วนแสดงรายชื่อแบ่งตามเขตการขาย
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="space-y-16">
            
            {salesZones.map((zone) => (
              <div key={zone.id} className="transition-all duration-500">
                
                {/* หัวข้อเขตการขาย */}
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8 border-l-8 border-[#ff0000] flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-2">{zone.title}</h2>
                    <p className="text-gray-500 font-medium">{zone.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 bg-red-50 text-[#ff0000] rounded-full font-bold text-sm w-max">
                    <i className="fas fa-users mr-2"></i> ทีมงาน {zone.members.length} ท่าน
                  </div>
                </div>

                {/* Grid จัดเรียงรายชื่อพนักงาน */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {zone.members.map((member) => (
                    <div key={member.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                      
                      {/* รูปภาพพนักงาน */}
                      <div className="h-64 overflow-hidden relative bg-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* ข้อมูลพนักงาน */}
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-[#0a2540] mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-500 mb-5 min-h-[40px]">{member.role}</p>
                        
                        {/* ช่องทางการติดต่อ (Contact Action Buttons) */}
                        <div className="flex justify-center gap-3">
                          {/* ปุ่มโทรศัพท์ */}
                          <a 
                            href={`tel:${member.tel}`} 
                            className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                            title={`โทรหา ${member.name}`}
                          >
                            <i className="fas fa-phone"></i>
                          </a>
                          
                          {/* ปุ่ม LINE */}
                          <a 
                            href={`https://line.me/ti/p/~${member.lineId}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-[#00c300] hover:text-white transition-colors shadow-sm"
                            title={`แอดไลน์ ${member.name}`}
                          >
                            <i className="fab fa-line text-lg"></i>
                          </a>
                          
                          {/* ปุ่ม Email */}
                          <a 
                            href={`mailto:${member.email}`} 
                            className="w-10 h-10 rounded-full bg-red-50 text-[#ff0000] flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-colors shadow-sm"
                            title={`ส่งอีเมลหา ${member.name}`}
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
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