import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route exact path="/kids" component={Navbar} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
