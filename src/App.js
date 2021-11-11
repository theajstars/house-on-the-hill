import React, { useEffect } from "react";
import { ToastProvider } from "react-toast-notifications";

import "./Assets/CSS/All.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
function App() {
  useEffect(() => {
    document.title = "Home | House on the hill";
  }, []);
  return (
    <>
      <Navbar />
      <ToastProvider>
        <div className="home-overlay"></div>
        <div className="home-top"></div>
        <Home />
      </ToastProvider>
    </>
  );
}

export default App;
