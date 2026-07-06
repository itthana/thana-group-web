'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function NewsPage() {
  // ข้อมูลจำลองข่าวสาร (Mock Data)
  const newsList = [
    {
      id: 1,
      title: 'THANA GROUP เปิดเส้นทางขนส่งใหม่ มุ่งสู่เวียงจันทน์เต็มรูปแบบ',
      date: '5 กรกฎาคม 2026',
      category: 'Company News',
      excerpt: 'ขยายเครือข่ายการจัดส่งให้ครอบคลุมยิ่งขึ้น พร้อมเพิ่มรอบรถบรรทุกเพื่อรองรับการเติบโตของเศรษฐกิจข้ามแดน ไทย-ลาว อย่างยั่งยืน',
      image: 'https://placehold.co/600x400/0B308A/ffffff?text=News+Update+01'
    },
    {
      id: 2,
      title: 'คว้ารางวัล "ผู้ให้บริการโลจิสติกส์ดีเด่น" ประจำปี 2026',
      date: '28 มิถุนายน 2026',
      category: 'Awards',
      excerpt: 'ตอกย้ำความสำเร็จและความมุ่งมั่นในการส่งมอบบริการที่มีคุณภาพ ด้วยรางวัลระดับประเทศจากสมาคมผู้รับจัดการขนส่งสินค้าระหว่างประเทศ',
      image: 'https://placehold.co/600x400/E53935/ffffff?text=Award+2026'
    },
    {
      id: 3,
      title: 'อัปเกรดระบบ WMS บริหารคลังสินค้าอัจฉริยะ แม่นยำ 99.9%',
      date: '15 มิถุนายน 2026',
      category: 'Technology',
      excerpt: 'ยกระดับเทคโนโลยีคลังสินค้าด้วยระบบ WMS เวอร์ชันล่าสุด ช่วยให้พาร์ทเนอร์สามารถตรวจสอบสต๊อกสินค้าได้แบบ Real-time ตลอด 24 ชั่วโมง',
      image: 'https://placehold.co/600x400/374151/ffffff?text=WMS+System'
    },
    {
      id: 4,
      title: 'กิจกรรม CSR ปลูกป่าชายเลน คืนความสมดุลสู่ธรรมชาติ',
      date: '2 มิถุนายน 2026',
      category: 'CSR',
      excerpt: 'ทีมผู้บริหารและพนักงาน THANA GROUP ร่วมแรงร่วมใจปลูกป่าชายเลน ณ จังหวัดสมุทรสงคราม เพื่อตระหนักถึงความสำคัญของสิ่งแวดล้อม',
      image: 'https://placehold.co/600x400/4CAF50/ffffff?text=CSR+Activity'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-42 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Media Center</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ข่าวสารและกิจกรรม</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              อัปเดตทุกความเคลื่อนไหว กิจกรรมองค์กร และเทรนด์ที่น่าสนใจในแวดวงโลจิสติกส์
            </p>
          </div>

          {/* News Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <article key={news.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                
                {/* รูปภาพ Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-thana-blue shadow-sm uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>

                {/* เนื้อหาข่าว */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                    <i className="far fa-calendar-alt"></i>
                    <time>{news.date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-thana-red transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href="#" className="inline-flex items-center gap-2 text-thana-blue font-bold text-sm group/btn">
                      อ่านเพิ่มเติม <i className="fas fa-arrow-right transition-transform group-hover/btn:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
                
              </article>
            ))}
          </div>

          {/* Pagination (ดีไซน์ไว้เผื่ออนาคต) */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-thana-blue hover:text-white hover:border-thana-blue transition-colors disabled:opacity-50" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-10 h-10 rounded-lg bg-thana-blue text-white font-bold flex items-center justify-center shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-thana-blue hover:text-white hover:border-thana-blue transition-colors font-bold">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-thana-blue hover:text-white hover:border-thana-blue transition-colors font-bold">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-thana-blue hover:text-white hover:border-thana-blue transition-colors">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}