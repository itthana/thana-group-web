import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css'; // 🌟 บรรทัดพระเอกที่ดึงสี Tailwind กลับมา!

// ==========================================
// 1. ตั้งค่าฟอนต์ Prompt (รองรับภาษาไทยสวยงาม)
// ==========================================
const prompt = Prompt({ 
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-prompt', // สร้างตัวแปรไว้เรียกใช้ใน Tailwind
  display: 'swap',
});

// ==========================================
// 2. ตั้งค่า SEO (ข้อมูลที่โชว์บน Google และ Tab เบราว์เซอร์)
// ==========================================
export const metadata: Metadata = {
  title: 'THANA GROUP | Logistics Solutions',
  description: 'บริการขนส่งด่วน ไทย-ลาว พร้อมระบบติดตามสถานะแบบ Real-time โดยทีมงานมืออาชีพ',
};

// ==========================================
// 3. โครงสร้างหลักของเว็บไซต์ (Root Layout)
// ==========================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${prompt.variable}`}>
      <head>
        {/* ดึง Font Awesome มาใช้สำหรับไอคอนต่างๆ ทั่วเว็บ */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      {/* ใส่คลาส font-prompt เข้าไปที่ body เพื่อให้ครอบคลุมทั้งโปรเจกต์ */}
      <body className="font-prompt bg-slate-50 text-gray-900 antialiased selection:bg-[#00249c] selection:text-white">
        
        {/* เนื้อหาของแต่ละหน้าจะมาแสดงตรงนี้ */}
        {children}
        import './globals.css';
// 🌟 1. นำเข้า Analytics ที่บรรทัดบนสุด
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        {children}
        
        {/* 🌟 2. วาง Analytics ไว้ตรงนี้ครับ (ก่อนปิด body) */}
        <Analytics />
      </body>
    </html>
  );
}
        
      </body>
    </html>
  );
}