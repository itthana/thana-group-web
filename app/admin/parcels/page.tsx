'use client';

import { useState } from 'react';
import Barcode from 'react-barcode';

const mockParcels = [
  { id: 1, tracking: 'THN2026THLA001', sender: 'คุณสมชาย (081-234-5678)', receiver: 'คุณบัวคำ (020-9876-5432)', origin: 'กรุงเทพฯ', destination: 'เวียงจันทน์', status: 'กำลังขนส่ง', date: '11/07/2026 09:30' },
  { id: 2, tracking: 'THN2026THLA002', sender: 'บจก. เอบีซี (02-111-2222)', receiver: 'ร้านค้าดีดี (020-1122-3344)', origin: 'อุดรธานี', destination: 'ปากเซ', status: 'รอรับเข้าระบบ', date: '11/07/2026 10:00' },
];

const statusHierarchy = ['รอรับเข้าระบบ', 'รับพัสดุแล้ว', 'กำลังขนส่ง', 'ถึงสาขาปลายทาง', 'กำลังนำจ่าย', 'จัดส่งสำเร็จ'];

export default function ParcelsPage() {
  const [parcels, setParcels] = useState(mockParcels);
  
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState<any>(null);
  const [newStatus, setNewStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newParcel, setNewParcel] = useState({ tracking: '', sender: '', receiver: '', origin: '', destination: '' });

  const [printParcel, setPrintParcel] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'จัดส่งสำเร็จ': return 'bg-green-100 text-green-700 border-green-200';
      case 'กำลังขนส่ง': case 'กำลังนำจ่าย': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'รอรับเข้าระบบ': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'มีปัญหาในการจัดส่ง': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleOpenUpdateModal = (parcel: any) => {
    setSelectedParcel(parcel);
    setNewStatus(parcel.status);
    setErrorMsg('');
    setIsUpdateModalOpen(true);
  };

  const handleUpdateStatus = () => {
    if (newStatus === selectedParcel.status) {
      setErrorMsg(`พัสดุนี้มีสถานะเป็น "${newStatus}" อยู่แล้วครับ`);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const updatedParcels = parcels.map(p => p.id === selectedParcel.id ? { ...p, status: newStatus, date: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }) } : p);
      setParcels(updatedParcels);
      setIsLoading(false);
      setIsUpdateModalOpen(false);
    }, 800);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const newEntry = { id: parcels.length + 1, ...newParcel, status: 'รอรับเข้าระบบ', date: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }) };
      setParcels([newEntry, ...parcels]); 
      setIsLoading(false);
      setIsCreateModalOpen(false);
      setNewParcel({ tracking: '', sender: '', receiver: '', origin: '', destination: '' });
    }, 800);
  };

  return (
    // 🌟 เปลี่ยนมาใช้ <> คลุมแทน div เพื่อไม่ให้ print:hidden กระทบใบปะหน้า
    <>
      {/* 🌟 โซนตารางและปุ่มต่างๆ (สั่งให้ซ่อนเฉพาะก้อนนี้ตอนปริ้นท์) */}
      <div className="space-y-6 animate-fade-in-up pb-10 print:hidden">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-2xl font-black text-[#0a2540]">จัดการพัสดุทั้งหมด</h2>
            <p className="text-sm text-gray-500 mt-1">อัปเดตสถานะและติดตามพัสดุในระบบ</p>
          </div>
          <button onClick={() => setIsCreateModalOpen(true)} className="bg-[#00249c] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 text-sm">
            <i className="fas fa-plus"></i>สร้างรายการใหม่
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-600">
                  <th className="p-4 font-bold">เลขพัสดุ (Tracking)</th>
                  <th className="p-4 font-bold">เส้นทาง</th>
                  <th className="p-4 font-bold">ผู้รับ</th>
                  <th className="p-4 font-bold">สถานะล่าสุด</th>
                  <th className="p-4 font-bold text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {parcels.map((parcel) => (
                  <tr key={parcel.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4"><span className="font-bold text-[#0a2540] bg-gray-100 px-3 py-1 rounded-md tracking-wider">{parcel.tracking}</span></td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="w-20 truncate">{parcel.origin}</span><i className="fas fa-arrow-right text-gray-300 text-xs"></i><span className="font-bold text-[#00249c] w-20 truncate">{parcel.destination}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{parcel.receiver}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold border flex items-center w-max gap-1.5 ${getStatusColor(parcel.status)}`}>
                        {parcel.status === 'จัดส่งสำเร็จ' && <i className="fas fa-check-circle"></i>}{parcel.status}
                      </span>
                    </td>
                    <td className="p-4 flex items-center justify-center gap-2">
                      <button onClick={() => setPrintParcel(parcel)} className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white w-8 h-8 rounded-lg transition-colors flex items-center justify-center" title="ปริ้นท์ใบปะหน้า"><i className="fas fa-print"></i></button>
                      <button onClick={() => handleOpenUpdateModal(parcel)} className="bg-blue-50 hover:bg-[#00249c] text-blue-600 hover:text-white w-8 h-8 rounded-lg transition-colors flex items-center justify-center" title="อัปเดตสถานะ"><i className="fas fa-pen-to-square"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ==========================================
          🌟 โซนใบปะหน้า (แสดงเต็มตาตอนสั่งปริ้นท์)
      ========================================== */}
      {printParcel && (
        <div className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 print:static print:bg-transparent print:p-0 print:block">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up print:shadow-none print:max-w-none print:w-full print:border-0 print:rounded-none">
            
            <div className="p-4 bg-gray-100 flex justify-between items-center print:hidden border-b border-gray-200">
              <h3 className="font-bold text-gray-700">ตัวอย่างใบปะหน้าพัสดุ</h3>
              <div className="flex gap-2">
                <button onClick={() => setPrintParcel(null)} className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-200 font-bold text-sm">ปิด</button>
                <button onClick={() => window.print()} className="px-4 py-2 bg-[#00249c] text-white rounded-lg hover:bg-blue-800 font-bold text-sm flex items-center gap-2">
                  <i className="fas fa-print"></i> สั่งปริ้นท์เลย
                </button>
              </div>
            </div>

            <div className="p-8 print:p-0 bg-white text-black print:text-black">
              <div className="border-4 border-black p-6 print:p-4">
                
                <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-black text-white font-black text-3xl px-3 py-1 tracking-tighter border-2 border-black flex items-center justify-center h-14">
                      TLT
                    </div>
                    <div>
                      <h1 className="text-xl font-black tracking-tighter leading-none">THANA <span className="text-gray-500">LOGISTICS</span></h1>
                      <p className="text-[11px] font-bold mt-1">บริการขนส่งสินค้า ไทย-ลาว</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-bold text-gray-500 mb-1">เส้นทาง (ROUTE)</p>
                    <div className="text-2xl font-black flex items-center gap-2 whitespace-nowrap">
                      <span>{printParcel.origin}</span><i className="fas fa-caret-right"></i><span>{printParcel.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b-4 border-black pb-4 mb-4">
                  <div className="border-r-2 border-black pr-4">
                    <p className="text-sm font-black mb-2 bg-black text-white inline-block px-2 py-1">ผู้ส่ง (SENDER)</p>
                    <p className="font-bold text-lg leading-tight break-words">{printParcel.sender}</p>
                    <p className="text-sm mt-2 font-medium">สาขาต้นทาง: {printParcel.origin}</p>
                  </div>
                  <div className="pl-2">
                    <p className="text-sm font-black mb-2 bg-black text-white inline-block px-2 py-1">ผู้รับ (RECEIVER)</p>
                    <p className="font-bold text-xl leading-tight break-words">{printParcel.receiver}</p>
                    <p className="text-sm mt-2 font-medium">ปลายทาง: {printParcel.destination}</p>
                  </div>
                </div>

                <div className="text-center pt-2 flex flex-col items-center">
                  <p className="text-sm font-bold mb-2 tracking-widest">TRACKING NUMBER</p>
                  <div className="w-full flex justify-center scale-110 mb-2 print:scale-100">
                    <Barcode value={printParcel.tracking} width={2.5} height={60} displayValue={false} background="transparent" lineColor="#000000" />
                  </div>
                  <p className="text-4xl font-black tracking-widest">{printParcel.tracking}</p>
                  <p className="text-xs font-bold mt-4">วันที่รับเข้าระบบ: {printParcel.date}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- Modal สร้าง/อัปเดต (ถูกซ่อนตอนปริ้นท์ด้วยเงื่อนไข print:hidden ด้านใน) --- */}
      {isUpdateModalOpen && selectedParcel && (
        <div className="fixed inset-0 z-[999] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
            {/* ... โค้ด Modal Update ปกติ ... */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#0a2540] text-white">
              <h3 className="font-black text-lg">อัปเดตสถานะพัสดุ</h3>
              <button onClick={() => setIsUpdateModalOpen(false)} className="text-gray-400 hover:text-white transition-colors"><i className="fas fa-times text-xl"></i></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs text-blue-500 font-bold mb-1">หมายเลขพัสดุ</p>
                <p className="font-black text-[#00249c] tracking-widest text-xl">{selectedParcel.tracking}</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">เลือกสถานะใหม่</label>
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#00249c] focus:ring-2 focus:ring-blue-100 transition-all text-sm font-medium">
                  {statusHierarchy.map(opt => {
                    const currentIdx = statusHierarchy.indexOf(selectedParcel.status);
                    const optIdx = statusHierarchy.indexOf(opt);
                    const isBackward = optIdx < currentIdx && selectedParcel.status !== 'มีปัญหาในการจัดส่ง';
                    return <option key={opt} value={opt} disabled={isBackward}>{opt} {isBackward ? '(ผ่านไปแล้ว)' : ''}</option>;
                  })}
                  <option value="มีปัญหาในการจัดส่ง" className="text-red-500 font-bold">มีปัญหาในการจัดส่ง</option>
                </select>
              </div>
            </div>
            <div className="p-4 bg-gray-50 flex gap-3">
              <button onClick={() => setIsUpdateModalOpen(false)} className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm">ยกเลิก</button>
              <button onClick={handleUpdateStatus} disabled={isLoading || newStatus === selectedParcel.status} className="flex-1 py-3 bg-[#00249c] text-white rounded-xl font-bold hover:bg-blue-800 transition-colors disabled:bg-gray-300 flex items-center justify-center gap-2 text-sm">บันทึกสถานะ</button>
            </div>
          </div>
        </div>
      )}

      {isCreateModalOpen && (
        <div className="fixed inset-0 z-[999] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
             {/* ... โค้ด Modal Create ปกติ ... */}
             <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#00249c] text-white flex-shrink-0">
              <h3 className="font-black text-lg"><i className="fas fa-box-open mr-2"></i> สร้างรายการพัสดุใหม่</h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-white/70 hover:text-white transition-colors"><i className="fas fa-times text-xl"></i></button>
            </div>
            <div className="p-6 overflow-y-auto">
              <form id="createForm" onSubmit={handleCreateSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">หมายเลขพัสดุ</label>
                  <input required type="text" value={newParcel.tracking} onChange={e => setNewParcel({...newParcel, tracking: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                    <label className="block text-sm font-bold text-[#00249c] mb-2">ข้อมูลผู้ส่ง</label>
                    <input required type="text" placeholder="ชื่อผู้ส่ง" value={newParcel.sender} onChange={e => setNewParcel({...newParcel, sender: e.target.value})} className="w-full p-3 mb-3 bg-white border border-gray-200 rounded-lg text-sm" />
                    <input required type="text" placeholder="ต้นทาง" value={newParcel.origin} onChange={e => setNewParcel({...newParcel, origin: e.target.value})} className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm" />
                  </div>
                  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-50">
                    <label className="block text-sm font-bold text-emerald-700 mb-2">ข้อมูลผู้รับ</label>
                    <input required type="text" placeholder="ชื่อผู้รับ" value={newParcel.receiver} onChange={e => setNewParcel({...newParcel, receiver: e.target.value})} className="w-full p-3 mb-3 bg-white border border-gray-200 rounded-lg text-sm" />
                    <input required type="text" placeholder="ปลายทาง" value={newParcel.destination} onChange={e => setNewParcel({...newParcel, destination: e.target.value})} className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
              </form>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3 flex-shrink-0">
              <button type="button" onClick={() => setIsCreateModalOpen(false)} className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-100 text-sm">ยกเลิก</button>
              <button type="submit" form="createForm" className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 text-sm shadow-lg">บันทึกพัสดุ</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}