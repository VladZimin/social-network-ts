import React from "react";
import {
  addPost,
  updatePostText,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./index";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";

const mapStateToProps = (state: RootState) => ({
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText,
});

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts);
