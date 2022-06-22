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
type StateType = {
  postsData: Array<PostType>;
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
};

type AppPropsType = {
  state: StateType;
};

const App: React.FC<AppPropsType> = ({ state }) => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-content">
      <Routes>
        <Route
          path="profile"
          element={<Profile postsData={state.postsData} />}
        />
        <Route
          path="messages/*"
          element={
            <DialogsPage
              messagesData={state.messagesData}
              dialogsData={state.dialogsData}
            />
          }
        />
      </Routes>
    </div>
  </div>
);

export default App;
