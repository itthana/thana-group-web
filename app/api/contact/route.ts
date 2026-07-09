import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;
    
    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'ข้อมูลไม่ครบถ้วน' }, { status: 400 });
    }

    // 1. ตั้งค่าบุรุษไปรษณีย์ (Transporter) เชื่อมกับ Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // ดึงจากไฟล์ .env
        pass: process.env.EMAIL_PASS, // ดึงจากไฟล์ .env
      },
    });

    // 2. จัดรูปแบบหน้าตาอีเมลที่จะส่งเข้ามือถือแอดมิน
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ส่งเข้าเมลแอดมินเองเลย (หรือจะใส่เมลอื่นที่ต้องการรับแจ้งเตือนก็ได้)
      replyTo: email || undefined, // เวลากดตอบกลับ จะเด้งไปหาเมลลูกค้า
      subject: `🚨 การติดต่อใหม่จากเว็บไซต์: ${subject || 'ไม่มีหัวข้อ'} [${name}]`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #0a2540; padding: 20px; text-align: center;">
            <h2 style="color: #00e5ff; margin: 0;">THANA GROUP CONTACT</h2>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <h3 style="color: #333;">รายละเอียดการติดต่อ:</h3>
            <ul style="list-style: none; padding: 0; line-height: 1.8; color: #475569;">
              <li><strong>ชื่อลูกค้า:</strong> ${name}</li>
              <li><strong>เบอร์โทรศัพท์:</strong> <a href="tel:${phone}" style="color: #2563eb;">${phone}</a></li>
              <li><strong>อีเมลลูกค้า:</strong> ${email || 'ไม่ได้ระบุ'}</li>
              <li><strong>หัวข้อ:</strong> ${subject || 'ไม่ได้ระบุ'}</li>
            </ul>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #e2e8f0;">
              <h4 style="margin-top: 0; color: #333;">ข้อความ:</h4>
              <p style="white-space: pre-wrap; color: #475569; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 10px; text-align: center; font-size: 12px; color: #94a3b8;">
            ระบบแจ้งเตือนอัตโนมัติจากหน้าเว็บไซต์ THANA GROUP
          </div>
        </div>
      `
    };

    // 3. สั่งส่งอีเมล!
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'ส่งข้อความสำเร็จ' }, { status: 200 });

  } catch (error: any) {
    console.error('Email Sending Error:', error.message || error);
    return NextResponse.json({ error: 'ระบบส่งอีเมลขัดข้อง' }, { status: 500 });
  }
}