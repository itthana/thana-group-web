'use client';

import { useState } from 'react';

// ข้อมูลจำลองใบเสนอราคา
const mockQuotations = [
  { id: 1, quoteNo: 'QT-2607-001', customer: 'บริษัท ไทย-ลาว เทรดดิ้ง จำกัด', phone: '02-999-8888', origin: 'กรุงเทพฯ', destination: 'เวียงจันทน์', items: 'อะไหล่เครื่องจักร (500 kg)', amount: 15000, status: 'รออนุมัติ', date: '11/07/2026' },
  { id: 2, quoteNo: 'QT-2607-002', customer: 'คุณสมศรี มั่งมี', phone: '081-222-3333', origin: 'อุดรธานี', destination: 'ปากเซ', items: 'เฟอร์นิเจอร์ตกแต่งบ้าน (200 kg)', amount: 6500, status: 'อนุมัติแล้ว', date: '10/07/2026' },
];

export default function QuotationsPage() {
  const [quotations, setQuotations] = useState(mockQuotations);
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newQuote, setNewQuote] = useState({ customer: '', phone: '', origin: '', destination: '', items: '', amount: '' });

  const [printQuote, setPrintQuote] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'อนุมัติแล้ว': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'รออนุมัติ': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'ปฏิเสธ': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const generateNo = `QT-2607-00${quotations.length + 1}`;
      const newEntry = { 
        id: quotations.length + 1, 
        quoteNo: generateNo,
        ...newQuote, 
        amount: Number(newQuote.amount),
        status: 'รออนุมัติ', 
        date: new Date().toLocaleDateString('th-TH')
      };
      setQuotations([newEntry, ...quotations]); 
      setIsLoading(false);
      setIsCreateModalOpen(false);
      setNewQuote({ customer: '', phone: '', origin: '', destination: '', items: '', amount: '' });
    }, 800);
  };

  return (
    <>
      <div className="space-y-6 animate-fade-in-up pb-10 print:hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-2xl font-black text-[#0a2540]">ใบเสนอราคา (Quotations)</h2>
            <p className="text-sm text-gray-500 mt-1">จัดการและออกใบเสนอราคาค่าขนส่งให้ลูกค้า</p>
          </div>
          <button onClick={() => setIsCreateModalOpen(true)} className="bg-[#00249c] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 text-sm">
            <i className="fas fa-file-invoice-dollar"></i>สร้างใบเสนอราคา
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-600">
                  <th className="p-4 font-bold">เลขที่ (No.)</th>
                  <th className="p-4 font-bold">ลูกค้า</th>
                  <th className="p-4 font-bold">เส้นทาง</th>
                  <th className="p-4 font-bold text-right">ยอดรวม (THB)</th>
                  <th className="p-4 font-bold text-center">สถานะ</th>
                  <th className="p-4 font-bold text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {quotations.map((quote) => (
                  <tr key={quote.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <span className="font-bold text-[#00249c]">{quote.quoteNo}</span>
                      <p className="text-xs text-gray-400 mt-1">{quote.date}</p>
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-[#0a2540]">{quote.customer}</p>
                      <p className="text-xs text-gray-500 mt-1"><i className="fas fa-phone mr-1"></i>{quote.phone}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>{quote.origin}</span><i className="fas fa-arrow-right text-gray-300 text-xs"></i><span className="font-bold">{quote.destination}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right font-black text-[#0a2540]">
                      ฿{quote.amount.toLocaleString()}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(quote.status)}`}>
                        {quote.status}
                      </span>
                    </td>
                    <td className="p-4 flex items-center justify-center gap-2">
                      <button onClick={() => setPrintQuote(quote)} className="bg-blue-50 hover:bg-[#00249c] text-blue-600 hover:text-white px-3 py-1.5 rounded-lg transition-colors font-bold text-xs flex items-center gap-2">
                        <i className="fas fa-print"></i> พิมพ์ / PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ==========================================
          🌟 Modal ปริ้นท์ใบเสนอราคา (A4 Layout)
      ========================================== */}
      {printQuote && (
        <div className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 print:static print:bg-transparent print:p-0 print:block overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[800px] overflow-hidden animate-fade-in-up print:shadow-none print:max-w-none print:w-full print:border-0 print:rounded-none my-8 print:my-0">
            
            <div className="p-4 bg-gray-100 flex justify-between items-center print:hidden border-b border-gray-200 sticky top-0 z-10">
              <h3 className="font-bold text-gray-700">ตัวอย่างใบเสนอราคา (Quotation)</h3>
              <div className="flex gap-2">
                <button onClick={() => setPrintQuote(null)} className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-200 font-bold text-sm">ปิด</button>
                <button onClick={() => window.print()} className="px-4 py-2 bg-[#00249c] text-white rounded-lg hover:bg-blue-800 font-bold text-sm flex items-center gap-2">
                  <i className="fas fa-print"></i> บันทึกเป็น PDF
                </button>
              </div>
            </div>

            {/* กระดาษ A4 */}
            <div className="p-12 print:p-8 bg-white text-black min-h-[1050px] relative">
              
              {/* Header Company */}
              <div className="flex justify-between items-start border-b-2 border-black pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black text-white font-black text-4xl px-4 py-2 tracking-tighter">TLT</div>
                  <div>
                    <h1 className="text-2xl font-black tracking-tighter leading-none">THANA LOGISTICS</h1>
                    <p className="text-sm font-medium mt-1 text-gray-600">บริษัท ธนา โลจิสติกส์ จำกัด</p>
                    <p className="text-xs text-gray-500 mt-1">123 ถ.มิตรภาพ อ.เมือง จ.อุดรธานี 41000<br/>โทร: 02-123-4567 | Email: contact@thanalogs.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-3xl font-black text-[#00249c] mb-2">QUOTATION</h2>
                  <p className="text-sm font-bold">ใบเสนอราคา</p>
                </div>
              </div>

              {/* Info Block */}
              <div className="flex justify-between mb-8 gap-8">
                <div className="w-1/2">
                  <p className="text-sm font-bold bg-gray-100 px-2 py-1 mb-2 inline-block">ลูกค้า (Customer)</p>
                  <p className="font-bold text-lg">{printQuote.customer}</p>
                  <p className="text-sm mt-1">เบอร์โทรติดต่อ: {printQuote.phone}</p>
                </div>
                <div className="w-1/2 bg-gray-50 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-600">เลขที่ (No.):</span>
                    <span className="font-black">{printQuote.quoteNo}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-gray-600">วันที่ (Date):</span>
                    <span className="font-bold">{printQuote.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-bold text-gray-600">ยืนยันราคาภายใน:</span>
                    <span className="font-bold">15 วัน</span>
                  </div>
                </div>
              </div>

              {/* Table Items */}
              <table className="w-full text-left border-collapse mb-8">
                <thead>
                  <tr className="bg-[#0a2540] text-white">
                    <th className="p-3 font-bold border border-[#0a2540] w-16 text-center">ลำดับ</th>
                    <th className="p-3 font-bold border border-[#0a2540]">รายการ (Description)</th>
                    <th className="p-3 font-bold border border-[#0a2540] text-center w-24">จำนวน</th>
                    <th className="p-3 font-bold border border-[#0a2540] text-right w-32">ราคา/หน่วย</th>
                    <th className="p-3 font-bold border border-[#0a2540] text-right w-36">จำนวนเงิน (THB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-300 text-center">1</td>
                    <td className="p-3 border border-gray-300">
                      <p className="font-bold">บริการขนส่งสินค้าข้ามแดน (Cross-border Freight)</p>
                      <p className="text-sm text-gray-500 mt-1">เส้นทาง: {printQuote.origin} - {printQuote.destination}</p>
                      <p className="text-sm text-gray-500 mt-1">รายละเอียด: {printQuote.items}</p>
                    </td>
                    <td className="p-3 border border-gray-300 text-center">1</td>
                    <td className="p-3 border border-gray-300 text-right">{printQuote.amount.toLocaleString()}</td>
                    <td className="p-3 border border-gray-300 text-right font-bold">{printQuote.amount.toLocaleString()}</td>
                  </tr>
                  {/* Empty rows to fill space */}
                  <tr><td className="p-6 border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td></tr>
                  <tr><td className="p-6 border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td><td className="border border-gray-300"></td></tr>
                </tbody>
              </table>

              {/* Totals */}
              <div className="flex justify-end mb-16">
                <div className="w-1/2">
                  <div className="flex justify-between p-2 border-b border-gray-200">
                    <span className="font-bold text-gray-600">รวมเป็นเงิน (Sub Total)</span>
                    <span className="font-bold">{printQuote.amount.toLocaleString()} บาท</span>
                  </div>
                  <div className="flex justify-between p-2 border-b border-gray-200">
                    <span className="font-bold text-gray-600">ภาษีมูลค่าเพิ่ม (VAT 7%)</span>
                    <span className="font-bold">{(printQuote.amount * 0.07).toLocaleString()} บาท</span>
                  </div>
                  <div className="flex justify-between p-3 bg-[#0a2540] text-white mt-2 rounded">
                    <span className="font-black">ยอดรวมสุทธิ (Grand Total)</span>
                    <span className="font-black text-lg">{(printQuote.amount * 1.07).toLocaleString()} บาท</span>
                  </div>
                </div>
              </div>

              {/* Signatures */}
              <div className="flex justify-between mt-auto pt-8 border-t border-gray-200">
                <div className="text-center w-64">
                  <div className="border-b-2 border-gray-400 h-10 mb-2"></div>
                  <p className="font-bold">ผู้เสนอราคา (Authorized Signature)</p>
                  <p className="text-sm text-gray-500 mt-1">วันที่ _______/_______/_______</p>
                </div>
                <div className="text-center w-64">
                  <div className="border-b-2 border-gray-400 h-10 mb-2"></div>
                  <p className="font-bold">ผู้อนุมัติ/ลูกค้า (Accepted By)</p>
                  <p className="text-sm text-gray-500 mt-1">วันที่ _______/_______/_______</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          🌟 Modal สร้างใบเสนอราคา
      ========================================== */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-[999] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#0a2540] text-white flex-shrink-0">
              <h3 className="font-black text-lg"><i className="fas fa-file-invoice mr-2"></i> สร้างใบเสนอราคาใหม่</h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-white/70 hover:text-white transition-colors"><i className="fas fa-times text-xl"></i></button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="quoteForm" onSubmit={handleCreateSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อลูกค้า / บริษัท</label>
                    <input required type="text" value={newQuote.customer} onChange={e => setNewQuote({...newQuote, customer: e.target.value})} className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                    <input required type="text" value={newQuote.phone} onChange={e => setNewQuote({...newQuote, phone: e.target.value})} className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <div>
                    <label className="block text-sm font-bold text-[#00249c] mb-2">ต้นทาง</label>
                    <input required type="text" placeholder="เช่น กรุงเทพฯ" value={newQuote.origin} onChange={e => setNewQuote({...newQuote, origin: e.target.value})} className="w-full p-3 border border-gray-200 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#00249c] mb-2">ปลายทาง</label>
                    <input required type="text" placeholder="เช่น เวียงจันทน์" value={newQuote.destination} onChange={e => setNewQuote({...newQuote, destination: e.target.value})} className="w-full p-3 border border-gray-200 rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">รายละเอียดสินค้า (เช่น อะไหล่ 500kg)</label>
                  <input required type="text" value={newQuote.items} onChange={e => setNewQuote({...newQuote, items: e.target.value})} className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">ราคาเสนอ (บาท)</label>
                  <input required type="number" placeholder="0" value={newQuote.amount} onChange={e => setNewQuote({...newQuote, amount: e.target.value})} className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white text-lg font-black text-emerald-600" />
                </div>

              </form>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3 flex-shrink-0">
              <button type="button" onClick={() => setIsCreateModalOpen(false)} className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-100 text-sm">ยกเลิก</button>
              <button type="submit" form="quoteForm" disabled={isLoading} className="flex-1 py-3 bg-[#00249c] text-white rounded-xl font-bold hover:bg-blue-800 text-sm shadow-lg">
                {isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : <i className="fas fa-save"></i>} บันทึกใบเสนอราคา
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}