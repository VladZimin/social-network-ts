import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import {
  ActionsTypes,
  DialogsPageType,
  sendMessage,
  updateMessageText,
} from "../../redux/state";

type PropsType = DialogsPageType & {
  dispatch: (action: ActionsTypes) => void;
};

const DialogsPage: React.FC<PropsType> = ({
  dialogsData,
  messagesData,
  newMessageText,
  dispatch,
}) => {
  const dialogsList = dialogsData.map((userObj, i) => (
    <Dialog key={i} {...userObj} />
  ));
  const messagesList = messagesData.map((messageObj) => (
    <Message key={messageObj.id} message={messageObj.message} />
  ));

  const sendMessageClick = () => {
    dispatch(sendMessage(newMessageText));
  };
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateMessageText(e.currentTarget.value));
  };

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsList}>{dialogsList}</div>
      <div className={s.messageBlock}>
        {messagesList}
        <div>
          <textarea
            onChange={onChangeMessage}
            value={newMessageText}
            placeholder="Enter message..."
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessageClick}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default DialogsPage;
