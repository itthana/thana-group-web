'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function OtherVenturesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ventures = [
    {
      id: 1,
      name: 'CC1971 CAFE',
      location: 'ปากเซ, สปป. ลาว (Pakse, Laos)',
      type: 'Premium Coffee & Cafe',
      desc: 'ร้านกาแฟที่ผสมผสานความคลาสสิกและมินิมอลอย่างลงตัว คัดสรรเมล็ดกาแฟคุณภาพเยี่ยมจากไร่บนที่ราบสูงบอละเวน พร้อมเบเกอรี่โฮมเมดอบสดใหม่ทุกวัน',
      icon: 'fa-coffee',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      badge: 'Popular',
      facebookUrl: 'https://www.facebook.com/cc1971cafe'
    },
    {
      id: 2,
      name: 'CC1971 RESTAURANT',
      location: 'ปากซอง, สปป. ลาว (Paksong, Laos)',
      type: 'Restaurant & Nature Vibe',
      desc: 'ดื่มด่ำกับอาหารเลิศรสท่ามกลางธรรมชาติอันบริสุทธิ์ของเมืองปากซอง เสิร์ฟเมนูฟิวชันและอาหารพื้นเมืองที่ปรุงจากวัตถุดิบออร์แกนิกในท้องถิ่น',
      icon: 'fa-utensils',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      badge: 'Must Visit',
      facebookUrl: 'https://www.facebook.com/cc1971restaurant'
    },
    {
      id: 3,
      name: 'CC1971 GROUP (Other Ventures)',
      location: 'สปป. ลาว (Laos)',
      type: 'Lifestyle & Real Estate',
      desc: 'ธุรกิจอื่นๆ ในเครือ CC1971 GROUP ที่ครอบคลุมตั้งแต่โครงการอสังหาริมทรัพย์ พื้นที่เชิงพาณิชย์ และการพัฒนาแหล่งท่องเที่ยวเชิงนิเวศ (Eco-Tourism)',
      icon: 'fa-building',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'text-slate-700',
      bg: 'bg-slate-100',
      badge: 'Growing',
      facebookUrl: 'https://www.facebook.com/cc1971group'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#faf8f5] pt-32 pb-20">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <i className="fas fa-seedling"></i> Lifestyle & Diversification
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              ธุรกิจภายใต้การบริหารงาน <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">ของ THANA GROUP</span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              นอกเหนือจากความเป็นผู้นำด้านโลจิสติกส์ เรายังมุ่งมั่นสร้างสรรค์ประสบการณ์และไลฟ์สไตล์เหนือระดับ 
              ผ่านการลงทุนในธุรกิจ F&B และบริการ ภายใต้แบรนด์ <strong className="text-gray-900">CC1971 GROUP</strong> ในประเทศ สปป. ลาว
            </p>
          </div>
        </div>

        {/* Business Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <div 
                key={venture.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                style={{ transitionDelay: `${index * 150}ms` }} 
              >
                <a href={venture.facebookUrl} target="_blank" rel="noopener noreferrer" className="relative h-64 overflow-hidden block">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={venture.image} 
                    alt={venture.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-md">
                    {venture.badge}
                  </div>
                </a>

                <div className="p-8 flex-grow flex flex-col relative">
                  <div className={`w-14 h-14 rounded-2xl ${venture.bg} ${venture.color} flex items-center justify-center text-2xl absolute -top-7 left-8 shadow-lg border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-300 pointer-events-none`}>
                    <i className={`fas ${venture.icon}`}></i>
                  </div>

                  <div className="mt-8 mb-4">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${venture.color}`}>{venture.type}</p>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{venture.name}</h3>
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i> {venture.location}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                    {venture.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-100 mt-auto">
                    <a 
                      href={venture.facebookUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#1877f2] transition-colors group-hover:translate-x-2 duration-300`}
                    >
                      <i className="fab fa-facebook text-lg"></i> ไปที่เพจ Facebook <i className="fas fa-arrow-right text-[10px] ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner สไตล์คาเฟ่ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-gradient-to-r from-amber-800 to-orange-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">แวะมาเติมพลังกับเราที่ CC1971</h2>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                ไม่ว่าคุณจะเดินทางมาทำธุรกิจกับ THANA GROUP หรือมาท่องเที่ยวพักผ่อนที่ สปป.ลาว 
                เราพร้อมต้อนรับคุณด้วยบริการระดับพรีเมียม
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/cc1971group" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-amber-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1">
                  <i className="fab fa-facebook text-[#1877f2] text-xl"></i> ติดตาม CC1971 Fanpage
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}