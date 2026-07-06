'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function KnowledgeHubPage() {
  // ข้อมูลบทความความรู้เบื้องต้น
  const articles = [
    {
      id: 1,
      title: 'Incoterms 2020 คืออะไร? สรุปเงื่อนไขการส่งมอบสินค้าที่ต้องรู้',
      category: 'ความรู้พื้นฐาน',
      desc: 'ทำความเข้าใจ EXW, FOB, CIF, DDP และเงื่อนไขอื่นๆ เพื่อป้องกันความผิดพลาดในการทำสัญญาซื้อขายระหว่างประเทศ',
      icon: 'fa-book-open',
      color: 'text-thana-blue',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'เอกสารสำคัญที่ต้องใช้ในการส่งออกสินค้าไป สปป.ลาว',
      category: 'พิธีการศุลกากร',
      desc: 'เช็คลิสต์เอกสารที่จำเป็น เช่น Commercial Invoice, Packing List, Form D เพื่อการข้ามแดนที่ราบรื่นไม่มีสะดุด',
      icon: 'fa-file-invoice',
      color: 'text-thana-red',
      bg: 'bg-red-50'
    },
    {
      id: 3,
      title: 'HS Code (พิกัดศุลกากร) สำคัญอย่างไรต่อการนำเข้า-ส่งออก?',
      category: 'เกร็ดความรู้',
      desc: 'รู้หรือไม่? การระบุ HS Code ผิด อาจทำให้คุณเสียภาษีแพงกว่าที่ควรจะเป็น หรือโดนค่าปรับย้อนหลังได้',
      icon: 'fa-barcode',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  // ลิงก์เว็บไซต์หน่วยงานที่เกี่ยวข้อง (กดแล้วเปิดหน้าต่างใหม่แบบอัตโนมัติ)
  const externalLinks = [
    {
      id: 1,
      title: 'กรมศุลกากร (Thai Customs)',
      url: 'https://www.customs.go.th',
      desc: 'ตรวจสอบพิกัดอัตราศุลกากร กฎหมาย และประกาศใหม่ๆ เกี่ยวกับการนำเข้า-ส่งออก',
      icon: 'fa-building-columns'
    },
    {
      id: 2,
      title: 'กระทรวงพาณิชย์ (MOC)',
      url: 'https://www.moc.go.th',
      desc: 'ติดตามสถานการณ์การค้า นโยบาย และสถิติการค้าระหว่างประเทศ',
      icon: 'fa-chart-pie'
    },
    {
      id: 3,
      title: 'กรมการขนส่งทางบก (DLT)',
      url: 'https://www.dlt.go.th',
      desc: 'บริการข้อมูลด้านการขนส่งทางถนน ทะเบียนรถ และใบอนุญาตขับรถ',
      icon: 'fa-truck-fast'
    },
    {
      id: 4,
      title: 'ระบบ NSW (National Single Window)',
      url: 'https://www.thainsw.net',
      desc: 'ระบบศูนย์กลางเชื่อมโยงข้อมูลอิเล็กทรอนิกส์ ณ จุดเดียว สำหรับการนำเข้า-ส่งออก',
      icon: 'fa-network-wired'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Knowledge Hub</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ศูนย์รวมความรู้โลจิสติกส์</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              แหล่งรวบรวมข้อมูล เกร็ดความรู้ และลิงก์หน่วยงานที่จำเป็นสำหรับการนำเข้า-ส่งออก 
              เพื่อช่วยให้ธุรกิจของคุณก้าวไปข้างหน้าได้อย่างมั่นใจ
            </p>
          </div>

          {/* ส่วนที่ 1: บทความความรู้โลจิสติกส์ */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <i className="fas fa-lightbulb text-yellow-500"></i> บทความน่ารู้ (Logistics Guide)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${article.bg} ${article.color} flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${article.icon}`}></i>
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-thana-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {article.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-50 text-thana-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    อ่านเพิ่มเติม <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ส่วนที่ 2: ลิงก์หน่วยงานที่เกี่ยวข้องแบบอัตโนมัติ */}
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <i className="fas fa-link text-thana-blue"></i> เว็บไซต์หน่วยงานที่เกี่ยวข้อง (Useful Links)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalLinks.map((link) => (
                // ใช้ <a> tag พร้อม target="_blank" เพื่อเปิดหน้าใหม่ และ rel="noopener noreferrer" เพื่อความปลอดภัย
                <a 
                  key={link.id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-thana-blue transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-gray-400 group-hover:bg-thana-blue group-hover:text-white transition-colors text-xl">
                    <i className={`fas ${link.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-thana-blue transition-colors flex items-center gap-2">
                      {link.title}
                      <i className="fas fa-external-link-alt text-xs text-gray-400 group-hover:text-thana-blue"></i>
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{link.desc}</p>
                    <span className="text-xs text-blue-500 font-medium break-all">{link.url}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ต้องการคำปรึกษาด้านพิธีการศุลกากร?</h3>
              <p className="text-gray-600">ทีมผู้เชี่ยวชาญ (Shipping) ของเราพร้อมให้คำแนะนำอย่างถูกต้องตามกฎหมาย</p>
            </div>
            <Link href="/contact" className="bg-thana-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md whitespace-nowrap">
              ปรึกษาผู้เชี่ยวชาญฟรี
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}