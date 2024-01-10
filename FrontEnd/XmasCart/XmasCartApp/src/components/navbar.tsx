import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Sidebar from "./Sidebar"; // Update the import path as needed
import useOutsideClick from "../../src/hooks/useOutsideClick"; // Update the import path as needed

const Navbar: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Adjust based on your Sidebar component

  useOutsideClick(sidebarRef, () => {
    if (isSidebarVisible) setIsSidebarVisible(false);
  });

  return (
    <nav className="navbar navbar-expand-lg sticky-top navcolor">
      <Link className="navbar-brand" to="/">
        <span>🎅 </span> XMasMart
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deals">
              Deals
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="btn btn-secondary ml-auto"
      >
        {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button> */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        type="button"
        className="btn btn-light"
      >
        {isSidebarVisible ? <i>Less!</i> : <i> More!</i>}
      </button>
      {isSidebarVisible && <Sidebar ref={sidebarRef} />}{" "}
      {/* Adjust if Sidebar is a functional component */}
    </nav>
  );
};

export default Navbar;
