import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/state";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscriber(rerenderEntireTree);
