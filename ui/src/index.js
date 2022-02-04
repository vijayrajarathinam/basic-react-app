import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";

import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";

import App from "./App";
import store from "./redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const alertOptions = {
  timeout: 5000, //5 sec(s)
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    {/* <AlertProvider template={AlertTemplate} {...alertOptions}> */}
    <Router>
      <App />
    </Router>
    {/* </AlertProvider> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
