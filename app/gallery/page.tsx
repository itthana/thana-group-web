import type { Metadata } from 'next';
import GalleryClient from '../../components/gallery/GalleryClient';

// กำหนด SEO สำหรับหน้านี้โดยเฉพาะ
export const metadata: Metadata = {
  title: 'Gallery | ภาพบรรยากาศการทำงาน THANA GROUP',
  description: 'ประมวลภาพการปฏิบัติงานจริงและโครงสร้างพื้นฐานของ THANA GROUP ผู้นำด้านโลจิสติกส์แบบครบวงจร',
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryClient />
    </main>
  );
}