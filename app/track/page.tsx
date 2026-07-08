'use client';

import { useState, useEffect } from 'react';

export default function TrackPackagePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. แยกฟังก์ชันดึงข้อมูลออกมา เพื่อให้เรียกใช้ได้จากหลายที่
  const fetchTrackingData = async (trackingId: string) => {
    setIsLoading(true);
    setError('');
    setTrackingData(null);

    try {
      const res = await fetch(`/api/tracking?trackingNumber=${trackingId}`);
      const data = await res.json();

      if (res.ok) {
        setTrackingData(data.data);
      } else {
        setError(data.error || 'ไม่พบข้อมูลพัสดุรหัสนี้ในระบบ กรุณาตรวจสอบอีกครั้ง');
      }
    } catch (err) {
      setError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ในขณะนี้');
    } finally {
      setIsLoading(false);
    }
  };

  // 2. ดักจับ URL ว่ามีรหัสพัสดุพ่วงมาด้วยไหมตอนเปิดหน้าเว็บครั้งแรก
  useEffect(() => {
    // ดึงค่า ?id= ออกมาจาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');

    // ถ้าเจอว่าส่งรหัสมาด้วย ให้เอาไปใส่ช่องค้นหา และสั่งค้นหาอัตโนมัติเลย
    if (idFromUrl) {
      const formattedId = idFromUrl.toUpperCase();
      setSearchQuery(formattedId);
      fetchTrackingData(formattedId);
    }
  }, []);

  // 3. ฟังก์ชันสำหรับตอนที่ลูกค้าพิมพ์เองแล้วกดปุ่ม "ค้นหา"
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    fetchTrackingData(searchQuery.trim().toUpperCase());
  };

  return (
    <div className="min-h-screen bg-slate-50 font-prompt py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* ส่วนหัวของหน้า */}
        <div className="text-center">
          <h1 className="text-3xl font-black text-[#00249c] mb-2">ติดตามสถานะพัสดุ</h1>
          <p className="text-gray-500">กรุณากรอกหมายเลขพัสดุของคุณ (Tracking Number) เพื่อตรวจสอบสถานะ</p>
        </div>

        {/* ฟอร์มค้นหา */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
              placeholder="ตัวอย่าง: THN-12345"
              className="flex-1 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00249c]/20 focus:border-[#00249c] transition-colors text-lg font-medium text-gray-800 uppercase"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#00249c] hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? (
                <span><i className="fas fa-spinner fa-spin mr-2"></i> กำลังค้นหา...</span>
              ) : (
                <span><i className="fas fa-search mr-2"></i> ค้นหาพัสดุ</span>
              )}
            </button>
          </form>
        </div>

        {/* แสดง Error ถ้าหาไม่เจอ */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center border border-red-100 font-medium">
            <i className="fas fa-exclamation-circle mr-2"></i> {error}
          </div>
        )}

        {/* แสดงผลไทม์ไลน์สถานะพัสดุ */}
        {trackingData && (
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up">
            
            <div className="bg-[#0a2540] p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-sm text-blue-200 mb-1">หมายเลขพัสดุ</p>
                <h3 className="text-2xl font-black tracking-wider">{trackingData.trackingNumber}</h3>
              </div>
              <div className="text-right">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {trackingData.histories[0]?.status || 'UPDATE'}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                {/* ลูปแสดงประวัติจากฐานข้อมูล */}
                {trackingData.histories.map((history: any, index: number) => (
                  <div key={index} className="relative pl-8">
                    {/* จุดกลมๆ บนเส้นไทม์ไลน์ */}
                    <div className={`absolute w-6 h-6 rounded-full -left-[13px] top-0 border-4 border-white shadow-sm ${index === 0 ? 'bg-[#00249c]' : 'bg-gray-300'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className={`text-lg font-bold ${index === 0 ? 'text-[#00249c]' : 'text-gray-700'}`}>
                          {history.status}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1"><i className="fas fa-map-marker-alt text-red-500 mr-1.5"></i>{history.location}</p>
                        {history.description && (
                          <p className="text-gray-500 text-sm mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            {history.description}
                          </p>
                        )}
                      </div>
                      <div className="text-sm font-medium text-gray-400 shrink-0">
                        {new Date(history.createdAt).toLocaleString('th-TH', { 
                          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })} น.
                      </div>
                    </div>
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