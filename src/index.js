import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// We'll import our router and remove our service worker for convenience.
// make sure we add the react-router-dom package
// then we'll setup a basic router
import { BrowserRouter } from "react-router-dom";

// import everything needed for redux connection
import store from "./store";
import { Provider } from "react-redux";

// Wrap your provider over the App

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
