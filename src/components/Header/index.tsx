import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  login: null | string;
};
const Header: FC<HeaderPropsType> = ({ isAuth, login }) => {
  return (
    <>
      <header className={s.header}>
        <img
          src="https://img.icons8.com/ios/452/duolingo-logo.png"
          alt="Logo"
        />
        <div className={s.loginBlock}>
          {isAuth ? (
            <NavLink to={"profile"}>{login}</NavLink>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
