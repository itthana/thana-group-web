import { redirect } from 'next/navigation';

export default function AdminIndexPage() {
  // ถ้ามีคนหลงเข้ามาที่ /admin เฉยๆ ให้เด้งไปหน้าจัดการพัสดุเลย
  // (ซึ่งถ้ายังไม่ล็อกอิน Middleware ที่เราทำไว้จะเตะไปหน้า /login เองครับ)
  redirect('/admin/packages');
}