import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { DialogsPagePropsType } from "./DialogsPageContainer";
// @ts-ignore
import { Navigate } from "react-router-dom";

class DialogsPage extends React.Component<DialogsPagePropsType> {
  render() {
    const { dialogsPageData, updateMessageText, sendMessage, isAuth } =
      this.props;

    const dialogsList = dialogsPageData.dialogsData.map((userObj, i) => (
      <Dialog key={i} {...userObj} />
    ));
    const messagesList = dialogsPageData.messagesData.map((messageObj) => (
      <Message key={messageObj.id} message={messageObj.message} />
    ));

    const sendNewMessage = () => {
      sendMessage();
    };
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateMessageText(e.currentTarget.value);
    };
    if (!isAuth) {
      return <Navigate to={"/login"} />;
    }
    return (
      <div className={s.dialogsWrapper}>
        <div className={s.dialogsList}>{dialogsList}</div>
        <div className={s.messageBlock}>
          {messagesList}
          <div>
            <textarea
              onChange={onChangeHandler}
              value={dialogsPageData.newMessageText}
              placeholder="Enter message..."
            ></textarea>
          </div>
          <div>
            <button onClick={sendNewMessage}>SEND</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogsPage;
