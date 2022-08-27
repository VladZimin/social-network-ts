import React from "react";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/dialogsReducer";
import DialogsPage from "./index";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

const mapStateToProps = (state: RootState) => ({
  dialogsPageData: state.dialogsPage,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  sendMessage: () => dispatch(sendMessage()),
  changeMessage: (newText: string) => dispatch(updateMessageText(newText)),
});

export const DialogsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsPage);
