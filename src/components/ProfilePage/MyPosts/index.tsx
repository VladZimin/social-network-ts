import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import { PostDataType } from "../../../redux/state";

export type PostsPropsType = {
  postsData: PostDataType[];
  newPostText: string;
  addPost: (postText: string) => void;
  updatePostText: (newText: string) => void;
};

class MyPosts extends React.Component<PostsPropsType> {
  render() {
    const { postsData, newPostText, updatePostText, addPost } = this.props;
    const postsList = postsData.map((postObj) => (
      <Post
        key={postObj.id}
        postText={postObj.postText}
        likesCount={postObj.likesCount}
      />
    ));

    const addNewPost = () => {
      addPost(newPostText);
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
  }
}

export default MyPosts;
