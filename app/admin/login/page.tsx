import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  
  async function loginAction(formData: FormData) {
    'use server';
    
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'thana2026'; 

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      cookies().set('admin_session', 'logged_in', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
      redirect('/admin/parcels');
    } else {
      redirect('/admin/login?error=1');
    }
  }

  return (
    <div className="fixed inset-0 z-[999] bg-slate-900 flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        <div className="bg-[#0a2540] p-8 text-center">
          <div className="w-16 h-16 bg-[#00249c] text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
            <i className="fas fa-truck-fast"></i>
          </div>
          <h1 className="text-2xl font-black text-white tracking-wider">THANA <span className="text-blue-400">ADMIN</span></h1>
          <p className="text-gray-400 text-xs mt-1">ระบบจัดการข้อมูลโลจิสติกส์ ไทย-ลาว</p>
        </div>

        <div className="p-8">
          {searchParams?.error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded flex items-center gap-3">
              <i className="fas fa-exclamation-circle text-lg"></i>
              <span>ชื่อผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้องครับ!</span>
            </div>
          )}

          <form action={loginAction} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <i className="fas fa-user text-[#00249c] mr-2"></i>ชื่อผู้ใช้งาน (Username)
              </label>
              <input 
                type="text" 
                name="username" 
                required
                placeholder="พิมพ์ admin" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:bg-white transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <i className="fas fa-lock text-[#00249c] mr-2"></i>รหัสผ่าน (Password)
              </label>
              <input 
                type="password" 
                name="password" 
                required
                placeholder="พิมพ์ thana2026" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00249c] focus:bg-white transition-all text-sm"
              />
            </div>

            <button type="submit" className="w-full bg-[#00249c] hover:bg-blue-800 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2">
              <span>เข้าสู่ระบบ</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>

          <div className="mt-8 text-center">
            <a href="/" className="text-xs text-gray-400 hover:text-gray-600 font-medium">
              <i className="fas fa-arrow-left mr-1"></i> กลับสู่หน้าเว็บหลัก
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}