import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET() {
  try {
    // 🌟 ดึงข้อมูลเอกสารทั้งหมด เรียงจากใหม่ไปเก่า
    const documents = await prisma.document.findMany({
      orderBy: { id: 'desc' }
    });
    
    return NextResponse.json(documents, { status: 200 });
  } catch (error: any) {
    console.error("GET Documents Error:", error);
    // ส่ง status 500 กลับไปแบบปลอดภัย ไม่ให้แอปพัง
    return NextResponse.json(
      { error: 'ไม่สามารถดึงข้อมูลเอกสารได้ (ตรวจสอบการเชื่อมต่อฐานข้อมูล)' }, 
      { status: 500 }
    );
  }
}