import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import { PostsPropsType } from "../index";

const MyPosts: React.FC<PostsPropsType> = ({
  postsData,
  addPost,
  newPostText,
  updatePostText,
}) => {
  const postsList = postsData.map((postObj) => (
    <Post
      key={postObj.id}
      postText={postObj.postText}
      likesCount={postObj.likesCount}
    />
  ));

  const addNewPost = () => {
    addPost();
    updatePostText("");
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updatePostText(e.currentTarget.value);
  };

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea onChange={onChangeHandler} value={newPostText} />
          <br />
          <button onClick={addNewPost}>отправить</button>
        </div>
        <div className={s.allPosts}>{postsList}</div>
      </div>
    </>
  );
};

export default MyPosts;
