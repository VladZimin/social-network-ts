import React from "react";
import {
  addPost,
  updatePostText,
} from "../../../redux/reducers/profileReducer";
import { StoreContext } from "../../../index";
import MyPosts from "./index";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const addNewPost = () => {
          store.dispatch(addPost(state.profilePage.newPostText));
        };
        const changePostText = (newText: string) => {
          store.dispatch(updatePostText(newText));
        };
        return (
          <MyPosts
            addPost={addNewPost}
            changePostText={changePostText}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
