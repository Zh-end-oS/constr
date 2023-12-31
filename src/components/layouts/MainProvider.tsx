"use client";

import AuthProvider from "@/provider/AuthProvider";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
}
