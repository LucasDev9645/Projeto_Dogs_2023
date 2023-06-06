import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
