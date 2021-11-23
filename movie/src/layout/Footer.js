import React from "react";
import "./Footer.css";

const Footer = ({ text }) => {
  return (
    <>
      <footer className="footer">
        {text} - {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Footer;
