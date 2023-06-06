import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <nav className="container">
      <Link to="/">Home</Link>
      <Link to="/login">Login | Criar</Link>
    </nav>
  );
};

export default Header;
