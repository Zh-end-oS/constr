import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: User;
  }

  interface User {
    email?: string;
    username?: string;
    id?: string; 
    jwt?: string
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    token: string;
  }
}