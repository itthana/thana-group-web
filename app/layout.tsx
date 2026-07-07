import type { Metadata } from 'next';
import './globals.css';
import TributeModal from '../components/layout/TributeModal';

// ตั้งค่า SEO (มีได้แค่ชุดเดียวเท่านั้นครับ)
export const metadata: Metadata = {
  title: 'THANA GROUP | Global Multimodal Logistics',
  description: 'ผู้นำด้านบริการโลจิสติกส์และขนส่งสินค้าระหว่างประเทศ (ไทย-ลาว-อาเซียน) แบบครบวงจร ด้วยประสบการณ์กว่า 20 ปี พร้อมขับเคลื่อนธุรกิจคุณสู่ความสำเร็จ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* ไอคอน Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        {/* ฟอนต์ Prompt */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      
      <body className="font-prompt antialiased">
        {/* หน้าไว้อาลัย */}
        <TributeModal />
        
        {/* เนื้อหาหลักของเว็บไซต์ */}
        {children}
      </body>
    </html>
  );
}