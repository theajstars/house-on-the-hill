import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Kids from "./Components/Kids";

ReactDOM.render(
  <Router>
    <Route exact path="/kids" component={Kids} />
    <Route exact path="/" component={App} />
  </Router>,

  document.getElementById("root")
);
