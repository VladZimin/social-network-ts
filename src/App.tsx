import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsPage from "./components/DialogsPage";

export type PostType = {
  id: number;
  postText: string;
  likesCount: number;
};
export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
};

export type DialogsPageType = {
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
};
type ProfilePageType = {
  postsData: Array<PostType>;
  newPostText: string;
};
type StateType = {
  dialogsPage: DialogsPageType;
  profilePage: ProfilePageType;
};

type AppPropsType = {
  state: StateType;
  addPost: () => void;
  updatePostText: (newText: string) => void;
};

const App: React.FC<AppPropsType> = ({ state, addPost, updatePostText }) => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-content">
      <Routes>
        <Route
          path="profile"
          element={
            <Profile
              postsData={state.profilePage.postsData}
              newPostText={state.profilePage.newPostText}
              addPost={addPost}
              updatePostText={updatePostText}
            />
          }
        />
        <Route
          path="messages/*"
          element={<DialogsPage dialogsPage={state.dialogsPage} />}
        />
      </Routes>
    </div>
  </div>
);

export default App;
