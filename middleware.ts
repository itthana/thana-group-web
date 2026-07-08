export { default } from "next-auth/middleware";

export const config = {
  // ล็อกกุญแจทุกหน้าจอที่ขึ้นต้นด้วย /admin (ยกเว้นหน้า login)
  matcher: ["/admin", "/admin/((?!login).*)"],
};
