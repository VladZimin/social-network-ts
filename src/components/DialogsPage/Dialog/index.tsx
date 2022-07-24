import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import { activeNavLinkType } from "../../Navbar";
import { DialogDataType } from "../../../store/state";

const Dialog: React.FC<DialogDataType> = ({ name, id }) => {
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

export default Dialog;
