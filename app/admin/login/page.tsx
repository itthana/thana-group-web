'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // เรียกฟังก์ชัน SignIn ของ NextAuth
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError('ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง');
      setIsLoading(false);
    } else {
      // ถ้าถูก ให้เด้งไปหน้า Dashboard
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-prompt p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,36,156,0.1)] w-full max-w-md border border-gray-100 animate-fade-in">
        
        {/* โลโก้ และ หัวข้อ */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00249c] rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg shadow-blue-900/30">
            <i className="fas fa-truck-fast"></i>
          </div>
          <h1 className="text-2xl font-black text-[#0a2540] uppercase tracking-wider">THANA GROUP</h1>
          <p className="text-gray-500 text-sm mt-1">Admin Management Portal</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-600 p-3 rounded-xl border border-red-100 flex items-center gap-2 text-sm font-bold">
            <i className="fas fa-circle-exclamation"></i> {error}
          </div>
        )}

        {/* ฟอร์มล็อกอิน */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-user"></i>
              </div>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-all"
                placeholder="กรอกชื่อผู้ใช้งาน..."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-lock"></i>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-1 focus:ring-[#00249c] transition-all"
                placeholder="กรอกรหัสผ่าน..."
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#0a2540] hover:bg-[#00249c] text-white font-bold py-3.5 rounded-xl transition-all flex justify-center items-center gap-2 mt-4 shadow-md"
          >
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-sign-in-alt"></i>}
            เข้าสู่ระบบ (Sign In)
          </button>
        </form>

      </div>
    </div>
  );
}