import React from "react";
import "./Footer.scss";

const Footer = () => {
  const yearText = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>
        <small>
          {" "}
          Copyright &copy; 2021-
          {yearText()} Rate-a-movie. All Rights Reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;
