export default function Stats() {
  // แยกข้อมูลออกมาเป็น Array เพื่อให้ดูแลรักษาง่าย (Clean Code & Best Practice)
  const stats = [
    { id: 1, number: "20+", label: "ปีแห่งความเชี่ยวชาญ", icon: "fa-award" },
    { id: 2, number: "10,000+", label: "เที่ยวขนส่งต่อปี", icon: "fa-truck-fast" },
    { id: 3, number: "99.8%", label: "ส่งมอบสินค้าตรงเวลา", icon: "fa-clock" },
    { id: 4, number: "500+", label: "พันธมิตรธุรกิจ", icon: "fa-handshake" }
  ];

  return (
    <section className="py-20 bg-thana-blue text-white relative overflow-hidden">
      {/* เพิ่ม Pattern จุดไข่ปลาบางๆ เป็นพื้นหลังให้ดูมีมิติและทันสมัย */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="p-4 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
                <i className={`fas ${stat.icon} text-2xl text-thana-red`}></i>
              </div>
              <h4 className="text-4xl md:text-5xl font-black mb-3 drop-shadow-md">
                {stat.number}
              </h4>
              <p className="text-blue-100 font-medium text-sm md:text-base tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}