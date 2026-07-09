import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 💡 กำหนด Username และ Password สำหรับแอดมินตรงนี้ครับ
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          // ถ้าถูก ให้ส่งข้อมูล User กลับไป
          return { id: "1", name: "Admin THANA", role: "admin" };
        }
        // ถ้าผิด ส่งค่า null กลับไป (ระบบจะตีกลับว่าเข้าสู่ระบบไม่สำเร็จ)
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login', // บอกระบบว่าหน้าล็อคอินเราอยู่ที่ไหน
  },
  session: {
    strategy: "jwt", // ใช้ระบบ JWT (JSON Web Token) สอดคล้องกับ Middleware
  },
  secret: process.env.NEXTAUTH_SECRET || "ThanaGroupSuperSecretKey2026",
});

export { handler as GET, handler as POST };