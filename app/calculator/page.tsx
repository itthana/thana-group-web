'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

// 1. ฐานข้อมูลเส้นทาง (Routing Mapping) เพื่อให้ปลายทางสอดคล้องกับต้นทาง
const routeMap: Record<string, string[]> = {
  'กรุงเทพมหานคร': ['อุบลราชธานี', 'มุกดาหาร', 'หนองคาย', 'ปากเซ (สปป.ลาว)', 'สะหวันนะเขต (สปป.ลาว)', 'นครหลวงเวียงจันทน์ (สปป.ลาว)'],
  'อุบลราชธานี': ['ปากเซ (สปป.ลาว)', 'มุกดาหาร', 'หนองคาย'],
  'มุกดาหาร': ['อุบลราชธานี', 'หนองคาย'],
  'หนองคาย': ['อุบลราชธานี', 'มุกดาหาร']
};

// 2. ฐานข้อมูลประเภทรถขนส่ง
const vehicleTypes = [
  { id: 'pickup', name: 'รถกระบะตอนเดียว', icon: 'fa-truck-pickup', multiplier: 1 },
  { id: '6wheel', name: 'รถบรรทุก 6 ล้อ', icon: 'fa-truck', multiplier: 1.8 },
  { id: '10wheel', name: 'รถบรรทุก 10 ล้อ', icon: 'fa-truck-moving', multiplier: 2.5 },
  { id: '12wheel', name: 'รถบรรทุก 12 ล้อ', icon: 'fa-truck-front', multiplier: 2.8 },
  { id: 'pup', name: 'รถพ่วง (แม่-ลูก)', icon: 'fa-trailer', multiplier: 3.5 },
  { id: 'semi', name: 'รถเทรลเลอร์', icon: 'fa-truck-fast', multiplier: 4.0 }
];

// 3. จำลองฐานราคาเริ่มต้น (Base Price) สำหรับทดสอบ (สามารถดึงจาก DB ได้ในอนาคต)
const getBasePrice = (origin: string, dest: string) => {
  const routeKey = `${origin}-${dest}`;
  const basePrices: Record<string, number> = {
    'กรุงเทพมหานคร-อุบลราชธานี': 5000,
    'กรุงเทพมหานคร-มุกดาหาร': 6000,
    'กรุงเทพมหานคร-หนองคาย': 6500,
    'กรุงเทพมหานคร-ปากเซ (สปป.ลาว)': 12000,
    'กรุงเทพมหานคร-สะหวันนะเขต (สปป.ลาว)': 13000,
    'กรุงเทพมหานคร-นครหลวงเวียงจันทน์ (สปป.ลาว)': 14000,
    'อุบลราชธานี-ปากเซ (สปป.ลาว)': 4500,
    'อุบลราชธานี-มุกดาหาร': 3500,
    'อุบลราชธานี-หนองคาย': 5500,
    'มุกดาหาร-อุบลราชธานี': 3500,
    'มุกดาหาร-หนองคาย': 4000,
    'หนองคาย-อุบลราชธานี': 5500,
    'หนองคาย-มุกดาหาร': 4000
  };
  return basePrices[routeKey] || 0;
};

