import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsPage from "./components/DialogsPage";
import { AddPostAction, StateType, UpdatePostTextAction } from "./store/state";

type AppPropsType = {
  state: StateType;
  dispatch: (action: AddPostAction | UpdatePostTextAction) => void;
};

const App: React.FC<AppPropsType> = ({ state, dispatch }) => (
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
              dispatch={dispatch}
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
