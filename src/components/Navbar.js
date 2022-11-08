import React from 'react';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-md navbar-dark d-flex">
    <div className="container-fluid">
  
      <img id="logo" src="logo.jpg" alt="logo" className="navbar-brand d-inline"/>
      <h3 className="navbar-brand text-white mt-2 d-inline">Lights Out</h3>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Discover" className="nav-link">Discover</Link>
          </li>
          <li className="nav-item">
            <Link to="/Events" className="nav-link">Events</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Navbar;