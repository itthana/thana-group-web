import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 1. ฟังก์ชัน GET: สำหรับดึงข้อมูลเอกสารมาแสดง
export async function GET() {
  try {
    const documents = await prisma.document.findMany({
      orderBy: { id: 'desc' }
    });
    return NextResponse.json(documents, { status: 200 });
  } catch (error: any) {
    console.error("GET Documents Error:", error);
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลเอกสารได้' }, { status: 500 });
  }
}

// 2. ฟังก์ชัน POST: สำหรับ "เพิ่ม" เอกสารใหม่ (แก้ Error 405 เวลาสร้างเอกสาร)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // บังคับข้าม Type ของ Vercel ด้วย as any เผื่อโครงสร้างข้อมูลไม่ตรงเป๊ะ
    const newDocument = await prisma.document.create({
      data: {
        ...body
      } as any
    });

    return NextResponse.json(newDocument, { status: 201 });
  } catch (error: any) {
    console.error("POST Document Error:", error);
    return NextResponse.json({ error: 'ไม่สามารถบันทึกเอกสารได้' }, { status: 500 });
  }
}
// 3. ฟังก์ชัน DELETE: สำหรับ "ลบ" เอกสาร
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ไม่พบ ID เอกสาร' }, { status: 400 });

    // 🌟 แก้ตรงนี้: เปลี่ยนจาก String(id) เป็น Number(id) เพื่อให้ตรงกับฐานข้อมูล
    await prisma.document.delete({
      where: { id: Number(id) } 
    });

    return NextResponse.json({ message: 'ลบสำเร็จ' }, { status: 200 });
  } catch (error: any) {
    console.error("DELETE Document Error:", error);
    return NextResponse.json({ error: 'ไม่สามารถลบเอกสารได้' }, { status: 500 });
  }
}