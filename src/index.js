import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./css/main.css";
import "./css/notFound.css";
import "./css/edit.css";
import App from "./components/app";
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
