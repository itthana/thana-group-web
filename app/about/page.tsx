'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen font-prompt bg-slate-50 selection:bg-red-500 selection:text-white">
        
        {/* ==========================================
            1. HERO SECTION (ส่วนหัว)
        ========================================== */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[#0a2540]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/90 to-[#0a2540] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
          
          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-building"></i> Corporate Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wide drop-shadow-lg leading-tight">
              ประวัติบริษัท <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">THANA GROUP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light italic">
              "Connecting Business • Delivering Success"
            </p>
          </div>
          
          {/* Wave Decorator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.36,199.39,109.84Z" fill="#f8fafc"></path>
            </svg>
          </div>
        </section>

        {/* ==========================================
            2. CORPORATE HISTORY (ประวัติความเป็นมา)
        ========================================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-[#e62e2d] font-bold tracking-widest text-sm uppercase mb-3">Our History</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-8 leading-snug">
                จุดเริ่มต้นแห่งความสำเร็จ <br /> สู่การเป็นผู้นำด้านโลจิสติกส์
              </h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  <strong className="text-[#0a2540]">THANA GROUP</strong> มีจุดเริ่มต้นจากการดำเนินธุรกิจด้านการค้าและการขนส่งระหว่างประเทศไทยและสาธารณรัฐประชาธิปไตยประชาชนลาว โดยเล็งเห็นถึงความสำคัญของระบบโลจิสติกส์ที่มีประสิทธิภาพในการขับเคลื่อนเศรษฐกิจและการค้าระหว่างประเทศ
                </p>
                <p>
                  จากประสบการณ์และความเชี่ยวชาญ บริษัทได้ก่อตั้ง <strong className="text-[#0a2540]">บริษัท ธนาโลจิสติกส์ จำกัด</strong> เพื่อให้บริการด้านโลจิสติกส์แบบครบวงจร ครอบคลุมการขนส่งสินค้า พิธีการศุลกากร คลังสินค้า และการกระจายสินค้า ภายใต้แนวคิด <span className="text-[#e62e2d] font-bold">"One Stop Service"</span> ที่มุ่งเน้นความสะดวก รวดเร็ว และมาตรฐานการบริการระดับมืออาชีพ
                </p>
                <p>
                  ด้วยการพัฒนาอย่างต่อเนื่อง THANA GROUP ได้ขยายธุรกิจไปยังกลุ่มธุรกิจบริการและไลฟ์สไตล์ ภายใต้แบรนด์ <strong>CC1971 Group</strong> รวมถึงการนำเทคโนโลยีดิจิทัลมาสนับสนุนการดำเนินงาน เพื่อสร้างระบบนิเวศทางธุรกิจที่เชื่อมโยงกันอย่างครบวงจร
                </p>
                <p className="bg-blue-50 p-5 rounded-xl border-l-4 border-[#00249c] text-[#0a2540]">
                  ปัจจุบัน <strong>THANA GROUP</strong> มุ่งสู่การเป็น <strong>Holding Company</strong> ที่บริหารธุรกิจหลากหลายประเภท พร้อมขับเคลื่อนองค์กรด้วยนวัตกรรม การบริหารจัดการสมัยใหม่ และมาตรฐานระดับสากล เพื่อรองรับการเติบโตในระดับภูมิภาคอาเซียนและการพัฒนาองค์กรสู่ตลาดทุนในอนาคต
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#0a2540] rounded-[2rem] transform rotate-3 scale-105 opacity-10"></div>
              <img 
                src="ประชุม.JPG" 
                alt="THANA Group History" 
                className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </section>

        {/* ==========================================
            3. VISION & MISSION (วิสัยทัศน์ & พันธกิจ)
        ========================================== */}
        <section className="py-24 bg-[#0a2540] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* วิสัยทัศน์ */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#00e5ff] rounded-2xl flex items-center justify-center text-[#0a2540] text-3xl mb-8 shadow-lg">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-wide">วิสัยทัศน์ <span className="text-[#00e5ff] text-xl font-medium">(Vision)</span></h3>
                <p className="text-xl leading-relaxed font-light italic text-gray-200 border-l-4 border-[#00e5ff] pl-6">
                  "ก้าวสู่การเป็นผู้นำด้านโลจิสติกส์ ธุรกิจบริการ และนวัตกรรมครบวงจรของอาเซียน สร้างการเติบโตอย่างยั่งยืนด้วยเทคโนโลยีและการบริหารจัดการระดับสากล"
                </p>
              </div>

              {/* พันธกิจ */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#e62e2d] rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-wide">พันธกิจ <span className="text-gray-400 text-xl font-medium">(Mission)</span></h3>
                <ul className="space-y-4 text-gray-200 font-light">
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> พัฒนาระบบโลจิสติกส์ที่มีประสิทธิภาพและเชื่อมโยงทุกมิติของธุรกิจ</li>
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> ส่งมอบบริการที่มีคุณภาพสูงด้วยมาตรฐานระดับสากล</li>
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> นำนวัตกรรมและเทคโนโลยีดิจิทัลมาพัฒนาองค์กรอย่างต่อเนื่อง</li>
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> พัฒนาศักยภาพบุคลากรให้เติบโตไปพร้อมกับองค์กร</li>
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> ขยายธุรกิจและสร้างระบบนิเวศทางธุรกิจที่แข็งแกร่ง</li>
                  <li className="flex items-start gap-4"><i className="fas fa-check-circle text-[#e62e2d] mt-1"></i> ดำเนินธุรกิจด้วยธรรมาภิบาล รับผิดชอบต่อสังคมและสิ่งแวดล้อม</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            4. CORE VALUES (ค่านิยมองค์กร T.H.A.N.A)
        ========================================== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#e62e2d] font-bold tracking-widest text-sm uppercase mb-3">Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-16">ค่านิยมองค์กร</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { letter: 'T', word: 'Trust', desc: 'สร้างความเชื่อมั่น', color: 'text-blue-600', border: 'border-blue-600' },
                { letter: 'H', word: 'Humanity', desc: 'ใส่ใจผู้คน', color: 'text-rose-500', border: 'border-rose-500' },
                { letter: 'A', word: 'Agility', desc: 'ปรับตัวรวดเร็ว', color: 'text-amber-500', border: 'border-amber-500' },
                { letter: 'N', word: 'Network', desc: 'สร้างเครือข่ายแห่งความสำเร็จ', color: 'text-emerald-500', border: 'border-emerald-500' },
                { letter: 'A', word: 'Achievement', desc: 'มุ่งสู่ความเป็นเลิศ', color: 'text-[#e62e2d]', border: 'border-[#e62e2d]' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-slate-50 rounded-2xl p-6 border-b-4 ${item.border} hover:shadow-lg transition-all hover:-translate-y-2 group`}>
                  <div className={`text-5xl font-black ${item.color} mb-4 group-hover:scale-110 transition-transform`}>{item.letter}</div>
                  <div className="font-bold text-[#0a2540] text-lg mb-2">{item.word}</div>
                  <div className="text-gray-500 text-sm font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            5. BUSINESS UNITS & ADVANTAGES
        ========================================== */}
        <section className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* กลุ่มธุรกิจ */}
              <div>
                <h2 className="text-[#00249c] font-bold tracking-widest text-sm uppercase mb-3"><i className="fas fa-layer-group"></i> Business Units</h2>
                <h3 className="text-3xl font-black text-[#0a2540] mb-8">กลุ่มธุรกิจของเรา</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'THANA Logistics', desc: 'บริการขนส่งและโลจิสติกส์ครบวงจร', icon: 'fa-truck-fast' },
                    { title: 'Customs Clearance', desc: 'บริการพิธีการศุลกากร', icon: 'fa-file-signature' },
                    { title: 'Warehouse & Dist.', desc: 'คลังสินค้าและกระจายสินค้า', icon: 'fa-warehouse' },
                    { title: 'Cross Border Transport', desc: 'ขนส่งไทย–ลาวและภูมิภาคอาเซียน', icon: 'fa-earth-asia' },
                    { title: 'CC1971 Group', desc: 'ธุรกิจร้านอาหาร คาเฟ่ และไลฟ์สไตล์', icon: 'fa-mug-hot' },
                    { title: 'Digital & Technology', desc: 'พัฒนาระบบซอฟต์แวร์และแพลตฟอร์ม', icon: 'fa-laptop-code' },
                  ].map((unit, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-start hover:border-[#00249c] transition-colors">
                      <div className="text-[#00249c] text-2xl mt-1"><i className={`fas ${unit.icon}`}></i></div>
                      <div>
                        <div className="font-bold text-[#0a2540]">{unit.title}</div>
                        <div className="text-xs text-gray-500 font-medium mt-1">{unit.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* จุดแข็ง & เป้าหมาย */}
              <div className="space-y-12">
                
                {/* จุดแข็ง */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-black text-[#0a2540] mb-6 flex items-center gap-3">
                    <i className="fas fa-crown text-amber-500"></i> จุดแข็งขององค์กร
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                    {[
                      'One Stop Service', 'Thailand–Laos Specialist', 
                      'Experienced Pro Team', 'Technology Driven', 
                      'Cross-border Network', 'Customer Centric', 
                      'Sustainable Growth'
                    ].map((adv, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                        <i className="fas fa-check text-green-500"></i> {adv}
                      </div>
                    ))}
                  </div>
                </div>

                {/* เป้าหมาย 2035 */}
                <div className="bg-gradient-to-br from-[#0a2540] to-[#00249c] p-8 rounded-3xl shadow-lg text-white">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <i className="fas fa-rocket text-[#00e5ff]"></i> เป้าหมายปี 2035
                  </h3>
                  <ul className="space-y-4 font-light">
                    <li className="flex gap-4"><i className="fas fa-arrow-right text-[#00e5ff] mt-1"></i> ก้าวสู่การเป็น Holding Company ระดับภูมิภาค</li>
                    <li className="flex gap-4"><i className="fas fa-arrow-right text-[#00e5ff] mt-1"></i> ขยายธุรกิจครอบคลุมหลายอุตสาหกรรม</li>
                    <li className="flex gap-4"><i className="fas fa-arrow-right text-[#00e5ff] mt-1"></i> พัฒนาองค์กรสู่ Digital Enterprise</li>
                    <li className="flex gap-4"><i className="fas fa-arrow-right text-[#00e5ff] mt-1"></i> เตรียมความพร้อมสู่ตลาดหลักทรัพย์</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            6. AWARDS & EXECUTIVE ACHIEVEMENTS 
        ========================================== */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* BG Decoration */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform translate-x-10 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-16">
            <h2 className="text-[#e62e2d] font-bold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <i className="fas fa-award"></i> Executive Achievements & Awards
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#0a2540]">เกียรติประวัติและรางวัลผู้บริหาร</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
              เครื่องการันตีวิสัยทัศน์และความมุ่งมั่นในการบริหารงานระดับสากล นำพาองค์กรก้าวสู่ความสำเร็จที่ได้รับการยอมรับในระดับภูมิภาค
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Award 1 */}
              <div className="bg-white border border-amber-100 shadow-[0_10px_30px_rgba(251,191,36,0.15)] rounded-2xl p-8 flex items-start gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(251,191,36,0.25)] transition-all group">
                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fas fa-trophy"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-2 leading-tight">รางวัลผู้นำองค์กรดีเด่น</h4>
                  <p className="text-amber-600 font-bold text-sm mb-3">CEO Leader Award 2019</p>
                  <p className="text-gray-500 text-sm font-medium">รางวัลยกย่องผู้บริหารที่มีวิสัยทัศน์ยอดเยี่ยม และสามารถนำพาองค์กรฝ่าฟันอุปสรรคจนประสบความสำเร็จ</p>
                </div>
              </div>

              {/* Award 2 */}
              <div className="bg-white border border-amber-100 shadow-[0_10px_30px_rgba(251,191,36,0.15)] rounded-2xl p-8 flex items-start gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(251,191,36,0.25)] transition-all group">
                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fas fa-medal"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-2 leading-tight">รางวัลนักธุรกิจหนุ่มดีเด่น</h4>
                  <p className="text-amber-600 font-bold text-sm mb-3">ประจำประเทศลาว ปี 2019</p>
                  <p className="text-gray-500 text-sm font-medium">รางวัลเกียรติยศสำหรับนักธุรกิจรุ่นใหม่ที่มีผลงานโดดเด่นในการขับเคลื่อนเศรษฐกิจใน สปป.ลาว</p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="bg-white border border-blue-100 shadow-[0_10px_30px_rgba(0,36,156,0.08)] rounded-2xl p-8 flex items-start gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,36,156,0.12)] transition-all group">
                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-[#00249c] to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-[#00249c] text-xs font-bold rounded-lg mb-3 uppercase tracking-wider">Position Appointed</div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-2 leading-tight">รองประธานสมาคมนักธุรกิจหนุ่ม</h4>
                  <p className="text-gray-600 font-bold text-sm">นครปากเซ สปป. ลาว</p>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="bg-white border border-red-100 shadow-[0_10px_30px_rgba(230,46,45,0.08)] rounded-2xl p-8 flex items-start gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(230,46,45,0.12)] transition-all group">
                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-[#e62e2d] to-red-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fas fa-building-user"></i>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-red-50 text-[#e62e2d] text-xs font-bold rounded-lg mb-3 uppercase tracking-wider">Position Appointed</div>
                  <h4 className="text-xl font-black text-[#0a2540] mb-2 leading-tight">ประธานบริหาร (CEO)</h4>
                  <p className="text-gray-600 font-bold text-sm">บริษัท CC1971 GROUP สปป. ลาว</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            7. FOOTER SLOGAN
        ========================================== */}
        <section className="py-16 bg-[#e62e2d] text-center border-t-4 border-[#0a2540]">
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-widest uppercase px-4">
            "One Group • One Standard • One Future"
          </h2>
        </section>

      </main>
      <Footer />
    </>
  );
}