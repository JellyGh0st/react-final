import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import { PostsProvider } from "./contexts/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostsProvider>
    <LoginProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginProvider>
  </PostsProvider>
  
);
