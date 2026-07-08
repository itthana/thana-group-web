import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // 1. รับข้อมูลที่ส่งมาจากหน้าฟอร์ม
    const body = await request.json();
    const { trackingNumber, status, location, description } = body;

    if (!trackingNumber || !status || !location) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 });
    }

    // 2. เช็คว่าพัสดุรหัสนี้เคยมีในระบบไหม? 
    // ถ้าไม่มีให้สร้างใหม่ (Create) ถ้ามีอยู่แล้วให้ใช้ของเดิม (Update)
    const parcel = await prisma.parcel.upsert({
      where: { trackingNumber: trackingNumber },
      update: {}, // ไม่ต้องอัปเดตข้อมูลพัสดุหลัก
      create: { trackingNumber: trackingNumber },
    });

    // 3. บันทึก "ประวัติสถานะใหม่" ลงไปในพัสดุชิ้นนี้
    const history = await prisma.trackingHistory.create({
      data: {
        status: status,
        location: location,
        description: description,
        parcelId: parcel.id, // ผูกกับ ID ของพัสดุ
      },
    });

    // 4. ส่งสัญญาณกลับไปบอกหน้าเว็บว่า "สำเร็จ!"
    return NextResponse.json({ success: true, data: history }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'ระบบขัดข้อง ไม่สามารถบันทึกข้อมูลได้' }, { status: 500 });
  }
}