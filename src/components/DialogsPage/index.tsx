import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { DialogsPageType } from "../../store/state";

const DialogsPage: React.FC<DialogsPageType> = ({
  dialogsData,
  messagesData,
}) => {
  const dialogsList = dialogsData.map((userObj, i) => (
    <Dialog key={i} {...userObj} />
  ));

  const messagesList = messagesData.map((messageObj) => (
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
