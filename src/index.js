import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/custom.sass"
import { NotificationContextProvider } from "../src/store/notification-context"


ReactDOM.render(
  <NotificationContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </NotificationContextProvider>,
  document.getElementById("root")
);
