import { UserDataType } from "../../redux/state";
import { Component } from "react";
import s from "./UsersPage.module.css";
import axios from "axios";

export type UsersPageType = {
  users: UserDataType[];
  currentPage: number;
  totalUsers: number;
  pageSize: number;
  toggleFollow: (userId: number) => void;
  setUsers: (users: UserDataType[]) => void;
  setTotalUsers: (usersCount: number) => void;
  setCurrentPage: (usersCount: number) => void;
};

const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/663/663097.png";

export class UsersPage extends Component<UsersPageType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  changePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    const { users, toggleFollow, pageSize, totalUsers, currentPage } =
      this.props;

    const pages: number[] = [];
    const pagesCount = Math.ceil(totalUsers / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const renderedPages = pages.map((p) => (
      <span
        onClick={() => this.changePageHandler(p)}
        className={`${s.pages} ${currentPage === p ? s.selectedPage : ""}`}
        key={p}
      >
        {p}
      </span>
    ));
    const renderedUsers = users.map((u) => {
      const toggleFollowHandler = () => {
        toggleFollow(u.id);
      };
      return (
        <div key={u.id} className={s.userBlock}>
          <img
            src={u.photos.small ? u.photos.small : defaultPhoto}
            className={s.userAvatar}
            alt="avatar"
          />
          <div>
            <button onClick={toggleFollowHandler}>
              {u.followed ? "unfollow" : "follow"}
            </button>
          </div>
          <div>full Name: {u.name}</div>
          <div>status: {u.status ? u.status : "No status"}</div>
        </div>
      );
    });

    return (
      <>
        <div className={s.pagesBlock}>{renderedPages}</div>
        {renderedUsers}
      </>
    );
  }
}
