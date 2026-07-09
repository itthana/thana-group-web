import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    // 1. รับข้อมูล Username และ Password ที่ส่งมาจากหน้าเว็บ
    const body = await request.json();
    const { username, password } = body;

    // 2. ตรวจสอบรหัสผ่าน (ตอนนี้ผมตั้งค่าพื้นฐานไว้ให้ทดสอบก่อนนะครับ)
    // 💡 พี่สามารถเปลี่ยน 'admin' และ '123456' เป็นรหัสที่พี่ต้องการได้เลย
    if (username === 'admin' && password === '123456') {
      
      // 3. ถ้าสำเร็จ: สร้าง Cookie เป็น "บัตรคิว" เพื่อจำว่าแอดมินคนนี้ล็อคอินแล้ว
      cookies().set('admin_session', 'authenticated', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 // ให้อยู่ในระบบได้ 1 วัน (24 ชั่วโมง)
      });

      // ส่งสัญญาณกลับไปบอกหน้าเว็บว่าสำเร็จ!
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. ถ้าพิมพ์รหัสผิด
    return NextResponse.json({ error: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'ระบบเชื่อมข้อมูลขัดข้อง' }, { status: 500 });
  }
}