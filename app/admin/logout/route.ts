import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 🌟 ตั้งค่า Username / Password ที่ต้องการตรงนี้ได้เลยครับ
    if (username === 'admin' && password === 'thana2026') {
      
      // ออกบัตรผ่าน (Cookie) ให้อยู่ในระบบได้ 1 วัน (24 ชั่วโมง)
      cookies().set({
        name: 'admin_token',
        value: 'logged-in-true',
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Username หรือ Password ไม่ถูกต้อง' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการเชื่อมต่อ' }, { status: 500 });
  }
}