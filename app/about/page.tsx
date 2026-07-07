'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">About Thana Group</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">เกี่ยวกับเรา</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="ลงเวป.jpg" 
                  alt="Company History" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-thana-red pl-4">จุดเริ่มต้นของเรา</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  THANA GROUP ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะเป็นผู้นำด้านการให้บริการโลจิสติกส์แบบครบวงจร โดยเฉพาะเส้นทางข้ามแดน ไทย-ลาว เราเริ่มต้นจากการเป็นบริษัทขนส่งเล็กๆ จนเติบโตเป็นผู้เชี่ยวชาญที่มีเครือข่ายครอบคลุมและระบบปฏิบัติการที่ทันสมัย
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ด้วยประสบการณ์กว่า 20 ปี เราเข้าใจถึงความสำคัญของความรวดเร็ว ปลอดภัย และความแม่นยำในทุกขั้นตอนของการขนส่ง เราจึงลงทุนพัฒนากองทัพรถบรรทุก ระบบไอที (GPS & WMS) และบุคลากรอย่างต่อเนื่อง เพื่อส่งมอบบริการที่ดีที่สุดให้กับพาร์ทเนอร์ของเรา
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-thana-blue font-black text-4xl">20+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">ปีแห่งความ<br/>เชี่ยวชาญ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-thana-blue text-white rounded-2xl p-10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <i className="fas fa-eye text-4xl mb-6 text-thana-red"></i>
              <h3 className="text-2xl font-black mb-4">วิสัยทัศน์ (Vision)</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                "มุ่งมั่นที่จะเป็นผู้ให้บริการโลจิสติกส์ระดับแนวหน้าของภูมิภาคอาเซียน ที่ขับเคลื่อนด้วยนวัตกรรมและมาตรฐานสากล เพื่อสร้างความได้เปรียบทางการแข่งขันให้กับลูกค้า"
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-red-50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <i className="fas fa-bullseye text-4xl mb-6 text-thana-red"></i>
              <h3 className="text-2xl font-black mb-4 text-gray-900">พันธกิจ (Mission)</h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li className="flex items-start gap-3"><i className="fas fa-check text-thana-red mt-1"></i> ส่งมอบสินค้าตรงเวลา ปลอดภัย ในต้นทุนที่เหมาะสม</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-thana-red mt-1"></i> พัฒนาระบบเทคโนโลยีสารสนเทศเพื่อการบริหารจัดการที่โปร่งใส</li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-thana-red mt-1"></i> พัฒนาศักยภาพบุคลากรให้มีความเชี่ยวชาญและมีใจรักบริการ</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}