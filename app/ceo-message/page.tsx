import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'สารจากผู้บริหาร | THANA GROUP',
  description: 'วิสัยทัศน์และทิศทางการดำเนินธุรกิจจากผู้บริหารระดับสูง กลุ่มบริษัท THANA GROUP',
};

export default function CeoMessagePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white font-prompt pb-24">
        
        {/* =========================================
            1. Hero Banner (พื้นหลังส่วนหัว)
        ========================================= */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/90 via-[#0a2540]/70 to-[#0a2540]/90"></div>
          
          <div className="relative z-10 text-center px-4 -translate-y-10 animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
              Executive Vision
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-2xl">
              สารจากผู้บริหาร
            </h1>
            <div className="h-1.5 w-24 bg-[#ff0000] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* =========================================
            2. ส่วนเนื้อหาหลัก (ดึงให้ลอยซ้อนทับ Banner)
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* ฝั่งซ้าย: รูปภาพผู้บริหาร (จัดกรอบแบบมีมิติ Offset) */}
            <div className="lg:col-span-5 relative group animate-fade-in">
              {/* กรอบสีแดงตกแต่งด้านหลัง */}
              <div className="absolute inset-0 bg-[#ff0000] rounded-2xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* เปลี่ยน src="..." เป็นรูปผู้บริหารของคุณ */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="ประธาน2.jpg" 
                  alt="CEO THANA GROUP" 
                  className="w-full h-[500px] md:h-[600px] object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* ฝั่งขวา: เนื้อหาสารจากผู้บริหาร (Magazine Style) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-50 relative mt-0 lg:mt-10 animate-fade-in">
              
              {/* เครื่องหมาย Quote จางๆ เป็นลายน้ำพื้นหลัง */}
              <i className="fas fa-quote-left absolute top-6 left-8 text-8xl text-gray-100/80 -z-10 rotate-12"></i>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-8 leading-tight relative z-10">
                "เรามุ่งมั่นที่จะเป็นฟันเฟืองสำคัญ <br className="hidden xl:block" />
                <span className="text-[#ff0000]">ในการขับเคลื่อนความสำเร็จ</span> ของธุรกิจคุณ"
              </h2>
              
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-loose relative z-10 font-light">
                <p>
                  ตลอดระยะเวลากว่า 20 ปีที่ผ่านมา กลุ่มบริษัท THANA GROUP ได้เติบโตเคียงคู่กับความสำเร็จของพันธมิตรทางธุรกิจของเรา 
                  จากจุดเริ่มต้นเล็กๆ สู่วันนี้ที่เราก้าวขึ้นเป็นผู้นำด้านบริการโลจิสติกส์และการขนส่งสินค้าระหว่างประเทศแบบครบวงจร
                </p>
                <p>
                  ในโลกธุรกิจที่เปลี่ยนแปลงอย่างรวดเร็ว เราไม่เคยหยุดนิ่งที่จะพัฒนาระบบนิเวศการขนส่ง นำเทคโนโลยีที่ทันสมัยเข้ามาปรับใช้ 
                  รวมถึงการให้ความสำคัญกับสิ่งแวดล้อม <strong className="text-[#0a2540] font-bold">(Green Logistics)</strong> เพื่อส่งมอบบริการที่รวดเร็ว ปลอดภัย และคุ้มค่าที่สุดให้กับทุกท่าน
                </p>
                <p>
                  ในนามของผู้บริหารและทีมงาน THANA GROUP ขอขอบพระคุณลูกค้าและพันธมิตรทุกท่านที่ให้ความไว้วางใจเราเสมอมา 
                  เราขอคำมั่นสัญญาว่าจะรักษามาตรฐาน และพัฒนาบริการให้ดียิ่งขึ้นอย่างไม่หยุดยั้ง เพื่อเป็นส่วนหนึ่งในการยกระดับขีดความสามารถการแข่งขันของธุรกิจคุณในเวทีระดับโลก
                </p>
              </div>

              {/* ส่วนระบุชื่อและตำแหน่งแบบเรียบหรู (ลบลายเซ็นออกแล้ว) */}
              <div className="mt-12 pt-8 border-t-2 border-gray-100 flex items-center gap-6">
                <div className="w-16 h-1 bg-[#0a2540] rounded-full hidden sm:block"></div>
                <div>
                  <h3 className="text-2xl font-black text-[#0a2540] tracking-wide mb-1">
                    คุณธนาธิป กำลังเจริญ
                  </h3>
                  <p className="text-[#ff0000] font-bold text-sm tracking-widest uppercase">
                    ประธานบริหาร (CEO)
                  </p>
                  <p className="text-gray-400 text-sm mt-1">กลุ่มบริษัท THANA GROUP</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}