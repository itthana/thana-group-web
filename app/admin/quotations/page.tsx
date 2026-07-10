const mockQuotations = [
  { id: 'Q-001', name: 'คุณสมชาย ใจดี', company: 'บจก. เอบีซี เทรดดิ้ง', service: 'ขนส่งเหมาคัน (FTL)', date: '09 ก.ค. 2026', status: 'รอติดต่อกลับ' },
  { id: 'Q-002', name: 'คุณวิภาวี รักดี', company: 'บมจ. เอ็กซ์วายแซด', service: 'พิธีการศุลกากร', date: '08 ก.ค. 2026', status: 'ติดต่อแล้ว' },
  { id: 'Q-003', name: 'Mr. John Doe', company: 'Global Tech', service: 'ขนส่งข้ามแดน ไทย-ลาว', date: '08 ก.ค. 2026', status: 'รอติดต่อกลับ' },
];

export default function QuotationsPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="text-lg font-black text-[#0a2540]">📝 รายชื่อผู้ขอใบเสนอราคาล่าสุด</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-gray-500 text-sm border-b border-gray-200">
              <th className="p-4 font-bold">รหัส</th>
              <th className="p-4 font-bold">ชื่อลูกค้า</th>
              <th className="p-4 font-bold">บริการที่สนใจ</th>
              <th className="p-4 font-bold">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {mockQuotations.map((q) => (
              <tr key={q.id} className="border-b border-gray-100 hover:bg-slate-50 text-sm">
                <td className="p-4 font-bold text-[#00249c]">{q.id}</td>
                <td className="p-4">
                  <p className="font-bold text-[#0a2540]">{q.name}</p>
                  <p className="text-xs text-gray-500">{q.company}</p>
                </td>
                <td className="p-4 font-medium">{q.service}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${q.status === 'รอติดต่อกลับ' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {q.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}