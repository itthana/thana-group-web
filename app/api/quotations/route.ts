import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer'; // นำเข้า Module สำหรับส่งอีเมล

export async function POST(req: Request) {
  try {
    // 1. รับข้อมูลจากหน้าเว็บ
    const body = await req.json();
    const { name, company, service } = body;
    const qNumber = `Q-${Math.floor(Date.now() / 1000)}`;

    // 2. บันทึกข้อมูลลง Database
    const newQuotation = await prisma.quotation.create({
      data: {
        qNumber: qNumber,
        name: name,
        company: company || "-",
        service: service,
        status: "รอติดต่อกลับ",
      }
    });

    // ==========================================
    // 📧 3. ระบบส่งอีเมลแจ้งเตือน (Nodemailer)
    // ==========================================
    
    // 3.1 ตั้งค่าบัญชีอีเมลที่จะใช้ส่ง (ดึงจากไฟล์ .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3.2 ออกแบบหน้าตาเนื้อหาอีเมล (รองรับ HTML)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ส่งเข้าเมลแอดมินเองเพื่อแจ้งเตือน
      subject: `🚨 แจ้งเตือน: มีลูกค้าระบุความต้องการใหม่ (${qNumber})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            มีคำขอใบเสนอราคาใหม่เข้าสู่ระบบ
          </h2>
          <p><strong>รหัสอ้างอิง:</strong> <span style="color: #b91c1c;">${qNumber}</span></p>
          <p><strong>ชื่อลูกค้า:</strong> ${name}</p>
          <p><strong>ข้อมูลติดต่อ:</strong> ${company || "-"}</p>
          <p><strong>ความต้องการ:</strong> ${service}</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #e5e7eb;" />
          <p style="text-align: center; margin-top: 20px;">
            <a href="https://thana-group-web.vercel.app/admin" style="background-color: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              เข้าสู่ระบบหลังบ้านเพื่อตรวจสอบ
            </a>
          </p>
        </div>
      `
    };

    // 3.3 สั่งส่งอีเมล
    await transporter.sendMail(mailOptions);

    // 4. ส่งสัญญาณความสำเร็จกลับไปที่หน้าเว็บ
    return NextResponse.json({ success: true, data: newQuotation }, { status: 201 });
    
  } catch (error) {
    console.error("Database or Email Error:", error);
    return NextResponse.json({ success: false, error: "เกิดข้อผิดพลาดในการบันทึกหรือส่งอีเมล" }, { status: 500 });
  }
}