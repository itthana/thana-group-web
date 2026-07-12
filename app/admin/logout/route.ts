import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 1. ลบตราประทับ (Cookie) ที่ชื่อ admin_session ทิ้ง
  cookies().delete('admin_session');
  
  // 2. เด้งผู้ใช้กลับไปที่หน้า Login
  return NextResponse.redirect(new URL('/admin/login', request.url));
}