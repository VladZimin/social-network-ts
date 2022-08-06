import React from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import MyPosts from "./MyPosts";
import { PostDataType } from "../../redux/state";
import { ProfileActionsType } from "../../redux/reducers/profileReducer";

export type PostsPropsType = {
  postsData: PostDataType[];
  newPostText: string;
  dispatch: (action: ProfileActionsType) => void;
};

const Profile: React.FC<PostsPropsType> = ({ ...props }) => {
  return (
    <>
      <div className={s.content}>
        <div className={s.profileImg}>
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div>ava + description</div>
        <MyPosts {...props} />
      </div>
    </>
  );
};

export default Profile;
