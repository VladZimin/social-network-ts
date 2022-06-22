import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import { activeNavLinkType } from "../../Navbar";

type DialogsPropsType = {
  name: string;
  id: number;
};

const Dialog: React.FC<DialogsPropsType> = ({ name, id }) => {
  const activeDialog = {
    fontSize: "22px",
    color: "rgba(117, 149, 231, 0.91)",
  };

  return (
    <NavLink
      to={`${id}`}
      className={s.userItem}
      style={({ isActive }: activeNavLinkType) =>
        isActive ? activeDialog : {}
      }
    >
      {name}
    </NavLink>
  );
};

export default Dialog
