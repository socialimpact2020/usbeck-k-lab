import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import client from "@/libs/server/prisma";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "Id", type: "text", placeholder: "id" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) throw new Error("invalid credentials error.");
        const { id, password } = credentials;
        const admin = await client.admin.findFirst();

        if (!admin) throw Error("not exists user");

        if (id !== admin?.id) throw Error("invalid user id.");

        if (!(await bcrypt.compare(password, admin.password)))
          throw Error("invalid user password.");

        return admin;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },

    async jwt({ token, account, user }) {
      if (account) {
        token.access_token = account.access_token;
        token.id = user.id;
      }

      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
