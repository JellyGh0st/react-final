import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import { PostsProvider } from "./contexts/PostsContext";
import { UsersProvider } from "./contexts/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersProvider>
    <PostsProvider>
      <LoginProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginProvider>
    </PostsProvider>
  </UsersProvider>
  
);
