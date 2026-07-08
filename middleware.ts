import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login", // กระซิบบอกยามว่า ถ้ายูสเซอร์มาหน้านี้ ปล่อยผ่านได้เลยไม่ต้องล็อก
  },
  secret: process.env.NEXTAUTH_SECRET || "ThanaGroupSuperSecretKey2026", // ฝังกุญแจสำรองไว้ให้ยามถือด้วย
});

export const config = {
  // เปลี่ยนมาใช้คำสั่งง่ายๆ: "ล็อกทุกหน้าเว็บที่ขึ้นต้นด้วย /admin"
  matcher: ["/admin/:path*"],
};