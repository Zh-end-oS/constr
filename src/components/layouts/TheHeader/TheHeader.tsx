import Link from "next/link";
import "./the.header.style.scss";
import { NAVLINKS } from "./TheHeader.data";
import AuthUserProfile from './authUserProfile'
import AuthLogIn from "./authLogIn";


const TheHeader = () => {

  return (
    <header>
      <div className="logo">
        <h1>LOGO</h1>
      </div>

      {NAVLINKS.map((item) => (
        <Link href={item.url} key={item.url}>{item.namePage}</Link>
      ))}
      <AuthUserProfile />
      <AuthLogIn />
    </header>
  );
};

export { TheHeader };
