import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'สาขาของเรา | THANA GROUP',
  description: 'ศูนย์กระจายสินค้าและสำนักงานสาขา THANA GROUP ครอบคลุมจุดยุทธศาสตร์สำคัญ ไทย - สปป.ลาว',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลสาขา และ เซลล์ 
// 📍 วิธีปักหมุดแผนที่: นำลิงก์จาก Google Maps (Share Link) มาใส่ตรง mapUrl ได้เลยครับ
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
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: true,
        icon: 'fa-building',
        salesTeam: [
          { id: 1, name: 'คุณเสาวลักษ์ บัวงาม', role: 'หัวหน้าฝ่ายขาย (Zone Manager)', tel: '081-234-5670', lineId: 'somchai.thana', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop' },
          { id: 2, name: 'คุณณัฐฐา จรรยากรณณ์', role: 'ฝ่ายขาย Telesales', tel: '081-234-5671', lineId: 'wipawee.sales', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop' },
          { id: 5, name: 'คุณสายพลอย แก้วพรไช', role: 'เจ้าหน้าที่บริการแอดมิน', tel: '081-234-5674', lineId: 'anon.cs', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop' },
        ]
      },
      {
        id: 'b-2',
        name: 'สาขาเพชรเกษม กรุงเทพมหานคร',
        address: '456 ถ.เพชรเกษม แขวงบางหว้า เขตภาษีเจริญ กรุงเทพฯ 10160',
        tel: '02-1234567',
        lineId: '@thanagroup-bkk',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-hubspot',
        salesTeam: []
      },
      {
        id: 'b-3',
        name: 'สาขาช่องเม็ก อุบลราชธานี',
        address: '789 ม.1 ต.ช่องเม็ก อ.สิรินธร จ.อุบลราชธานี 34350 (ด่านพรมแดนช่องเม็ก)',
        tel: '045-789012',
        lineId: '@thanachongmek',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-truck-ramp-box',
        salesTeam: [
          { id: 3, name: 'คุณอุไรรักษ์ ปะพรม', role: 'เจ้าหน้าที่การขาย', tel: '081-234-5672', lineId: 'natthapon.t', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop' },
          { id: 4, name: 'คุณสุวิมล แต้มทา', role: 'เจ้าหน้าที่การขาย', tel: '081-234-5673', lineId: 'pornpan.sale', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop' },
        ]
      },
      {
        id: 'b-4',
        name: 'สาขามุกดาหาร',
        address: '101 ถ.ชะยานนท์ ต.มุกดาหาร อ.เมืองมุกดาหาร จ.มุกดาหาร 49000 (ใกล้สะพานมิตรภาพ 2)',
        tel: '042-345678',
        lineId: '@thanamukdahan',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-warehouse',
        salesTeam: [
          { id: 6, name: 'คุณธนวัต นำชัย', role: 'ผู้จัดการเขตการขาย', tel: '082-345-6780', lineId: 'thanawat.m', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=150&auto=format&fit=crop' },
          { id: 7, name: 'คุณศิริพร ยอดเยี่ยม', role: 'ที่ปรึกษาด้านการขาย', tel: '082-345-6781', lineId: 'siriporn.y', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=150&auto=format&fit=crop' },
          { id: 8, name: 'คุณกฤษฎา ชำนาญ', role: 'เจ้าหน้าที่การขาย', tel: '082-345-6782', lineId: 'kritsada.c', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
        ]
      },
      {
        id: 'b-5',
        name: 'สาขาหนองคาย',
        address: '202 ม.2 ต.มีชัย อ.เมืองหนองคาย จ.หนองคาย 43000 (ด่านพรมแดนหนองคาย)',
        tel: '042-789012',
        lineId: '@thananongkhai',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-truck-fast',
        salesTeam: [
          { id: 9, name: 'คุณเอกราช เก่งกล้า', role: 'ผู้จัดการเขตการขาย', tel: '083-456-7890', lineId: 'ekkarat.k', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop' },
          { id: 10, name: 'คุณนภัสสร รุ่งเรือง', role: 'ที่ปรึกษาด้านการขายอาวุโส', tel: '083-456-7891', lineId: 'napassorn.r', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop' },
        ]
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
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-warehouse',
        salesTeam: [
          { id: 1, name: 'คุณเสาวลักษ์ บัวงาม', role: 'หัวหน้าฝ่ายขาย (Zone Manager)', tel: '081-234-5670', lineId: 'somchai.thana', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop' },
          { id: 3, name: 'คุณอุไรรักษ์ ปะพรม', role: 'เจ้าหน้าที่การขาย', tel: '081-234-5672', lineId: 'natthapon.t', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop' },
        ]
      },
      {
        id: 'b-7',
        name: 'สาขาสะหวันนะเขต สปป.ลาว',
        address: 'โซนเศรษฐกิจพิเศษสะหวัน-เซโน เมืองไกสอน พมวิหาน แขวงสะหวันนะเขต สปป.ลาว',
        tel: '+856-20-7654321',
        lineId: '@thanasavannakhet',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-truck-ramp-box',
        salesTeam: [
          { id: 6, name: 'คุณธนวัต นำชัย', role: 'ผู้จัดการเขตการขาย', tel: '082-345-6780', lineId: 'thanawat.m', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=150&auto=format&fit=crop' },
          { id: 8, name: 'คุณกฤษฎา ชำนาญ', role: 'เจ้าหน้าที่การขาย', tel: '082-345-6782', lineId: 'kritsada.c', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
        ]
      },
      {
        id: 'b-8',
        name: 'สาขานครหลวงเวียงจันทน์ สปป.ลาว',
        address: 'บ้านดงโพสี เมืองหาดซายฟอง นครหลวงเวียงจันทน์ สปป.ลาว (ใกล้สถานีรถไฟคำสะหวาด/ท่าบก)',
        tel: '+856-20-9999888',
        lineId: '@thanavientiane',
        mapUrl: 'https://maps.google.com', // <-- ใส่ลิงก์หมุดแผนที่ตรงนี้
        isHQ: false,
        icon: 'fa-train-subway',
        salesTeam: [
          { id: 11, name: 'คุณทวีศักดิ์ มั่นคง', role: 'ที่ปรึกษาด้านการขาย', tel: '083-456-7892', lineId: 'taweesak.m', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop' },
          { id: 12, name: 'คุณรัตนา ใจสว่าง', role: 'เจ้าหน้าที่การขาย', tel: '083-456-7893', lineId: 'rattana.j', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop' },
        ]
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
              พร้อมทีมที่ปรึกษาด้านการขายประจำพื้นที่ ที่พร้อมดูแลธุรกิจคุณอย่างใกล้ชิด
            </p>
          </div>
        </section>

        {/* =========================================
            2. BRANCHES LAYOUT 
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="space-y-12">
            
            {branchesData.map((group) => (
              <div key={group.country} className="animate-fade-in">
                
                {/* แถบหัวข้อประเทศ */}
                <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6 mb-8 border-l-8 border-[#0a2540] flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-black text-[#0a2540]">{group.country}</h2>
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {group.branches.length} Branches
                  </span>
                </div>

                {/* รายการสาขา */}
                <div className="space-y-8">
                  {group.branches.map((branch) => (
                    <div 
                      key={branch.id} 
                      className={`bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row border ${
                        branch.isHQ ? 'border-[#ff0000] ring-1 ring-[#ff0000]/30' : 'border-gray-100'
                      }`}
                    >
                      
                      {/* =========================================
                          ฝั่งซ้าย: ข้อมูลสาขา 
                      ========================================= */}
                      <div className="lg:w-2/5 p-8 bg-slate-50/50 border-r border-gray-100 flex flex-col relative">
                        {branch.isHQ && (
                          <div className="absolute top-0 left-0 bg-[#ff0000] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-br-2xl uppercase shadow-md">
                            Headquarters
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 mb-6 mt-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                            branch.isHQ ? 'bg-[#ff0000] text-white' : 'bg-white border border-gray-200 text-[#0a2540]'
                          }`}>
                            <i className={`fas ${branch.icon}`}></i>
                          </div>
                          <h3 className="text-xl md:text-2xl font-black text-[#0a2540] leading-tight">
                            {branch.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                          <i className="fas fa-location-dot text-gray-400 mr-2"></i> {branch.address}
                        </p>

                        {/* กล่องเบอร์โทรศัพท์ */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm mb-6">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                            สายด่วนติดต่อสาขา
                          </div>
                          <a href={`tel:${branch.tel.replace(/[^0-9+]/g, '')}`} className="text-3xl font-black text-[#ff0000] hover:text-red-700 transition-colors flex items-center gap-3">
                            <i className="fas fa-phone-volume animate-pulse"></i> {branch.tel}
                          </a>
                        </div>

                        {/* ปุ่ม Map & Line */}
                        <div className="grid grid-cols-2 gap-3">
                          <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-[#0a2540] hover:bg-[#0a2540] hover:text-white font-bold text-sm py-2.5 rounded-xl text-center transition-colors shadow-sm">
                            <i className="fas fa-map-location-dot mr-1"></i> ปักหมุดแผนที่
                          </a>
                          <a href={`https://line.me/ti/p/~${branch.lineId}`} target="_blank" rel="noopener noreferrer" className="bg-[#00c300] text-white hover:bg-green-600 font-bold text-sm py-2.5 rounded-xl text-center transition-colors shadow-sm">
                            <i className="fab fa-line mr-1 text-base"></i> แอดไลน์สาขา
                          </a>
                        </div>
                      </div>

                      {/* =========================================
                          ฝั่งขวา: แสดงเบอร์โทรและไอดีไลน์ของเซลล์ชัดเจน
                      ========================================= */}
                      <div className="lg:w-3/5 p-8">
                        <h4 className="text-sm font-bold text-[#0a2540] border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
                          <i className="fas fa-user-tie text-[#ff0000]"></i> ทีมที่ปรึกษาด้านการขายประจำเขต
                        </h4>
                        
                        {branch.salesTeam.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {branch.salesTeam.map((sale) => (
                              <div key={sale.id} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#ff0000]/30 transition-all group">
                                {/* รูปเซลล์ */}
                                <img src={sale.image} alt={sale.name} className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-transparent group-hover:border-[#ff0000]/20 transition-all shrink-0 mt-1" />
                                
                                <div className="flex-grow">
                                  <div className="font-bold text-[#0a2540] text-sm group-hover:text-[#ff0000] transition-colors">{sale.name}</div>
                                  <div className="text-[11px] font-medium text-gray-500 mb-3">{sale.role}</div>
                                  
                                  {/* ข้อมูลติดต่อแสดงเป็น Text เลย */}
                                  <div className="flex flex-col gap-1.5">
                                    <a href={`tel:${sale.tel.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors w-max">
                                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <i className="fas fa-phone text-[10px]"></i>
                                      </span>
                                      {sale.tel}
                                    </a>
                                    <a href={`https://line.me/ti/p/~${sale.lineId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#00c300] transition-colors w-max">
                                      <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                        <i className="fab fa-line text-[11px]"></i>
                                      </span>
                                      {sale.lineId}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // กรณีไม่มีเซลล์
                          <div className="h-full flex flex-col items-center justify-center text-center py-10 opacity-60">
                            <i className="fas fa-headset text-4xl text-gray-300 mb-3"></i>
                            <p className="text-sm font-medium text-gray-500">ติดต่อศูนย์บริการลูกค้าสัมพันธ์</p>
                            <p className="text-xs text-gray-400">กรุณาติดต่อผ่านเบอร์โทรศัพท์สายด่วนของสาขาโดยตรง</p>
                          </div>
                        )}
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