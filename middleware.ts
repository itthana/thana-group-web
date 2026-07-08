import { withAuth } from "next-auth/middleware";

// สร้างและส่งออกฟังก์ชัน middleware ชัดเจน 100%
export default withAuth();

// กำหนดหน้าจอที่ต้องการล็อกกุญแจ
export const config = {
  matcher: ["/admin", "/admin/((?!login).*)"],
};