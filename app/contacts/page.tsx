'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ContactPage() {
  // สร้าง State สำหรับฟอร์มและระบบแจ้งเตือน (Production Ready)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // ฟังก์ชันจัดการตอนกดส่งฟอร์ม
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. ระบบ Validation ตรวจสอบข้อมูลเบื้องต้น
    if (!formData.name.trim() || !formData.phone.trim()) {
      setAlert({ type: 'error', message: 'กรุณากรอกชื่อและเบอร์โทรศัพท์ เพื่อให้เจ้าหน้าที่ติดต่อกลับครับ' });
      return;
    }

    // 2. ระบบ Loading
    setIsLoading(true);
    setAlert({ type: null, message: '' });

    // จำลองการส่งข้อมูล (API Request)
    setTimeout(() => {
      setIsLoading(false);
      // 3. ระบบ Alert แจ้งเตือนเมื่อสำเร็จ
      setAlert({ type: 'success', message: 'ส่งข้อความสำเร็จ! ทีมงานจะรีบติดต่อกลับโดยเร็วที่สุดครับ' });
      // เคลียร์ฟอร์ม
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Get In Touch</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ติดต่อเรา</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              THANA GROUP ยินดีให้บริการและพร้อมให้คำปรึกษาด้านโลจิสติกส์แบบครบวงจร 
              ติดต่อเราได้ทุกช่องทางที่คุณสะดวก
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            
            {/* ข้อมูลการติดต่อ & แพลตฟอร์ม (ฝั่งซ้าย) */}
            <div className="lg:w-1/2 space-y-8">
              
              {/* ข้อมูลสำนักงาน */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900 mb-6 border-l-4 border-thana-red pl-4">สำนักงานใหญ่</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-thana-blue shrink-0 text-xl">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">ที่อยู่ (Address)</h4>
                      <p className="text-gray-600 mt-1">123/45 ถนนโลจิสติกส์ แขวงขนส่ง เขตคลังสินค้า กรุงเทพมหานคร 10900</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-thana-blue shrink-0 text-xl">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">โทรศัพท์ (Phone)</h4>
                      <a href="tel:021234567" className="text-gray-600 hover:text-thana-blue transition-colors mt-1 block">02-123-4567 (อัตโนมัติ 10 คู่สาย)</a>
                      <a href="tel:0812345678" className="text-gray-600 hover:text-thana-blue transition-colors block">081-234-5678 (Hotline 24 ชม.)</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-thana-blue shrink-0 text-xl">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">อีเมล (Email)</h4>
                      <a href="mailto:contact@thanagroup.com" className="text-gray-600 hover:text-thana-blue transition-colors mt-1 block">contact@thanagroup.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* ช่องทาง Social Media & Chat Platforms */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-6">ช่องทางออนไลน์ (Online Platforms)</h3>
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* LINE OA */}
                  <a href="#" className="flex items-center gap-3 bg-[#00c300]/10 hover:bg-[#00c300] text-[#00c300] hover:text-white p-4 rounded-xl transition-all duration-300 group">
                    <i className="fab fa-line text-3xl group-hover:scale-110 transition-transform"></i>
                    <div>
                      <div className="font-bold text-sm">LINE Official</div>
                      <div className="text-xs opacity-80">@thanagroup</div>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="flex items-center gap-3 bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white p-4 rounded-xl transition-all duration-300 group">
                    <i className="fab fa-facebook text-3xl group-hover:scale-110 transition-transform"></i>
                    <div>
                      <div className="font-bold text-sm">Facebook</div>
                      <div className="text-xs opacity-80">Inbox Messenger</div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="#" className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white p-4 rounded-xl transition-all duration-300 group">
                    <i className="fab fa-whatsapp text-3xl group-hover:scale-110 transition-transform"></i>
                    <div>
                      <div className="font-bold text-sm">WhatsApp</div>
                      <div className="text-xs opacity-80">+66 81 234 5678</div>
                    </div>
                  </a>

                  {/* WeChat */}
                  <a href="#" className="flex items-center gap-3 bg-[#07c160]/10 hover:bg-[#07c160] text-[#07c160] hover:text-white p-4 rounded-xl transition-all duration-300 group">
                    <i className="fab fa-weixin text-3xl group-hover:scale-110 transition-transform"></i>
                    <div>
                      <div className="font-bold text-sm">WeChat</div>
                      <div className="text-xs opacity-80">thana_logistics</div>
                    </div>
                  </a>

                </div>
              </div>

            </div>

            {/* ฟอร์มติดต่อกลับ (ฝั่งขวา) */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-thana-blue mb-2">ฝากข้อความถึงเรา</h3>
                  <p className="text-gray-500 text-sm">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ฝ่ายขายติดต่อกลับพร้อมข้อเสนอพิเศษ</p>
                </div>

                {/* ระบบ Alert */}
                {alert.type && (
                  <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${alert.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    <i className={`fas mt-1 ${alert.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                    <p className="font-medium text-sm">{alert.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อ - นามสกุล <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        placeholder="กรุณากรอกชื่อ"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        placeholder="08X-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">อีเมล (ถ้ามี)</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ข้อความ / สิ่งที่ต้องการสอบถาม</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all resize-none"
                      placeholder="เช่น สอบถามราคาขนส่งไปเวียงจันทน์..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 btn-shine disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <><i className="fas fa-circle-notch fa-spin"></i> กำลังส่งข้อมูล...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> ส่งข้อความ</>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* แผนที่ Google Maps */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gray-200 relative">
              {/* หมายเหตุ: นี่คือ iframe แผนที่ตัวอย่าง สามารถเปลี่ยน src เป็นลิงก์ Google Maps ของบริษัทจริงได้เลยครับ */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sth!4v1689700000000!5m2!1sen!2sth" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}