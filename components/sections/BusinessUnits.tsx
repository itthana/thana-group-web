export default function BusinessUnits() {
  // สร้าง Array เก็บข้อมูลบริการ เพื่อให้ง่ายต่อการแก้ไขและขยายในอนาคต (Clean Code)
  const services = [
    {
      id: 1,
      icon: "fa-truck-moving",
      title: "Cross-Border Transport",
      desc: "บริการขนส่งสินค้าข้ามแดน ไทย-ลาว ด้วยกองรถบรรทุกที่ได้มาตรฐาน พร้อมระบบติดตามตลอด 24 ชม.",
      color: "text-thana-blue",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      icon: "fa-file-signature",
      title: "Customs Clearance",
      desc: "บริการตัวแทนออกของ (ชิปปิ้ง) นำเข้า-ส่งออก ถูกต้องตามกฎหมาย รวดเร็ว ดำเนินการโดยผู้เชี่ยวชาญ",
      color: "text-thana-red",
      bg: "bg-red-50"
    },
    {
      id: 3,
      icon: "fa-warehouse",
      title: "Warehouse Management",
      desc: "บริการคลังสินค้า บริหารจัดการ รับฝาก และกระจายสินค้าอย่างปลอดภัย ด้วยระบบ WMS ที่ทันสมัย",
      color: "text-gray-700",
      bg: "bg-gray-200"
    }
  ];

  return (
    <section id="business-units" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">
            Our Expertise
          </h3>
          <h2 className="text-3xl md:text-4xl font-black text-thana-blue mb-4">
            กลุ่มธุรกิจและบริการของเรา
          </h2>
          <div className="h-1 w-20 bg-thana-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            มุ่งมั่นให้บริการโลจิสติกส์แบบครบวงจร ตอบสนองทุกความต้องการของธุรกิจคุณด้วยมาตรฐานระดับสากล
          </p>
        </div>

        {/* ระบบ Grid สำหรับแสดงกล่องบริการ (รองรับ Mobile Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className={`w-16 h-16 ${service.bg} rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <i className={`fas ${service.icon} text-3xl ${service.color}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-thana-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-bold text-thana-blue group-hover:text-thana-red transition-colors">
                ดูรายละเอียดเพิ่มเติม <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-2"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}