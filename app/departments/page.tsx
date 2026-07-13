'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 lg:pt-28">
        
        {/* HERO SECTION */}
        <section className="relative bg-[#0a2540] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Departments Background" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/80 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-4 shadow-lg">
              <i className="fas fa-sitemap"></i> Our Departments
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
              แผนกการทำงานของ <span className="text-[#ff0000]">THANA GROUP</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              ขับเคลื่อนธุรกิจด้วยทีมงานมืออาชีพที่มีความเชี่ยวชาญเฉพาะด้าน พร้อมให้บริการและสนับสนุนทุกความต้องการด้านโลจิสติกส์ของคุณ
            </p>
          </div>
        </section>

        {/* DEPARTMENTS GRID */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Sales */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="ขาย.JPG" alt="Sales" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-chart-line"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายขายและการตลาด</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">นำเสนอโซลูชันโลจิสติกส์ที่คุ้มค่าและตอบโจทย์ธุรกิจคุณ</p></div>
            </div>

            {/* 2. Customs */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Customs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-file-signature"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายพิธีการศุลกากร</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">ทีมชิปปิ้งผู้เชี่ยวชาญ ดูแลเอกสารข้ามแดนอย่างแม่นยำ ถูกกฎหมาย</p></div>
            </div>

            {/* 3. Operations */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="ขนส่ง.JPG" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-truck-fast"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายปฏิบัติการขนส่ง</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">ควบคุมการจัดส่งและบริหารกองรถบรรทุกให้ถึงปลายทางอย่างปลอดภัย</p></div>
            </div>

            {/* 4. Customer Service */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="บริการ.JPG" alt="CS" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-headset"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายบริการลูกค้า</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">พร้อมสแตนด์บายดูแล ให้คำปรึกษา และติดตามสถานะพัสดุให้คุณ</p></div>
            </div>

            {/* 5. Accounting */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="การเงิน1.JPG" alt="Accounting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-calculator"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายบัญชีและการเงิน</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">จัดการระบบวางบิล ชำระเงิน และเอกสารภาษีอย่างรวดเร็วโปร่งใส</p></div>
            </div>

            {/* 6. HR */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="ฝ่ายบุคคล1.JPG" alt="HR" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-users"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายทรัพยากรบุคคล</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">ดูแลสวัสดิการ ฝึกอบรม และพัฒนาศักยภาพของบุคลากรในองค์กร</p></div>
            </div>

            {/* 7. IT */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="ฝ่ายไอที.JPG" alt="IT" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-laptop-code"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายเทคโนโลยีสารสนเทศ</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">พัฒนาระบบหลังบ้าน ระบบติดตามพัสดุ และดูแลความปลอดภัยข้อมูล</p></div>
            </div>

            {/* 8. Purchasing */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="จัดซื้อ.JPG" alt="Purchasing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-cart-shopping"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายจัดซื้อ</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">จัดหาอุปกรณ์และชิ้นส่วนอะไหล่ต่างๆ เพื่อสนับสนุนการทำงานทุกภาคส่วน</p></div>
            </div>

            {/* 9. Admin */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" alt="Admin" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-folder-open"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายธุรการ</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">บริหารจัดการสำนักงานและอำนวยความสะดวกให้กระบวนการทำงานราบรื่น</p></div>
            </div>

            {/* 10. Warehouse */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop" alt="Warehouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-warehouse"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายคลังสินค้า</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">จัดการพื้นที่จัดเก็บสินค้า การคัดแยก และกระจายสินค้าอย่างเป็นระบบ</p></div>
            </div>

            {/* 11. Audit/QA */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Audit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center text-white"><i className="fas fa-clipboard-check"></i></div>
                  <h4 className="text-white font-black text-lg">ฝ่ายตรวจสอบคุณภาพ</h4>
                </div>
              </div>
              <div className="p-6"><p className="text-gray-600 text-sm">ตรวจสอบมาตรฐานการทำงานและการให้บริการ เพื่อรักษาคุณภาพสูงสุด</p></div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}