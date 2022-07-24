import React from "react";

import s from "./Profile.module.css";
import profileImg from "../../assets/profileImg.jpeg";
import MyPosts from "./MyPosts";
import { PostType } from "../../App";

export type PostsPropsType = {
  postsData: Array<PostType>;
  newPostText: string;
  addPost: () => void;
  updatePostText: (newText: string) => void;
};

const Profile: React.FC<PostsPropsType> = ({
  postsData,
  newPostText,
  addPost,
  updatePostText,
}) => {
  return (
    <>
      <div className={s.content}>
        <div className={s.profileImg}>
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div>ava + description</div>
        <MyPosts
          postsData={postsData}
          newPostText={newPostText}
          addPost={addPost}
          updatePostText={updatePostText}
        />
      </div>
    </>
  );
};

export default Profile;
