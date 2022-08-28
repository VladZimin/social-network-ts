import { connect } from "react-redux";
import { UsersPage } from "./index";
import { AppDispatch, RootState } from "../../redux/store";
import { setUsers, toggleFollow } from "../../redux/reducers/usersReducer";
import { UserDataType } from "../../redux/state";

const mapStateToProps = (state: RootState) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleFollow: (userId: number) => dispatch(toggleFollow(userId)),
  setUsers: (users: UserDataType[]) => dispatch(setUsers(users)),
});

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