export default function CalculatorPage() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // State สำหรับแบบฟอร์มขอใบเสนอราคา
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteData, setQuoteData] = useState({ name: '', phone: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // Reset ปลายทางเมื่อเปลี่ยนต้นทาง
  useEffect(() => {
    setDestination('');
    setEstimatedPrice(null);
  }, [origin]);

  // ฟังก์ชันคำนวณราคา
  const handleCalculate = () => {
    if (!origin || !destination || !vehicle) return;
    const base = getBasePrice(origin, destination);
    const selectedVehicle = vehicleTypes.find(v => v.id === vehicle);
    if (base && selectedVehicle) {
      const finalPrice = base * selectedVehicle.multiplier;
      setEstimatedPrice(finalPrice);
      setShowQuoteForm(false); // ปิดฟอร์มไว้ก่อนจนกว่าจะกดขอใบเสนอราคา
    }
  };

  // ฟังก์ชันส่งขอใบเสนอราคาเข้า Email (ใช้ API ตัวเดียวกับหน้าติดต่อเราได้เลย)
  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: null, message: '' });

    const selectedVehicleName = vehicleTypes.find(v => v.id === vehicle)?.name;
    const messageBody = `ขอใบเสนอราคาด่วน (Smart Calculator)\n\nเส้นทาง: ${origin} -> ${destination}\nประเภทรถ: ${selectedVehicleName}\nราคาประเมินเบื้องต้น: ฿${estimatedPrice?.toLocaleString()}\n\nข้อมูลผู้ติดต่อ:\nบริษัท: ${quoteData.company || 'ไม่ระบุ'}\nชื่อ: ${quoteData.name}\nโทร: ${quoteData.phone}\nอีเมล: ${quoteData.email || 'ไม่ระบุ'}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: quoteData.name,
          phone: quoteData.phone,
          email: quoteData.email,
          subject: 'ระบบคำนวณราคา: ขอใบเสนอราคาอัตโนมัติ',
          message: messageBody
        })
      });

      if (response.ok) {
        setAlert({ type: 'success', message: 'ส่งคำขอใบเสนอราคาสำเร็จ! ทีมงานจะส่งเอกสารให้ท่านทางอีเมล/เบอร์โทรศัพท์โดยเร็วที่สุด' });
        setQuoteData({ name: '', phone: '', email: '', company: '' });
        setTimeout(() => setShowQuoteForm(false), 5000);
      } else {
        throw new Error('เกิดข้อผิดพลาด');
      }
    } catch (error) {
      setAlert({ type: 'error', message: 'ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง หรือติดต่อ Hotline' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-prompt pt-20 pb-24">
        
        {/* ==========================================
            1. HERO SECTION
        ========================================== */}
        <section className="relative bg-[#0a2540] py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
              <i className="fas fa-calculator"></i> Smart Price Calculator
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
              ระบบประเมินราคาค่าขนส่งเบื้องต้น
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              คำนวณอัตราค่าบริการขนส่งสินค้า ครอบคลุมเส้นทางยุทธศาสตร์ ไทย - สปป.ลาว แบบเรียลไทม์ พร้อมขอรับใบเสนอราคาอย่างเป็นทางการได้ทันที
            </p>
          </div>
        </section>

        {/* ==========================================
            2. CALCULATOR FORM (แบบฟอร์มคำนวณสุดพรีเมียม)
        ========================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-8">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(10,37,64,0.08)] border border-gray-100 p-8 md:p-12 space-y-10">
            
            {/* STEP 1: เส้นทาง */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00249c] flex items-center justify-center font-black shadow-sm">1</div>
                <h2 className="text-xl md:text-2xl font-black text-[#0a2540]">เลือกเส้นทางขนส่ง (Routing)</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* ลูกศรเชื่อมตรงกลาง (แสดงเฉพาะหน้าจอคอม) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md items-center justify-center text-gray-400 z-10">
                  <i className="fas fa-arrow-right-arrow-left"></i>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">จังหวัดต้นทาง (Origin) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <i className="fas fa-map-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <select 
                      value={origin} onChange={(e) => setOrigin(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-gray-200 focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 rounded-xl outline-none transition-all font-bold text-[#0a2540] appearance-none cursor-pointer shadow-inner"
                    >
                      <option value="">-- กรุณาเลือกต้นทาง --</option>
                      {Object.keys(routeMap).map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">จังหวัด/เมือง ปลายทาง (Destination) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <i className="fas fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <select 
                      value={destination} onChange={(e) => setDestination(e.target.value)} disabled={!origin}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-gray-200 focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 rounded-xl outline-none transition-all font-bold text-[#0a2540] appearance-none cursor-pointer shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">{origin ? '-- กรุณาเลือกปลายทาง --' : 'กรุณาเลือกต้นทางก่อน'}</option>
                      {origin && routeMap[origin].map(dest => <option key={dest} value={dest}>{dest}</option>)}
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* STEP 2: ประเภทรถ */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00249c] flex items-center justify-center font-black shadow-sm">2</div>
                <h2 className="text-xl md:text-2xl font-black text-[#0a2540]">เลือกประเภทรถขนส่ง (Vehicle Type)</h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicleTypes.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicle(v.id)}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center ${
                      vehicle === v.id 
                        ? 'border-[#00249c] bg-blue-50/50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-slate-50 text-gray-500'
                    }`}
                  >
                    <i className={`fas ${v.icon} text-3xl ${vehicle === v.id ? 'text-[#00249c]' : 'text-gray-400'}`}></i>
                    <span className={`font-bold text-sm ${vehicle === v.id ? 'text-[#0a2540]' : 'text-gray-600'}`}>{v.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTON: คำนวณราคา */}
            <div className="text-center pt-4">
              <button 
                onClick={handleCalculate}
                disabled={!origin || !destination || !vehicle}
                className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg py-4 px-12 rounded-full shadow-[0_10px_20px_rgba(0,36,156,0.2)] transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto gap-3"
              >
                <i className="fas fa-calculator"></i> ประเมินราคาเบื้องต้น
              </button>
            </div>

            {/* STEP 3: ผลลัพธ์และฟอร์มขอใบเสนอราคา */}
            {estimatedPrice !== null && (
              <div className="mt-10 animate-fade-in-up">
                <div className="bg-[#0a2540] rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                  {/* เอฟเฟกต์แสง */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <span className="text-[#00e5ff] font-bold text-sm tracking-widest uppercase mb-2 block">Estimated Transport Cost</span>
                  <h3 className="text-white text-lg font-medium mb-4">ราคาประเมินเบื้องต้น (ไม่รวมภาษีมูลค่าเพิ่ม)</h3>
                  
                  <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight drop-shadow-md">
                    <span className="text-3xl text-gray-400 mr-2">฿</span>
                    {estimatedPrice.toLocaleString()}
                  </div>
                  <p className="text-gray-400 text-sm font-medium mt-4 max-w-lg mx-auto">
                    *ราคาดังกล่าวเป็นเพียงการประเมินเบื้องต้น ราคาจริงอาจมีการเปลี่ยนแปลงขึ้นอยู่กับน้ำหนัก ลักษณะสินค้า และจุดโหลด-ลงสินค้า
                  </p>

                  {/* ปุ่มขอใบเสนอราคา */}
                  {!showQuoteForm ? (
                    <button 
                      onClick={() => setShowQuoteForm(true)}
                      className="mt-8 bg-white text-[#0a2540] hover:bg-gray-100 font-black text-base py-4 px-10 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center mx-auto gap-3"
                    >
                      <i className="fas fa-file-invoice-dollar text-[#00249c]"></i> ขอใบเสนอราคาทางการ (Quotation)
                    </button>
                  ) : (
                    <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl text-left animate-fade-in-up">
                      <h4 className="text-white font-bold text-xl mb-6 border-b border-white/10 pb-4"><i className="fas fa-envelope-open-text mr-2 text-[#00e5ff]"></i> กรอกข้อมูลเพื่อรับใบเสนอราคา</h4>
                      
                      {alert.type && (
                        <div className={`mb-6 p-4 rounded-xl border flex items-center gap-3 font-bold text-sm ${alert.type === 'success' ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'bg-red-500/20 border-red-500/50 text-red-300'}`}>
                          <i className={`fas ${alert.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i> {alert.message}
                        </div>
                      )}

                      <form onSubmit={handleSubmitQuote} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">บริษัท / องค์กร</label>
                            <input type="text" value={quoteData.company} onChange={e => setQuoteData({...quoteData, company: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#00e5ff] outline-none text-white transition-colors" placeholder="ระบุชื่อบริษัท (ถ้ามี)" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">ชื่อ - นามสกุลผู้ติดต่อ <span className="text-red-400">*</span></label>
                            <input type="text" required value={quoteData.name} onChange={e => setQuoteData({...quoteData, name: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#00e5ff] outline-none text-white transition-colors" placeholder="ชื่อผู้ติดต่อ" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">เบอร์โทรศัพท์ <span className="text-red-400">*</span></label>
                            <input type="tel" required value={quoteData.phone} onChange={e => setQuoteData({...quoteData, phone: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#00e5ff] outline-none text-white transition-colors" placeholder="08X-XXX-XXXX" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">อีเมล</label>
                            <input type="email" value={quoteData.email} onChange={e => setQuoteData({...quoteData, email: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#00e5ff] outline-none text-white transition-colors" placeholder="example@email.com" />
                          </div>
                        </div>
                        
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-end">
                          <button type="button" onClick={() => setShowQuoteForm(false)} className="px-6 py-3 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                            ยกเลิก
                          </button>
                          <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-[#00e5ff] to-blue-500 hover:from-blue-400 hover:to-blue-500 text-[#0a2540] font-black text-base py-3 px-8 rounded-xl shadow-lg transition-all hover:scale-105 disabled:opacity-70 flex items-center justify-center gap-2">
                            {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> กำลังส่งข้อมูล...</> : <><i className="fas fa-paper-plane"></i> ยืนยันขอใบเสนอราคา</>}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}
            
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}