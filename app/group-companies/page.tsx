import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'บริษัทในเครือ | THANA GROUP',
  description: 'โครงสร้างธุรกิจและบริษัทในเครือของ THANA GROUP ผู้นำด้านโลจิสติกส์และการนำเข้าส่งออกครบวงจร',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลบริษัทในเครือ
// 📍 วิธีแก้ไข: เปลี่ยนลิงก์ logo, tel, line, whatsapp, email เป็นของแต่ละบริษัทได้เลย
// ============================================================================
const groupCompaniesData = [
  {
    id: 'tks',
    name: 'บริษัท ธนาอิมพอร์ต เอ็กพอร์ต จำกัด',
    abbr: 'TKS',
    description: 'ให้บริการด้านนำเข้าและส่งออกสินค้าระหว่างประเทศแบบครบวงจร บริหารจัดการซัพพลายเชนให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น',
    logo: 'https://placehold.co/400x200/ffffff/00249c?text=TKS+Logo',
    contact: {
      tel: '045-111-111',
      line: '@tks-import',
      whatsapp: '66811111111',
      email: 'contact@tks.com'
    }
  },
  {
    id: 'tlt',
    name: 'บริษัท ธนาโลจิสติกส์ จำกัด',
    abbr: 'TLT',
    description: 'ให้บริการขนส่งระหว่างประเทศ (Cross-border Transport) ครอบคลุมไทย-ลาว-อาเซียน ด้วยกองทัพรถบรรทุกมาตรฐานสากล',
    logo: 'https://placehold.co/400x200/ffffff/ff0000?text=TLT+Logo',
    contact: {
      tel: '045-222-222',
      line: '@thanagroup',
      whatsapp: '66822222222',
      email: 'logistics@thanagroup.com'
    }
  },
  {
    id: 'tt',
    name: 'บริษัท ทีที อินเตอร์เทรดดิ้ง จำกัด',
    abbr: 'TT',
    description: 'ให้บริการนำเข้า-ส่งออกสินค้าอุปโภค บริโภค และเป็นตัวแทนจัดจำหน่าย (Distributor) กระจายสินค้าครอบคลุมทุกพื้นที่',
    logo: 'https://placehold.co/400x200/ffffff/0a2540?text=TT+Logo',
    contact: {
      tel: '045-333-333',
      line: '@tt-intertrade',
      whatsapp: '66833333333',
      email: 'sales@ttintertrade.com'
    }
  },
  {
    id: 'tsp',
    name: 'บริษัท ทีเอสพี จำกัด',
    abbr: 'TSP',
    description: 'ให้บริการด้านพิธีการศุลกากร ตรวจปล่อยสินค้า และชิปปิ้ง (Customs Clearance) ดำเนินการเอกสารรวดเร็ว ถูกต้องตามกฎหมาย',
    logo: 'https://placehold.co/400x200/ffffff/f59e0b?text=TSP+Logo',
    contact: {
      tel: '045-444-444',
      line: '@tsp-shipping',
      whatsapp: '66844444444',
      email: 'clearance@tspshipping.com'
    }
  },
  {
    id: 'tex',
    name: 'บริษัท ธนาเอ็กเพรส จำกัด',
    abbr: 'TEX',
    description: 'ให้บริการเกี่ยวกับการขนส่งสินค้าภายในประเทศ (Domestic Express) จัดส่งรวดเร็ว ปลอดภัย ถึงมือผู้รับตรงเวลา',
    logo: 'https://placehold.co/400x200/ffffff/10b981?text=TEX+Logo',
    contact: {
      tel: '045-555-555',
      line: '@thanaexpress',
      whatsapp: '66855555555',
      email: 'service@thanaexpress.com'
    }
  },
  {
    id: 'winwin',
    name: 'บริษัท วินวิน2025 อิมพอร์ต เอ็กพอร์ต',
    abbr: 'WinWin2025',
    description: 'ให้บริการนำเข้าส่งออกสินค้าทั่วไป ตอบสนองความต้องการของธุรกิจยุคใหม่ด้วยบริการที่ยืดหยุ่นและรวดเร็ว',
    logo: 'https://placehold.co/400x200/ffffff/8b5cf6?text=WINWIN+2025',
    contact: {
      tel: '045-666-666',
      line: '@winwin2025',
      whatsapp: '66866666666',
      email: 'hello@winwin2025.com'
    }
  },
  {
    id: 'thanalao',
    name: 'บริษัท ธนาโลลาว ขาเข้าขาออก จำกัดเพียงผู้เดียว',
    abbr: 'Thana Lo Lao',
    description: 'ให้บริการขนส่งภายในประเทศลาว (Lao PDR Domestic Transport) เครือข่ายครอบคลุม เชื่อมต่อการค้าอย่างไร้รอยต่อ',
    logo: 'https://placehold.co/400x200/ffffff/ef4444?text=THANA+LO+LAO',
    contact: {
      tel: '+856-20-777-7777',
      line: '@thanalao',
      whatsapp: '856207777777',
      email: 'contact@thanalao.la'
    }
  }
];

