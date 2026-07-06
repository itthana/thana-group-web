'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function SalesTeamPage() {
  // ข้อมูลพนักงานขาย (แก้ไขข้อมูลตรงนี้ได้เลย)
  const salesTeam = [
    {
      id: 1,
      name: 'คุณกัลยาณี ส่งมอบ',
      position: 'Senior Sales Executive',
      phone: '081-234-5678',
      email: 'kanlayanee@thanagroup.com',
      line: 'kanla_sales',
      // หากมีรูปจริง ให้เปลี่ยน src ของ img ด้านล่างเป็น '/ชื่อรูป.jpg'
      placeholder: 'https://placehold.co/400x500/0B308A/ffffff?text=Sales+1'
    },
    {
      id: 2,
      name: 'คุณธนพล ว่องไว',
      position: 'Corporate Sales Manager',
      phone: '089-876-5432',
      email: 'thanapon@thanagroup.com',
      line: 'thanapon.thana',
      placeholder: 'https://placehold.co/400x500/E53935/ffffff?text=Sales+2'
    },
    {
      id: 3,
      name: 'คุณวิภาวดี ตรงเวลา',
      position: 'Sales Consultant',
      phone: '082-345-6789',
      email: 'wipawadee@thanagroup.com',
      line: 'wipa.sales',
      placeholder: 'https://placehold.co/400x500/374151/ffffff?text=Sales+3'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ส่วนหัวของหน้า */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Our Sales Team</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ทีมที่ปรึกษาด้านการขาย</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและออกแบบโซลูชันด้านโลจิสติกส์
              ที่คุ้มค่าและเหมาะสมที่สุดสำหรับธุรกิจของคุณ
            </p>
          </div>

          {/* การ์ดพนักงาน (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {salesTeam.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                
                {/* รูปภาพพนักงาน */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                  <img 
                    src={person.placeholder} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* ข้อมูลการติดต่อ */}
                <div className="p-8 relative">
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-thana-red font-bold text-sm uppercase tracking-wider mb-6">{person.position}</p>
                  
                  <div className="space-y-4 text-gray-600">
                    {/* เบอร์โทร */}
                    <a href={`tel:${person.phone}`} className="flex items-center gap-3 hover:text-thana-blue transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-thana-blue group-hover/link:bg-thana-blue group-hover/link:text-white transition-colors shrink-0">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <span className="font-medium">{person.phone}</span>
                    </a>
                    {/* อีเมล */}
                    <a href={`mailto:${person.email}`} className="flex items-center gap-3 hover:text-thana-red transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-thana-red group-hover/link:bg-thana-red group-hover/link:text-white transition-colors shrink-0">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <span className="font-medium break-all">{person.email}</span>
                    </a>
                    {/* Line ID */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00c300]/10 flex items-center justify-center text-[#00c300] shrink-0">
                        <i className="fab fa-line text-xl"></i>
                      </div>
                      <span className="font-medium">ID: {person.line}</span>
                    </div>
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