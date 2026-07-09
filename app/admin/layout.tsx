import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* 🟦 แถบเมนูด้านซ้ายมือ (Sidebar) */}
      <aside className="w-64 bg-[#0a2540] text-white flex flex-col">
        <div className="p-6 font-bold text-xl tracking-wider text-blue-400">
          THANA ADMIN
        </div>
        
        <nav className="flex-col flex px-4 space-y-2 mt-4">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            <span>ภาพรวมระบบ</span>
          </Link>
          
          <Link href="/admin/parcels" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            <span>จัดการพัสดุ</span>
          </Link>

          {/* 🌟 นี่คือปุ่มใหม่ของเราครับ */}
          <Link href="/admin/quotations" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            <span>จัดการใบเสนอราคา</span>
          </Link>
        </nav>
      </aside>

      {/* ⬜️ พื้นที่แสดงเนื้อหาตรงกลาง (Content Area) */}
      <main className="flex-1">
        {/* แถบหัวด้านบน (Header) */}
        <header className="bg-white shadow-sm px-8 py-4 font-bold text-xl text-gray-800">
          Dashboard
        </header>
        
        {/* เนื้อหาที่จะสลับไปมาตามเมนูที่กด จะมาโผล่ตรง {children} นี้ครับ */}
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}