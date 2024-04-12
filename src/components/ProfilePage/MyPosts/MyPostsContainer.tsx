import {
  addPost,
  PostDataType,
  updatePostText,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./index";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";

type MapStatePropsType = {
  postsData: PostDataType[];
  newPostText: string;
};
type MapDispatchPropsType = {
  addPost: () => void;
  updatePostText: (newText: string) => void;
};

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText,
});

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts);
