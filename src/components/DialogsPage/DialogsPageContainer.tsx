import {
  DialogsStateType,
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/dialogsReducer";
import dialogsPage from "./index";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ComponentType } from "react";

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

export default compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    sendMessage,
    updateMessageText,
  })
)(dialogsPage);
