import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { DialogsPageContainer } from "./components/DialogsPage/DialogsPageContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => (
  <div className="app-wrapper">
    <HeaderContainer />
    <Navbar />
    <div className="app-content">
      <Routes>
        <Route path="profile" element={<ProfilePageContainer />}>
          <Route path=":userId" element={<ProfilePageContainer />} />
        </Route>
        <Route path="messages/*" element={<DialogsPageContainer />} />
        <Route path="users" element={<UsersPageContainer />} />
      </Routes>
    </div>
  </div>
);

export default App;
