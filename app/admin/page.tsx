'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // State สำหรับฟอร์มอัปเดตสถานะ
  const [formData, setFormData] = useState({
    trackingNumber: '',
    status: 'รับพัสดุเข้าระบบ (Picked Up)',
    location: 'ศูนย์กระจายสินค้า กรุงเทพมหานคร',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // ฟังก์ชันส่งข้อมูลเข้า API ฐานข้อมูล Neon ของพี่
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: null, message: '' });

    try {
      const response = await fetch('/api/tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ type: 'success', message: `อัปเดตสถานะพัสดุ ${formData.trackingNumber} สำเร็จแล้ว!` });
        // เคลียร์ฟอร์มบางส่วนเพื่อความรวดเร็วในการคีย์ต่อ
        setFormData({ ...formData, trackingNumber: '', description: '' });
      } else {
        throw new Error(data.error || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }
    } catch (error: any) {
      setAlert({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
      // ซ่อนแจ้งเตือนอัตโนมัติหลัง 5 วินาที
      setTimeout(() => setAlert({ type: null, message: '' }), 5000);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100 font-prompt">
      
      {/* ==========================================
          📱 1. SIDEBAR (เมนูด้านข้าง)
      ========================================== */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#0a2540] text-white transition-all duration-300 flex flex-col fixed h-full z-20 shadow-2xl`}>
        <div className="h-16 md:h-20 flex items-center justify-between px-4 border-b border-white/10">
          {isSidebarOpen ? (
            <div className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-400">
              THANA ADMIN
            </div>
          ) : (
            <div className="font-black text-xl text-[#00e5ff] mx-auto">TA</div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white transition-colors">
            <i className={`fas ${isSidebarOpen ? 'fa-angle-left' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-2 px-3 overflow-y-auto custom-scrollbar">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-[#00e5ff] rounded-xl border border-blue-500/30 group">
            <i className="fas fa-chart-pie w-6 text-center text-lg"></i>
            {isSidebarOpen && <span className="font-bold">ภาพรวมระบบ</span>}
          </Link>
          <Link href="/admin/manage" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-boxes-packing w-6 text-center text-lg group-hover:text-amber-400"></i>
            {isSidebarOpen && <span className="font-medium">จัดการพัสดุ</span>}
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-users w-6 text-center text-lg group-hover:text-emerald-400"></i>
            {isSidebarOpen && <span className="font-medium">รายชื่อลูกค้า</span>}
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-file-invoice-dollar w-6 text-center text-lg group-hover:text-red-400"></i>
            {isSidebarOpen && <span className="font-medium">ใบเสนอราคา</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <i className="fas fa-arrow-right-from-bracket w-6 text-center text-lg group-hover:text-red-500"></i>
            {isSidebarOpen && <span className="font-medium">กลับหน้าเว็บไซต์</span>}
          </Link>
        </div>
      </aside>

      {/* ==========================================
          🖥️ 2. MAIN CONTENT (พื้นที่ทำงานหลัก)
      ========================================== */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Header */}
        <header className="h-16 md:h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-10 shadow-sm">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-[#0a2540]">Dashboard</h1>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">Logistics Control Panel</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative text-gray-400 hover:text-[#0a2540] transition-colors">
              <i className="fas fa-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00249c] to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                AD
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-bold text-[#0a2540]">ผู้ดูแลระบบ</div>
                <div className="text-xs text-gray-500">Admin THANA</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
          
          {/* Quick Stats (ตัวเลขสถิติ) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl"><i className="fas fa-boxes-stacked"></i></div>
              <div>
                <div className="text-gray-400 text-sm font-bold mb-1">พัสดุในระบบวันนี้</div>
                <div className="text-3xl font-black text-[#0a2540]">128 <span className="text-sm font-medium text-gray-400 font-normal">รายการ</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl"><i className="fas fa-truck-fast"></i></div>
              <div>
                <div className="text-gray-400 text-sm font-bold mb-1">อยู่ระหว่างขนส่ง</div>
                <div className="text-3xl font-black text-[#0a2540]">45 <span className="text-sm font-medium text-gray-400 font-normal">รายการ</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-2xl"><i className="fas fa-check-double"></i></div>
              <div>
                <div className="text-gray-400 text-sm font-bold mb-1">จัดส่งสำเร็จแล้ว</div>
                <div className="text-3xl font-black text-[#0a2540]">83 <span className="text-sm font-medium text-gray-400 font-normal">รายการ</span></div>
              </div>
            </div>
          </div>

          {/* Alert Message */}
          {alert.type && (
            <div className={`p-4 rounded-xl border flex items-center gap-3 animate-fade-in-up ${alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
              <i className={`fas ${alert.type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'} text-xl`}></i>
              <span className="font-bold">{alert.message}</span>
            </div>
          )}

          {/* Action Form (ฟอร์มอัปเดตสถานะ) */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#0a2540] px-8 py-5 flex items-center gap-3">
              <i className="fas fa-satellite-dish text-[#00e5ff] text-xl"></i>
              <h2 className="text-white font-black text-lg">อัปเดตสถานะพัสดุ (Status Update)</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Tracking Number */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">1. หมายเลขพัสดุ (Tracking No.) <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.trackingNumber}
                    onChange={(e) => setFormData({...formData, trackingNumber: e.target.value.toUpperCase()})}
                    placeholder="เช่น THN12345678"
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl px-5 py-3.5 text-lg font-bold text-gray-800 transition-all uppercase placeholder-gray-300"
                  />
                </div>

                {/* Status Dropdown */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">2. สถานะปัจจุบัน (Current Status) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl px-5 py-3.5 text-base font-bold text-gray-800 appearance-none transition-all cursor-pointer"
                    >
                      <option value="รับพัสดุเข้าระบบ (Picked Up)">📦 รับพัสดุเข้าระบบ (Picked Up)</option>
                      <option value="อยู่ระหว่างดำเนินการข้ามแดน ณ ด่านศุลกากร">📄 ดำเนินการข้ามแดน ณ ด่านศุลกากร</option>
                      <option value="รถบรรทุกเดินทางถึงศูนย์กระจายสินค้า">🏢 เดินทางถึงศูนย์กระจายสินค้า</option>
                      <option value="อยู่ระหว่างการจัดส่งไปยังปลายทาง (In Transit)">🚚 อยู่ระหว่างจัดส่งไปปลายทาง (In Transit)</option>
                      <option value="พัสดุกำลังนำจ่าย (Out for Delivery)">🛵 พัสดุกำลังนำจ่ายให้ผู้รับ (Out for Delivery)</option>
                      <option value="จัดส่งสำเร็จ (Delivered)">✅ จัดส่งสำเร็จ (Delivered)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">3. สถานที่ / จุดสแกนพัสดุ (Location) <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="เช่น ด่านศุลกากรหนองคาย"
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl px-5 py-3.5 text-base font-medium text-gray-800 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">4. หมายเหตุเพิ่มเติม (Description)</label>
                  <input 
                    type="text" 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="เช่น รอเอกสารเพิ่มเติม / เปลี่ยนถ่ายรถ / ข้อมูลอื่นๆ"
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl px-5 py-3.5 text-base font-medium text-gray-800 transition-all"
                  />
                </div>

              </div>

              <div className="flex justify-end pt-6 border-t border-gray-100">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3"
                >
                  {isSubmitting ? (
                    <><i className="fas fa-circle-notch fa-spin"></i> กำลังบันทึกข้อมูล...</>
                  ) : (
                    <><i className="fas fa-cloud-arrow-up"></i> บันทึกสถานะพัสดุ</>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>

    </div>
  );
}