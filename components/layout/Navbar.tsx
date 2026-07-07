'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // เอฟเฟกต์เปลี่ยนสี Navbar เมื่อเลื่อนหน้าจอ
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // รายการเมนูทั้งหมด (รวม Gallery แล้ว)
  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'บริการของเรา', href: '/services' },
    { name: 'บรรยากาศการทำงาน', href: '/gallery' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* โลโก้บริษัท */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
              T
            </div>
            <span className={`font-black text-xl tracking-wider transition-colors ${isScrolled ? 'text-[#0a2540]' : 'text-white drop-shadow-md'}`}>
              THANA <span className="text-red-600 font-medium">GROUP</span>
            </span>
          </Link>

          {/* เมนูสำหรับหน้าจอคอมพิวเตอร์ (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* ปุ่ม Login / Portal สำหรับลูกค้า (ถ้ามี) */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-widest transition-all shadow-md hover:shadow-red-500/30 hover:-translate-y-0.5">
              <i className="fa-solid fa-user-lock mr-2"></i> LOGIN
            </button>
          </div>

          {/* ปุ่มแฮมเบอร์เกอร์ สำหรับจอมือถือ (Mobile Toggle) */}
          <button 
            className="md:hidden flex items-center text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} ${isScrolled ? 'text-gray-800' : 'text-white'}`}></i>
          </button>

        </div>
      </div>

      {/* เมนูแบบ Dropdown สำหรับจอมือถือ */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-800 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-2 pb-2">
            <button className="w-full bg-red-600 text-white px-4 py-3 rounded-xl font-bold tracking-widest flex justify-center items-center gap-2">
              <i className="fa-solid fa-user-lock"></i> LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}