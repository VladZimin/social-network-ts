import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { DialogsPageType } from "../../App";

type DialogsPropsType = {
  dialogsPage: DialogsPageType;
};

const DialogsPage: React.FC<DialogsPropsType> = ({ dialogsPage }) => {
  const dialogsList = dialogsPage.dialogsData.map((userObj, i) => (
    <Dialog key={i} {...userObj} />
  ));

  const messagesList = dialogsPage.messagesData.map((messageObj) => (
    <Message key={messageObj.id} message={messageObj.message} />
  ));

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsList}>{dialogsList}</div>
      <div className={s.messageBlock}>{messagesList}</div>
    </div>
  );
};

export default DialogsPage;
