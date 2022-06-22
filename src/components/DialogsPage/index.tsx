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

const dialogsList = dialogsData.map((userObj, i) => (
  <Dialog key={i} {...userObj} />
));

const messagesList = messagesData.map((messageObj) => (
  <Message key={messageObj.id} message={messageObj.message} />
));

const DialogsPage = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsList}>{dialogsList}</div>
      <div className={s.messageBlock}>{messagesList}</div>
    </div>
  );
};

export default DialogsPage;
