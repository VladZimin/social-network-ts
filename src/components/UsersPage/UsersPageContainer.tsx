import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCurrentPage,
  setIsFetching,
  setIsFollowing,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  UserDataType,
  UsersPageStateType,
} from "../../redux/reducers/usersReducer";
import { Component } from "react";
import { UsersPage } from "./index";
import { usersAPI } from "../../api/api";

class UsersPageContainer extends Component<UsersPageContainerType> {
  componentDidMount() {
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setIsFetching(false);
      });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
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
      isFollowing,
      setIsFollowing,
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
        setIsFollowing={setIsFollowing}
        isFollowing={isFollowing}
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
  setIsFollowing: (isFetching: boolean, userId: number) => void;
};

type UsersPageContainerType = UsersPageStateType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): UsersPageStateType => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
  isFollowing: state.usersPage.isFollowing,
});

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowing,
})(UsersPageContainer);
