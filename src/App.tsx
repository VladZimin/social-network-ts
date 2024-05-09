import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/reducers/appReducer";
import { RootState } from "./redux/store";
import loader from "./assets/loader.svg";

type AppPropsType = {
  isInitialized: boolean;
  initializeApp: () => void;
};

const App = ({ isInitialized, initializeApp }: AppPropsType) => {
  useEffect(() => {
    initializeApp();
  }, []);

  if (!isInitialized) {
    return <img src={loader} alt="Loader" />;
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="profile" element={<ProfilePageContainer />}>
            <Route path=":userId" element={<ProfilePageContainer />} />
          </Route>
          <Route path="messages/*" element={<DialogsPageContainer />} />
          <Route path="users" element={<UsersPageContainer />} />
          <Route path="login" element={<Login />} />
          <Route path="/404" element={<div>404: Page Not Found</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
