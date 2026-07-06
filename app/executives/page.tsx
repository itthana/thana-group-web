'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ExecutivesPage() {
  // โครงสร้างข้อมูลผู้บริหาร (Data-Driven) สามารถแก้ไข เพิ่ม ลด ได้ง่ายๆ ที่นี่
  const executives = [
    {
      id: 1,
      name: 'นายธนา ทรงคุณวุฒิ',
      position: 'ประธานเจ้าหน้าที่บริหาร (CEO)',
      image: 'https://placehold.co/400x500/0B308A/ffffff?text=CEO',
      quote: 'เรามุ่งมั่นที่จะเป็นฟันเฟืองสำคัญในการขับเคลื่อนเศรษฐกิจและการค้าของภูมิภาคอาเซียนอย่างไร้รอยต่อ',
      bio: 'ด้วยประสบการณ์กว่า 20 ปีในอุตสาหกรรมโลจิสติกส์ เป็นผู้วางรากฐานและขยายเครือข่ายการขนส่งข้ามแดนของ THANA GROUP จนได้รับการยอมรับในระดับนานาชาติ',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 2,
      name: 'นางสาววิลาวัณย์ เลิศพาณิชย์',
      position: 'ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO)',
      image: 'https://placehold.co/400x500/E53935/ffffff?text=CFO',
      quote: 'ความโปร่งใสและเสถียรภาพทางการเงิน คือรากฐานที่สร้างความมั่นใจให้กับพาร์ทเนอร์ของเรา',
      bio: 'ผู้เชี่ยวชาญด้านการบริหารความเสี่ยงและการเงินองค์กร ดูแลโครงสร้างการลงทุนเพื่อรองรับการขยายคลังสินค้าและกองทัพรถบรรทุกพลังงานสะอาด',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 3,
      name: 'นายอรรถพล มุ่งก้าวไกล',
      position: 'ประธานเจ้าหน้าที่ฝ่ายปฏิบัติการ (COO)',
      image: 'https://placehold.co/400x500/1e293b/ffffff?text=COO',
      quote: 'ประสิทธิภาพและความปลอดภัยในทุกๆ กิโลเมตร คือหัวใจของปฏิบัติการขนส่งของเรา',
      bio: 'อดีตผู้บริหารระดับสูงจากบริษัทชิปปิ้งข้ามชาติ นำเทคโนโลยี AI และ IoT มายกระดับระบบติดตามสถานะสินค้าและบริหารจัดการกองรถ (Fleet Management)',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Leadership Team</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ทีมผู้บริหารระดับสูง</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              ผู้อยู่เบื้องหลังความสำเร็จและกำหนดทิศทางเชิงกลยุทธ์ของ THANA GROUP 
              ด้วยวิสัยทัศน์ที่มุ่งเน้นนวัตกรรมและความยั่งยืน
            </p>
          </div>

          {/* Grid โชว์การ์ดผู้บริหาร */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {executives.map((exec) => (
              <div 
                key={exec.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
              >
                {/* รูปภาพผู้บริหาร พร้อม Overlay Gradient */}
                <div className="relative h-[380px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Quote ที่จะโผล่ขึ้นมาตอน Hover (ดีไซน์สไตล์นิตยสารองค์กร) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-thana-red text-3xl opacity-80 mb-2 leading-none">"</div>
                    <p className="text-white text-sm font-medium leading-relaxed italic drop-shadow-md">
                      {exec.quote}
                    </p>
                  </div>
                </div>

                {/* ข้อมูลด้านล่างภาพ */}
                <div className="p-8 flex-grow flex flex-col relative bg-white z-20 -mt-2 rounded-t-3xl">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{exec.name}</h3>
                    <p className="text-thana-blue font-bold text-sm uppercase tracking-wider">{exec.position}</p>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {exec.bio}
                  </p>

                  {/* ปุ่ม LinkedIn */}
                  <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Connect</span>
                    <a 
                      href={exec.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                    >
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
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