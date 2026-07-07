'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AppController() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // ป้องกัน Error ในฝั่ง Server (บังคับให้ทำงานเฉพาะบน Browser/มือถือ)
    if (typeof window === 'undefined') return;

    // ==========================================
    // 1. ดักจับการกดปุ่ม Refresh (Reload)
    // ==========================================
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navTiming = navigationEntries[0] as PerformanceNavigationTiming;
      
      // ถ้าพบว่าผู้ใช้กด Refresh และไม่ได้อยู่หน้าแรก (/)
      if (navTiming.type === 'reload' && pathname !== '/') {
        // บังคับเด้งกลับหน้าแรกทันที
        window.location.replace('/'); 
        return;
      }
    }

    // ==========================================
    // 2. ดักจับ URL หน้าไว้อาลัย / หน้าเก่า (Mobile Fallback)
    // ==========================================
    // ใส่ URL หน้าไว้อาลัยเก่าของคุณลงใน Array นี้ได้เลยครับ 
    // เช่น ถ้าหน้าเก่าชื่อ mourning.html หรือ /intro ก็ใส่เพิ่มเข้าไปได้
    const blockedPaths = ['/mourning', '/splash', '/intro', '/index.html'];
    const currentPath = pathname.toLowerCase();
    
    // ถ้าพยายามเข้าหน้าในลิสต์ที่บล็อกไว้ ให้เตะกลับหน้าแรกเสมอ
    if (blockedPaths.some(path => currentPath.includes(path))) {
      window.location.replace('/');
    }

  }, [pathname, router]);

  // Component นี้ทำงานอยู่เบื้องหลัง จึงไม่ต้องแสดงผล UI ใดๆ
  return null; 
}