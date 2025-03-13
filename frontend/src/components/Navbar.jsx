import React from "react";
import { Link } from "react-router-dom"; //  React Router

const Navbar = () => {
  return (
    <header className="top">
      <h1>NOIR</h1>
      <nav>
        <ul className="tops">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/ourstory">Our Story</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
