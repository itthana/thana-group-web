'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t-4 border-thana-red relative overflow-hidden">
      {/* ลายน้ำพื้นหลัง */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <i className="fas fa-globe-asia text-[400px]"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="bg-white inline-block p-3 rounded-xl shadow-md">
              {/* ถ้ามี Logo สีขาวสำหรับพื้นหลังเข้ม สามารถเปลี่ยน src ตรงนี้ได้ครับ */}
              <Image 
                src="/logo.png" 
                alt="THANA GROUP Logo" 
                width={180} 
                height={45} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ผู้นำด้านบริการโลจิสติกส์และขนส่งสินค้าระหว่างประเทศ (ไทย-ลาว-อาเซียน) แบบครบวงจร ด้วยประสบการณ์กว่า 20 ปี 
              พร้อมขับเคลื่อนธุรกิจคุณสู่ความสำเร็จ
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00c300] hover:text-white transition-all duration-300">
                <i className="fab fa-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
              <i className="fas fa-link text-thana-red text-sm"></i> ลิงก์ด่วน (Quick Links)
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-thana-red transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-chevron-right text-[10px] text-gray-600 group-hover:text-thana-red group-hover:translate-x-1 transition-all"></i> รู้จัก THANA GROUP
                </Link>
              </li>
              <li>
                <Link href="/group-companies" className="text-gray-400 hover:text-thana-red transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-chevron-right text-[10px] text-gray-600 group-hover:text-thana-red group-hover:translate-x-1 transition-all"></i> บริษัทในเครือ
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-thana-red transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-chevron-right text-[10px] text-gray-600 group-hover:text-thana-red group-hover:translate-x-1 transition-all"></i> บริการโลจิสติกส์
                </Link>
              </li>
              <li>
                <Link href="/executives" className="text-gray-400 hover:text-thana-red transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-chevron-right text-[10px] text-gray-600 group-hover:text-thana-red group-hover:translate-x-1 transition-all"></i> ทีมผู้บริหารระดับสูง
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-thana-red transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-chevron-right text-[10px] text-gray-600 group-hover:text-thana-red group-hover:translate-x-1 transition-all"></i> ร่วมงานกับเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Feedback (ไฮไลท์ปุ่มร้องเรียน/เสนอแนะ) */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
              <i className="fas fa-hands-helping text-thana-red text-sm"></i> ศูนย์ช่วยเหลือลูกค้า
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/tracking" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-search-location text-gray-500 group-hover:text-thana-blue"></i> ติดตามสถานะสินค้า (Track & Trace)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-question-circle text-gray-500 group-hover:text-thana-blue"></i> คำถามที่พบบ่อย (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/customs-documents" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                  <i className="fas fa-file-alt text-gray-500 group-hover:text-thana-blue"></i> ดาวน์โหลดแบบฟอร์มศุลกากร
                </Link>
              </li>
              
              <li className="pt-4 mt-2 border-t border-gray-800">
                {/* ปุ่ม Voice of Customer (แจ้งปัญหา/เสนอแนะ) */}
                <Link 
                  href="/contact?topic=feedback" 
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-thana-red text-white text-sm py-2 px-4 rounded-lg transition-all duration-300 w-full group"
                >
                  <div className="w-6 h-6 rounded-full bg-thana-red/20 text-thana-red flex items-center justify-center shrink-0 group-hover:bg-thana-red group-hover:text-white transition-colors">
                    <i className="fas fa-comment-dots text-xs"></i>
                  </div>
                  <span className="font-bold">แจ้งปัญหา / เสนอแนะบริการ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-thana-red text-sm"></i> ติดต่อสำนักงานใหญ่
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fas fa-building mt-1 text-gray-500 shrink-0"></i>
                <span className="leading-relaxed">123/45 ถนนโลจิสติกส์ แขวงขนส่ง เขตคลังสินค้า กรุงเทพมหานคร 10900</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-gray-500 shrink-0"></i>
                <a href="mailto:info@thanagroup.com" className="hover:text-thana-red transition-colors">info@thanagroup.com</a>
              </li>
              
              {/* กล่องเบอร์ Hotline */}
              <li className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 mt-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-thana-red shrink-0">
                    <i className="fas fa-phone-alt animate-pulse"></i>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Hotline 24/7</span>
                    <a href="tel:0812345678" className="text-xl font-black text-white hover:text-thana-red transition-colors">081-234-5678</a>
                  </div>
                </div>
                {/* ป้ายกำกับ เปิดบริการทุกวัน */}
                <div className="mt-2 text-xs font-bold text-green-400 flex items-center gap-1.5 ml-11">
                  <i className="fas fa-check-circle"></i> เปิดบริการทุกวัน ไม่มีวันหยุด
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} THANA GROUP LOGISTICS. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว (Privacy Policy)</Link>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <Link href="/terms" className="hover:text-white transition-colors">ข้อกำหนดและเงื่อนไข (Terms of Service)</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}