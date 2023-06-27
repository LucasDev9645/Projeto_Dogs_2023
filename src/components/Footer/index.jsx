import React from "react";

import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
