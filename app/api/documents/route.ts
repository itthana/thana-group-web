import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

// ป้องกัน Prisma สร้าง Connection ซ้ำซ้อนตอนเปิดเว็บแบบ Dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 1. ดึงข้อมูล (GET)
export async function GET() {
  try {
    const documents = await prisma.document.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(documents);
  } catch (error: any) {
    console.error("🔥 GET Error:", error);
    return NextResponse.json({ error: error.message || 'ไม่สามารถดึงข้อมูลได้' }, { status: 500 });
  }
}

// 2. อัปโหลดและบันทึก (POST)
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const type = formData.get('type') as string;

    if (!file || !title) return NextResponse.json({ error: 'ข้อมูลไม่ครบ' }, { status: 400 });

    // สร้างโฟลเดอร์ (ถ้ายังไม่มี)
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await mkdir(uploadDir, { recursive: true });

    // บันทึกไฟล์ลงเครื่อง
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`; 
    const filepath = path.join(uploadDir, fileName);
    await writeFile(filepath, buffer);

    const sizeInKb = file.size / 1024;
    const sizeStr = sizeInKb > 1024 ? (sizeInKb / 1024).toFixed(1) + ' MB' : sizeInKb.toFixed(0) + ' KB';

    let icon = 'fa-file-pdf';
    let color = 'text-red-500';
    if (type === 'Excel') { icon = 'fa-file-excel'; color = 'text-green-600'; }
    if (type === 'Word') { icon = 'fa-file-word'; color = 'text-blue-600'; }

    // บันทึกลงฐานข้อมูล
    const newDoc = await prisma.document.create({
      data: { title, category, size: sizeStr, type, icon, color, fileUrl: `/uploads/${fileName}` }
    });

    return NextResponse.json(newDoc, { status: 201 });
  } catch (error: any) {
    // 🌟 จุดสำคัญ: พิมพ์ Error ของจริงออกไปที่ Terminal
    console.error("🔥 POST Error:", error);
    return NextResponse.json({ error: error.message || 'อัปโหลดล้มเหลว' }, { status: 500 });
  }
}

// 3. ลบเอกสาร (DELETE)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ไม่พบ ID เอกสาร' }, { status: 400 });

    const doc = await prisma.document.findUnique({
      where: { id: parseInt(id) }
    });

    if (doc && doc.fileUrl) {
      const filepath = path.join(process.cwd(), 'public', doc.fileUrl);
      try {
        await unlink(filepath);
      } catch (err) {
        console.log("ไฟล์ไม่มีอยู่แล้ว ลบใน DB ต่อ");
      }
    }

    await prisma.document.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'ลบสำเร็จ' });
  } catch (error: any) {
    console.error("🔥 DELETE Error:", error);
    return NextResponse.json({ error: error.message || 'ลบไม่สำเร็จ' }, { status: 500 });
  }
}