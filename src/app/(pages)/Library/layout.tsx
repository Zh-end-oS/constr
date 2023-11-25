import { TheLibraryNav } from "@/components/TheLiraryNav";
import type { Metadata } from "next";
import Link from "next/link";
// import { v4 } from 'uuid';
import "./library.style.scss";


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
  // const a = await posts.groupBy(posts, ()=>{return posts.userId});
  var groupBy = require('group-by');
  // const as = groupBy(posts, 'userId')
  const as = groupBy(posts, 'userId')
  // const a = Object.keys(as).forEach(item => {console.log(item)})
  const a = Object.keys(as)
  // const a = Array.from(as)



  // const hash = posts.reduce((p, c) => (p[c.color] ? p[c.color].push(c) : p[c.color] = [c], p), {}),
  //   newData = Object.keys(hash).map(k => ({ color: k, car: hash[k] }));
  // console.log(newData);
  // console.log(Array.isArray(a))
  // console.log(Array.from(new Set(a)))
  // console.log(Array.from(new Set(posts.map((ui: any) => ui.userId))))
  // console.log(Object.keys(a))
  // console.log(posts.map)
  // console.log(as)
  // console.log(a)
  // console.log(Object.keys(a))
  // console.log(Array.isArray(a))
  return (
    <div id="scrollContent">
      <section id="libraryContent">
        {/* 3. Создаем список */}
        <div id="navLibrary">
          {/* 4. выводим столько блоков, сколько пришло с сервера элементов */}
          {/* {Array.from(new Set(posts.map((unicUserId: any) => unicUserId.userId))).map((unicUserId: any) => ( */}
          {Object.values(a).map((userId: any) => (
            // 7. ? key
            <div key={userId} >

              {/* 5. Выводим  каждый такой пришедший элемент в виде ссылки с названием этого элемента */}
              {/* 6. Для Link переходим глубже относительно нынешнего положения по номеру id порядкового номера ссылки, на которую мы нажали */}
              <Link className="groupInfo" href={`/Library/${userId}`}>
                Пользователь номер: {userId}
              </Link>
            </div>
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