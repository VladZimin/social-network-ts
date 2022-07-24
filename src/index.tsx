import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, state, subscriber, updatePostText } from "./store/state";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
subscriber(rerenderEntireTree);
