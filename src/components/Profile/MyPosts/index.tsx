import React from "react";

import s from "./MyPosts.module.css";

import Post from "./Post";
import { PostsPropsType } from "../index";

const MyPosts: React.FC<PostsPropsType> = ({ postsData }) => {
  const postsList = postsData.map((postObj) => (
    <Post
      key={postObj.id}
      postText={postObj.postText}
      likesCount={postObj.likesCount}
    />
  ));

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea />
          <br />
          <button>отправить</button>
        </div>
        <div className={s.allPosts}>{postsList}</div>
      </div>
    </>
  );
};

export default MyPosts;
