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
        body: JSON.stringify(companyDataMapper(formData)) // แปลง object ก่อนส่งให้ตรงกับโครงสร้าง API
      });
      
      if (res.ok) {
        setRates({ USD: rates.USD, CNY: rates.CNY, LAK: rates.LAK }); // รักษาค่าเดิมไว้
        setActiveZone(0); // รีเซ็ต Tab กลับไปอันแรก
        setIsMobileMenuOpen(false);
        // เคลียร์ค่าในฟอร์มหลังจากส่งสำเร็จ
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        // จัดการกรณีส่งไม่สำเร็จ
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
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
              ส่งข้อความหรือสอบถามข้อมูลบริการโลจิสติกส์ ทีมงานของเราจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </section>

        {/* =========================================
            2. CONTACT FORM SECTION
        ========================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 animate-slide-up">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-[#00249c]">ส่งข้อความถึงเรา</h2>
              <p className="text-gray-500 text-sm mt-1">กรุณากรอกข้อมูลให้ครบถ้วนเพื่อความรวดเร็วในการติดต่อกลับ</p>
            </div>

            {/* ระบบแสดงสถานะหลังจากกดส่งฟอร์ม */}
            {status.type === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 font-medium rounded-xl flex items-center gap-3">
                <i className="fas fa-check-circle text-lg"></i> ส่งข้อความสำเร็จ! ทีมงานจะติดต่อกลับโดยเร็วที่สุด
              </div>
            )}
            {status.type === 'error' && (
              <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-4 font-medium">
                <i className="fas fa-exclamation-circle text-lg"></i> เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
              </div>
            )}

            {/* ฟอร์มรับข้อมูล */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ชื่อ-นามสกุล */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0a2540]">ชื่อ-นามสกุล (Name)</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="เช่น คุณสมชาย ใจดี" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-colors"
                  />
                </div>

                {/* เบอร์โทรศัพท์ */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0a2540]">เบอร์โทรศัพท์ (Phone Number)</label>
                  <input 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="เช่น 081-234-5678" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* อีเมล */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0a2540]">อีเมล (Email)</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="เช่น example@company.com" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-colors"
                  />
                </div>

                {/* เลือกแผนก/สาขาที่ต้องการติดต่อ */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0a2540]">แผนกหรือสาขาที่ต้องการติดต่อ (Department)</label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-colors cursor-pointer appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                  >
                    <option value="" disabled>เลือกแผนก/สาขา...</option>
                    <option value="ฝ่ายขายและการตลาด (Sales)">ฝ่ายขายและการตลาด (Sales)</option>
                    <option value="ฝ่ายบริการลูกค้าสัมพันธ์ (CS)">ฝ่ายบริการลูกค้าสัมพันธ์ (CS)</option>
                    <option value="ฝ่ายพิธีการศุลกากร (Shipping)">ฝ่ายพิธีการศุลกากร (Shipping)</option>
                    <option value="สาขาอุบลราชธานี (สำนักงานใหญ่)">สาขาอุบลราชธานี (สำนักงานใหญ่)</option>
                    <option value="สาขาปากเซ สปป.ลาว">สาขาปากเซ สปป.ลาว</option>
                    <option value="สาขานครหลวงเวียงจันทน์ สปป.ลาว">สาขานครหลวงเวียงจันทน์ สปป.ลาว</option>
                  </select>
                </div>
              </div>

              {/* ข้อความ/รายละเอียด */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#0a2540]">ข้อความหรือรายละเอียดที่ต้องการสอบถาม (Message)</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(handleChange)}
                  placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00249c] focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* ปุ่มส่งข้อความบรรทัดเดียวสีแดงสด */}
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
        </section>
      </main>

      <Footer />
    </>
  );
}

// ฟังก์ชันภายในช่วยเหลือการแปลงโครงสร้าง
function companyDataMapper(data: any) {
  return {
    name: data.name,
    phone: data.phone,
    email: data.email,
    department: data.department,
    message: data.message
  };
}