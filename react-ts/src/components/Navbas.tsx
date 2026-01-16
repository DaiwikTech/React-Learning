import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Hide</Link>
        </li>

        <li>
          <Link to="/form">Form</Link>
        </li>

        <li>
          <Link to="/calage">Calculate Age</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
