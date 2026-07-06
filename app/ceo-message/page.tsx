'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function CeoMessagePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Message From CEO</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">สารจากผู้บริหาร</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
          </div>

          {/* Content Section (Executive Layout) */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
            {/* Background Pattern อ่อนๆ */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-9xl text-thana-blue">
              <i className="fas fa-quote-right"></i>
            </div>

            <div className="flex flex-col lg:flex-row">
              
              {/* รูปภาพผู้บริหาร (ฝั่งซ้าย) */}
              <div className="lg:w-2/5 relative">
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img 
                    src="ceo.png" 
                    alt="CEO of THANA GROUP" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent lg:hidden"></div>
                </div>
              </div>

              {/* ข้อความสารจากผู้บริหาร (ฝั่งขวา) */}
              <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
                
                <i className="fas fa-quote-left text-4xl text-thana-red/20 mb-6"></i>
                
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-snug">
                  "เราไม่ได้เป็นเพียงผู้ให้บริการขนส่ง<br />
                  แต่เราคือ <span className="text-thana-blue">พันธมิตรที่ขับเคลื่อนธุรกิจของคุณ</span><br />
                  ให้ก้าวข้ามทุกข้อจำกัด"
                </h3>
                
                <div className="space-y-5 text-gray-600 leading-relaxed text-lg mb-10">
                  <p>
                    ตลอดระยะเวลากว่า 20 ปีที่ผ่านมา THANA GROUP ได้มุ่งมั่นพัฒนาศักยภาพการให้บริการโลจิสติกส์อย่างไม่หยุดยั้ง จากจุดเริ่มต้นเล็กๆ สู่การเป็นผู้นำด้านการขนส่งข้ามแดน ไทย-ลาว เราเผชิญกับความท้าทายและการเปลี่ยนแปลงของโลกธุรกิจมามากมาย แต่สิ่งหนึ่งที่ไม่เคยเปลี่ยนคือ <strong>"ความมุ่งมั่นที่จะส่งมอบบริการที่ดีที่สุด"</strong> ให้กับลูกค้าของเรา
                  </p>
                  <p>
                    ในยุคที่เทคโนโลยีเข้ามามีบทบาทสำคัญ เราได้ลงทุนพัฒนาระบบเทคโนโลยีสารสนเทศ ทั้งระบบติดตามรถขนส่ง (GPS Tracking) และระบบบริหารจัดการคลังสินค้า (WMS) เพื่อให้ทุกๆ การเคลื่อนย้ายสินค้าของคุณมีความโปร่งใส แม่นยำ และตรวจสอบได้แบบ Real-time
                  </p>
                  <p>
                    ผมขอขอบพระคุณลูกค้าและพันธมิตรทุกท่านที่ให้ความไว้วางใจ THANA GROUP เสมอมา เราจะยังคงยึดมั่นในมาตรฐานสากล พัฒนาบุคลากร และยกระดับบริการของเราต่อไป เพื่อให้คุณมั่นใจได้ว่า ทุกๆ ความสำเร็จของคุณ จะมีเราเป็นส่วนหนึ่งในการขับเคลื่อนอยู่เบื้องหลังเสมอ
                  </p>
                </div>

                {/* ลายเซ็นและชื่อ */}
                <div className="border-t border-gray-100 pt-8 mt-auto flex items-center gap-6">
                  {/* รูปภาพลายเซ็น (Placeholder) */}
                  <div className="w-32 h-auto opacity-70">
                    <img 
                      src="https://placehold.co/200x80/ffffff/0B308A?text=Signature" 
                      alt="CEO Signature" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">นายธนาธิป กำลังเจริญ</h4>
                    <p className="text-thana-red font-medium text-sm uppercase tracking-wider mt-1">
                      ประธานกรรมการบริหาร (CEO)
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}