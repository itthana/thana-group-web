'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function GreenLogisticsPage() {
  // ข้อมูลโครงการด้านสิ่งแวดล้อม (Clean Code Pattern)
  const ecoInitiatives = [
    {
      id: 1,
      icon: 'fa-truck',
      title: 'กองทัพรถบรรทุก EV (EV Fleet)',
      desc: 'นำร่องการใช้รถบรรทุกพลังงานไฟฟ้า 100% ในเส้นทางระยะสั้นและศูนย์กระจายสินค้า เพื่อลดการปล่อยก๊าซคาร์บอนไดออกไซด์ (CO2) และมลพิษทางอากาศ',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
    {
      id: 2,
      icon: 'fa-route',
      title: 'ระบบคำนวณเส้นทางอัจฉริยะ',
      desc: 'ใช้ AI ในการวางแผนเส้นทาง (Route Optimization) เพื่อลดระยะทางวิ่งเปล่า (Backhaul) ช่วยประหยัดน้ำมันเชื้อเพลิงและลดการปล่อยมลพิษได้อย่างมีนัยสำคัญ',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      id: 3,
      icon: 'fa-solar-panel',
      title: 'คลังสินค้าพลังงานสะอาด',
      desc: 'ติดตั้งแผงโซลาร์เซลล์ (Solar Rooftop) บนหลังคาคลังสินค้าทุกแห่งของเรา เพื่อใช้พลังงานหมุนเวียนในการปฏิบัติงานและลดการใช้ไฟฟ้าจากสายส่งหลัก',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      id: 4,
      icon: 'fa-leaf',
      title: 'Paperless & Eco-Packaging',
      desc: 'เปลี่ยนผ่านสู่ระบบเอกสารดิจิทัลเต็มรูปแบบในพิธีการศุลกากร และส่งเสริมการใช้วัสดุกันกระแทกที่สามารถรีไซเคิลได้ (Recyclable Packaging)',
      color: 'text-green-600',
      bg: 'bg-green-50',
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-38 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4 flex items-center justify-center gap-2 mx-auto w-max">
              <i className="fas fa-leaf"></i> Sustainability Vision
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              ขับเคลื่อนธุรกิจอนาคตด้วย <span className="text-green-600">Green Logistics</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              ที่ THANA GROUP เราเชื่อว่าการเติบโตทางธุรกิจต้องเดินควบคู่ไปกับการดูแลรักษาสิ่งแวดล้อม 
              เรามุ่งมั่นที่จะเป็นผู้นำด้านโลจิสติกส์ที่ยั่งยืน เพื่อสร้างผลกระทบเชิงบวกต่อสังคมและโลกใบนี้
            </p>
          </div>

          {/* Hero Image & Commitment */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative aspect-video lg:aspect-auto">
                <img 
                  src="https://placehold.co/800x600/10B981/ffffff?text=Green+Logistics+Initiative" 
                  alt="Green Logistics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 opacity-5">
                  <i className="fas fa-globe-asia text-[20rem]"></i>
                </div>
                <h2 className="text-3xl font-black mb-6 relative z-10">เป้าหมายของเรา: <span className="text-green-400">Net Zero 2050</span></h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8 relative z-10">
                  เราตั้งเป้าหมายที่จะลดการปล่อยก๊าซเรือนกระจกสุทธิเป็นศูนย์ (Net Zero Emissions) ภายในปี 2050 ผ่านการลงทุนในเทคโนโลยีพลังงานสะอาด การปรับปรุงประสิทธิภาพกองเรือ และการชดเชยคาร์บอน (Carbon Offsetting) ร่วมสร้าง Supply Chain ที่เป็นมิตรต่อโลกไปกับเรา
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-black text-green-400 mb-1">-30%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">ลดคาร์บอนภายในปี 2030</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-black text-green-400 mb-1">100%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">แพ็กเกจจิ้งรักษ์โลก</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-thana-blue">นวัตกรรมเพื่อความยั่งยืนของเรา</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ecoInitiatives.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-start gap-6 group">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-thana-blue transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-thana-blue to-blue-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <i className="fas fa-leaf text-8xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10">มาร่วมสร้าง Supply Chain สีเขียวไปกับเรา</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
              ยกระดับภาพลักษณ์แบรนด์ของคุณ ด้วยบริการโลจิสติกส์ที่ใส่ใจสิ่งแวดล้อม ปรึกษาทีมงานของเราเพื่อออกแบบโซลูชันที่เหมาะสมกับธุรกิจคุณ
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg text-lg relative z-10 hover:-translate-y-1">
              ปรึกษาทีมงาน <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}