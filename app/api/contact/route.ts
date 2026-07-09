import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // ตรวจสอบว่ามีข้อมูลส่งมาครบไหม
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json({ error: 'ข้อมูลไม่ครบถ้วน' }, { status: 400 });
    }

    // 💡 ตรงนี้คือจุดที่เราจะเอาโค้ดส่งอีเมล (เช่น Nodemailer, Resend) มาใส่ในอนาคตครับ
    console.log('ได้รับข้อความติดต่อ:', body);

    // จำลองการส่งสำเร็จ
    return NextResponse.json({ success: true, message: 'ส่งข้อความสำเร็จ' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'ระบบขัดข้อง' }, { status: 500 });
  }
}