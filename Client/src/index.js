import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider> 
  </React.StrictMode>,
  document.getElementById("root")
);
