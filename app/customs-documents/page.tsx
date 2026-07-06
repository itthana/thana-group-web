'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function CustomsDocumentsPage() {
  // ข้อมูลลิงก์ระบบเอกสารศุลกากร (อ้างอิงจากระบบใช้งานจริงของไทย)
  const customsLinks = [
    {
      id: 1,
      title: 'ระบบ National Single Window (NSW)',
      desc: 'ระบบศูนย์กลางเชื่อมโยงข้อมูลอิเล็กทรอนิกส์ ณ จุดเดียว สำหรับการนำเข้า-ส่งออก และโลจิสติกส์',
      url: 'https://www.thainsw.net',
      icon: 'fa-network-wired',
      color: 'text-thana-blue',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'ค้นหาพิกัดอัตราศุลกากร (Tariff e-Service)',
      desc: 'ตรวจสอบพิกัดอัตราศุลกากร (HS Code) และค้นหาข้อมูลภาษีสำหรับการนำเข้า-ส่งออกสินค้าทุกประเภท',
      url: 'http://hscheck.customs.go.th',
      icon: 'fa-search-dollar',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 3,
      title: 'ระบบบริการอิเล็กทรอนิกส์ กรมการค้าต่างประเทศ',
      desc: 'ระบบขอหนังสือรับรองถิ่นกำเนิดสินค้า (Form D, Form E ฯลฯ) และใบอนุญาตส่งออก-นำเข้า',
      url: 'https://www.dft.go.th',
      icon: 'fa-globe-asia',
      color: 'text-thana-red',
      bg: 'bg-red-50'
    },
    {
      id: 4,
      title: 'ดาวน์โหลดแบบฟอร์มกรมศุลกากร',
      desc: 'รวมไฟล์แบบฟอร์มคำร้องต่างๆ ของกรมศุลกากร เช่น ใบขนสินค้า, คำร้องขอคืนอากร ฯลฯ',
      url: 'https://www.customs.go.th/list_document.php',
      icon: 'fa-file-pdf',
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      id: 5,
      title: 'ระบบ e-Customs',
      desc: 'ระบบลงทะเบียนผู้มาติดต่อและผู้ผ่านพิธีการศุลกากรทางอิเล็กทรอนิกส์ (Paperless)',
      url: 'https://www.customs.go.th',
      icon: 'fa-laptop-file',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 6,
      title: 'ตรวจสอบอัตราแลกเปลี่ยน กรมศุลกากร',
      desc: 'อัปเดตอัตราแลกเปลี่ยนเงินตราต่างประเทศประจำเดือน เพื่อใช้ประเมินภาษีศุลกากร',
      url: 'https://www.customs.go.th/statistic_exchange.php',
      icon: 'fa-exchange-alt',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">E-Services & Forms</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ศูนย์รวมเอกสารศุลกากร</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              รวบรวมลิงก์เข้าสู่ระบบราชการและจุดบริการดาวน์โหลดเอกสารสำคัญ 
              เพื่ออำนวยความสะดวกในการดำเนินพิธีการศุลกากรนำเข้า-ส่งออก
            </p>
          </div>

          {/* ลิงก์ระบบงานศุลกากร */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {customsLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-14 h-14 rounded-xl ${link.bg} ${link.color} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <i className={`fas ${link.icon}`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-thana-blue transition-colors flex items-center gap-2">
                  {link.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {link.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium truncate pr-4">
                    {link.url.replace('https://', '').replace('http://', '')}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-thana-blue group-hover:text-white transition-colors shrink-0">
                    <i className="fas fa-external-link-alt text-xs"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CS / Shipping Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-thana-blue rounded-2xl p-10 text-center text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 text-[15rem]"><i className="fas fa-ship"></i></div>
            </div>
            <div className="relative z-10">
              <i className="fas fa-file-signature text-5xl mb-4 text-thana-red"></i>
              <h3 className="text-2xl font-black mb-2">ไม่ต้องการยุ่งยากกับงานเอกสารใช่หรือไม่?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                ให้ทีมงาน Shipping ผู้เชี่ยวชาญของ THANA GROUP จัดการเอกสารและพิธีการศุลกากรแทนคุณ 
                ถูกระเบียบ รวดเร็ว และลดข้อผิดพลาด
              </p>
              <Link href="/services" className="inline-block bg-thana-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
                ดูบริการตัวแทนออกของ (Customs Broker)
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}