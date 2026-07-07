import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'อัตราค่าบริการขนส่ง (Price List) | THANA GROUP',
  description: 'ตรวจสอบอัตราค่าบริการขนส่งสินค้าระหว่างประเทศและภายในประเทศ ของ THANA GROUP พร้อมโปรโมชั่นพิเศษ',
};

export default function PricelistPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 font-prompt pb-24">
        
        {/* =========================================
            1. HERO BANNER
        ========================================= */}
        <section 
          className="relative h-[350px] flex items-center justify-center bg-cover bg-center pt-16"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 to-[#00249c]/80"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase mb-4">
              Standard Rates
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide drop-shadow-md">
              อัตราค่าบริการขนส่ง
            </h1>
            <div className="h-1 w-20 bg-[#ff0000] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              โปร่งใส คุ้มค่า ทุกเส้นทางขนส่ง <br className="hidden md:block" />
              อัปเดตอัตราค่าบริการมาตรฐาน สำหรับเส้นทางไทย-ลาว และเส้นทางอื่นๆ ประจำปี 2569
            </p>
          </div>
        </section>

        {/* =========================================
            2. PRICELIST IMAGE SECTION
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
          {/* Card คลุมรูปภาพ */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-8 animate-slide-up">
            
            {/* Header ของ Card */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-100 pb-6">
              <div>
                <h2 className="text-2xl font-black text-[#00249c] flex items-center gap-3">
                  <i className="fas fa-file-invoice-dollar text-[#ff0000]"></i> 
                  ตารางราคาเส้นทางหลัก (ไทย - ลาว)
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  อัปเดตล่าสุด: 1 กรกฎาคม 2569 (ราคานี้ยังไม่รวม VAT และ FSC)
                </p>
              </div>
              
              {/* ปุ่มโหลด PDF หรือเซฟรูป */}
              <a 
                href="/pricelist-2026.pdf" // เปลี่ยนเป็น URL ไฟล์ PDF หรือรูปจริงของคุณ
                download
                className="shrink-0 bg-gray-50 hover:bg-[#00249c] text-[#00249c] hover:text-white border border-gray-200 hover:border-[#00249c] font-bold py-2.5 px-6 rounded-xl transition-colors text-sm flex items-center gap-2 shadow-sm"
              >
                <i className="fas fa-download"></i> ดาวน์โหลด PDF
              </a>
            </div>

            {/* พื้นที่สำหรับแปะรูปภาพ Price List */}
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200 group">
              
              {/* ข้อความบอกให้ผู้ใช้ซูมดูได้บนมือถือ */}
              <div className="md:hidden bg-blue-50 text-blue-700 text-xs text-center py-2 font-medium border-b border-blue-100">
                <i className="fas fa-search-plus mr-1"></i> แตะที่รูปเพื่อขยาย / เลื่อนดูรายละเอียด
              </div>

              {/* 
                 🖼️ ส่วนนี้คือจุดที่ใช้เปลี่ยนรูปภาพ 
                 ให้นำไฟล์รูปตารางราคา (เช่น pricelist-th-lao.jpg) ไปใส่ในโฟลเดอร์ public
                 แล้วเปลี่ยน src ด้านล่างนี้ได้เลยครับ 
              */}
              <div className="overflow-x-auto w-full">
                <img 
                  src="https://placehold.co/1200x1600/f8fafc/00249c?text=พื้นที่สำหรับใส่รูปภาพ+Price+List+\n(ขนาดแนะนำ+A4+หรือ+แนวตั้ง)" 
                  alt="ตารางราคาขนส่ง THANA GROUP" 
                  className="w-full h-auto min-w-[600px] object-cover mx-auto"
                />
              </div>
            </div>

            {/* ข้อกำหนดและเงื่อนไข (Terms & Conditions) */}
            <div className="mt-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-sm font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                <i className="fas fa-info-circle text-[#ff0000]"></i> หมายเหตุและเงื่อนไขการให้บริการ
              </h4>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>อัตราค่าบริการข้างต้น เป็นราคาประเมินเบื้องต้นสำหรับการขนส่งสินค้าทั่วไป (General Cargo)</li>
                <li>ราคายังไม่รวมภาษีมูลค่าเพิ่ม (VAT 7%) และค่าธรรมเนียมน้ำมันเชื้อเพลิง (Fuel Surcharge - FSC)</li>
                <li>สินค้าอันตราย (DG) สินค้าควบคุมอุณหภูมิ (Cold Chain) หรือสินค้าขนาดพิเศษ (Oversized) จะมีค่าใช้จ่ายเพิ่มเติม</li>
                <li>บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงอัตราค่าบริการโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
              </ul>
            </div>

          </div>
        </section>

        {/* =========================================
            3. CALL TO ACTION (ติดต่อเซลล์เพื่อขอราคาพิเศษ)
        ========================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-[#00249c] to-[#0a2540] rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff0000] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <i className="fas fa-handshake"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                ต้องการราคาพิเศษ สำหรับลูกค้าองค์กร?
              </h2>
              <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto">
                หากคุณมีปริมาณการขนส่งประจำ (Volume) หรืองานโปรเจกต์ขนาดใหญ่ 
                ทีมที่ปรึกษาด้านการขายของเรายินดีนำเสนอ <span className="text-[#00e5ff] font-bold">"ราคาพิเศษและเงื่อนไขที่ดีที่สุด"</span> สำหรับธุรกิจคุณโดยเฉพาะ
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/sales" className="bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <i className="fas fa-users"></i> ติดต่อทีมที่ปรึกษาการขาย
                </Link>
                <a href="https://line.me/ti/p/~@thanagroup" target="_blank" rel="noopener noreferrer" className="bg-[#00c300] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <i className="fab fa-line text-xl"></i> แชทผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}