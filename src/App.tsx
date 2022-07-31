import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsPage from "./components/DialogsPage";
import { ActionsTypes, StateType } from "./redux/state";

type AppPropsType = {
  state: StateType;
  dispatch: (action: ActionsTypes) => void;
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
              newMessageText={state.dialogsPage.newMessageText}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </div>
  </div>
);

export default App;
