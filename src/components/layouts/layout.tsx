import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheHeader } from "@/components/layouts/TheHeader/TheHeader";
import { PropsWithChildren } from "react";
import MainProvider from "./MainProvider";
import { Toaster } from "react-hot-toast";
import "./child.style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "",
};

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <MainProvider>
      <TheHeader />
      <section className="child">{children}</section>
      <Toaster position="top-center" />
    </MainProvider>
  );
}
//
