import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
  followUsersTC,
  getUsersTC,
  setCurrentPage,
  unfollowUsersTC,
  UsersPageStateType,
} from "../../redux/reducers/usersReducer";
import { Component, ComponentType } from "react";
import { UsersPage } from "./index";
import { compose } from "redux";

class UsersPageContainer extends Component<UsersPageContainerType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };

  render() {
    const { setCurrentPage, getUsersTC, ...restProps } = this.props;

    return (
      <UsersPage changePageHandler={this.changePageHandler} {...restProps} />
    );
  }
}

type MapDispatchPropsType = {
  setCurrentPage: (usersCount: number) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
  unfollowUsersTC: (userId: number) => void;
  followUsersTC: (userId: number) => void;
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

export default compose<ComponentType>(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsersTC,
    unfollowUsersTC,
    followUsersTC,
  })
)(UsersPageContainer);
