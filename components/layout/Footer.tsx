import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 border-t border-gray-800 font-prompt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* =========================================
              ส่วนที่ 1: โลโก้ และ โซเชียลมีเดีย (ซ้ายสุด)
          ========================================= */}
          <div className="lg:pr-4">
            {/* กล่องโลโก้พื้นหลังสีขาวแบบในรูป */}
            <div className="bg-white p-3 rounded-2xl inline-block mb-6 shadow-lg">
              <Image 
                src="/LOGO-TLT.png" 
                alt="THANA GROUP Logo" 
                width={180} 
                height={60} 
                className="object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              ผู้นำด้านบริการโลจิสติกส์และขนส่งสินค้าระหว่างประเทศ (ไทย-ลาว-อาเซียน) แบบครบวงจร ด้วยประสบการณ์กว่า 20 ปี พร้อมขับเคลื่อนธุรกิจคุณสู่ความสำเร็จ
            </p>
            
            {/* ปุ่ม Social Media แบบกดได้จริง */}
            <div className="flex gap-4">
              {/* เปลี่ยนลิงก์ Facebook ตรง href="..." */}
              <a href="https://www.facebook.com/ThanaLogistics?locale=th_TH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm text-lg hover:-translate-y-1">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* เปลี่ยนลิงก์ LINE ตรง href="..." */}
              <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#00c300] hover:text-white transition-all duration-300 shadow-sm text-xl hover:-translate-y-1">
                <i className="fab fa-line"></i>
              </a>
              {/* เปลี่ยนลิงก์ YouTube ตรง href="..." */}
              <a href="https://www.youtube.com/@Thana6688" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-sm text-lg hover:-translate-y-1">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* =========================================
              ส่วนที่ 2: เมนูลัด (องค์กรของเรา)
          ========================================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">องค์กรของเรา</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> ประวัติบริษัท</Link></li>
              <li><Link href="/branches" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> สาขาของเรา</Link></li>
              <li><Link href="/executives" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> ทีมผู้บริหาร</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> บรรยากาศการทำงาน</Link></li>
            </ul>
          </div>

          {/* =========================================
              ส่วนที่ 3: เมนูลัด (บริการของเรา)
          ========================================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">บริการโลจิสติกส์</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> ขนส่งทางบกข้ามแดน</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> พิธีการศุลกากร</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-angle-right text-[#ff0000]"></i> คลังสินค้าและการกระจาย</Link></li>
              <li><Link href="/green-logistics" className="text-[#00c300] hover:text-white hover:pl-2 transition-all text-sm flex items-center gap-2"><i className="fas fa-leaf"></i> รักษ์โลก (Green Logistics)</Link></li>
            </ul>
          </div>

          {/* =========================================
              ส่วนที่ 4: ช่องทางการติดต่อ (คลิกได้จริง)
          ========================================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">ติดต่อด่วน</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#ff0000] shrink-0 mt-0.5"><i className="fas fa-map-marker-alt"></i></div>
                <span className="text-gray-400 leading-relaxed">186 ม.5 ต.หนองกินเพล อ.วารินชำราบ<br />จ.อุบลราชธานี 34190</span>
              </li>
              <li>
                <a href="tel:0930237931" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#ff0000] shrink-0 group-hover:bg-[#ff0000] group-hover:text-white transition-colors"><i className="fas fa-phone"></i></div>
                  093-023-7931
                </a>
              </li>
              <li>
                <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#00c300] shrink-0 group-hover:bg-[#00c300] group-hover:text-white transition-colors"><i className="fab fa-line text-lg"></i></div>
                  @thanagroup
                </a>
              </li>
              <li>
                <a href="mailto:contact@thanagroup.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#00e5ff] shrink-0 group-hover:bg-[#00e5ff] group-hover:text-[#0f172a] transition-colors"><i className="fas fa-envelope"></i></div>
                  contact@thanagroup.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================
            ส่วนล่างสุด: ลิขสิทธิ์
        ========================================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} THANA LOGISTICS CO., LTD. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}