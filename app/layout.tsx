import type { Metadata } from 'next';
import './globals.css';

// Import ตัว AppController ที่เราสร้างไว้ (เช็ค Path ให้ตรง)
import AppController from '../components/layout/AppController';

export const metadata: Metadata = {
  title: 'THANA GROUP | ขนส่งด่วน ไทย-ลาว',
  description: 'ผู้นำด้านบริการโลจิสติกส์และขนส่งสินค้าระหว่างประเทศ (ไทย-ลาว-อาเซียน) แบบครบวงจร ด้วยประสบการณ์กว่า 20 ปี',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* ดึงไอคอน FontAwesome มาใช้งานทั่วทั้งเว็บ */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        {/* ดึงฟอนต์ภาษาไทย Prompt จาก Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      
      {/* ตั้งค่าให้ทั้งเว็บใช้ฟอนต์ Prompt เป็นหลัก */}
      <body className="font-prompt bg-slate-50 text-gray-900 antialiased">
        
        {/* ฝัง AppController ไว้บรรทัดแรกของ Body เพื่อดักจับการ Refresh ทันที */}
        <AppController />
        
        {/* เนื้อหาของแต่ละหน้าจะมาแทรกตรงนี้ */}
        {children}
        
      </body>
    </html>
  );
}