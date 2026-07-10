import { redirect } from 'next/navigation';

export default function AdminPage() {
  // เมื่อเข้าลิงก์ /admin ให้เด้งไปหน้า /admin/parcels อัตโนมัติ
  redirect('/admin/parcels');
}