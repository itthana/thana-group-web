'use client';

import { useState } from 'react';

export default function AdminTrackingPage() {
  const [searchId, setSearchId] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSearching, setIsSearching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // ข้อมูล Form สำหรับอัปเดต
  const [updateForm, setUpdateForm] = useState({
    status: '',
    location: '',
    description: ''
  });

  // ค้นหาข้อมูลเดิมมาโชว์ก่อน
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setMessage({ type: '', text: '' });
    
    try {
      const res = await fetch(`/api/tracking?id=${searchId}`);
      const data = await res.json();
      
      if (res.ok) {
        setTrackingData(data);
        setUpdateForm({ ...updateForm, status: data.currentStatus });
      } else {
        setTrackingData(null);
        setMessage({ type: 'error', text: data.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้' });
    } finally {
      setIsSearching(false);
    }
  };

  // กดยืนยันอัปเดตสถานะใหม่
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await fetch('/api/tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackingNumber: trackingData.trackingNumber,
          status: updateForm.status,
          location: updateForm.location,
          description: updateForm.description
        })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: 'บันทึกสถานะใหม่เข้าสู่ระบบเรียบร้อยแล้ว!' });
        setTrackingData(result.data); // อัปเดตข้อมูลหน้าจอแอดมินทันที
        setUpdateForm({ status: result.data.currentStatus, location: '', description: '' }); // เคลียร์ฟอร์ม
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'เกิดข้อผิดพลาดในการบันทึก' });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-prompt p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header แอดมิน */}
        <div className="flex items-center gap-4 mb-8 bg-[#0a2540] p-6 rounded-2xl text-white shadow-lg">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-md">
            <i className="fas fa-user-shield"></i>
          </div>
          <div>
            <h1 className="text-2xl font-black">THANA GROUP - Admin Portal</h1>
            <p className="text-gray-300 text-sm">ระบบอัปเดตสถานะการขนส่ง (Tracking Management)</p>
          </div>
        </div>

        {/* ส่วนค้นหาออเดอร์ */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">1. ค้นหาหมายเลขพัสดุ / ใบงาน</h2>
          <form onSubmit={handleSearch} className="flex gap-4">
            <input 
              type="text" 
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="เช่น THN-12345" 
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 font-bold uppercase"
              required
            />
            <button type="submit" disabled={isSearching} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              {isSearching ? 'กำลังค้นหา...' : 'ค้นหา'}
            </button>
          </form>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`p-4 rounded-xl mb-6 font-bold flex items-center gap-2 ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
            {message.text}
          </div>
        )}

        {/* ส่วนอัปเดตข้อมูล (โชว์เมื่อค้นหาเจอ) */}
        {trackingData && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-800 text-lg">2. อัปเดตสถานะ: <span className="text-blue-600">{trackingData.trackingNumber}</span></h2>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                สถานะปัจจุบัน: {trackingData.currentStatus}
              </span>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">เลือกสถานะใหม่ (New Status) <span className="text-red-500">*</span></label>
                <select 
                  required
                  value={updateForm.status}
                  onChange={(e) => setUpdateForm({...updateForm, status: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                >
                  <option value="PENDING">รับฝาก (Pending)</option>
                  <option value="PICKED_UP">เข้าระบบแล้ว (Picked Up)</option>
                  <option value="IN_TRANSIT">ระหว่างขนส่ง (In Transit)</option>
                  <option value="CUSTOMS">ศุลกากร/ติดด่าน (Customs)</option>
                  <option value="OUT_FOR_DELIVERY">กำลังนำจ่าย (Out for Delivery)</option>
                  <option value="DELIVERED">จัดส่งสำเร็จ (Delivered)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">สถานที่ปัจจุบัน (Location) <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={updateForm.location}
                    onChange={(e) => setUpdateForm({...updateForm, location: e.target.value})}
                    placeholder="เช่น ด่านหนองคาย (TH)" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">คำอธิบายเพิ่มเติม (Description) <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    value={updateForm.description}
                    onChange={(e) => setUpdateForm({...updateForm, description: e.target.value})}
                    placeholder="เช่น กำลังดำเนินการตรวจเอกสารนำออก" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isUpdating}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 shadow-md"
              >
                {isUpdating ? <i className="fas fa-circle-notch fa-spin"></i> : <i className="fas fa-save"></i>}
                อัปเดตเข้าสู่ระบบ (Update Tracking)
              </button>

            </form>

            {/* โชว์ประวัติคร่าวๆ ด้านล่าง เพื่อให้แอดมินดูความถูกต้อง */}
            <div className="mt-10">
              <h3 className="font-bold text-gray-500 text-sm mb-3">ประวัติล่าสุดบนหน้าเว็บลูกค้า:</h3>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                {trackingData.events.slice(0, 3).map((ev: any) => (
                  <div key={ev.id} className="flex justify-between text-sm">
                    <div>
                      <span className="font-bold text-gray-700">{ev.status}</span> - {ev.description}
                    </div>
                    <div className="text-gray-400 whitespace-nowrap">{ev.date} {ev.time}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}