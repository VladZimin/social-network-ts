import React from "react";
import {
  DialogsStateType,
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/dialogsReducer";
import DialogsPage from "./index";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";

type MapStatePropsType = {
  dialogsPageData: DialogsStateType;
};
type MapDispatchPropsType = {
  sendMessage: () => void;
  updateMessageText: (newText: string) => void;
};
export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  dialogsPageData: state.dialogsPage,
});

export const DialogsPageContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(DialogsPage);
