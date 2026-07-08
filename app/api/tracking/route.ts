import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { trackingNumber, status, location, description } = body;

    // 1. หาว่ามีพัสดุนี้ในระบบหรือยัง? ถ้ายังไม่มีให้สร้างโครงสร้างเริ่มต้นใหม่เลย
    let tracking = await prisma.tracking.findUnique({
      where: { trackingNumber }
    });

    if (!tracking) {
      tracking = await prisma.tracking.create({
        data: {
          trackingNumber,
          currentStatus: status,
          origin: 'ระบุต้นทาง', 
          destination: 'ระบุปลายทาง',
          sender: 'THANA GROUP',
          receiver: 'Customer',
          estimatedDelivery: 'รอประเมินเวลาจัดส่ง',
          serviceType: 'Standard Logistics',
          pieces: 1,
          weight: 'N/A'
        }
      });
    } else {
      // ถ้ามีอยู่แล้ว ให้อัปเดตสถานะล่าสุดของพัสดุนั้น
      await prisma.tracking.update({
        where: { trackingNumber },
        data: { currentStatus: status }
      });
    }

    // 2. บันทึกประวัติการเดินทาง (Timeline Event)
    const date = new Date().toLocaleDateString('th-TH');
    const time = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    const newEvent = await prisma.trackingEvent.create({
      data: {
        trackingId: tracking.id,
        date: date,
        time: time,
        status: status,
        location: location,
        description: description || '',
      }
    });

    return NextResponse.json({ success: true, event: newEvent });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: 'Failed to update tracking data' }, { status: 500 });
  }
}