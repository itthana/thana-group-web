import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 1. ดึงข้อมูลพัสดุทั้งหมด (GET)
export async function GET() {
  try {
    const packages = await prisma.tracking.findMany({
      orderBy: { id: 'desc' }
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

    if (!body.trackingNumber || !body.receiver) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' }, { status: 400 });
    }

    // 🌟 แก้ปัญหา Type Error โดยใช้ String() ครอบข้อมูลเพื่อยืนยันกับ Vercel ว่าเป็นข้อความ
    const newPackage = await prisma.tracking.create({
      data: {
        trackingNumber: String(body.trackingNumber),
        currentStatus: body.currentStatus ? String(body.currentStatus) : "รอรับเข้าระบบ",
        origin: body.origin ? String(body.origin) : "กรุงเทพฯ",
        destination: body.destination ? String(body.destination) : "เวียงจันทน์",
        sender: body.sender ? String(body.sender) : "-",
        receiver: String(body.receiver),
        estimatedDelivery: body.estimatedDelivery ? String(body.estimatedDelivery) : "-",
        serviceType: body.serviceType ? String(body.serviceType) : "Standard",
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
      where: { id: String(id) }
    });

    return NextResponse.json({ message: 'ลบสำเร็จ' });
  } catch (error: any) {
    console.error("DELETE Package Error:", error);
    return NextResponse.json({ error: 'ลบรายการไม่สำเร็จ' }, { status: 500 });
  }
}
// บังคับให้ Git รู้จักการอัปเดต
