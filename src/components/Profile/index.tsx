import React from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import MyPosts from "./MyPosts";
import { PostType } from "../../App";

export type PostsPropsType = {
  postsData: Array<PostType>;
  addPost: (value: string) => void;
};

const Profile: React.FC<PostsPropsType> = ({ postsData, addPost }) => {
  return (
    <>
      <div className={s.content}>
        <div className={s.profileImg}>
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div>ava + description</div>
        <MyPosts postsData={postsData} addPost={addPost} />
      </div>
    </>
  );
};

export default Profile;
