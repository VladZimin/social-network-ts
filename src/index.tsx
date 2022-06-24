import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const state = {
  dialogsPage: {
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Fine! U?" },
      { id: 4, message: "Good!" },
    ],
    dialogsData: [
      { id: 1, name: "Ivan" },
      { id: 2, name: "Vlad" },
      { id: 3, name: "Denis" },
      { id: 4, name: "Viktor" },
      { id: 5, name: "Vadim" },
      { id: 6, name: "Kolya" },
    ],
  },
  profilePage: {
    postsData: [
      { id: 1, postText: "Привет!", likesCount: 27 },
      { id: 2, postText: "Как дела?", likesCount: 77 },
      { id: 3, postText: "Its OK!!", likesCount: 68 },
    ],
  },
};

const addPost = (value: string) => {
  const newPostMessage = { id: 4, postText: value, likesCount: 98 };
  state.profilePage.postsData.push(newPostMessage);
  rerenderEntireTree();
};

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
