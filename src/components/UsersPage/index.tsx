import { UserDataType } from "../../redux/state";
import { FC, useEffect } from "react";
import s from "./UsersPage.module.css";

export type UsersPageType = {
  users: UserDataType[];
  toggleFollow: (userId: number) => void;
  setUsers: (users: UserDataType[]) => void;
};

export const UsersPage: FC<UsersPageType> = ({
  users,
  toggleFollow,
  setUsers,
}) => {
  useEffect(() => {
    setUsers([
      {
        id: 1,
        follow: false,
        fullName: "Vlad",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/663/663097.png",
        status: "Salam",
        location: { country: "Kyrgyzstan", city: "Bishkek" },
      },
      {
        id: 2,
        follow: true,
        fullName: "Vanya",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/663/663097.png",
        status: "Privet",
        location: { country: "Russia", city: "Yekaterinburg" },
      },
      {
        id: 3,
        follow: false,
        fullName: "Denis",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/663/663097.png",
        status: "Hi",
        location: { country: "Russia", city: "Saint-Petersburg" },
      },
    ]);
  }, []);
  const renderedUsers = users.map((u) => {
    const toggleFollowHandler = () => {
      toggleFollow(u.id);
    };

    return (
      <div key={u.id} className={s.userBlock}>
        <img src={u.photoUrl} className={s.userAvatar} alt="avatar" />
        <div>
          <button onClick={toggleFollowHandler}>
            {u.follow ? "unfollow" : "follow"}
          </button>
        </div>
        <div>full Name: {u.fullName}</div>
        <div>status: {u.status}</div>
        <div>country: {u.location.country}</div>
        <div>city: {u.location.city}</div>
      </div>
    );
  });

  return <>{renderedUsers}</>;
};
