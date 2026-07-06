'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function GroupCompaniesPage() {
  // ข้อมูลบริษัทในเครือ (สามารถแก้ไขชื่อและรายละเอียดได้ตามจริง)
  const companies = [
    {
      id: 1,
      name: 'THANA LOGISTICS CO., LTD.',
      type: 'Customs Broker & Freight Forwarder',
      desc: 'บริษัทแกนหลักผู้ให้บริการตัวแทนออกของรับอนุญาต (Customs Broker) และจัดการขนส่งสินค้าระหว่างประเทศ นำเข้า-ส่งออก แบบครบวงจร',
      icon: 'fa-globe-asia',
      color: 'text-thana-blue',
      bg: 'bg-blue-50',
      borderColor: 'border-thana-blue',
      features: ['บริการเดินพิธีการศุลกากร', 'Sea & Air Freight', 'Cross-border Logistics']
    },
    {
      id: 2,
      name: 'THANA TRANSPORT CO., LTD.',
      type: 'Domestic & Cross-Border Trucking',
      desc: 'ผู้ให้บริการกองทัพรถบรรทุกขนส่งสินค้า ทั้งรถหัวลาก เทรลเลอร์ และรถบรรทุก 6-10 ล้อ ครอบคลุมเส้นทางทั่วประเทศไทย และ สปป.ลาว',
      icon: 'fa-truck-moving',
      color: 'text-thana-red',
      bg: 'bg-red-50',
      borderColor: 'border-thana-red',
      features: ['รถบรรทุกติด GPS ทุกคัน', 'พนักงานขับรถมืออาชีพ', 'ประกันภัยสินค้าเต็มมูลค่า']
    },
    {
      id: 3,
      name: 'THANA WAREHOUSE & FULFILLMENT',
      type: 'Warehousing & Distribution',
      desc: 'ศูนย์กระจายสินค้าและคลังสินค้าให้เช่า พร้อมระบบจัดการสินค้าคงคลัง (WMS) ที่ทันสมัย และบริการแพ็คสินค้าส่ง (Fulfillment) สำหรับธุรกิจ',
      icon: 'fa-boxes-stacked',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      borderColor: 'border-amber-400',
      features: ['คลังสินค้ามาตรฐานสากล', 'ระบบ WMS ตรวจสอบเรียลไทม์', 'Pick & Pack Services']
    },
    {
      id: 4,
      name: 'THANA GREEN ENERGY',
      type: 'Sustainable Logistics Solutions',
      desc: 'บริษัทที่มุ่งเน้นการพัฒนาระบบขนส่งด้วยพลังงานสะอาด เช่น กองทัพรถบรรทุก EV และการจัดการโลจิสติกส์เพื่อลดการปล่อยคาร์บอน (ESG)',
      icon: 'fa-leaf',
      color: 'text-green-600',
      bg: 'bg-green-50',
      borderColor: 'border-green-500',
      features: ['100% EV Trucks', 'Carbon Emission Tracking', 'Green Supply Chain']
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Our Ecosystem</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">บริษัทในเครือ THANA GROUP</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              ด้วยความแข็งแกร่งของบริษัทในเครือที่ทำงานสอดประสานกัน 
              เราจึงสามารถมอบบริการโลจิสติกส์แบบครบวงจร (End-to-End) ที่ตอบโจทย์ทุกความต้องการทางธุรกิจของคุณ
            </p>
          </div>

          {/* Grid โชว์บริษัทในเครือ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {companies.map((company) => (
              <div 
                key={company.id} 
                className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                {/* แถบสีตกแต่งด้านบนของการ์ด */}
                <div className={`absolute top-0 left-0 w-full h-2 ${company.bg} ${company.borderColor} border-t-4`}></div>
                
                {/* ลายน้ำพื้นหลัง (Watermark Icon) */}
                <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500 text-gray-900">
                  <i className={`fas ${company.icon}`}></i>
                </div>

                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${company.bg} ${company.color} flex items-center justify-center text-3xl shadow-sm shrink-0 group-hover:rotate-12 transition-transform`}>
                      <i className={`fas ${company.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{company.name}</h3>
                      <p className={`text-sm font-bold uppercase tracking-wider mt-1 ${company.color}`}>{company.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {company.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {company.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <i className={`fas fa-check-circle ${company.color}`}></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ปุ่มติดต่อแต่ละบริษัท */}
                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-thana-blue transition-colors group-hover:translate-x-2 duration-300"
                  >
                    ติดต่อสอบถามบริการ <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Banner */}
          <div className="bg-gradient-to-r from-gray-900 via-thana-blue to-gray-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">เชื่อมต่อทุกการขนส่งอย่างไร้รอยต่อ</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                ให้ THANA GROUP เป็นศูนย์กลาง (Single Point of Contact) ในการจัดการซัพพลายเชนของคุณ 
                คุยที่เดียว จบทุกกระบวนการ
              </p>
              <Link href="/contact" className="inline-block bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg text-lg btn-shine">
                ปรึกษาผู้เชี่ยวชาญของเรา
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}