'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';

export default function AdminDashboard() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // จำลองการบันทึกข้อมูล (เดี๋ยวเราจะมาต่อฐานข้อมูลจริงกัน)
    setTimeout(() => {
      alert(`✅ อัปเดตสถานะพัสดุ ${trackingNumber} เรียบร้อยแล้ว!`);
      setIsLoading(false);
      setTrackingNumber('');
      setLocation('');
      setDescription('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-prompt pb-20">
      {/* Navbar */}
      <nav className="bg-[#0a2540] text-white px-6 py-4 shadow-md sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00249c] rounded-lg flex items-center justify-center text-xl shadow-inner">
            <i className="fas fa-truck-fast"></i>
          </div>
          <div>
            <h1 className="font-black text-lg leading-tight uppercase tracking-wide">THANA GROUP</h1>
            <p className="text-[10px] text-gray-300">Admin Control Panel</p>
          </div>
        </div>
        
        <button 
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/30 px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
        >
          <i className="fas fa-power-off"></i> <span className="hidden sm:inline">ออกจากระบบ</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,36,156,0.05)] border border-gray-100 overflow-hidden animate-slide-up">
          <div className="bg-[#00249c] p-6 text-white text-center">
            <h2 className="text-2xl font-black mb-1">อัปเดตสถานะพัสดุ</h2>
            <p className="text-blue-200 text-sm">เพิ่มประวัติการเดินทางให้ลูกค้าตรวจสอบแบบ Real-time</p>
          </div>

          <form onSubmit={handleUpdate} className="p-6 sm:p-8 space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">หมายเลข Tracking <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 uppercase font-bold text-gray-800"
                placeholder="เช่น THN-12345"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">สถานะปัจจุบัน <span className="text-red-500">*</span></label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 font-medium text-gray-800"
                >
                  <option value="PENDING">📦 รับฝาก (Pending)</option>
                  <option value="PICKED_UP">🚚 เข้าระบบ (Picked Up)</option>
                  <option value="IN_TRANSIT">💨 ระหว่างขนส่ง (In Transit)</option>
                  <option value="CUSTOMS">🛂 ศุลกากร (Customs)</option>
                  <option value="OUT_FOR_DELIVERY">🛵 กำลังนำจ่าย (Out for Delivery)</option>
                  <option value="DELIVERED">✅ จัดส่งสำเร็จ (Delivered)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">สถานที่ (Location) <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 text-gray-800"
                  placeholder="เช่น ด่านศุลกากรหนองคาย"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">รายละเอียดเพิ่มเติม <span className="text-gray-400 font-normal">(ถ้ามี)</span></label>
              <textarea 
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 text-gray-800"
                placeholder="เช่น สินค้ากำลังรอตรวจสอบเอกสารผ่านแดน..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/30 text-lg"
            >
              {isLoading ? 'กำลังบันทึกข้อมูล...' : 'อัปเดตเข้าสู่ระบบ (Update Tracking)'}
            </button>
            
          </form>
        </div>
      </main>
    </div>
  );
}