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
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return { id: "1", name: "THANA Admin", email: "admin@thanagroup.com" };
        }
        return null; 
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET || "ThanaGroupSuperSecretKey2026",
  session: {
    strategy: "jwt",
  }
});

export { handler as GET, handler as POST };