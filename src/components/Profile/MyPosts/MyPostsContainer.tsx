import React from "react";
import {
  addPost,
  updatePostText,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./index";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

const mapStateToProps = (state: RootState) => ({
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addPost: () => dispatch(addPost()),
  changePostText: (newText: string) => dispatch(updatePostText(newText)),
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
