// import { authConfig } from '@/config/auth';
// import NextAuth from 'next-auth'

import { nextAuthOptions } from "@/libs/next-auth.lib";
import NextAuth from "next-auth/next";


const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST }