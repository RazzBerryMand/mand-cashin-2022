import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <h1>Mand Cashin</h1>
      <p>
        Want to say hi? Reach me on{" "}
        <a
          href="https://twitter.com/razzberrymand"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        .
      </p>
    </header>
  );
};
