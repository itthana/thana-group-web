export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black pt-16 lg:pt-0">
      {/* พื้นหลัง */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Port View" 
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B308A]/90 via-[#0B308A]/60 to-transparent"></div>
      </div>
      
      {/* เนื้อหาข้อความ */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h3 className="text-thana-red font-black tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Connecting Business
            </h3>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] mb-2 tracking-tight drop-shadow-lg">
              DELIVERING
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] mb-6 tracking-tight text-white drop-shadow-lg">
              SUCCESS
            </h1>
            <p className="text-blue-50 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-medium drop-shadow-md">
              ผู้ให้บริการ <span className="text-white font-bold border-b-2 border-thana-red pb-1">ขนส่งไทย-ลาวแบบครบวงจร</span> นำเข้า-ส่งออก ชิปปิ้ง และบริหารคลังสินค้า ด้วยมาตรฐานสากล
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-[#2a5cff] hover:bg-blue-700 text-white font-bold py-3 px-8 transition-colors square-box shadow-lg btn-shine">
                ติดต่อเรา
              </a>
              <a href="#services" className="border border-white/30 hover:bg-white hover:text-thana-blue text-white font-bold py-3 px-8 transition-colors square-box backdrop-blur-sm">
                ดูบริการทั้งหมด
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}