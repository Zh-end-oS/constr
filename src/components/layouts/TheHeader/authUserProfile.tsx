"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

// const isLoggedIn = false

export default function AuthUserProfile() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <Link href="/Profile" key="/Profile">
      Профиль
    </Link>
  );
}
