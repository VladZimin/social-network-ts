import React from "react";

import s from "./MyPosts.module.css";

import Post from "./Post";

const MyPosts = () => {
  const postsData = [
    { id: 1, postText: "Привет!", likesCount: 27 },
    { id: 2, postText: "Как дела?", likesCount: 77 },
    { id: 3, postText: "Its OK!!", likesCount: 68 },
  ];

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea />
          <br />
          <button>отправить</button>
        </div>
        <div className={s.allPosts}>
          {postsData.map((postObj) => (
            <Post
              key={postObj.id}
              postText={postObj.postText}
              likesCount={postObj.likesCount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
