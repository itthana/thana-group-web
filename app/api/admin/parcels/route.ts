import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // เช็ค path ให้ตรงกับของพี่นะครับ

export async function GET() {
  try {
    // ดึงข้อมูลพัสดุทั้งหมด พร้อมสถานะล่าสุด 1 รายการ
    const parcels = await prisma.tracking.findMany({
      include: {
        trackingHistories: {
          orderBy: { createdAt: 'desc' },
          take: 1, // ดึงแค่ประวัติล่าสุดมาโชว์ในตาราง
        },
      },
    });

    return NextResponse.json({ success: true, data: parcels }, { status: 200 });
  } catch (error) {
    console.error('Fetch parcels error:', error);
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลพัสดุได้' }, { status: 500 });
  }
}