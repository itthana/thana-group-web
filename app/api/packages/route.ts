import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 1. ดึงข้อมูลพัสดุทั้งหมด (GET)
export async function GET() {
  try {
    const packages = await prisma.tracking.findMany({
      orderBy: { id: 'desc' } // เรียงรายการใหม่ล่าสุดขึ้นก่อน
    });
    return NextResponse.json(packages);
  } catch (error: any) {
    console.error("GET Packages Error:", error);
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลพัสดุได้' }, { status: 500 });
  }
}

// 2. สร้างรายการพัสดุใหม่ (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { trackingNumber, currentStatus, origin, destination, sender, receiver, estimatedDelivery, serviceType } = body;

    if (!trackingNumber || !receiver) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' }, { status: 400 });
    }

    const newPackage = await prisma.tracking.create({
      data: {
        trackingNumber,
        currentStatus: currentStatus || "รอรับเข้าระบบ",
        origin: origin || "กรุงเทพฯ",
        destination: destination || "เวียงจันทน์",
        sender: sender || "-",
        receiver,
        estimatedDelivery: estimatedDelivery || "-",
        serviceType: serviceType || "Standard",
      }
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error: any) {
    console.error("POST Package Error:", error);
    return NextResponse.json({ error: 'ไม่สามารถสร้างรายการได้ (เลขพัสดุอาจซ้ำ)' }, { status: 500 });
  }
}

// 3. ลบรายการพัสดุ (DELETE)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ไม่พบ ID พัสดุ' }, { status: 400 });

    await prisma.tracking.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'ลบสำเร็จ' });
  } catch (error: any) {
    console.error("DELETE Package Error:", error);
    return NextResponse.json({ error: 'ลบรายการไม่สำเร็จ' }, { status: 500 });
  }
}