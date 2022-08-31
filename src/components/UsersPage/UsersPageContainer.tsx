import { connect } from "react-redux";
import { UsersPage } from "./index";
import { AppDispatch, RootState } from "../../redux/store";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
} from "../../redux/reducers/usersReducer";
import { UserDataType } from "../../redux/state";

const mapStateToProps = (state: RootState) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsers: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleFollow: (userId: number) => dispatch(toggleFollow(userId)),
  setUsers: (users: UserDataType[]) => dispatch(setUsers(users)),
  setCurrentPage: (pageNumber: number) => dispatch(setCurrentPage(pageNumber)),
  setTotalUsers: (usersCount: number) =>
    dispatch(setTotalUsersCount(usersCount)),
});

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
