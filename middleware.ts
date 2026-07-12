import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. เช็คว่าผู้ใช้กำลังพยายามเข้าหน้า /admin หรือเปล่า?
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // 2. ข้อยกเว้น: ถ้ากำลังเข้าหน้า /admin/login ปล่อยให้เข้าได้เลย (ไม่งั้นจะวนลูป)
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // 3. ตรวจเช็ค "บัตรผ่าน" (Cookie ที่ชื่อ admin_session)
    const session = request.cookies.get('admin_session');

    // 4. ถ้าไม่มีบัตรผ่าน (ยังไม่ได้ล็อคอิน) ให้เตะกลับไปหน้า Login ทันที!
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // ถ้ามีบัตรผ่าน หรือเข้าหน้าเว็บธรรมดา ก็ปล่อยผ่านปกติครับ
  return NextResponse.next();
}

// 🎯 ตั้งค่าให้ยามทำงานเฉพาะเส้นทางที่มีคำว่า /admin เท่านั้น (หน้าเว็บลูกค้าจะได้ไม่ช้า)
export const config = {
  matcher: ['/admin/:path*'],
};