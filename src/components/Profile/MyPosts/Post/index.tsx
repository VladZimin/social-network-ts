import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
  postText: string;
  likesCount: number;
};

const Post: React.FC<PostPropsType> = ({ postText, likesCount }) => {
  return (
    <>
      <div className={s.post}>
        <img
          src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
          alt="Avatar"
        />
        {postText}
        <div className={s.likePost}>likes: {likesCount}</div>
      </div>
    </>
  );
};

export default Post;
