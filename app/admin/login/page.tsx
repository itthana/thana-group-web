'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  
  // ==========================================
  // 1. State Management (จัดการสถานะข้อมูล)
  // ==========================================
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ==========================================
  // 2. Submit Handler (ฟังก์ชันจัดการเมื่อกดปุ่มเข้าสู่ระบบ)
  // ==========================================
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช
    
    // Client-side Validation (ตรวจสอบเบื้องต้นก่อนส่งข้อมูล)
    if (!username.trim() || !password.trim()) {
      setError('กรุณากรอกชื่อผู้ใช้งานและรหัสผ่านให้ครบถ้วน');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // เรียกใช้ API ของ NextAuth เพื่อตรวจสอบรหัสผ่าน
      const result = await signIn('credentials', {
        redirect: false,
        username: username,
        password: password,
      });

      // จัดการกรณี Error (รหัสผ่านผิด หรือ ระบบขัดข้อง)
      if (result?.error) {
        setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
        setIsLoading(false);
      } else {
        // กรณีสำเร็จ: บังคับรีเฟรชเพื่อเคลียร์ Cache และพาไปหน้า Dashboard
        router.push('/admin');
        router.refresh();
      }
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์');
      setIsLoading(false);
    }
  };

  // ==========================================
  // 3. UI Template (ส่วนแสดงผล)
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-prompt p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      
      {/* กล่อง Login หลัก (รองรับ Mobile Responsive) */}
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,36,156,0.1)] w-full max-w-md border border-gray-100 animate-slide-up">
        
        {/* ส่วน Header และ Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00249c] rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg shadow-blue-900/30">
            <i className="fas fa-truck-fast"></i>
          </div>
          <h1 className="text-2xl font-black text-[#0a2540] uppercase tracking-wider">THANA GROUP</h1>
          <p className="text-gray-500 text-sm mt-1">Admin Management Portal</p>
        </div>

        {/* ส่วนแสดงข้อความแจ้งเตือน Error (Alert) */}
        {error && (
          <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-start gap-3 text-sm font-medium animate-fade-in">
            <i className="fas fa-circle-exclamation mt-0.5 text-lg"></i> 
            <span>{error}</span>
          </div>
        )}

        {/* ฟอร์มกรอกข้อมูล */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* ช่อง Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">
              ชื่อผู้ใช้งาน (Username)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-user"></i>
              </div>
              <input 
                id="username"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all text-gray-800 font-medium disabled:opacity-60"
                placeholder="กรอกชื่อผู้ใช้งาน..."
                autoComplete="username"
              />
            </div>
          </div>

          {/* ช่อง Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
              รหัสผ่าน (Password)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-lock"></i>
              </div>
              <input 
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-[#00249c]/20 transition-all text-gray-800 font-medium disabled:opacity-60"
                placeholder="กรอกรหัสผ่าน..."
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* ปุ่ม Submit (เปลี่ยนสถานะได้ตาม Loading) */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#0a2540] hover:bg-[#00249c] text-white font-bold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 mt-6 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin text-lg"></i>
                กำลังตรวจสอบข้อมูล...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt text-lg"></i>
                เข้าสู่ระบบ (Sign In)
              </>
            )}
          </button>
        </form>

      </div>
      
      {/* Footer เล็กๆ ด้านล่าง */}
      <div className="fixed bottom-4 text-center w-full text-xs text-gray-400 font-medium pointer-events-none">
        &copy; 2026 THANA GROUP Logistics. All rights reserved.
      </div>
    </div>
  );
}