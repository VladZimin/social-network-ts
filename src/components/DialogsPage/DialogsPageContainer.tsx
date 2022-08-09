import React from "react";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/dialogsReducer";
import { StoreContext } from "../../index";
import DialogsPage from "./index";

const DialogsPageContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const sendNewMessage = () => {
          store.dispatch(sendMessage(state.dialogsPage.newMessageText));
        };
        const changeMessage = (newText: string) => {
          store.dispatch(updateMessageText(newText));
        };
        return (
          <DialogsPage
            changeMessage={changeMessage}
            sendMessage={sendNewMessage}
            dialogsPageData={state.dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsPageContainer;
