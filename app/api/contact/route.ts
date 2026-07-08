import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, department, message } = body;

    // ตรวจสอบข้อมูลเบื้องต้น
    if (!name || !phone || !department || !message) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' }, { status: 400 });
    }

    // ตั้งค่าบัญชีอีเมลที่จะใช้ส่ง (ดึงจากไฟล์ .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // รูปแบบอีเมลที่จะส่งเข้ากล่องจดหมายของแอดมิน
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 👈 ส่งเข้าอีเมลตัวเอง (หรือเปลี่ยนเป็นอีเมลแผนกได้)
      replyTo: email || undefined, // 👈 ถ้าลูกค้าใส่อีเมลมา เรากด Reply ตอบกลับได้เลย
      subject: `🚨 [ติดต่อหน้าเว็บ] แผนก: ${department} - จากคุณ ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #00249c;">ข้อความติดต่อจากลูกค้า</h2>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>ชื่อ-นามสกุล:</strong> ${name}</p>
          <p><strong>เบอร์โทรศัพท์:</strong> ${phone}</p>
          <p><strong>อีเมล:</strong> ${email || 'ไม่ได้ระบุ'}</p>
          <p><strong>ติดต่อแผนก:</strong> ${department}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #555;"><strong>ข้อความ:</strong></p>
            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // สั่งส่งอีเมล
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'ส่งข้อความสำเร็จ' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง' }, { status: 500 });
  }
}