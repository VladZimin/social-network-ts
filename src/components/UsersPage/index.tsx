import { UserDataType } from "../../redux/state";
import { FC, useEffect } from "react";
import s from "./UsersPage.module.css";
import axios from "axios";

export type UsersPageType = {
  users: UserDataType[];
  toggleFollow: (userId: number) => void;
  setUsers: (users: UserDataType[]) => void;
};

const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/663/663097.png";

export const UsersPage: FC<UsersPageType> = ({
  users,
  toggleFollow,
  setUsers,
}) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        setUsers(res.data.items);
      });
  }, []);

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

  return <>{renderedUsers}</>;
};
