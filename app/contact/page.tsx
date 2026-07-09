'use client';

import { useState } from 'react';

export default function ContactHubPage() {
  // State สำหรับจัดการฟอร์มติดต่อ
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // ฟังก์ชันจัดการตอนกดส่งฟอร์ม (จำลองการยิง API)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: null, message: '' });

    // จำลองเวลาส่งข้อมูลเข้า API หลังบ้าน 1.5 วินาที
    setTimeout(() => {
      if (formData.name && formData.phone && formData.message) {
        setAlert({ 
          type: 'success', 
          message: 'ส่งข้อความสำเร็จ! เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมงครับ' 
        });
        // เคลียร์ฟอร์ม
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setAlert({ 
          type: 'error', 
          message: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' 
        });
      }
      setIsSubmitting(false);
      
      // ซ่อนแจ้งเตือนอัตโนมัติ
      setTimeout(() => setAlert({ type: null, message: '' }), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-prompt pb-20">
      
      {/* ==========================================
          1. HERO SECTION (ส่วนหัวของหน้า)
      ========================================== */}
      <div className="relative bg-[#0a2540] py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-[#00e5ff] text-sm font-bold tracking-wider mb-4 border border-blue-400/30">
            CONTACT & NETWORK HUB
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide">
            ศูนย์บริการลูกค้าและเครือข่าย <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">THANA GROUP</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            เราพร้อมให้คำปรึกษาด้านโลจิสติกส์และการค้าระหว่างประเทศแบบครบวงจร ด้วยเครือข่ายที่ครอบคลุมและทีมงานมืออาชีพ
          </p>
        </div>
      </div>

      {/* ==========================================
          2. BRANCH & NETWORK CARDS (จุดติดต่อและสาขา)
      ========================================== */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: สำนักงานใหญ่ */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#00249c] text-2xl mb-6">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="text-xl font-black text-[#0a2540] mb-3">สำนักงานใหญ่ (Headquarters)</h3>
            <div className="space-y-3 text-gray-600 font-medium text-sm">
              <p className="flex items-start gap-3"><i className="fas fa-location-dot mt-1 text-gray-400"></i> 123 อาคารธนากรุ๊ป ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310</p>
              <p className="flex items-center gap-3"><i className="fas fa-phone text-gray-400"></i> 02-XXX-XXXX (ฝ่ายบริการลูกค้า)</p>
              <p className="flex items-center gap-3"><i className="fas fa-envelope text-gray-400"></i> contact@thanagroup.com</p>
            </div>
          </div>

          {/* Card 2: ศูนย์ขนส่งข้ามแดน (หนองคาย) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 text-2xl mb-6">
              <i className="fas fa-truck-fast"></i>
            </div>
            <h3 className="text-xl font-black text-[#0a2540] mb-3">ศูนย์ขนส่งข้ามแดน (หนองคาย)</h3>
            <div className="space-y-3 text-gray-600 font-medium text-sm">
              <p className="flex items-start gap-3"><i className="fas fa-location-dot mt-1 text-gray-400"></i> ศูนย์กระจายสินค้าชายแดน ใกล้สะพานมิตรภาพไทย-ลาว แห่งที่ 1 จังหวัดหนองคาย</p>
              <p className="flex items-center gap-3"><i className="fas fa-phone text-gray-400"></i> 042-XXX-XXXX</p>
              <p className="flex items-center gap-3"><i className="fas fa-clock text-gray-400"></i> จันทร์ - เสาร์ (08:00 - 18:00 น.)</p>
            </div>
          </div>

          {/* Card 3: สาขา สปป.ลาว */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl mb-6">
              <i className="fas fa-earth-asia"></i>
            </div>
            <h3 className="text-xl font-black text-[#0a2540] mb-3">สาขาเวียงจันทน์ (สปป.ลาว)</h3>
            <div className="space-y-3 text-gray-600 font-medium text-sm">
              <p className="flex items-start gap-3"><i className="fas fa-location-dot mt-1 text-gray-400"></i> นครหลวงเวียงจันทน์ สปป.ลาว (ศูนย์ปฏิบัติการกระจายสินค้า)</p>
              <p className="flex items-center gap-3"><i className="fas fa-phone text-gray-400"></i> +856-20-XXXX-XXXX</p>
              <p className="flex items-center gap-3"><i className="fas fa-headset text-gray-400"></i> รองรับภาษาไทย / ลาว / อังกฤษ</p>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          3. CONTACT FORM & MAP (ฟอร์มและแผนที่)
      ========================================== */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
          
          {/* ซ้าย: แผนที่ Google Maps */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.73024844331!2d100.5636049!3d13.7381591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8bc41f92c3%3A0x6751221b6a37803d!2sHuai%20Khwang%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1680000000000!5m2!1sen!2sth" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
              <h4 className="font-bold text-[#0a2540] mb-1">HQ Location</h4>
              <p className="text-xs text-gray-500 font-medium">คลิกที่แผนที่เพื่อดูเส้นทางผ่าน Google Maps</p>
            </div>
          </div>

          {/* ขวา: ฟอร์มติดต่อ */}
          <div className="lg:w-1/2 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-[#0a2540] mb-2">ส่งข้อความถึงเรา</h2>
              <p className="text-gray-500 font-medium text-sm">สอบถามค่าขนส่ง ปรึกษาเรื่องการนำเข้า-ส่งออก หรือแจ้งปัญหาการใช้งาน</p>
            </div>

            {alert.type && (
              <div className={`mb-6 p-4 rounded-xl border flex items-center gap-3 animate-fade-in-up font-bold text-sm ${alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                <i className={`fas ${alert.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'} text-lg`}></i>
                {alert.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อ - นามสกุล <span className="text-red-500">*</span></label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="เช่น สมชาย ใจดี" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="เช่น 0812345678" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">อีเมล (ถ้ามี)</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">หัวข้อเรื่อง</label>
                  <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-gray-600 appearance-none">
                    <option value="">-- เลือกหัวข้อที่ต้องการติดต่อ --</option>
                    <option value="สอบถามค่าขนส่ง">สอบถามค่าขนส่ง / ขอใบเสนอราคา</option>
                    <option value="ติดตามพัสดุ">ติดตามพัสดุ / แจ้งปัญหา</option>
                    <option value="ปรึกษาพิธีการศุลกากร">ปรึกษาเรื่องพิธีการศุลกากร</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">รายละเอียด <span className="text-red-500">*</span></label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium resize-none" placeholder="ระบุรายละเอียดที่คุณต้องการให้เราช่วยเหลือ..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#0a2540] hover:bg-[#00249c] text-white font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <><i className="fas fa-circle-notch fa-spin"></i> กำลังส่งข้อความ...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> ส่งข้อความถึงเรา</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}