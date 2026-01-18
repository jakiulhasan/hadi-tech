import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "admin@admin.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock validation
        if (
          credentials?.email === "admin@admin.com" &&
          credentials?.password === "Admin123@g"
        ) {
          return { id: "1", name: "Admin User", email: "admin@admin.com" };
        }
        return null; // Login failed
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
