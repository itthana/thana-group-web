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
    const parcel = await prisma.tracking.upsert({
      where: { trackingNumber: trackingNumber },
      update: {}, // ไม่ต้องอัปเดตข้อมูลพัสดุหลัก
    create: { 
          trackingNumber: trackingNumber,
          origin: "รอระบุ",
          destination: "รอระบุ",
          sender: "รอระบุ",
          receiver: "รอระบุ",
          estimatedDelivery: "รอระบุ",
          serviceType: "Standard",
          pieces: 1,
          weight: "0"
        },
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
// ==========================================
// 🔍 ระบบค้นหาพัสดุสำหรับลูกค้า (GET)
// ==========================================
export async function GET(request: Request) {
  try {
    // 1. ดึงหมายเลขพัสดุจาก URL (เช่น ?trackingNumber=THN-12345)
    const { searchParams } = new URL(request.url);
    const trackingNumber = searchParams.get('trackingNumber');

    if (!trackingNumber) {
      return NextResponse.json({ error: 'กรุณาระบุหมายเลขพัสดุ' }, { status: 400 });
    }

    // 2. ค้นหาข้อมูลพัสดุจากฐานข้อมูล พร้อมประวัติการเดินทาง
    const parcel = await prisma.tracking.findUnique({
      where: { trackingNumber: trackingNumber.toUpperCase() },
      include: {
        // ดึงประวัติมาด้วย และจัดเรียงจากเวลา "ล่าสุด" ขึ้นก่อน (desc)
        trackingHistories: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    // 3. ถ้าหาพัสดุชิ้นนี้ไม่เจอในระบบ
    if (!parcel) {
      return NextResponse.json({ error: 'ไม่พบข้อมูลพัสดุรหัสนี้ในระบบ กรุณาตรวจสอบอีกครั้ง' }, { status: 404 });
    }

    // 4. ถ้าเจอ ส่งข้อมูลกลับไปให้หน้าเว็บแสดงผลบนไทม์ไลน์
    return NextResponse.json({ 
      success: true, 
      data: {
        trackingNumber: parcel.trackingNumber,
        histories: parcel.trackingHistories
      }
    }, { status: 200 });

  } catch (error) {
    console.error('API GET Error:', error);
    return NextResponse.json({ error: 'ระบบขัดข้อง ไม่สามารถดึงข้อมูลได้ในขณะนี้' }, { status: 500 });
  }
}