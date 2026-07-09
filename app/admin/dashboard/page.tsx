'use client';

import { useState } from 'react';
import Link from 'next/link';

// ==========================================
// 📊 ข้อมูลจำลอง (Mock Data) สำหรับแสดงผล
// ==========================================
const mockStats = {
  visitors: '12,543',
  newRequests: 24,
  activeNews: 8,
};

const mockQuotations = [
  { id: 'Q-001', name: 'คุณสมชาย ใจดี', company: 'บจก. เอบีซี เทรดดิ้ง', service: 'ขนส่งเหมาคัน (FTL)', date: '09 ก.ค. 2026', status: 'รอติดต่อกลับ' },
  { id: 'Q-002', name: 'คุณวิภาวี รักดี', company: 'บมจ. เอ็กซ์วายแซด', service: 'พิธีการศุลกากร', date: '08 ก.ค. 2026', status: 'ติดต่อแล้ว' },
  { id: 'Q-003', name: 'Mr. John Doe', company: 'Global Tech', service: 'ขนส่งข้ามแดน ไทย-ลาว', date: '08 ก.ค. 2026', status: 'รอติดต่อกลับ' },
];

const mockNews = [
  { id: 1, title: 'THANA GROUP คว้ารางวัลผู้นำโลจิสติกส์ 2026', date: '01 ก.ค. 2026', status: 'เผยแพร่' },
  { id: 2, title: 'เปิดตัวกองทัพรถบรรทุก EV ล็อตใหม่ 50 คัน', date: '25 มิ.ย. 2026', status: 'เผยแพร่' },
  { id: 3, title: 'อัปเดตสถานการณ์ด่านหนองคาย ประจำเดือนมิถุนายน', date: '15 มิ.ย. 2026', status: 'ซ่อน' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 font-prompt flex">
      
      {/* ==========================================
          1. SIDEBAR (เมนูด้านซ้าย)
      ========================================== */}
      <aside className="w-64 bg-[#0a2540] text-white hidden md:flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#00249c] to-blue-500 rounded-lg flex items-center justify-center text-xl shadow-md">
            <i className="fas fa-truck-fast"></i>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-wide leading-tight">THANA<span className="text-[#00e5ff]">ADMIN</span></h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Management System</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-chart-pie w-5"></i> ภาพรวม (Overview)
          </button>
          <button onClick={() => setActiveTab('quotations')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'quotations' ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-file-invoice-dollar w-5"></i> ใบเสนอราคา
            <span className="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{mockStats.newRequests}</span>
          </button>
          <button onClick={() => setActiveTab('news')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'news' ? 'bg-[#e62e2d] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'}`}>
            <i className="fas fa-newspaper w-5"></i> ข่าวสาร & กิจกรรม
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <i className="fas fa-arrow-right-from-bracket w-5"></i> กลับสู่หน้าเว็บหลัก
          </Link>
        </div>
      </aside>

      {/* ==========================================
          2. MAIN CONTENT (พื้นที่แสดงผลหลัก)
      ========================================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white h-20 border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <h2 className="text-xl font-black text-[#0a2540]">
            {activeTab === 'overview' && 'ระบบหลังบ้าน (Dashboard)'}
            {activeTab === 'quotations' && 'จัดการคำขอใบเสนอราคา (Quotations)'}
            {activeTab === 'news' && 'จัดการข่าวสารองค์กร (News Management)'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center text-[#00249c]">
              <i className="fas fa-bell"></i>
            </div>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-[#0a2540]">ผู้ดูแลระบบ</p>
                <p className="text-[10px] text-gray-500 font-medium">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto p-8">
          
          {/* 🟢 TAB 1: ภาพรวมสถิติ (OVERVIEW) */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in-up">
              
              {/* การ์ดสถิติ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 text-[#00249c] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-users"></i></div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">คนเข้าเว็บ (เดือนนี้)</p>
                    <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.visitors}</h3>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-16 h-16 bg-red-50 text-[#e62e2d] rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-file-signature"></i></div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">คำขอใบเสนอราคาใหม่</p>
                    <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.newRequests}</h3>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-3xl"><i className="fas fa-newspaper"></i></div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">ข่าวสารที่ออนไลน์</p>
                    <h3 className="text-3xl font-black text-[#0a2540]">{mockStats.activeNews}</h3>
                  </div>
                </div>
              </div>

              {/* กราฟจำลอง (พื้นที่ว่างไว้สำหรับใส่ Chart.js ในอนาคต) */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] flex flex-col items-center justify-center text-gray-400">
                <i className="fas fa-chart-line text-6xl mb-4 text-gray-200"></i>
                <p className="font-bold">พื้นที่สำหรับแสดงกราฟสถิติคนเข้าเว็บไซต์ (Google Analytics)</p>
                <p className="text-sm">รอการเชื่อมต่อฐานข้อมูล</p>
              </div>
            </div>
          )}

          {/* 🟢 TAB 2: ใบเสนอราคา (QUOTATIONS) */}
          {activeTab === 'quotations' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-lg font-black text-[#0a2540]">รายชื่อผู้ติดต่อล่าสุด</h3>
                <div className="relative">
                  <input type="text" placeholder="ค้นหาชื่อ, รหัส..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00249c]" />
                  <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-gray-500 text-sm border-b border-gray-200">
                      <th className="p-4 font-bold">รหัส</th>
                      <th className="p-4 font-bold">วันที่</th>
                      <th className="p-4 font-bold">ชื่อลูกค้า / บริษัท</th>
                      <th className="p-4 font-bold">บริการที่สนใจ</th>
                      <th className="p-4 font-bold">สถานะ</th>
                      <th className="p-4 font-bold text-center">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockQuotations.map((q) => (
                      <tr key={q.id} className="border-b border-gray-100 hover:bg-slate-50 transition-colors text-sm">
                        <td className="p-4 font-bold text-[#00249c]">{q.id}</td>
                        <td className="p-4 text-gray-500">{q.date}</td>
                        <td className="p-4">
                          <p className="font-bold text-[#0a2540]">{q.name}</p>
                          <p className="text-xs text-gray-500">{q.company}</p>
                        </td>
                        <td className="p-4 font-medium">{q.service}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${q.status === 'รอติดต่อกลับ' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                            {q.status}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button className="text-[#00249c] hover:text-[#e62e2d] transition-colors"><i className="fas fa-eye"></i> ดูข้อมูล</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 🟢 TAB 3: ข่าวสาร (NEWS & ACTIVITIES) */}
          {activeTab === 'news' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-lg font-black text-[#0a2540]">จัดการข่าวสารองค์กร</h3>
                <button className="bg-[#00249c] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md flex items-center gap-2">
                  <i className="fas fa-plus"></i> เพิ่มข่าวใหม่
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-gray-500 text-sm border-b border-gray-200">
                      <th className="p-4 font-bold w-16 text-center">ID</th>
                      <th className="p-4 font-bold">หัวข้อข่าวสาร</th>
                      <th className="p-4 font-bold w-32">วันที่เผยแพร่</th>
                      <th className="p-4 font-bold w-32">สถานะ</th>
                      <th className="p-4 font-bold w-32 text-center">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockNews.map((news) => (
                      <tr key={news.id} className="border-b border-gray-100 hover:bg-slate-50 transition-colors text-sm">
                        <td className="p-4 font-bold text-gray-400 text-center">{news.id}</td>
                        <td className="p-4 font-bold text-[#0a2540]">{news.title}</td>
                        <td className="p-4 text-gray-500">{news.date}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${news.status === 'เผยแพร่' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                            {news.status}
                          </span>
                        </td>
                        <td className="p-4 text-center space-x-3">
                          <button className="text-amber-500 hover:text-amber-700 transition-colors" title="แก้ไข"><i className="fas fa-pen-to-square"></i></button>
                          <button className="text-red-500 hover:text-red-700 transition-colors" title="ลบ"><i className="fas fa-trash-can"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}