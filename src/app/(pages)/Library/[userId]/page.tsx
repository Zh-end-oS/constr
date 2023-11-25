import { Metadata } from "next";
import Link from "next/link";
// 9. Инфа до этого в [id]/page.tsx
// Будет принимать значенияя id в виде строк (походу из type Props)
async function getData() {
  // 10. Получаем инфу от открытой ссылке (пункта json) по id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/`,
    {
      // 8. ? каждые 60 секунд будем проверять на сервере на соответствие данных
      next: {
        revalidate: 60,
      },
    }
  )
  return response.json();
}

type Props = {
  params: {
    userId: string;
  };
};
// Должно менять название страницы на название статьи, но не работает.
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  return {
    title: userId,
  };
}

// // 11. Делаем функцию async
// export default async function Post({ params: { id } }: Props) {
//   // 12. Post = внутренностям json конкретного id
//   const post = await getData(id);

//   return (
//     <section>
//       <h2>{post.title}</h2>
//       <h2>Post Page {id}</h2>

//       <p>{post.body}</p>
//     </section>
//   );
// }
// 11. Делаем функцию async
export default async function Post({ params: { userId } }: Props) {
  // 12. Post = внутренностям json конкретного id
  const posts = await getData();
  var groupBy = require('group-by');
  const as = groupBy(posts, 'userId')
  // const postsUser = Array.from(posts.map((unicUserId: any) => posts.indexOf(unicUserId)))
  // const postsUser = Array.from(posts, ({userId}) => userId == 5)
  // const postsUser = Array.from(new Set(posts.map((unicUserId: any) => unicUserId.userId === 5)))
  // console.log(postsUser)
  // console.log(as[id])
  console.log(as[1])
  return (
    <section>
      {/* {Array.from(posts.map((unicUserId: any) => unicUserId.userId = 5)).map((unicUserId: any) => ( */}
      {as[userId].map((userPost: any) => (
        // 7. ? key
        <div key={userPost.id} >

          {/* 5. Выводим  каждый такой пришедший элемент в виде ссылки с названием этого элемента */}
          {/* 6. Для Link переходим глубже относительно нынешнего положения по номеру id порядкового номера ссылки, на которую мы нажали */}
          <Link className="groupInfo" href={`/${userPost.id}`}>
          Пост пользователя (номер в базе): {userPost.id}
          </Link>
        </div>
      ))}
    </section>
  );
}
