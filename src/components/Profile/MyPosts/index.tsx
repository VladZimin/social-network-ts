import React, { ChangeEvent, useState } from "react";

import s from "./MyPosts.module.css";

import Post from "./Post";
import { PostsPropsType } from "../index";

const MyPosts: React.FC<PostsPropsType> = ({ postsData, addPost }) => {
  const [newPost, setNewPost] = useState<string>("");

  const postsList = postsData.map((postObj) => (
    <Post
      key={postObj.id}
      postText={postObj.postText}
      likesCount={postObj.likesCount}
    />
  ));

  const addNewPost = () => {
    addPost(newPost);
    setNewPost("");
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.currentTarget.value);
  };

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea onChange={onChangeHandler} value={newPost} />
          <br />
          <button onClick={addNewPost}>отправить</button>
        </div>
        <div className={s.allPosts}>{postsList}</div>
      </div>
    </>
  );
};

export default MyPosts;
