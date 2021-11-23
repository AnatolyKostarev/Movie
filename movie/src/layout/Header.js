import React from "react";
import "./Header.css";

const Header = ({ tel, email }) => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <div className="logo">Video</div>
          <div className="right">
            <a href={`tel: ${tel}`} className="tel">
              {tel}
            </a>
            <a href={`mailto: ${email}`} className="email">
              {email}
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
