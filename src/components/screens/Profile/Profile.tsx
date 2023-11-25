"use client";

import { useAuth } from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation"; // исправленный импорт
import { useEffect, useState } from "react";
// -------------------------------------------
// export function Profile() {
//     const { isLoggedIn } = useAuth();
//     const router = useRouter();
//     // состояние для контроля загрузки
//     const [isLoading, setLoading] = useState(true);
  
//     useEffect(() => {
//       if (!isLoggedIn && !isLoading) {
//         router.replace('/login');
//       } else {
//         setLoading(false); // завершаем загрузку, если пользователь авторизован
//       }
//     }, [isLoggedIn, isLoading, router]);
  
//     // показываем загрузочный спиннер или другой компонент загрузки, пока контент загружается
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
  
//     // рендерим страницу, если пользователь авторизован
//     if (isLoggedIn) {
//       return <div id="scrollContent">Profile Page</div>;
//     }
  
//     // в противном случае ничего не рендерим, так как будет выполнено перенаправление
//     return null;
//   }
// -------------------------------------------

export function Profile() {
//   const { isLoggedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     // Если состояние авторизации не подтверждено, сразу же делаем перенаправление.
//     if (isLoggedIn === false) {
//       router.replace("/login");
//     }
//   }, [isLoggedIn, router]);

//   // Пока статус авторизации неизвестен, возвращаем null или loader,
//   // чтобы избежать отображения какого-либо контента.
//   if (isLoggedIn === undefined) {
//     return null; // или вставьте сюда loader, если хотите показать индикатор загрузки
//   }

//   // Как только подтвердится, что пользователь авторизован, отобразим содержимое.
//   if (isLoggedIn) {
//     return <div id="scrollContent">Profile Page</div>;
//   }

//   // В текущей логике этот код никогда не достигнется,
//   // поскольку если isLoggedIn === false, произойдет переадресация.
//   // Однако, если захотите изменить логику в будущем, этот блок может пригодиться.
//   return null;
// -------------------------------------------

  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Если пользователь не авторизован, перенаправляем его на страницу входа
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  // Показываем содержимое страницы, если пользователь авторизован
  if (isLoggedIn) {
   return <div id="scrollContent">Profile Page</div>;
  }

  // Возвращаем null, пока решается авторизация и происходит редирект
  return null;

  // const { user, isLoggedIn } = useAuth();
  //   const { replace } = useRouter();
  //   console.log(isLoggedIn)

  //   if (!isLoggedIn) {
  //     replace("/login");
  //     return null;
  //   }
  //   return <div id="scrollContent">Profile Page </div>;
}
