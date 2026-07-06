'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50">
        
        {/* 1. HERO SECTION (Multimodal Transport Hub) */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transform scale-105 animate-slow-zoom"
            style={{ backgroundImage: "url('green-hub.jpeg')" }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-900/90"></div>

          <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-lg">
              <span className="flex gap-2 text-[#00e5ff] drop-shadow-md">
                <i className="fas fa-ship"></i>
                <i className="fas fa-plane"></i>
                <i className="fas fa-train"></i>
                <i className="fas fa-truck"></i>
              </span>
              <span className="w-px h-4 bg-white/30 mx-1"></span>
              Global Multimodal Logistics
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
              ศูนย์กลางการขนส่งครบวงจร <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#00c300]">Smart & Green</span> Ecosystem
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              เชื่อมโยงเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ ทั้งทางบก ทางน้ำ ทางอากาศ และระบบราง 
              พร้อมขับเคลื่อนอนาคตด้วยกองทัพรถบรรทุกพลังงานสะอาด (EV Fleet) 100%
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg btn-shine">
                สำรวจบริการของเรา <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                <i className="fas fa-leaf text-[#00c300]"></i> โซลูชันรักษ์โลก
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,197.86,97.74,242.49,83.3,281.4,71.2,321.39,56.44Z" className="fill-slate-50"></path>
            </svg>
          </div>
        </section>

        {/* 2. GREEN LOGISTICS HIGHLIGHT */}
        <section className="py-20 relative bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-900 to-[#071e3d] rounded-[3rem] overflow-hidden shadow-2xl relative border border-gray-800">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase mb-6 w-max">
                    <i className="fas fa-leaf"></i> Sustainable Future
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                    ผู้นำ <span className="text-[#00c300]">Green Logistics</span> <br/>
                    ลดคาร์บอน สร้างความยั่งยืน
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    THANA GROUP ขับเคลื่อนระบบนิเวศการขนส่งด้วยเทคโนโลยีสะอาด 
                    เราพัฒนากองทัพรถบรรทุกพลังงานไฟฟ้า (EV Fleet) และคลังสินค้าพลังงานแสงอาทิตย์ 
                    เพื่อลดการปล่อยก๊าซเรือนกระจก (Net Zero) และยกระดับมาตรฐาน ESG ให้กับธุรกิจของคุณ
                  </p>
                  <div className="space-y-5 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 text-[#00c300] flex items-center justify-center shrink-0 text-xl shadow-inner">
                        <i className="fas fa-charging-station"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">100% EV Truck Fleet</h4>
                        <p className="text-gray-400 text-sm">บริการรถหัวลากและรถบรรทุกพลังงานไฟฟ้าเต็มรูปแบบ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-[#00e5ff] flex items-center justify-center shrink-0 text-xl shadow-inner">
                        <i className="fas fa-solar-panel"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Solar-Powered Warehouse</h4>
                        <p className="text-gray-400 text-sm">ศูนย์กระจายสินค้าที่ใช้พลังงานหมุนเวียนจากแสงอาทิตย์</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-auto overflow-hidden bg-gray-900">
                  <img 
                    src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="EV Truck Charging" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-90 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071e3d] via-[#071e3d]/50 to-transparent"></div>
                  <div className="absolute bottom-8 right-8 bg-[#0a2540]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-[#00c300] text-4xl font-black mb-1 drop-shadow-md">0%</div>
                    <div className="text-white text-xs font-bold uppercase tracking-wider">Carbon Emission Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 flex flex-wrap justify-between items-center gap-8">
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl lg:text-5xl font-black text-thana-blue mb-2 drop-shadow-sm">20<span className="text-thana-red">+</span></div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl lg:text-5xl font-black text-thana-blue mb-2 drop-shadow-sm">10k<span className="text-thana-red">+</span></div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">Trips / Year</div>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gray-200"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl lg:text-5xl font-black text-thana-blue mb-2 drop-shadow-sm">99<span className="text-thana-red">%</span></div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">On-Time Delivery</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-4xl lg:text-5xl font-black text-thana-blue mb-2 drop-shadow-sm">500<span className="text-[#00c300]">+</span></div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">EV Fleet & Partners</div>
            </div>
          </div>
        </section>

        {/* 4. CORE SERVICES */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Multimodal Services</h4>
            <h2 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">บริการโลจิสติกส์แบบไร้รอยต่อ</h2>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-thana-blue flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-thana-blue group-hover:text-white transition-all duration-300 relative z-10">
                <i className="fas fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-thana-blue transition-colors relative z-10">Cross-Border Trucking</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                ขนส่งทางบกข้ามแดน ไทย-ลาว ด้วยกองทัพรถบรรทุกและ EV Truck ตรวจสอบพิกัด GPS ได้ 24 ชม.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 relative z-10">
                <i className="fas fa-ship"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors relative z-10">Ocean Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                ขนส่งทางทะเลระหว่างประเทศ ทั้งแบบ FCL และ LCL ครอบคลุมท่าเรือพาณิชย์หลักทั่วโลก
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-thana-red flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-thana-red group-hover:text-white transition-all duration-300 relative z-10">
                <i className="fas fa-plane"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-thana-red transition-colors relative z-10">Air Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                บริการขนส่งทางอากาศสำหรับสินค้าเร่งด่วน ประหยัดเวลา จัดการเอกสารและพิธีการครบวงจร
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 relative z-10">
                <i className="fas fa-train"></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-amber-500 transition-colors relative z-10">Rail Freight</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                บริการขนส่งทางราง (รถไฟความเร็วสูง จีน-ลาว-ไทย) ประหยัดต้นทุน ขนส่งสินค้าปริมาณมหาศาล
              </p>
            </div>
          </div>
        </section>

        {/* 5. 🌟 NEW: NETWORK EXPANSION (COMING SOON) 🌟 */}
        <section className="py-20 relative bg-white overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-thana-blue to-[#0a2540] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center border border-gray-100 relative">
              
              {/* ลายน้ำแผนที่เบาๆ */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] pointer-events-none"></div>

              {/* ฝั่งเนื้อหา */}
              <div className="p-10 lg:p-16 lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-red-500/30">
                  <span className="w-2 h-2 rounded-full bg-thana-red animate-pulse"></span> Coming Soon
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Network Expansion <br/>
                  <span className="text-thana-red">Drop Point สาขาเวียงจันทน์</span>
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  ก้าวไปอีกขั้นกับการขยายเครือข่ายโลจิสติกส์อย่างไร้รอยต่อ เตรียมพบกับจุดรับส่งและกระจายสินค้า (Drop Point) แห่งใหม่ใจกลางนครหลวงเวียงจันทน์ สปป. ลาว เพื่อยกระดับความเร็วและรองรับการเติบโตของธุรกิจข้ามแดนอย่างเต็มรูปแบบ
                </p>
                
                <div className="flex gap-4">
                  <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <i className="fas fa-map-marker-alt text-thana-red text-2xl animate-bounce"></i>
                    <div className="text-left">
                      <div className="text-white font-bold">Vientiane, Laos</div>
                      <div className="text-gray-400 text-sm">เตรียมเปิดให้บริการเร็วๆ นี้</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ฝั่งรูปภาพ */}
              <div className="lg:w-1/2 w-full h-[350px] lg:h-full min-h-[450px] relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888078873-19eb796249d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Vientiane Drop Point Coming Soon" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 hover:opacity-80 transition-opacity duration-500" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-thana-blue to-transparent w-1/2 hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-thana-blue to-transparent h-1/2 top-1/2 block lg:hidden"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <i className="fas fa-building text-3xl text-white"></i>
                  </div>
                  <div className="text-white font-black text-2xl tracking-widest uppercase drop-shadow-lg bg-black/30 px-6 py-2 rounded-full inline-block backdrop-blur-sm">
                    Vientiane Branch
                  </div>
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