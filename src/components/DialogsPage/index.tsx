import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";

const dialogsData = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Vlad" },
  { id: 3, name: "Denis" },
  { id: 4, name: "Viktor" },
  { id: 5, name: "Vadim" },
  { id: 6, name: "Kolya" },
];

const messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Fine! U?" },
  { id: 4, message: "Good!" },
];

const DialogsPage = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsList}>
        {dialogsData.map((userObj, i) => (
          <Dialog key={i} {...userObj} />
        ))}
      </div>
      <div className={s.messageBlock}>
        {messagesData.map((messageObj) => (
          <Message key={messageObj.id} message={messageObj.message} />
        ))}
      </div>
    </div>
  );
};

export default DialogsPage;
