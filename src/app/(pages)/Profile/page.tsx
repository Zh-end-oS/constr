
import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/components/seo/seo.const";
import { Profile } from "@/components/screens/Profile/Profile";
import "./profile.style.scss";

export const metadata: Metadata = {
  title: "Профиль",
  // Отключаем индексацию страниц
  ...NO_INDEX_PAGE,
};

export default function ProfilePage() {
  return <Profile />
}
