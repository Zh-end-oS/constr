import type { Metadata } from "next";
import { NO_INDEX_PAGE } from '@/components/seo/seo.const'
import { Auth } from "@/components/screens/Auth/Auth";

export const metadata: Metadata = {
  title: "Register",
  // Отключаем индексацию страниц
  ...NO_INDEX_PAGE
};

export default function RegisterPage() {
  return <Auth type='Register'/>;
}
