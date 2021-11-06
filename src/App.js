import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";

import "./Assets/CSS/All.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  useEffect(() => {
    document.title = "Home | House on the hill";
  }, []);
  return (
    <>
      <Navbar />
      <div className="home-overlay"></div>
      <div className="home-top"></div>
      <Home />
    </>
  );
}

export default App;
