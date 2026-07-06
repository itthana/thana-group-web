'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function TestimonialsPage() {
  // ข้อมูลเสียงตอบรับจากพันธมิตร (Clean Code Pattern)
  const testimonials = [
    {
      id: 1,
      quote: "ตั้งแต่เปลี่ยนมาใช้บริการของ THANA GROUP ปัญหาการส่งสินค้าข้ามแดนล่าช้าก็หมดไป ทีมงานให้คำปรึกษาเรื่องเอกสารศุลกากรได้แม่นยำมาก ช่วยเซฟต้นทุนให้บริษัทเราได้มหาศาล เป็นพาร์ทเนอร์ที่พึ่งพาได้จริงๆ ครับ",
      author: "คุณสมศักดิ์ นำเข้าส่งออก",
      position: "Managing Director",
      company: "ABC Trading Co., Ltd.",
      rating: 5,
      image: "https://placehold.co/150x150/0B308A/ffffff?text=Partner+1"
    },
    {
      id: 2,
      quote: "ระบบ Track & Trace ของที่นี่ทันสมัยมาก เราสามารถเช็คสถานะตู้คอนเทนเนอร์ได้แบบ Real-time ทำให้วางแผนการผลิตในโรงงานต่อได้อย่างไม่มีสะดุด ทีม Customer Service ก็ตอบกลับรวดเร็วตลอด 24 ชั่วโมง",
      author: "คุณวิลาวัลย์ ก้าวไกล",
      position: "Supply Chain Manager",
      company: "Global Manufacturing PCL.",
      rating: 5,
      image: "https://placehold.co/150x150/E53935/ffffff?text=Partner+2"
    },
    {
      id: 3,
      quote: "ประทับใจวิสัยทัศน์เรื่อง Green Logistics มาก การได้ร่วมงานกับบริษัทที่มีเป้าหมายลดคาร์บอน ช่วยส่งเสริมภาพลักษณ์ด้าน ESG ให้กับแบรนด์ของเราด้วย บริการดีและยังรักษ์โลกอีกด้วย",
      author: "Mr. John Smith",
      position: "Head of Operations",
      company: "Eco Retail Group (Asia)",
      rating: 5,
      image: "https://placehold.co/150x150/374151/ffffff?text=Partner+3"
    },
    {
      id: 4,
      quote: "กองทัพรถบรรทุกมีมาตรฐานสูงมาก พนักงานขับรถสุภาพและปฏิบัติตามกฎระเบียบความปลอดภัยอย่างเคร่งครัด สินค้าของเราไปถึงปลายทางที่ สปป.ลาว ในสภาพสมบูรณ์ 100% ทุกครั้ง",
      author: "คุณประภาส ขนส่งดี",
      position: "Logistics Director",
      company: "Thai-Lao Commerce Ltd.",
      rating: 4,
      image: "https://placehold.co/150x150/4CAF50/ffffff?text=Partner+4"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Partner's Voices</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">เสียงตอบรับจากพันธมิตร</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              ความสำเร็จของลูกค้าคือความภาคภูมิใจสูงสุดของเรา 
              ขอขอบคุณทุกความไว้วางใจที่ให้ THANA GROUP เป็นส่วนหนึ่งในการขับเคลื่อนธุรกิจของคุณ
            </p>
          </div>

          {/* Testimonials Grid (Masonry-like layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-8 text-6xl text-gray-100 group-hover:text-blue-50 transition-colors pointer-events-none z-0">
                  <i className="fas fa-quote-right"></i>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex gap-1 text-yellow-400 mb-6 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < testimonial.rating ? '' : 'text-gray-200'}`}></i>
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Profile */}
                  <div className="flex items-center gap-5 pt-6 border-t border-gray-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white"
                    />
                    <div>
                      <h4 className="font-black text-gray-900">{testimonial.author}</h4>
                      <p className="text-xs font-bold text-thana-red uppercase tracking-wider mt-1">{testimonial.position}</p>
                      <p className="text-sm text-gray-500 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Trust Banner / Call to Action */}
          <div className="bg-thana-blue rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <i className="fas fa-handshake text-9xl"></i>
            </div>
            <div className="text-left relative z-10 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-black mb-4">พร้อมที่จะยกระดับโลจิสติกส์ของคุณแล้วหรือยัง?</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                ร่วมเป็นหนึ่งในพันธมิตรทางธุรกิจกับเรา เพื่อสัมผัสบริการที่รวดเร็ว ปลอดภัย และได้มาตรฐานระดับสากล
              </p>
            </div>
            <div className="relative z-10 md:w-1/3 flex justify-end">
              <Link href="/contact" className="w-full md:w-auto bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center gap-2 btn-shine">
                ปรึกษาทีมงานฟรี <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}