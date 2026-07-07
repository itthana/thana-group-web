'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ContactPage() {
  // State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    message: ''
  });

  // State สำหรับจัดการสถานะการส่ง
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', department: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#00249c]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              ติดต่อเรา
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              ยินดีต้อนรับสู่ศูนย์บริการลูกค้าสัมพันธ์ THANA GROUP <br className="hidden md:block" />
              เชื่อมต่อทุกช่องทางการสื่อสารอย่างไร้รอยต่อ เพื่อให้บริการโลจิสติกส์ที่ดีที่สุดสำหรับคุณ
            </p>
          </div>
        </section>

        {/* =========================================
            2. TWO-COLUMN CONTACT SECTION
        ========================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 2.1 ฝั่งซ้าย: ข้อมูลการติดต่อ & โซเชียลมีเดีย (4 คอลัมน์) */}
            <div className="lg:col-span-4 space-y-6 animate-slide-up">
              
              {/* การ์ดข้อมูลติดต่อหลัก */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00249c]"></div>
                <h3 className="text-xl font-black text-[#0a2540] mb-6 flex items-center gap-2">
                  <i className="fas fa-building text-[#00249c]"></i> สำนักงานใหญ่
                </h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p className="font-bold text-gray-800">บริษัท ธนาโลจิสติกส์ จำกัด (THANA GROUP)</p>
                  <p>จังหวัดอุบลราชธานี ประเทศไทย</p>
                  <div className="h-px bg-gray-100 my-4"></div>
                  
                  {/* ช่องทางด่วน โทรศัพท์ */}
                  <a href="tel:0930237931" className="flex items-center gap-3 font-bold text-gray-800 hover:text-[#00249c] transition-colors py-1 group">
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00249c] group-hover:text-white transition-all shadow-sm">
                      <i className="fas fa-phone-alt text-xs"></i>
                    </span>
                    093-023-7931 (Hotline)
                  </a>

                  {/* ช่องทางด่วน LINE */}
                  <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-gray-800 hover:text-[#00c300] transition-colors py-1 group">
                    <span className="w-8 h-8 rounded-full bg-green-50 text-[#00c300] flex items-center justify-center group-hover:bg-[#00c300] group-hover:text-white transition-all shadow-sm">
                      <i className="fab fa-line text-base"></i>
                    </span>
                    @thanagroup (มี @)
                  </a>

                  {/* ช่องทางด่วน WhatsApp */}
                  <a href="https://wa.me/66930237931" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-gray-800 hover:text-emerald-600 transition-colors py-1 group">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                      <i className="fab fa-whatsapp text-base"></i>
                    </span>
                    WhatsApp Chat
                  </a>

                  {/* ช่องทางด่วน Email */}
                  <a href="mailto:logistics@thanagroup.com" className="flex items-center gap-3 font-bold text-gray-800 hover:text-gray-900 transition-colors py-1 group">
                    <span className="w-8 h-8 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center group-hover:bg-gray-700 group-hover:text-white transition-all shadow-sm">
                      <i className="fas fa-envelope text-xs"></i>
                    </span>
                    logistics@thanagroup.com
                  </a>
                </div>
              </div>

              {/* การ์ดเวลาทำการ */}
              <div className="bg-gray-900 text-gray-300 rounded-3xl shadow-xl p-8 relative overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="far fa-clock text-[#00e5ff]"></i> เวลาทำการ (Working Hours)
                </h3>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span>เปิดบริการทุกวัน (Hotline)</span>
                    <span className="text-[#00e5ff] font-bold">24 ชั่วโมง</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2 pt-1">
                    <span>ฝ่ายบริการลูกค้า (CS)</span>
                    <span>08:00 - 17:00 น.</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>ด่านขนส่งสินค้าข้ามแดน</span>
                    <span>เปิดตามเวลาด่านสากล</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 2.2 ฝั่งขวา: ฟอร์มฝากข้อความผ่านอีเมล (8 คอลัมน์) */}
            <div className="lg:col-span-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
                
                <div className="mb-8 border-b border-gray-50 pb-4">
                  <h2 className="text-2xl font-black text-[#00249c]">ฝากข้อความถึงเรา</h2>
                  <p className="text-gray-500 text-sm mt-1">เลือกแผนกที่ต้องการติดต่อ ทีมงานจะรีบตอบกลับผ่านอีเมลหรือโทรศัพท์โดยเร็วที่สุด</p>
                </div>

                {/* แจ้งสถานะ */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 font-medium rounded-xl flex items-center gap-3">
                    <i className="fas fa-check-circle text-lg"></i> ส่งข้อความสำเร็จ! ระบบได้ส่งข้อมูลเข้าอีเมลส่วนกลางเรียบร้อยแล้วครับ
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-4 font-medium">
                    <i className="fas fa-exclamation-circle text-lg"></i> เกิดข้อผิดพลาด ไม่สามารถส่งอีเมลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ชื่อ-นามสกุล */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#0a2540]">ชื่อ - นามสกุล <span className="text-red-500">*</span></label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="กรุณากรอกชื่อ" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all"
                      />
                    </div>

                    {/* เบอร์โทรศัพท์ */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#0a2540]">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08X-XXX-XXXX" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* อีเมล */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#0a2540]">อีเมล (ถ้ามี)</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all"
                      />
                    </div>

                    {/* ติดต่อแผนก */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#0a2540]">ติดต่อแผนก <span className="text-red-500">*</span></label>
                      <select
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all cursor-pointer appearance-none"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                      >
                        <option value="" disabled>เลือกแผนกที่ต้องการติดต่อ...</option>
                        <option value="ฝ่ายขายและการตลาด (Sales)">ฝ่ายขายและการตลาด (Sales)</option>
                        <option value="ฝ่ายบริการลูกค้าสัมพันธ์ (CS)">ฝ่ายบริการลูกค้าสัมพันธ์ (CS)</option>
                        <option value="ฝ่ายพิธีการศุลกากร (Shipping)">ฝ่ายพิธีการศุลกากร (Shipping)</option>
                        <option value="ติดต่อผู้บริหาร / อื่นๆ">ติดต่อผู้บริหาร / อื่นๆ</option>
                      </select>
                    </div>
                  </div>

                  {/* ข้อความ/รายละเอียด */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0a2540]">ข้อความ / สิ่งที่ต้องการสอบถาม <span className="text-red-500">*</span></label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="พิมพ์ข้อความของคุณที่นี่..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00249c]/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* ปุ่มส่งข้อความสีแดงเด่นชัดบรรทัดเดียว */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg text-white shadow-lg whitespace-nowrap ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#da251c] hover:bg-red-700 hover:shadow-red-500/30 hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin"></i> กำลังส่งข้อความ...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> ส่งข้อความ
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}