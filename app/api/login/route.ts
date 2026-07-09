import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // 💡 พี่สามารถเปลี่ยนชื่อและรหัสผ่านตรงนี้ได้ตามใจชอบครับ
    if (username === 'admin' && password === '123456') {
      
      // ✅ แก้ไข: ใช้ await นำหน้า cookies() เพื่อรองรับ Next.js เวอร์ชันใหม่ๆ
      const cookieStore = await cookies(); 
      
      cookieStore.set('admin_session', 'authenticated', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        path: '/', // 🔥 สำคัญที่สุด! ต้องใส่ '/' เพื่อให้สิทธิ์เข้าถึงได้ทุกหน้าในเว็บ (รวมถึงหน้า /admin)
        maxAge: 60 * 60 * 24 // อยู่ในระบบได้ 24 ชั่วโมง
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ error: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 });

  } catch (error: any) {
    // 🖥️ โค้ดส่วนนี้จะพ่น Error ตัวจริงออกไปที่หน้าจอ Terminal ของพี่ เพื่อให้เช็คสาเหตุได้ง่ายๆ
    console.error('🔥 DETECTED LOGIN API ERROR:', error.message || error);
    
    return NextResponse.json({ 
      error: `ระบบหลังบ้านขัดข้อง: ${error.message || 'Unknown Error'}` 
    }, { status: 500 });
  }
}