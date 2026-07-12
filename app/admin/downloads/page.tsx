'use client';

import { useState, useEffect } from 'react';

interface Document {
  id: number;
  title: string;
  category: string;
  size: string;
  type: string;
  icon: string;
  color: string;
  fileUrl: string | null;
}

export default function EmployeeDownloadsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [formData, setFormData] = useState({ title: '', category: 'HR', type: 'PDF' });
  const [file, setFile] = useState<File | null>(null);

  const categories = ['All', 'HR', 'Finance', 'Operations', 'Customs', 'Admin'];
  const formCategories = ['HR', 'Finance', 'Operations', 'Customs', 'Admin'];
  const docTypes = ['PDF', 'Excel', 'Word'];

  const fetchDocs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/documents');
      if (res.ok) {
        const data = await res.json();
        setDocuments(data);
      }
    } catch (error) {
      console.error("โหลดเอกสารล้มเหลว", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleAddDocument = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { alert('กรุณาเลือกไฟล์!'); return; }
    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('title', formData.title);
    uploadData.append('category', formData.category);
    uploadData.append('type', formData.type);
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/documents', { method: 'POST', body: uploadData });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ title: '', category: 'HR', type: 'PDF' });
        setFile(null);
        fetchDocs();
        alert('อัปโหลดสำเร็จ!');
      }
    } catch (error) {
      alert('อัปโหลดล้มเหลว');
    } finally {
      setIsUploading(false);
    }
  };

  // 🌟 ฟังก์ชันลบเอกสาร
  const handleDelete = async (id: number, title: string) => {
    if (confirm(`ยืนยันการลบเอกสาร: ${title}?\n(ไฟล์จะถูกลบออกจากเซิร์ฟเวอร์ถาวร)`)) {
      try {
        const res = await fetch(`/api/documents?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchDocs(); // รีเฟรชตาราง
          alert('ลบเอกสารเรียบร้อยแล้ว');
        }
      } catch (error) {
        alert('ไม่สามารถลบได้');
      }
    }
  };

  const filteredDocs = (documents || []).filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'All' || doc.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-8 max-w-7xl mx-auto w-full font-prompt animate-fade-in-up relative">
      
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0a2540] mb-2">คลังเอกสารองค์กร (e-Document)</h1>
          <p className="text-gray-500 text-sm">จัดการเอกสารพนักงาน (เพิ่ม/ลบ ได้จากหน้านี้)</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-md transition-all flex items-center gap-2"
        >
          <i className="fas fa-plus"></i> เพิ่มเอกสารใหม่
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === cat ? 'bg-[#0a2540] text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>{cat === 'All' ? 'ทั้งหมด' : cat}</button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input type="text" placeholder="ค้นหาเอกสาร..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"/>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                <th className="px-6 py-4 font-bold w-20 text-center">ลำดับ</th>
                <th className="px-6 py-4 font-bold">ชื่อเอกสาร</th>
                <th className="px-6 py-4 font-bold text-center">หมวดหมู่</th>
                <th className="px-6 py-4 font-bold text-center">ขนาด</th>
                <th className="px-6 py-4 font-bold text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={5} className="p-10 text-center text-gray-500">กำลังโหลด...</td></tr>
              ) : filteredDocs.length > 0 ? (
                filteredDocs.map((doc, index) => (
                  <tr key={doc.id} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-center text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <i className={`fas ${doc.icon} ${doc.color} text-2xl w-6 text-center`}></i>
                        <div><p className="font-bold text-[#0a2540]">{doc.title}</p><p className="text-[11px] text-gray-400 mt-0.5 uppercase">{doc.type}</p></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center"><span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-[11px] font-bold border border-gray-200">{doc.category}</span></td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{doc.size}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* ปุ่มโหลด */}
                        <a href={doc.fileUrl || '#'} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-all border border-blue-100"><i className="fas fa-download"></i></a>
                        
                        {/* 🌟 ปุ่มลบ (ถังขยะ) */}
                        <button 
                          onClick={() => handleDelete(doc.id, doc.title)}
                          className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-lg transition-all border border-red-100"
                        >
                          <i className="fas fa-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={5} className="p-10 text-center text-gray-500">ยังไม่มีเอกสารในระบบ</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="bg-[#0a2540] px-6 py-4 flex justify-between items-center text-white"><h3 className="font-bold">เพิ่มเอกสารใหม่</h3><button onClick={() => setIsModalOpen(false)}><i className="fas fa-times"></i></button></div>
            <form onSubmit={handleAddDocument} className="p-6 flex flex-col gap-4">
              <div><label className="block text-sm font-bold mb-1">ชื่อเอกสาร</label><input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border rounded-lg px-4 py-2"/></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-bold mb-1">แผนก</label><select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full border rounded-lg px-4 py-2">{formCategories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-bold mb-1">ประเภท</label><select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full border rounded-lg px-4 py-2">{docTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
              </div>
              <div><label className="block text-sm font-bold mb-1">เลือกไฟล์</label><input type="file" required onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="w-full text-sm"/></div>
              <div className="mt-4 flex gap-3"><button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-100 py-3 rounded-xl font-bold">ยกเลิก</button><button type="submit" disabled={isUploading} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold">{isUploading ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}</button></div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}