// src/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";

function Navbar() {
  const { value } = useContext(MyContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <span>{value}</span>
    </nav>
  );
}

export default Navbar;