'use client'; // 🌟 ต้องมีคำนี้อยู่บรรทัดบนสุดเป๊ะๆ ครับ

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    // พิมพ์ Error ลงใน Console เผื่อเราไว้ดู
    console.error("เจอ Error ซะแล้ว:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-lg border-2 border-red-200">
        <i className="fas fa-triangle-exclamation text-5xl text-red-500 mb-4"></i>
        <h2 className="text-2xl font-bold text-red-700 mb-2">อ๊ะ! ระบบมีปัญหา (Error)</h2>
        <p className="text-gray-600 mb-4 bg-gray-100 p-2 rounded text-sm text-left overflow-auto">
          {error.message}
        </p>
        <button
          onClick={() => reset()}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          ลองรีเฟรชใหม่อีกครั้ง
        </button>
      </div>
    </div>
  );
}