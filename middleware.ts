import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login", // ถ้ายังไม่ล็อกอิน ให้เด้งไปหน้านี้
  },
});

export const config = {
  // บล็อกการเข้าถึงหน้า /admin และหน้าย่อยทั้งหมด
  matcher: ["/admin", "/admin/:path*"],
};