import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <Router>
    <App />
      <Route exact path="/kids" component={Navbar} />
  </Router>,

  document.getElementById("root")
);
