import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="layout-container">
        <div className="footer-content">
          <p>Copyright © 2023 Mand Cashin</p>
          <a
            href="https://github.com/RazzBerryMand/mand-cashin-2022"
            target="_blank"
            rel="noreferrer"
          >
            View website source code
          </a>
        </div>
      </div>
    </footer>
  );
};
