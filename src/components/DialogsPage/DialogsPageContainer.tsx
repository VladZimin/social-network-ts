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
  isAuth: boolean;
};
type MapDispatchPropsType = {
  sendMessage: () => void;
  updateMessageText: (newText: string) => void;
};
export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  dialogsPageData: state.dialogsPage,
  isAuth: state.auth.isAuth,
});

export const DialogsPageContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(DialogsPage);
