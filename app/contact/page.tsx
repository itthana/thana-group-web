'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ContactPage() {
  // State สำหรับฟอร์ม
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', department: 'sales', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // ข้อมูลอีเมลแต่ละแผนก
  const departments = [
    { 
      name: 'ฝ่ายขายและการตลาด', 
      engName: 'Sales & Marketing', 
      email: 'sales@thanagroup.com', 
      icon: 'fa-bullhorn', 
      color: 'text-thana-blue', 
      bg: 'bg-blue-50',
      desc: 'สอบถามราคาและบริการขนส่ง'
    },
    { 
      name: 'ฝ่ายบริการลูกค้า', 
      engName: 'Customer Service', 
      email: 'cs@thanagroup.com', 
      icon: 'fa-headset', 
      color: 'text-green-600', 
      bg: 'bg-green-50',
      desc: 'ติดตามสถานะสินค้าและแจ้งปัญหา'
    },
    { 
      name: 'ฝ่ายทรัพยากรบุคคล', 
      engName: 'HR & Admin', 
      email: 'hr@thanagroup.com', 
      icon: 'fa-users', 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      desc: 'สมัครงานและติดต่อธุรการ'
    },
    { 
      name: 'ฝ่ายบัญชีและการเงิน', 
      engName: 'Accounting & Finance', 
      email: 'account@thanagroup.com', 
      icon: 'fa-file-invoice-dollar', 
      color: 'text-amber-500', 
      bg: 'bg-amber-50',
      desc: 'เอกสารวางบิลและใบเสร็จรับเงิน'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      setAlert({ type: 'error', message: 'กรุณากรอกชื่อและเบอร์โทรศัพท์ เพื่อให้เจ้าหน้าที่ติดต่อกลับครับ' });
      return;
    }

    setIsLoading(true);
    setAlert({ type: null, message: '' });

    setTimeout(() => {
      setIsLoading(false);
      setAlert({ type: 'success', message: 'ส่งข้อความสำเร็จ! ทีมงานจะรีบติดต่อกลับโดยเร็วที่สุดครับ' });
      setFormData({ name: '', phone: '', email: '', department: 'sales', message: '' });
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
              ติดต่อเราได้ทุกช่องทางที่คุณสะดวก หรือเลือกติดต่อตรงตามแผนก
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            
            {/* ฝั่งซ้าย: ข้อมูลสำนักงาน & Social Media */}
            <div className="lg:w-1/2 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <i className="fas fa-building text-9xl"></i>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-thana-red pl-4 relative z-10">สำนักงานใหญ่</h3>
                
                <ul className="space-y-8 relative z-10 mb-10">
                  <li className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-thana-blue shrink-0 text-xl shadow-sm border border-blue-100">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg">ที่ตั้งสำนักงาน (Head Office)</h4>
                      <p className="text-gray-600 mt-1 leading-relaxed">123/45 ถนนโลจิสติกส์ แขวงขนส่ง เขตคลังสินค้า กรุงเทพมหานคร 10900</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-thana-red shrink-0 text-xl shadow-sm border border-red-100">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg">ศูนย์บริการลูกค้า 24 ชม.</h4>
                      <a href="tel:0812345678" className="text-thana-blue hover:text-thana-red font-black text-xl transition-colors mt-1 block">081-234-5678</a>
                      <span className="text-gray-500 text-sm">โทรศัพท์ออฟฟิศ: 02-123-4567 (10 คู่สาย)</span>
                    </div>
                  </li>
                </ul>

                <hr className="border-gray-100 mb-8" />

                <h3 className="text-lg font-black text-gray-900 mb-6 relative z-10">ช่องทางออนไลน์ (Social Platforms)</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {/* ลิงก์ LINE */}
                  <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#00c300] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-line text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">LINE</span>
                  </a>
                  
                  {/* ลิงก์ Facebook */}
                  <a href="https://www.facebook.com/thanagroup" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#1877f2] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-facebook text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">Facebook</span>
                  </a>
                  
                  {/* ลิงก์ TikTok */}
                  <a href="https://www.tiktok.com/@thanagroup" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#010101] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-tiktok text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">TikTok</span>
                  </a>
                  
                  {/* ลิงก์ YouTube */}
                  <a href="https://www.youtube.com/@thanagroup" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#FF0000] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-youtube text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">YouTube</span>
                  </a>
                  
                  {/* ลิงก์ WhatsApp */}
                  <a href="https://wa.me/66812345678" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#25D366] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-whatsapp text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">WhatsApp</span>
                  </a>
                  
                  {/* ลิงก์ WeChat (ส่วนใหญ่มักใช้เป็นลิงก์เปิดหน้า QR Code หรือ ID) */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 bg-gray-50 hover:bg-[#07c160] text-gray-500 hover:text-white p-4 rounded-2xl transition-all duration-300 group shadow-sm border border-gray-100">
                    <i className="fab fa-weixin text-3xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xs font-bold uppercase">WeChat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ฝั่งขวา: ฟอร์มติดต่อกลับ */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-thana-blue mb-2">ฝากข้อความถึงเรา</h3>
                  <p className="text-gray-500 text-sm">เลือกแผนกที่ต้องการติดต่อ ทีมงานจะรีบตอบกลับโดยเร็วที่สุด</p>
                </div>

                {alert.type && (
                  <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${alert.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
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
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        placeholder="กรุณากรอกชื่อ"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        placeholder="08X-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">อีเมล (ถ้ามี)</label>
                      <input 
                        type="email" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">ติดต่อแผนก <span className="text-red-500">*</span></label>
                      <select 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all"
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                      >
                        <option value="sales">ฝ่ายขายและการตลาด (Sales)</option>
                        <option value="cs">ฝ่ายบริการลูกค้า (Customer Service)</option>
                        <option value="hr">ฝ่ายบุคคลและธุรการ (HR)</option>
                        <option value="account">ฝ่ายบัญชีและการเงิน (Account)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ข้อความ / สิ่งที่ต้องการสอบถาม</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-thana-blue/50 focus:border-thana-blue transition-all resize-none"
                      placeholder="พิมพ์ข้อความของคุณที่นี่..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 btn-shine disabled:opacity-70 disabled:cursor-not-allowed mt-2"
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

          {/* โซนใหม่: อีเมลติดต่อแยกตามแผนก (Department Directory) */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-gray-900 mb-2">อีเมลติดต่อสายตรง (Department Directory)</h2>
              <p className="text-gray-500">เพื่อความรวดเร็วในการให้บริการ คุณสามารถส่งอีเมลตรงถึงแผนกที่เกี่ยวข้องได้ทันที</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <a 
                  key={index} 
                  href={`mailto:${dept.email}`}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${dept.bg} ${dept.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    <i className={`fas ${dept.icon}`}></i>
                  </div>
                  <h3 className="font-black text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">{dept.engName}</p>
                  <p className="text-sm text-gray-500 mb-4 h-10">{dept.desc}</p>
                  
                  <div className="w-full pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-sm font-bold text-thana-blue group-hover:text-thana-red transition-colors flex items-center justify-center gap-2">
                      <i className="fas fa-envelope"></i> {dept.email}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* แผนที่ Google Maps */}
          <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-lg">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-gray-200 relative">
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