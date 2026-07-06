'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  // ข้อมูลบริการแยกเป็น Array เพื่อให้ง่ายต่อการแก้ไขและสลับลำดับในอนาคต (Clean Code)
  const servicesData = [
    {
      id: 'cross-border',
      title: 'ขนส่งข้ามแดน ไทย-ลาว',
      subtitle: 'Cross-Border Transport',
      description: 'บริการขนส่งสินค้าข้ามแดนด้วยกองทัพรถบรรทุกที่ได้มาตรฐาน ครอบคลุมตั้งแต่รถกระบะ 4 ล้อ ไปจนถึงรถเทรลเลอร์ ควบคุมความปลอดภัยด้วยระบบ GPS Tracking ตลอด 24 ชั่วโมง พร้อมทีมงานที่เชี่ยวชาญเส้นทาง',
      features: ['บริการแบบ Door-to-Door', 'ระบบติดตามสถานะสินค้า Real-time', 'ประกันภัยสินค้าตลอดการเดินทาง', 'รองรับสินค้าทุกประเภท (FCL & LCL)'],
      icon: 'fa-truck-moving',
      imagePlaceholder: 'https://placehold.co/600x400/0B308A/ffffff?text=Cross-Border+Transport',
      reverse: false, // กำหนดให้รูปอยู่ซ้าย ข้อความอยู่ขวา
    },
    {
      id: 'customs',
      title: 'บริการตัวแทนออกของ',
      subtitle: 'Customs Clearance',
      description: 'หมดความกังวลเรื่องเอกสารและภาษี ด้วยบริการชิปปิ้งนำเข้า-ส่งออกที่ถูกต้องตามระเบียบศุลกากร ดำเนินการรวดเร็ว ลดความล่าช้า และป้องกันความผิดพลาดที่อาจเกิดต้นทุนบานปลาย',
      features: ['ให้คำปรึกษาด้านพิกัดศุลกากร', 'จัดทำใบขนสินค้าขาเข้า-ขาออก', 'เดินพิธีการศุลกากรแบบเบ็ดเสร็จ', 'ขอใบอนุญาตจากหน่วยงานที่เกี่ยวข้อง'],
      icon: 'fa-file-signature',
      imagePlaceholder: 'https://placehold.co/600x400/E53935/ffffff?text=Customs+Clearance',
      reverse: true, // กำหนดให้รูปอยู่ขวา ข้อความอยู่ซ้าย
    },
    {
      id: 'warehouse',
      title: 'บริการบริหารคลังสินค้า',
      subtitle: 'Warehouse Management',
      description: 'พื้นที่จัดเก็บสินค้าที่ปลอดภัยและได้มาตรฐาน พร้อมระบบจัดการคลังสินค้า (WMS) ที่ช่วยให้คุณตรวจสอบสต๊อกได้แม่นยำ บริการรับฝาก คัดแยก และกระจายสินค้าอย่างมีประสิทธิภาพ',
      features: ['พื้นที่จัดเก็บที่สะอาดและปลอดภัย', 'ระบบรักษาความปลอดภัย CCTV 24 ชม.', 'บริการบรรจุหีบห่อและติดฉลาก', 'การบริหารจัดการสต๊อกแบบ FIFO/LIFO'],
      icon: 'fa-warehouse',
      imagePlaceholder: 'https://placehold.co/600x400/374151/ffffff?text=Warehouse+Management',
      reverse: false,
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-38 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Our Solutions</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">บริการของเรา</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              เราออกแบบโซลูชันด้านโลจิสติกส์ที่ตอบโจทย์เฉพาะเจาะจงสำหรับธุรกิจของคุณ 
              ขับเคลื่อนความสำเร็จด้วยบริการที่รวดเร็ว ปลอดภัย และวางใจได้
            </p>
          </div>

          {/* Services List (Alternating Layout) */}
          <div className="space-y-20 md:space-y-32">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-10 md:gap-16 items-center ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* ส่วนรูปภาพ */}
                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img 
                      src={service.imagePlaceholder} 
                      alt={service.title} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Icon */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center shadow-md text-thana-blue">
                      <i className={`fas ${service.icon} text-2xl`}></i>
                    </div>
                  </div>
                </div>

                {/* ส่วนเนื้อหา */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-thana-red font-bold tracking-wider uppercase text-sm mb-1">{service.subtitle}</h3>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 pt-4 border-t border-gray-200">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="fas fa-check-circle text-thana-blue mt-1"></i>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-thana-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md group">
                      สอบถามบริการนี้ <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}