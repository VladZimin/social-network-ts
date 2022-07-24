import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsPage from "./components/DialogsPage";
import { StateType } from "./store/state";

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
          element={
            <DialogsPage
              dialogsData={state.dialogsPage.dialogsData}
              messagesData={state.dialogsPage.messagesData}
            />
          }
        />
      </Routes>
    </div>
  </div>
);

export default App;
