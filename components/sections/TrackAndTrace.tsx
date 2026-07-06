'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // เพิ่มระบบ Router

export default function TrackAndTrace() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter(); // เรียกใช้งาน Router

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ระบบ Validation ตรวจสอบค่าว่าง
    if (!trackingNumber.trim()) {
      setError('กรุณาระบุหมายเลข Tracking Number');
      return;
    }

    setError('');
    setIsLoading(true);

    // จำลองการโหลดนิดนึง แล้วย้ายไปหน้า /track
    setTimeout(() => {
      // พาผู้ใช้ไปที่หน้า /track (ถ้าโปรเจกต์จริง สามารถแนบ query string ไปได้ เช่น /track?id=xxx)
      router.push('/track');
    }, 800);
  };

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-24 mb-16">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-100 backdrop-blur-md bg-white/95">
        
        {/* หัวข้อ */}
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
          <div className="bg-thana-blue text-white p-3 rounded-lg shadow-sm">
            <i className="fas fa-search-location text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-thana-blue">TRACK & TRACE</h2>
            <p className="text-sm text-gray-500 font-medium">ตรวจสอบสถานะสินค้าและตู้คอนเทนเนอร์</p>
          </div>
        </div>

        {/* ฟอร์มค้นหา */}
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-box text-gray-400"></i>
            </div>
            <input
              type="text"
              className={`block w-full pl-11 pr-4 py-4 bg-gray-50 border ${error ? 'border-thana-red focus:ring-thana-red' : 'border-gray-200 focus:ring-thana-blue'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-medium text-lg`}
              placeholder="กรอกหมายเลข Tracking / B/L / Container No."
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
                if (error) setError('');
              }}
            />
            {error && (
              <p className="absolute -bottom-6 left-1 text-thana-red text-xs font-bold flex items-center gap-1">
                <i className="fas fa-exclamation-circle"></i> {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-thana-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 md:w-48 disabled:opacity-70 disabled:cursor-not-allowed btn-shine"
          >
            {isLoading ? (
              <><i className="fas fa-circle-notch fa-spin"></i> ค้นหา...</>
            ) : (
              <>ค้นหาสถานะ <i className="fas fa-arrow-right"></i></>
            )}
          </button>
        </form>

      </div>
    </section>
  );
}