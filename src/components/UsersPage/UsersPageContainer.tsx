import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  UserDataType,
  UsersPageStateType,
} from "../../redux/reducers/usersReducer";
import { Component } from "react";
import axios from "axios";
import { UsersPage } from "./index";

class UsersPageContainer extends Component<UsersPageContainerType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
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
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
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
      totalUsersCount,
      currentPage,
      isFetching,
    } = this.props;

    return (
      <UsersPage
        users={users}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        isFetching={isFetching}
        toggleFollow={toggleFollow}
        changePageHandler={this.changePageHandler}
      />
    );
  }
}

type MapDispatchPropsType = {
  toggleFollow: (userId: number) => void;
  setUsers: (users: UserDataType[]) => void;
  setTotalUsersCount: (usersCount: number) => void;
  setCurrentPage: (usersCount: number) => void;
  setIsFetching: (value: boolean) => void;
};

type UsersPageContainerType = UsersPageStateType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): UsersPageStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
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
