import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. รับข้อมูลจากฟอร์มหน้าบ้าน
    const body = await request.json();
    const { name, phone, email, department, message } = body;

    // 2. ตรวจสอบข้อมูลเบื้องต้น
    if (!name || !phone || !department || !message) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' }, { status: 400 });
    }

    // 3. ตั้งค่าระบบส่งอีเมล (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // ใส่อีเมลของคุณในไฟล์ .env
        pass: process.env.EMAIL_PASS, // ใส่ App Password ในไฟล์ .env
      },
    });

    // 4. จัดรูปแบบอีเมลที่จะส่งเข้า Inbox ของคุณ
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ส่งเข้าอีเมลตัวเอง (หรืออีเมลแผนก)
      replyTo: email || process.env.EMAIL_USER, // ให้กด Reply กลับหาลูกค้าได้เลยถ้าเขากรอกอีเมลมา
      subject: `[Website Contact] ติดต่อแผนก: ${department} จากคุณ ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #00249c; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">ข้อความใหม่จากหน้าเว็บไซต์</h2>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <p><strong>ชื่อ-นามสกุล:</strong> ${name}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>อีเมล:</strong> ${email || 'ไม่ได้ระบุ'}</p>
            <p><strong>แผนกที่ต้องการติดต่อ:</strong> ${department}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>ข้อความ/รายละเอียด:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 5. สั่งส่งอีเมล
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'ส่งข้อความสำเร็จ' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการส่งข้อความ' }, { status: 500 });
  }
}