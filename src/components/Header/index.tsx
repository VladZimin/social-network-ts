import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  userName: null | string;
  logout: () => void;
};
const Header: FC<HeaderPropsType> = ({ isAuth, userName, logout }) => {
  return (
    <>
      <header className={s.header}>
        <img
          src="https://img.icons8.com/ios/452/duolingo-logo.png"
          alt="Logo"
        />
        <div className={s.loginBlock}>
          {isAuth ? (
            <div>
              <NavLink to={"profile"}>{userName}</NavLink> -{" "}
              <button onClick={logout}>logout</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
