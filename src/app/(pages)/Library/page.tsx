import type { Metadata } from "next";
import Link from "next/link";
import "./library.style.scss";

// 1. Делаем запрос на сервер и получаем ответ в виде json
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // 8. ? каждые 60 секунд будем проверять на сервере на соответствие данных
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

// Добавляем название на вкладку сайта
export const metadata: Metadata = {
  title: "Библиотека",
};

// Создаем параллельно выполяемую функцию, которая возвращает на страницу контент
export default async function LibraryPage() {
  // 2. Post = внутренностям json
  const posts = await getData();
  return (
    <div id="emptyLib">
      <p>Выберите один из пунктов меню</p>
    </div>
  );
}
