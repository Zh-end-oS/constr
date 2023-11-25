import { Metadata } from "next";
import "./article.scss";
import Link from "next/link";
// 9. Инфа до этого в [id]/page.tsx
// Будет принимать значенияя id в виде строк (походу из type Props)
async function getData(id: string) {
  // 10. Получаем инфу от открытой ссылке (пункта json) по id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // 8. ? каждые 60 секунд будем проверять на сервере на соответствие данных
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};
// Должно менять название страницы на название статьи, но не работает.
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

// 11. Делаем функцию async
export default async function Post({ params: { id } }: Props) {
  // 12. Post = внутренностям json конкретного id
  const post = await getData(id);

  return (
    <div id="scrollContent">
      <section id="contentContainer">
        <div id="articleContainer">
          <div className="articleNavigation">
            <Link className="articleNavigationComp" href="/Library">Назад</Link>
          </div>
          <div id="articleContent">
            <h2>{post.title}</h2>
            <h2>Post Page {id}</h2>
            <p>{post.body}</p>
          </div>
          <div className="articleNavigation">
            <Link className="articleNavigationComp" href="/Library">Назад</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
