import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { DialogsPageType } from "../../redux/state";

type PropsType = {
  dialogsPageData: DialogsPageType;
  sendMessage: (newMessage: string) => void;
  changeMessage: (newText: string) => void;
};

class DialogsPage extends React.Component<PropsType> {
  render() {
    const { dialogsPageData, changeMessage, sendMessage } = this.props;

    const dialogsList = dialogsPageData.dialogsData.map((userObj, i) => (
      <Dialog key={i} {...userObj} />
    ));
    const messagesList = dialogsPageData.messagesData.map((messageObj) => (
      <Message key={messageObj.id} message={messageObj.message} />
    ));

    const sendNewMessage = () => {
      sendMessage(dialogsPageData.newMessageText);
    };
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      changeMessage(e.currentTarget.value);
    };

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
