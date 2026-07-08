'use client';

import { signOut } from 'next-auth/react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-prompt p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg text-center">
        <h1 className="text-3xl font-black text-[#00249c] mb-4">
          🎉 ยินดีด้วย! เข้าสู่ระบบแอดมินสำเร็จแล้ว
        </h1>
        <p className="text-gray-600 mb-8">หน้า Dashboard สำหรับอัปเดตสถานะพัสดุ</p>
        
        <button 
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}