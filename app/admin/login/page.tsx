'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // 🔥 นำเข้าฟังก์ชันของ NextAuth

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 🚀 ใช้ฟังก์ชัน signIn ของ NextAuth แทนการยิง fetch ปกติ
      const res = await signIn('credentials', {
        redirect: false, // ปิดการเด้งอัตโนมัติ เพื่อให้เราจัดการเอง
        username,
        password,
      });

      if (res?.error) {
        setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
        setIsLoading(false);
      } else if (res?.ok) {
        // ✅ ถ้าสำเร็จ NextAuth จะจัดการบัตรคิวให้แล้ว เราแค่บังคับรีไดเรกต์ไปหน้า Admin
        window.location.href = '/admin';
      }
    } catch (err) {
      setError('ระบบเชื่อมข้อมูลขัดข้อง กรุณาลองใหม่อีกครั้ง');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-prompt p-4 bg-[linear-gradient(rgba(241,245,249,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.8)_1px,transparent_1px)] bg-[size:30px_30px]">
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(10,37,64,0.05)] border border-gray-100 p-8 md:p-12 w-full max-w-md text-center animate-fade-in-up">
        
        {/* Logo */}
        <div className="w-16 h-16 mx-auto bg-[#00249c] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg mb-6 shadow-blue-600/20">
          <i className="fas fa-truck-fast"></i>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[#0a2540] mb-2 tracking-wide">THANA GROUP</h1>
        <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-8">Admin Management Portal</p>

        {error && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-bold flex items-center gap-2 justify-center">
            <i className="fas fa-circle-exclamation"></i> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อผู้ใช้งาน (Username)</label>
            <div className="relative">
              <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ระบุชื่อผู้ใช้งาน"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">รหัสผ่าน (Password)</label>
            <div className="relative">
              <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-semibold"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#0a2540] to-blue-900 hover:from-blue-900 hover:to-slate-900 text-white font-black text-base py-4 rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <><i className="fas fa-circle-notch fa-spin"></i> กำลังตรวจสอบข้อมูล...</>
            ) : (
              <><i className="fas fa-right-to-bracket"></i> เข้าสู่ระบบควบคุม panel</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}