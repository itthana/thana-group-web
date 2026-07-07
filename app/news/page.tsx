import type { Metadata } from 'next';
import Link from 'next/link';
// แก้ไข Path ให้ถูกต้อง (ย้อนกลับ 2 โฟลเดอร์เพื่อเข้าสู่ components)
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'ข่าวสารและกิจกรรม | THANA GROUP',
  description: 'อัปเดตข่าวสาร กิจกรรม และความเคลื่อนไหวในแวดวงโลจิสติกส์จาก THANA GROUP',
};

// ============================================================================
// 📊 Data Structure: ข้อมูลจำลองสำหรับข่าวสาร (อัปเดตผ่าน API หรือ CMS ได้ในอนาคต)
// ============================================================================
const newsData = [
  {
    id: 1,
    title: 'THANA GROUP ขยายกองทัพ EV Truck มุ่งหน้าสู่ Green Logistics',
    date: '15 มิถุนายน 2569',
    category: 'Corporate News',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop',
    excerpt: 'ก้าวสำคัญสู่การเป็นผู้นำด้านโลจิสติกส์สีเขียว ด้วยการเพิ่มจำนวนรถบรรทุกพลังงานไฟฟ้า เพื่อลดการปล่อยคาร์บอนและตอบสนองนโยบาย ESG ระดับโลก'
  },
  {
    id: 2,
    title: 'เปิดตัวศูนย์กระจายสินค้าแห่งใหม่ ณ นครหลวงเวียงจันทน์',
    date: '28 พฤษภาคม 2569',
    category: 'Expansion',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    excerpt: 'เสริมความแข็งแกร่งเครือข่ายโลจิสติกส์ข้ามแดน ไทย-ลาว ด้วยคลังสินค้าอัจฉริยะที่รองรับการจัดการสินค้าทุกประเภทได้อย่างรวดเร็วและปลอดภัย'
  },
  {
    id: 3,
    title: 'รับรางวัล ผู้ให้บริการโลจิสติกส์ยอดเยี่ยม (Logistics Excellence Award)',
    date: '10 พฤษภาคม 2569',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop',
    excerpt: 'จากความมุ่งมั่นในการให้บริการตลอด 20 ปี THANA GROUP ได้รับการยกย่องให้เป็นองค์กรต้นแบบด้านการจัดการซัพพลายเชนแห่งปี'
  },
  {
    id: 4,
    title: 'อัปเดตสถานการณ์การขนส่งด่านพรมแดน ช่องเม็ก-วังเต่า',
    date: '2 พฤษภาคม 2569',
    category: 'Logistics Update',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop',
    excerpt: 'อัปเดตระเบียบพิธีการศุลกากรใหม่ เพื่อให้พันธมิตรทางธุรกิจของเราสามารถเตรียมเอกสารและส่งมอบสินค้าได้ตรงตามเวลาที่กำหนด'
  }
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO SECTION (ส่วนหัว)
        ========================================= */}
        <section 
          className="relative h-[300px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#0a2540]/90"></div>
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              ข่าวสารและกิจกรรม
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 text-sm md:text-base tracking-widest uppercase font-medium">
              News & Updates
            </p>
          </div>
        </section>

        {/* =========================================
            2. NEWS GRID (ส่วนแสดงรายการข่าว)
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {newsData.map((news) => (
              <article 
                key={news.id} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col md:flex-row group animate-fade-in"
              >
                {/* รูปภาพข่าว */}
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* ป้ายหมวดหมู่ข่าว */}
                  <div className="absolute top-4 left-4 bg-[#ff0000] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
                    {news.category}
                  </div>
                </div>

                {/* เนื้อหาข่าว */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <div className="flex items-center text-gray-400 text-xs font-medium mb-3 gap-2">
                    <i className="far fa-calendar-alt text-[#0a2540]"></i>
                    {news.date}
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#0a2540] mb-3 leading-tight group-hover:text-[#ff0000] transition-colors line-clamp-2">
                    {news.title}
                  </h2>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  {/* ปุ่มอ่านต่อ (จะเชื่อมไปหน้ารายละเอียดข่าวในอนาคต) */}
                  <div className="mt-auto">
                    <Link href="#" className="inline-flex items-center text-sm font-bold text-[#0a2540] hover:text-[#ff0000] transition-colors group/btn">
                      อ่านเพิ่มเติม 
                      <i className="fas fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* ปุ่มโหลดข่าวสารเพิ่มเติม */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border border-gray-200 text-[#0a2540] font-bold rounded-full hover:bg-gray-50 hover:text-[#ff0000] hover:border-[#ff0000] transition-all shadow-sm">
              <i className="fas fa-spinner mr-2"></i> โหลดข่าวสารเพิ่มเติม
            </button>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}