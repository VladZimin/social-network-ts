import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
} from "../../redux/reducers/usersReducer";
import { UserDataType } from "../../redux/state";
import { Component } from "react";
import axios from "axios";
import { UsersPage } from "./index";

export type UsersPageContainerType = {
  users: UserDataType[];
  currentPage: number;
  totalUsers: number;
  pageSize: number;
  isFetching: boolean;
  toggleFollow: (userId: number) => void;
  setUsers: (users: UserDataType[]) => void;
  setTotalUsersCount: (usersCount: number) => void;
  setCurrentPage: (usersCount: number) => void;
  setIsFetching: (value: boolean) => void;
};

class UsersPageContainer extends Component<UsersPageContainerType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setIsFetching(false);
      });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    const {
      users,
      toggleFollow,
      pageSize,
      totalUsers,
      currentPage,
      isFetching,
    } = this.props;

    return (
      <UsersPage
        users={users}
        currentPage={currentPage}
        totalUsers={totalUsers}
        pageSize={pageSize}
        isFetching={isFetching}
        toggleFollow={toggleFollow}
        changePageHandler={this.changePageHandler}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsers: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
})(UsersPageContainer);
