'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactHubPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // 🌐 รายการช่องทางการติดต่อออนไลน์
  const onlineChannels = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', color: 'bg-[#1877F2]', shadow: 'hover:shadow-[#1877F2]/40', link: '#' },
    { name: 'LINE Official', icon: 'fab fa-line', color: 'bg-[#00C300]', shadow: 'hover:shadow-[#00C300]/40', link: '#' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: 'bg-[#25D366]', shadow: 'hover:shadow-[#25D366]/40', link: '#' },
    { name: 'Telegram', icon: 'fab fa-telegram', color: 'bg-[#229ED9]', shadow: 'hover:shadow-[#229ED9]/40', link: '#' },
    { name: 'TikTok', icon: 'fab fa-tiktok', color: 'bg-black', shadow: 'hover:shadow-black/40', link: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', color: 'bg-[#FF0000]', shadow: 'hover:shadow-[#FF0000]/40', link: '#' },
    { name: 'อีเมล', icon: 'fas fa-envelope', color: 'bg-slate-600', shadow: 'hover:shadow-slate-600/40', link: 'mailto:contact@thanagroup.com' },
    { name: 'โทรศัพท์', icon: 'fas fa-phone', color: 'bg-blue-600', shadow: 'hover:shadow-blue-600/40', link: 'tel:0930237931' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // (ถ้าของเดิมพี่มี setIsSubmitting(true) ก็ใส่ไว้ได้เหมือนเดิมเลยนะครับ)

  try {
    // 1. จัดเตรียมข้อมูลให้ตรงกับที่ API ของเรารับ (API เรารับ name, company, service)
    // ผมขอจับคู่ "เบอร์โทร" ไปใส่ช่อง company และรวม "หัวข้อ+รายละเอียด" ไปใส่ช่อง service ให้นะครับ จะได้เก็บครบๆ
    const payload = {
      name: formData.name,
      company: `โทร: ${formData.phone} (อีเมล: ${formData.email || '-'})`, 
      service: `หัวข้อ: ${formData.subject} | รายละเอียด: ${formData.message}`
    };

    // 2. ยิงข้อมูลไปที่ API ที่เราเพิ่งสร้าง
    const response = await fetch('/api/quotations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // 3. เช็คผลลัพธ์
    if (response.ok) {
      window.alert("✅ ส่งข้อมูลเข้าฐานข้อมูลสำเร็จแล้วครับ!");
      
      // เคลียร์ค่าในช่องฟอร์มให้ว่างเปล่า
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); 
    } else {
      window.alert("❌ ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    }
  } catch (error) {
    console.error("Error:", error);
    window.alert("❌ เกิดข้อผิดพลาดในการเชื่อมต่อ");
  } finally {
    // (ถ้าของเดิมพี่มี setIsSubmitting(false) ก็ใส่ไว้เหมือนเดิมเลยครับ)
  }
};

  return (
    <div className="min-h-screen bg-slate-50 font-prompt pb-24">
      
      {/* ==========================================
          1. HERO SECTION 
      ========================================== */}
      <div className="relative bg-[#0a2540] pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* 🔙 ปุ่มกลับสู่หน้าหลัก */}
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all backdrop-blur-sm border border-white/20 mb-8 group shadow-lg">
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> กลับสู่หน้าหลัก
          </Link>

          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-[#00e5ff] text-sm font-bold tracking-wider mb-4 border border-blue-400/30">
            CONTACT US
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
            ติดต่อ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">THANA GROUP</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            สอบถามข้อมูล บริการด้านโลจิสติกส์ หรือขอใบเสนอราคา เราพร้อมให้บริการคุณผ่านทุกช่องทาง
          </p>
        </div>
      </div>

      {/* ==========================================
          2. CONTACT HUB (รวมช่องทางออนไลน์ & ฟอร์ม)
      ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(10,37,64,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* ซ้าย: ช่องทางติดต่อออนไลน์ (แทนที่แผนที่) */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-slate-50 to-blue-50/50 border-r border-gray-100">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-[#00249c] rounded-xl mb-4 text-xl shadow-sm">
                <i className="fas fa-satellite-dish"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-2">ช่องทางออนไลน์</h2>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                คลิกที่ปุ่มด้านล่างเพื่อติดต่อเราผ่านช่องทางที่คุณสะดวกที่สุด ทีมงานพร้อมให้บริการและตอบคำถามตลอด 24 ชั่วโมง
              </p>
            </div>

            {/* ปุ่ม Social Buttons สวยๆ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {onlineChannels.map((channel, index) => (
                <a 
                  key={index} 
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl text-white ${channel.color} ${channel.shadow} shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className={channel.icon}></i>
                  </div>
                  <span className="font-bold tracking-wide">{channel.name}</span>
                </a>
              ))}
            </div>
            
            {/* กล่อง Hotline พิเศษ */}
            <div className="mt-6 bg-[#0a2540] rounded-2xl p-6 text-white flex items-center justify-between shadow-lg relative overflow-hidden group hover:bg-[#00249c] transition-colors">
               <div className="absolute -right-4 -top-4 text-white/5 text-7xl"><i className="fas fa-headset"></i></div>
               <div className="relative z-10">
                 <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-1">Hotline 24 ชม.</p>
                 <a href="tel:0930237931" className="text-2xl font-black tracking-wider">093-023-7931</a>
               </div>
               <a href="tel:0930237931" className="relative z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-xl transition-colors">
                 <i className="fas fa-phone-volume animate-pulse"></i>
               </a>
            </div>
          </div>

          {/* ขวา: ฟอร์มส่งข้อความ */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-white">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-2">ส่งข้อความถึงเรา</h2>
              <p className="text-gray-500 font-medium text-sm">กรุณากรอกข้อมูลด้านล่าง เพื่อให้ทีมงานติดต่อกลับโดยเร็วที่สุด</p>
            </div>

            {alert.type && (
              <div className={`mb-6 p-4 rounded-xl border flex items-center gap-3 animate-fade-in-up font-bold text-sm ${alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-300 text-red-700'}`}>
                <i className={`fas ${alert.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'} text-xl`}></i>
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
                    <option value="">-- เลือกหัวข้อ --</option>
                    <option value="สอบถามค่าขนส่ง">สอบถามค่าขนส่ง / ขอใบเสนอราคา</option>
                    <option value="ติดตามพัสดุ">ติดตามพัสดุ / แจ้งปัญหา</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">รายละเอียด <span className="text-red-500">*</span></label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-5 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium resize-none" placeholder="รายละเอียด..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#e62e2d] to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-lg py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> กำลังส่ง...</> : <><i className="fas fa-paper-plane"></i> ส่งข้อความถึงเรา</>}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}