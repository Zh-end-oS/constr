import { TheLibraryNav } from "@/components/TheLiraryNav";
import type { Metadata } from "next";
import Link from "next/link";
// import "./library.style.scss";


// Добавляем название на вкладку сайта
export const metadata: Metadata = {
  title: "Библиотека",
};


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
  

export default async function LibNav({
  children,
}: {
  children: React.ReactNode;
}) {
    // 2. Post = внутренностям json
    const posts = await getData();
    return (
      <div id="scrollContent">
        <section id="libraryContent">
          {/* 3. Создаем список */}
          <div id="navLibrary">
            {/* 4. выводим столько блоков, сколько пришло с сервера элементов */}
            {posts.map((post: any) => (
              // 7. ? key
              <>
                {/* 5. Выводим  каждый такой пришедший элемент в виде ссылки с названием этого элемента */}
                {/* 6. Для Link переходим глубже относительно нынешнего положения по номеру id порядкового номера ссылки, на которую мы нажали */}
                <Link className="groupInfo" href={`/Library/${post.id}`}>
                  {post.title}
                </Link>
              </>
            ))}
          </div>
          <div id="selectItem">
            <input type="search" id="searchComp" name="q" placeholder="Поиск..." />
  
            <div id="itemsLibrary">
                {children}
            </div>
          </div>
        </section>
      </div>
    );
}