import React, { FC } from "react";
import s from "./Message.module.css";

const Message: FC<{ message: string }> = ({ message }) => {
  return <div className={s.messageItem}>{message}</div>;
};

export default Message;
