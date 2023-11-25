"use client";

import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const { user, isLoggedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      window.localStorage.setItem("token", user?.jwt || "");
    }
  }, [user, isLoggedIn]);

  // useEffect(() => {
  //   if (pathname === "/Profile") {
  //     const isLoggedIn = !!window.localStorage.getItem("token");
  //     if (!isLoggedIn) {
  //       router.push("/login");
  //     }
  //   }
  //   // console.log(pathname)
  // }, [pathname, isLoggedIn]);



  // useEffect(() => {
  //   if (pathname !== "/login" && pathname !== "/register") {
  //       // console.log(isLoggedIn)
  //     const isLoggedIn = !!window.localStorage.getItem("token");
  //     if (!isLoggedIn) {
  //       router.push("/login");
  //     }
  //   }
  //   // console.log(pathname)
  // }, [pathname, isLoggedIn]);

  return <>{children}</>;
}
