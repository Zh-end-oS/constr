import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.style.scss";
import { TheHeader } from "@/components/layouts/TheHeader/TheHeader";
import LayoutClient from "@/components/layouts/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <LayoutClient>{children}</LayoutClient>
        </main>
      </body>
    </html>
  );
}
//