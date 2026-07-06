'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function CareersPage() {
  // ข้อมูลตำแหน่งงานที่เปิดรับ (Clean Code Pattern)
  const jobOpenings = [
    {
      id: 1,
      title: 'พนักงานขับรถบรรทุกข้ามแดน (เทรลเลอร์)',
      department: 'Operations',
      location: 'เส้นทาง ไทย-ลาว',
      type: 'Full-time',
      isUrgent: true,
    },
    {
      id: 2,
      title: 'เจ้าหน้าที่ประสานงานนำเข้า-ส่งออก (CS)',
      department: 'Customer Service',
      location: 'สำนักงานใหญ่ (กรุงเทพฯ)',
      type: 'Full-time',
      isUrgent: false,
    },
    {
      id: 3,
      title: 'ผู้จัดการศูนย์กระจายสินค้า',
      department: 'Warehouse Management',
      location: 'ศูนย์กระจายสินค้า (ปทุมธานี)',
      type: 'Full-time',
      isUrgent: true,
    },
    {
      id: 4,
      title: 'Sales Executive (Logistics)',
      department: 'Sales & Marketing',
      location: 'สำนักงานใหญ่ (กรุงเทพฯ)',
      type: 'Full-time',
      isUrgent: false,
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-42 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ส่วนหัว (Hero Section) */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h4 className="text-thana-red font-black tracking-widest uppercase mb-2 text-sm">Join Our Team</h4>
            <h1 className="text-3xl md:text-5xl font-black text-thana-blue mb-6">ร่วมงานกับเรา</h1>
            <div className="h-1 w-24 bg-thana-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              ก้าวไปข้างหน้าพร้อมกับ THANA GROUP เรากำลังมองหาผู้ร่วมอุดมการณ์
              ที่พร้อมจะเติบโตและสร้างมาตรฐานใหม่ให้กับวงการโลจิสติกส์
            </p>
          </div>

          {/* สวัสดิการ (Benefits) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 mb-16">
            <h2 className="text-2xl font-black text-center text-gray-900 mb-10">สวัสดิการและผลตอบแทน</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-thana-blue mb-4">
                  <i className="fas fa-heartbeat text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800">ประกันสุขภาพ & อุบัติเหตุ</h4>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-thana-blue mb-4">
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800">โบนัสตามผลประกอบการ</h4>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-thana-blue mb-4">
                  <i className="fas fa-graduation-cap text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800">กองทุนสำรองเลี้ยงชีพ</h4>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-thana-blue mb-4">
                  <i className="fas fa-plane-departure text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800">ท่องเที่ยวประจำปี</h4>
              </div>
            </div>
          </div>

          {/* ตำแหน่งที่เปิดรับ (Job Listings) */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <i className="fas fa-briefcase text-thana-red"></i> ตำแหน่งที่เปิดรับสมัคร
            </h2>
            
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-thana-blue transition-colors">{job.title}</h3>
                      {job.isUrgent && (
                        <span className="bg-red-100 text-thana-red text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider animate-pulse">Urgent</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                      <span className="flex items-center gap-1.5"><i className="fas fa-building"></i> {job.department}</span>
                      <span className="flex items-center gap-1.5"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span className="flex items-center gap-1.5"><i className="fas fa-clock"></i> {job.type}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="bg-gray-100 hover:bg-thana-blue text-gray-700 hover:text-white font-bold py-3 px-8 rounded-lg transition-all text-center md:w-auto w-full shrink-0">
                    สมัครงาน
                  </Link>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}