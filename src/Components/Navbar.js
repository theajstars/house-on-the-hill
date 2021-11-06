import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-item raleway">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item raleway">
        <Link to="/kids">Kids</Link>
      </div>
      <div className="nav-item raleway">
        <Link to="/donate">Kingdom donations</Link>
      </div>
    </div>
  );
}
