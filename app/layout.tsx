import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Import Widget เข้ามา
import type { Metadata } from 'next'
import './globals.css'
// 1. เพิ่มบรรทัดนี้ด้านบน
import TributeModal from '../components/layout/TributeModal' 

export const metadata: Metadata = {
  title: 'THANA GROUP',
  description: 'Global Multimodal Logistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        {/* 2. เพิ่มคอมโพเนนต์นี้ใต้แท็ก <body> */}
        <TributeModal />
        
        {children}
      </body>
    </html>
  )
}
import TopSalesWidget from '../components/layout/TopSalesWidget'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THANA GROUP | บริการโลจิสติกส์ขนส่งด่วน ไทย-ลาว',
  description: 'ผู้เชี่ยวชาญด้านโลจิสติกส์และการขนส่งข้ามแดน...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* วาง Widget ไว้ด้านล่างสุดของ Body */}
        <TopSalesWidget />
        
      </body>
    </html>
  );
}