import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";
import ErrorBoundary from "./Error";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root"),
);
