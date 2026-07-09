'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [previousStatus, setPreviousStatus] = useState('');
  
  const [formData, setFormData] = useState({
    trackingNumber: '',
    status: 'รับพัสดุเข้าระบบ (Picked Up)',
    location: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // 🛡️ ฟังก์ชันจัดลำดับความสำคัญของสถานะ (Rank) เพื่อใช้ป้องกันการคีย์ย้อนหลัง
  const getStatusRank = (statusText: string) => {
    const text = statusText.toLowerCase();
    if (text.includes('สำเร็จ') || text.includes('delivered')) return 6;
    if (text.includes('นำจ่าย') || text.includes('delivery')) return 5;
    if (text.includes('จัดส่งไปยังปลายทาง') || text.includes('transit')) return 4;
    if (text.includes('ศูนย์กระจายสินค้า') || text.includes('คลัง')) return 3;
    if (text.includes('ข้ามแดน') || text.includes('ศุลกากร')) return 2;
    if (text.includes('รับพัสดุ') || text.includes('picked up')) return 1;
    return 0; // พัสดุใหม่แกะกล่องไม่มีประวัติ
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const trackingQuery = params.get('tracking');
      const statusQuery = params.get('currentStatus');

      if (trackingQuery) {
        setFormData(prev => ({ ...prev, trackingNumber: trackingQuery }));
      }
      if (statusQuery) {
        setPreviousStatus(statusQuery);
        
        // 🪄 ฉลาดขึ้นอีกขั้น: ตั้งค่าเริ่มต้นของ Select ให้เป็นสถานะถัดไปที่ควรจะเป็นโดยอัตโนมัติ
        const currentRank = getStatusRank(statusQuery);
        if (currentRank === 1) setFormData(prev => ({ ...prev, status: 'อยู่ระหว่างดำเนินการข้ามแดน ณ ด่านศุลกากร' }));
        else if (currentRank === 2) setFormData(prev => ({ ...prev, status: 'รถบรรทุกเดินทางถึงศูนย์กระจายสินค้า' }));
        else if (currentRank === 3) setFormData(prev => ({ ...prev, status: 'อยู่ระหว่างการจัดส่งไปยังปลายทาง (In Transit)' }));
        else if (currentRank === 4) setFormData(prev => ({ ...prev, status: 'พัสดุกำลังนำจ่าย (Out for Delivery)' }));
        else if (currentRank === 5) setFormData(prev => ({ ...prev, status: 'จัดส่งสำเร็จ (Delivered)' }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: null, message: '' });

    // 🛑 ตรวจสอบความถูกต้องขั้นเด็ดขาด (Anti-Retroactive Checker)
    const prevRank = getStatusRank(previousStatus);
    const newRank = getStatusRank(formData.status);

    if (prevRank > 0 && newRank <= prevRank) {
      setAlert({ 
        type: 'error', 
        message: `ไม่อนุญาตให้อัปเดตสถานะย้อนหลังหรือซ้ำเดิม! (พัสดุนี้เคยผ่านสถานะ "${previousStatus}" มาแล้ว)` 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ type: 'success', message: `อัปเดตสถานะพัสดุ ${formData.trackingNumber} สำเร็จเสร็จสิ้น!` });
        setFormData({ ...formData, trackingNumber: '', description: '', location: '' });
        setPreviousStatus('');
        if (typeof window !== 'undefined') {
          window.history.replaceState({}, '', '/admin');
        }
      } else {
        throw new Error(data.error || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }
    } catch (error: any) {
      setAlert({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setAlert({ type: null, message: '' }), 6000);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100 font-prompt">
      
      
      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="h-16 md:h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-10 shadow-sm">
          <div><h1 className="text-xl md:text-2xl font-black text-[#0a2540]">Dashboard</h1></div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
          
          {/* Alert Display */}
          {alert.type && (
            <div className={`p-4 rounded-xl border-2 flex items-center gap-3 shadow-sm animate-fade-in-up ${alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-300 text-red-700 font-bold'}`}>
              <i className={`fas ${alert.type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'} text-xl`}></i>
              <span>{alert.message}</span>
            </div>
          )}

          {/* Action Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
            {previousStatus && (
              <div className="absolute top-0 right-0 bg-blue-50 text-[#00249c] font-bold text-xs px-4 py-2 rounded-bl-2xl border-b border-l border-blue-100 flex items-center gap-2">
                <i className="fas fa-shield-halved text-blue-500"></i> เปิดระบบป้องกันสถานะย้อนกลับ
              </div>
            )}

            <div className="bg-[#0a2540] px-8 py-5 flex items-center gap-3">
              <i className="fas fa-satellite-dish text-[#00e5ff] text-xl"></i>
              <h2 className="text-white font-black text-lg">อัปเดตสถานะพัสดุ (Status Update)</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Tracking Number */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">1. หมายเลขพัสดุ (Tracking No.)</label>
                  <input 
                    type="text" required value={formData.trackingNumber}
                    onChange={(e) => setFormData({...formData, trackingNumber: e.target.value.toUpperCase()})}
                    placeholder="เช่น THN12345678"
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 text-lg font-black text-gray-800 uppercase"
                  />
                </div>

                {/* Status Dropdown with Disable Rule */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">2. สถานะใหม่ที่ต้องการอัปเดต</label>
                  {previousStatus && (
                    <div className="mb-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                      <i className="fas fa-clock-rotate-left mr-1"></i> ปัจจุบันอยู่ขั้นที่: <span className="text-[#00249c]">"{previousStatus}"</span>
                    </div>
                  )}
                  <div className="relative">
                    <select 
                      required value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 text-base font-bold text-gray-800 appearance-none cursor-pointer shadow-inner"
                    >
                      {/* 🛡️ บล็อกตัวเลือกที่น้อยกว่าหรือเท่ากับสถานะปัจจุบัน เพื่อไม่ให้กดได้ตั้งแต่หน้าเว็บ */}
                      <option value="รับพัสดุเข้าระบบ (Picked Up)" disabled={getStatusRank('รับพัสดุเข้าระบบ (Picked Up)') <= getStatusRank(previousStatus)}>📦 1. รับพัสดุเข้าระบบ (Picked Up)</option>
                      <option value="อยู่ระหว่างดำเนินการข้ามแดน ณ ด่านศุลกากร" disabled={getStatusRank('อยู่ระหว่างดำเนินการข้ามแดน ณ ด่านศุลกากร') <= getStatusRank(previousStatus)}>📄 2. ดำเนินการข้ามแดน ณ ด่านศุลกากร</option>
                      <option value="รถบรรทุกเดินทางถึงศูนย์กระจายสินค้า" disabled={getStatusRank('รถบรรทุกเดินทางถึงศูนย์กระจายสินค้า') <= getStatusRank(previousStatus)}>🏢 3. เดินทางถึงศูนย์กระจายสินค้า</option>
                      <option value="อยู่ระหว่างการจัดส่งไปยังปลายทาง (In Transit)" disabled={getStatusRank('อยู่ระหว่างการจัดส่งไปยังปลายทาง (In Transit)') <= getStatusRank(previousStatus)}>🚚 4. อยู่ระหว่างจัดส่งไปปลายทาง (In Transit)</option>
                      <option value="พัสดุกำลังนำจ่าย (Out for Delivery)" disabled={getStatusRank('พัสดุกำลังนำจ่าย (Out for Delivery)') <= getStatusRank(previousStatus)}>🛵 5. พัสดุกำลังนำจ่ายให้ผู้รับ (Out for Delivery)</option>
                      <option value="จัดส่งสำเร็จ (Delivered)" disabled={getStatusRank('จัดส่งสำเร็จ (Delivered)') <= getStatusRank(previousStatus)}>✅ 6. จัดส่งสำเร็จ (Delivered)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400"><i className="fas fa-chevron-down"></i></div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">3. สถานที่ / จุดสแกนพัสดุ (Location)</label>
                  <input type="text" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="เช่น ด่านศุลกากรหนองคาย" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 text-base font-medium text-gray-800" />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-[#0a2540] mb-2 uppercase tracking-wide">4. หมายเหตุเพิ่มเติม (Description)</label>
                  <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="เช่น เปลี่ยนถ่ายรถบรรทุก" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-5 py-3.5 text-base font-medium text-gray-800" />
                </div>

              </div>

              <div className="flex justify-end pt-6 border-t border-gray-100">
                <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-[#00249c] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black text-lg py-4 px-10 rounded-xl shadow-lg transition-all flex items-center gap-3">
                  {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> กำลังบันทึก...</> : <><i className="fas fa-cloud-arrow-up"></i> บันทึกสถานะพัสดุ</>}
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}