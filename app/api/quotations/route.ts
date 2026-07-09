import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // เรียกใช้ท่อเชื่อมต่อที่เราเพิ่งสร้าง

export async function POST(req: Request) {
  try {
    // 1. รับข้อมูลที่ลูกค้ากรอกมาจากหน้าเว็บ
    const body = await req.json();
    const { name, company, service } = body;

    // 2. สร้างรหัสใบเสนอราคาอัตโนมัติ (เช่น Q-173849382)
    const qNumber = `Q-${Math.floor(Date.now() / 1000)}`;

    // 3. สั่ง Prisma ให้บันทึกข้อมูลลงฐานข้อมูล Neon
    const newQuotation = await prisma.quotation.create({
      data: {
        qNumber: qNumber,
        name: name,
        company: company || "-", // ถ้าไม่ใส่ชื่อบริษัทมา ให้ใส่ -
        service: service,
        status: "รอติดต่อกลับ", // สถานะเริ่มต้น
      }
    });

    // 4. ส่งสัญญาณกลับไปบอกหน้าเว็บว่า "บันทึกสำเร็จ!"
    return NextResponse.json({ success: true, data: newQuotation }, { status: 201 });
    
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" }, { status: 500 });
  }
}