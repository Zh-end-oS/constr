"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function AuthLogIn() {
  const { user, isLoggedIn } = useAuth();

  if (isLoggedIn) return null;

  return (
    <Link href="/login" key="/login">
      Вход
    </Link>
  );
}
