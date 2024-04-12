import { FC } from "react";
import s from "./UsersPage.module.css";
import loader from "../../assets/loader.svg";
import { NavLink } from "react-router-dom";
import { UsersPageStateType } from "../../redux/reducers/usersReducer";
import defaultPhoto from "../../assets/deafaultPhotopng.png";

type UsersPageType = UsersPageStateType & {
  changePageHandler: (pageNumber: number) => void;
  unfollowUsersTC: (userId: number) => void;
  followUsersTC: (userId: number) => void;
};

//const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/663/663097.png";

export const UsersPage: FC<UsersPageType> = ({
  currentPage,
  pageSize,
  users,
  isFetching,
  changePageHandler,
  totalUsersCount,
  isFollowing,
  unfollowUsersTC,
  followUsersTC,
}) => {
  const pages: number[] = [];
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const renderedPages = pages.map((p) => (
    <span
      onClick={() => changePageHandler(p)}
      className={`${s.pages} ${currentPage === p ? s.selectedPage : ""}`}
      key={p}
    >
      {p}
    </span>
  ));
  const renderedUsers = users.map((u) => {
    const toggleFollowHandler = () => {
      if (u.followed) {
        unfollowUsersTC(u.id);
      } else {
        followUsersTC(u.id);
      }
    };
    return (
      <div key={u.id} className={s.userBlock}>
        <NavLink to={`/profile/${u.id}`}>
          <img
            src={u.photos.small ? u.photos.small : defaultPhoto}
            className={s.userAvatar}
            alt="avatar"
          />
        </NavLink>
        <div>
          <button
            onClick={toggleFollowHandler}
            disabled={isFollowing.some((id) => id === u.id)}
          >
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
      {isFetching ? <img src={loader} alt={"Loader"} /> : renderedUsers}
    </>
  );
};
