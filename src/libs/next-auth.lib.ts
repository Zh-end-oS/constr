import { fetchClient } from "@/$api/api.fetch";
import { IUser } from "@/types/user.types";
import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: {
          type: "text",
        },
        email: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        if (credentials.username) {
          try {
            const data = await fetchClient.post<{ user: IUser; jwt: string }>(
              `/auth/local/register`,
              credentials
            );

            console.log("register", data);
            // return data
            return {
              id: data.user.email,
              email: data.user.email,
              username: data.user.username,
              jwt: data.jwt,
              // role: data.role
            } as User
          } catch (e) {
            return Promise.reject({
              message: "Ошибка регистрации, некорректные данные",
            });
          }
        }

        try {
          const data = await fetchClient.post<{ user: IUser; jwt: string }>(
            `/auth/local`,
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );

          console.log("login", data);
          // return data;

          return {
            id: data.user.email,
            email: data.user.email,
            username: data.user.username,
            jwt: data.jwt,
          } as User
        } catch (e) {
          return Promise.reject({
            message: "Ошибка входа, некорректные данные",
          });
        }
      },
    }),
  ],

  callbacks: {
    jwt({token, user, account}) {
        // console.log("token", token);
        // console.log("acc", account);
        // console.log("user", user);
  
      return {...token, ...user}
    },
    session({ session, token, user }) {
      // console.log("s", session);
      // console.log("t", token);
      // console.log("u", user);
      session.user = token as User
      return session
    },
  },
};

// import { fetchClient } from "@/$api/api.fetch";
// import { IUser, UserJwt } from "@/types/user.types";
// import { AuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const nextAuthOptions: AuthOptions = {
//   session: {
//     strategy: 'jwt',
//     maxAge: 30 * 24 * 60 * 60,
//     updateAge: 24 * 60 * 60
//   },
//   providers: [
//     Credentials({
//       credentials: {
//         username: {
//           type: "text",
//         },
//         email: {
//           type: "text",
//         },
//         password: {
//           type: "password",
//         },
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         if (credentials.username) {
//           try {
//             const { jwt, user } = await fetchClient.post<UserJwt>(`/auth/local/register`, credentials);
//             // const { jwt, user } = await fetchClient.post<{
//             //   user: IUser;
//             //   jwt: string;
//             // }>(`/auth/local/register`, credentials);

//             // console.log("register", data);
//             return user
//           } catch (e) {
//             return Promise.reject({
//               message: "Ошибка регистрации, некорректные данные",
//             });
//           }
//         }

//         try {
//           const { jwt, user } = await fetchClient.post<UserJwt>(`/auth/local`, {
//             identifier: credentials.email,
//             password: credentials.password,
//           });
//           // const { jwt, user } = await fetchClient.post<{
//           //   user: IUser;
//           //   jwt: string;
//           // }>(`/auth/local`, {
//           //   identifier: credentials.email,
//           //   password: credentials.password,
//           // });

//           // console.log("login", data);
//             return user
//         } catch (e) {
//           return Promise.reject({
//             message: "Ошибка входа, некорректные данные",
//           });
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     jwt({token, user}){
//       if(user){
//         token.jwt = user.jwt
//       }
//       console.log(token, user)
//       return token
//     }
//     session({ session, token, user }) {
//       session.jwt = user.jwt
//       return session;
//     },
//   },
// };
