'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        router.push('/admin/packages');
      } else {
        const data = await res.json();
        setError(data.error || 'เข้าสู่ระบบไม่สำเร็จ');
      }
    } catch (err) {
      setError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex items-center justify-center p-4 font-prompt">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header โลโก้ */}
        <div className="bg-[#0a192f] p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500"></div>
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl mx-auto shadow-lg mb-4">
            <i className="fas fa-truck-fast"></i>
          </div>
          <h1 className="text-3xl font-black text-white tracking-widest mt-2">THANA<span className="text-[#00e5ff]">ADMIN</span></h1>
          <p className="text-gray-400 text-sm mt-2">ระบบจัดการข้อมูลโลจิสติกส์ ไทย-ลาว</p>
        </div>

        {/* ฟอร์มกรอกรหัส */}
        <div className="p-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold mb-6 flex items-center gap-3 border border-red-100">
              <i className="fas fa-circle-exclamation text-lg"></i> {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-[#0a2540] mb-2">ชื่อผู้ใช้งาน (Username)</label>
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-4 text-gray-400"></i>
                <input 
                  type="text" 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-bold text-gray-700"
                  placeholder="กรอกชื่อผู้ใช้งาน..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#0a2540] mb-2">รหัสผ่าน (Password)</label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-4 text-gray-400"></i>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-bold text-gray-700"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#0a192f] hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-8 text-lg"
            >
              {isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : <i className="fas fa-sign-in-alt"></i>}
              {isLoading ? 'กำลังตรวจสอบ...' : 'เข้าสู่ระบบ (Login)'}
            </button>
          </form>

          {/* ปุ่มกลับหน้าหลัก */}
          <div className="mt-6 text-center">
            <a href="/" className="text-gray-500 hover:text-blue-600 text-sm font-bold transition-colors">
              <i className="fas fa-arrow-left mr-2"></i> กลับสู่หน้าเว็บหลัก
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}