import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'บริษัทในเครือ | THANA GROUP',
  description: 'โครงสร้างธุรกิจและบริษัทในเครือของ THANA GROUP ผู้นำด้านโลจิสติกส์และการนำเข้าส่งออกครบวงจร',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลบริษัทในเครือ (อัปเดตชื่อบริษัทลาวแล้ว)
// ============================================================================
const groupCompaniesData = [
  {
    id: 'tks',
    name: 'บริษัท ธนาอิมพอร์ต เอ็กพอร์ต จำกัด',
    abbr: '',
    description: 'ให้บริการด้านนำเข้าและส่งออกสินค้าระหว่างประเทศแบบครบวงจร บริหารจัดการซัพพลายเชนให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น',
    logo: 'LOGO-TKS.png',
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
    abbr: '',
    description: 'ให้บริการขนส่งระหว่างประเทศ (Cross-border Transport) ครอบคลุมไทย-ลาว-อาเซียน ด้วยกองทัพรถบรรทุกมาตรฐานสากล',
    logo: 'LOGO-TLT.png',
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
    abbr: '',
    description: 'ให้บริการนำเข้า-ส่งออกสินค้าอุปโภค บริโภค และเป็นตัวแทนจัดจำหน่าย (Distributor) กระจายสินค้าครอบคลุมทุกพื้นที่',
    logo: 'LOGO-TT.png',
    contact: {
      tel: '045-333-333',
      line: '@tt-intertrade',
      whatsapp: '66833333333',
      email: 'sales@ttintertrade.com'
    }
  },
  {
    id: 'tsp',
     abbr: '',
    description: 'ให้บริการด้านพิธีการศุลกากร ตรวจปล่อยสินค้า และชิปปิ้ง (Customs Clearance) ดำเนินการเอกสารรวดเร็ว ถูกต้องตามกฎหมาย',
    logo: 'LOGO TSP.png',
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
    abbr: '',
    description: 'ให้บริการเกี่ยวกับการขนส่งสินค้าภายในประเทศ (Domestic Express) จัดส่งรวดเร็ว ปลอดภัย ถึงมือผู้รับตรงเวลา',
    logo: 'LOGO TLK.png',
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
   abbr: '',
    description: 'ให้บริการนำเข้าส่งออกสินค้าทั่วไป ตอบสนองความต้องการของธุรกิจยุคใหม่ด้วยบริการที่ยืดหยุ่นและรวดเร็ว',
    logo: 'winwin.png',
    contact: {
      tel: '045-666-666',
      line: '@winwin2025',
      whatsapp: '66866666666',
      email: 'hello@winwin2025.com'
    }
  },
  {
    id: 'thanalao',
    name: 'บริษัท ธนาโลจิสติกส์ ลาว',
    abbr: '',
    description: 'ให้บริการขนส่งภายในประเทศลาว (Lao PDR Domestic Transport) เครือข่ายครอบคลุม เชื่อมต่อการค้าอย่างไร้รอยต่อ',
    logo: 'LOGO-TLTL.png',
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
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00249c] opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0a2540] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm shadow-md">
                    {company.abbr}
                  </div>
                </div>

                {/* 2.2 Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-[#00249c] mb-3 leading-tight group-hover:text-[#ff0000] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {company.description}
                  </p>

                  {/* 2.3 Contact Channels (ปรับใหม่ แสดงเบอร์และไลน์แบบชัดเจน) */}
                  <div className="pt-5 border-t border-gray-100 mt-auto">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      ข้อมูลติดต่อโดยตรง
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      {/* เบอร์โทร (แสดงตัวเลข) */}
                      <a 
                        href={`tel:${company.contact.tel.replace(/[^0-9+]/g, '')}`} 
                        className="flex items-center gap-3 text-sm font-bold text-[#0a2540] hover:text-blue-600 transition-colors w-max group/phone"
                      >
                        <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/phone:bg-blue-600 group-hover/phone:text-white transition-colors shadow-sm">
                          <i className="fas fa-phone-alt text-[11px]"></i>
                        </span>
                        {company.contact.tel}
                      </a>
                      
                      {/* LINE (แสดงไอดี) */}
                      <a 
                        href={`https://line.me/ti/p/~${company.contact.line}`} 
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm font-bold text-[#0a2540] hover:text-[#00c300] transition-colors w-max group/line"
                      >
                        <span className="w-8 h-8 rounded-full bg-green-50 text-[#00c300] flex items-center justify-center shrink-0 group-hover/line:bg-[#00c300] group-hover/line:text-white transition-colors shadow-sm">
                          <i className="fab fa-line text-base"></i>
                        </span>
                        {company.contact.line}
                      </a>
                      
                      {/* ปุ่ม Email และ WhatsApp (แบบแคปซูลเล็กๆ) */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <a 
                          href={`https://wa.me/${company.contact.whatsapp}`} 
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-emerald-600 bg-gray-50 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition-colors border border-gray-100 hover:border-emerald-200"
                        >
                          <i className="fab fa-whatsapp text-emerald-500 text-sm"></i> WhatsApp
                        </a>
                        <a 
                          href={`mailto:${company.contact.email}`} 
                          className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors border border-gray-100 hover:border-gray-300"
                        >
                          <i className="fas fa-envelope text-gray-400"></i> Email
                        </a>
                      </div>
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