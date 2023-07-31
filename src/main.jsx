// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import customHistory from "./utils/history";
import { AxiosInterceptor } from "./utils/Axios";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HistoryRouter history={customHistory}>
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </HistoryRouter>
  </>
);
