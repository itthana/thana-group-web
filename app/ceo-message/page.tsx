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
      
      <main className="min-h-screen bg-slate-50 pt-20 pb-20 font-prompt">
        
        {/* =========================================
            จุดที่ 1: รูปภาพพื้นหลังส่วนหัว (Hero Banner) 
            เปลี่ยนลิงก์ตรง url('...') ให้เป็นรูปบริษัทหรือลวดลายที่ต้องการ
        ========================================= */}
        <section 
          className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#0a2540]/90"></div>
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider drop-shadow-md">
              สารจากผู้บริหาร
            </h1>
            <div className="h-1 w-16 bg-[#ff0000] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 text-sm tracking-widest uppercase">
              Message from CEO
            </p>
          </div>
        </section>

        {/* ส่วนเนื้อหาหลัก */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              
              {/* =========================================
                  จุดที่ 2: รูปภาพผู้บริหาร (CEO Portrait)
                  เปลี่ยน src="..." เป็นชื่อไฟล์รูปผู้บริหารของคุณ (เช่น src="/ceo-profile.jpg")
              ========================================= */}
              <div className="md:w-2/5 bg-gray-100 relative">
                <img 
                  src="ประธาน.jpg" 
                  alt="CEO THANA GROUP" 
                  className="w-full h-[400px] md:h-full object-cover object-top"
                />
                {/* แถบชื่อและตำแหน่ง (แสดงทับบนรูปมุมล่าง) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a2540] to-transparent p-6 pt-16 text-white text-center md:text-left">
                  <h3 className="text-xl font-bold mb-1">คุณชื่อ นามสกุล</h3>
                  <p className="text-sm text-[#ff0000] font-medium tracking-wider">ประธานเจ้าหน้าที่บริหาร (CEO)</p>
                </div>
              </div>

              {/* ส่วนเนื้อหาสารจากผู้บริหาร */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <i className="fas fa-quote-left text-4xl text-gray-200 mb-6"></i>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-6 leading-tight">
                  "เรามุ่งมั่นที่จะเป็นฟันเฟืองสำคัญ <br className="hidden lg:block" />
                  ในการขับเคลื่อนความสำเร็จของธุรกิจคุณ"
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  <p>
                    ตลอดระยะเวลากว่า 20 ปีที่ผ่านมา กลุ่มบริษัท THANA GROUP ได้เติบโตเคียงคู่กับความสำเร็จของพันธมิตรทางธุรกิจของเรา 
                    จากจุดเริ่มต้นเล็กๆ สู่วันนี้ที่เราก้าวขึ้นเป็นผู้นำด้านบริการโลจิสติกส์และการขนส่งสินค้าระหว่างประเทศแบบครบวงจร
                  </p>
                  <p>
                    ในโลกธุรกิจที่เปลี่ยนแปลงอย่างรวดเร็ว เราไม่เคยหยุดนิ่งที่จะพัฒนาระบบนิเวศการขนส่ง นำเทคโนโลยีที่ทันสมัยเข้ามาปรับใช้ 
                    รวมถึงการให้ความสำคัญกับสิ่งแวดล้อม (Green Logistics) เพื่อส่งมอบบริการที่รวดเร็ว ปลอดภัย และคุ้มค่าที่สุดให้กับทุกท่าน
                  </p>
                  <p>
                    ในนามของผู้บริหารและทีมงาน THANA GROUP ขอขอบพระคุณลูกค้าและพันธมิตรทุกท่านที่ให้ความไว้วางใจเราเสมอมา 
                    เราขอคำมั่นสัญญาว่าจะรักษามาตรฐาน และพัฒนาบริการให้ดียิ่งขึ้นต่อไป
                  </p>
                </div>

                {/* ส่วนลายเซ็น (ถ้ามีรูปภาพลายเซ็น สามารถนำมาใส่ตรงนี้ได้) */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/John_Hancock_Signature.svg" 
                    alt="Signature" 
                    className="h-10 mb-2 opacity-60"
                  />
                  <div className="text-sm font-bold text-[#0a2540]">คุณชื่อ นามสกุล</div>
                  <div className="text-xs text-gray-500">ประธานเจ้าหน้าที่บริหาร, กลุ่มบริษัท THANA GROUP</div>
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