import prisma from '@/lib/prisma'; 

export default async function QuotationsAdminPage() {
  const quotations = await prisma.quotation.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 text-[#002b5e]">📝 รายการขอใบเสนอราคาล่าสุด</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-4 rounded-tl-lg font-semibold">รหัสอ้างอิง</th>
              <th className="p-4 font-semibold">ชื่อลูกค้า</th>
              <th className="p-4 font-semibold">ข้อมูลติดต่อ</th>
              <th className="p-4 font-semibold">ความต้องการ</th>
              <th className="p-4 rounded-tr-lg font-semibold text-center">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {quotations.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-8 text-gray-500">ยังไม่มีข้อมูลการขอใบเสนอราคาในระบบ</td>
              </tr>
            ) : (
              quotations.map((q) => (
                <tr key={q.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-blue-600">{q.qNumber}</td>
                  <td className="p-4">{q.name}</td>
                  <td className="p-4 text-sm text-gray-600">{q.company}</td>
                  <td className="p-4 text-sm text-gray-600">{q.service}</td>
                  <td className="p-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      {q.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}