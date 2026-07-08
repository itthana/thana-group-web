import { NextResponse } from 'next/server';

// ============================================================================
// 🗄️ Fake Database (ฐานข้อมูลจำลองชั่วคราว)
// ============================================================================
let trackingDB = [
  {
    trackingNumber: 'THN-12345',
    currentStatus: 'IN_TRANSIT',
    origin: 'ชลบุรี, ประเทศไทย (TH)',
    destination: 'เวียงจันทน์, สปป.ลาว (LA)',
    sender: 'บริษัท ตัวอย่างส่งออก จำกัด',
    receiver: 'Vientiane Trading Co., Ltd.',
    estimatedDelivery: '10 ก.ค. 2026',
    serviceType: 'Cross-Border Express (FTL)',
    pieces: 120,
    weight: '2,500 kg',
    events: [
      { id: '2', date: '07 ก.ค. 2026', time: '14:30', status: 'IN_TRANSIT', location: 'นครราชสีมา (TH)', description: 'รถบรรทุกกำลังเดินทางมุ่งหน้าสู่ด่านพรมแดน', isCompleted: true },
      { id: '1', date: '07 ก.ค. 2026', time: '09:00', status: 'PENDING', location: 'ระบบออนไลน์', description: 'ได้รับคำสั่งซื้อและยืนยันการจองรถขนส่ง (Booking Confirmed)', isCompleted: true },
    ]
  }
];

// 📤 1. GET Method: ดึงข้อมูล (สำหรับหน้าลูกค้าและหน้าแอดมินตอนค้นหา)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'Missing tracking ID' }, { status: 400 });

  const data = trackingDB.find(item => item.trackingNumber.toUpperCase() === id.toUpperCase());
  
  if (data) {
    return NextResponse.json(data, { status: 200 });
  } else {
    return NextResponse.json({ error: 'ไม่พบข้อมูลการจัดส่ง' }, { status: 404 });
  }
}

// 📥 2. POST Method: อัปเดตข้อมูล (สำหรับหน้าแอดมินกดบันทึกสถานะใหม่)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { trackingNumber, status, location, description } = body;

    const index = trackingDB.findIndex(item => item.trackingNumber.toUpperCase() === trackingNumber.toUpperCase());

    if (index === -1) {
      return NextResponse.json({ error: 'ไม่พบหมายเลข Tracking นี้ในระบบ' }, { status: 404 });
    }

    // สร้างวันที่และเวลาปัจจุบัน (อิงตามเวลาไทย)
    const now = new Date();
    const dateStr = now.toLocaleDateString('th-TH', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    // สร้าง Log Event ใหม่
    const newEvent = {
      id: Date.now().toString(),
      date: dateStr,
      time: timeStr,
      status: status,
      location: location,
      description: description,
      isCompleted: true
    };

    // อัปเดตข้อมูลในระบบ
    trackingDB[index].currentStatus = status;
    trackingDB[index].events.unshift(newEvent); // เอาสถานะใหม่ไว้บนสุด

    return NextResponse.json({ success: true, message: 'อัปเดตสถานะเรียบร้อยแล้ว', data: trackingDB[index] }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการประมวลผล' }, { status: 500 });
  }
}