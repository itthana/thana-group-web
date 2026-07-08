import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 💡 เพื่อให้พี่ทดสอบระบบได้ทันที ผมตั้งรหัสผ่านแบบฝังไว้ให้ก่อนครับ
        // (เมื่อระบบนิ่งแล้ว เราค่อยแก้ให้ไปเช็คจาก Database จริงภายหลัง)
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return { id: "1", name: "THANA Admin", email: "admin@thanagroup.com" };
        }
        return null; // ถ้ารหัสผิด จะไม่ให้เข้า
      }
    })
  ],
  pages: {
    signIn: '/admin/login', // ตั้งค่าว่าถ้ายังไม่ล็อกอิน ให้เด้งไปหน้านี้
  },
  secret: "ThanaGroupSuperSecretKey2026", // กุญแจเข้ารหัสความปลอดภัย
  session: {
    strategy: "jwt",
  }
});

export { handler as GET, handler as POST };