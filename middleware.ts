import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // เช็คว่ากำลังพยายามเข้าโฟลเดอร์ /admin หรือไม่
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // ตรวจหาบัตรผ่าน (Cookie) ที่ชื่อว่า admin_token
    const token = request.cookies.get('admin_token');

    // ถ้าไม่มีบัตรผ่าน ให้เด้งกลับไปหน้า Login ทันที
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

// กำหนดให้ยามทำงานเฉพาะโฟลเดอร์ admin
export const config = {
  matcher: '/admin/:path*',
};