export default function GroupCompaniesPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#00249c]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              THANA GROUP NETWORK
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              บริษัทในเครือของเรา
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              โครงสร้างธุรกิจที่แข็งแกร่งของ THANA GROUP ประกอบด้วย 7 บริษัทย่อย <br className="hidden md:block" />
              ที่ทำงานผสานกันอย่างเป็นระบบ เพื่อมอบบริการโลจิสติกส์และการค้าระหว่างประเทศที่ดีที่สุด
            </p>
          </div>
        </section>

        {/* =========================================
            2. COMPANIES GRID
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {groupCompaniesData.map((company, index) => (
              <div 
                key={company.id} 
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 2.1 Logo Area */}
                <div className="h-40 bg-gray-50 border-b border-gray-100 flex items-center justify-center p-6 relative overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                  {/* Decorative background circle */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00249c] opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Company Logo Image (ใส่ไฟล์จริงแทนที่ placeholder ได้) */}
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                  
                  {/* Tag ตัวย่อ */}
                  <div className="absolute bottom-3 left-3 bg-[#0a2540] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm shadow-md">
                    {company.abbr}
                  </div>
                </div>

                {/* 2.2 Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-[#00249c] mb-3 leading-tight group-hover:text-[#ff0000] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {company.description}
                  </p>

                  {/* 2.3 Contact Channels (ปุ่มติดต่อ 4 ช่องทาง) */}
                  <div className="pt-5 border-t border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">
                      ช่องทางการติดต่อสาขา
                    </div>
                    <div className="flex justify-center gap-3">
                      
                      {/* ปุ่มโทรศัพท์ */}
                      <a 
                        href={`tel:${company.contact.tel.replace(/[^0-9+]/g, '')}`} 
                        className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 shadow-sm tooltip-trigger relative"
                        title={`โทร: ${company.contact.tel}`}
                      >
                        <i className="fas fa-phone-alt"></i>
                      </a>
                      
                      {/* ปุ่ม LINE */}
                      <a 
                        href={`https://line.me/ti/p/~${company.contact.line}`} 
                        target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-green-50 text-[#00c300] flex items-center justify-center hover:bg-[#00c300] hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                        title={`LINE: ${company.contact.line}`}
                      >
                        <i className="fab fa-line text-lg"></i>
                      </a>
                      
                      {/* ปุ่ม WhatsApp */}
                      <a 
                        href={`https://wa.me/${company.contact.whatsapp}`} 
                        target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                        title="WhatsApp"
                      >
                        <i className="fab fa-whatsapp text-lg"></i>
                      </a>
                      
                      {/* ปุ่ม Email */}
                      <a 
                        href={`mailto:${company.contact.email}`} 
                        className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                        title={`Email: ${company.contact.email}`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>

                    </div>
                  </div>
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