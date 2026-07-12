'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🌟 จุดสำคัญ: ตั้งชื่อ path ให้ตรงกับโฟลเดอร์จริงที่มีในระบบ
  const menuItems = [
    { name: 'แดชบอร์ด', path: '/admin/dashboard', icon: 'fas fa-chart-pie' },
    { name: 'จัดการพัสดุ', path: '/admin/parcels', icon: 'fas fa-box-open' }, // เปลี่ยนจาก packages
    { name: 'ใบเสนอราคา', path: '/admin/quotations', icon: 'fas fa-file-invoice-dollar' }, // เปลี่ยนจาก quotes
    { name: 'เอกสารดาวน์โหลด', path: '/admin/downloads', icon: 'fas fa-folder-open' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex font-prompt">
      {/* Sidebar (เมนูด้านซ้าย) */}
      <aside className="w-64 bg-[#0a192f] text-white flex flex-col shadow-2xl fixed h-full z-50">
        <div className="p-6 border-b border-gray-700 bg-[#071324]">
          <div className="flex items-center gap-3 justify-center mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-xl shadow-lg">
              <i className="fas fa-truck-fast"></i>
            </div>
            <h2 className="text-2xl font-black tracking-wider">
              THANA<span className="text-[#00e5ff]">ADMIN</span>
            </h2>
          </div>
          <p className="text-xs text-center text-gray-400">System Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-bold ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-[#00e5ff]'
                }`}
              >
                <i className={`${item.icon} w-5 text-center text-lg`}></i>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ปุ่มออกจากระบบ (ชี้ไปที่ API ทำลายบัตรผ่าน) */}
        <div className="p-4 border-t border-gray-700">
          <a 
            href="/api/logout" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition-all font-bold group"
          >
            <i className="fas fa-sign-out-alt group-hover:translate-x-1 transition-transform"></i>
            ออกจากระบบ
          </a>
        </div>
      </aside>

      {/* Main Content (พื้นที่แสดงข้อมูลด้านขวา) */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}