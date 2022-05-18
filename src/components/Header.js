import React from "react";
import "./Header.css";
import profilePicture from "../assets/IMG_3010.jpg";

export const Header = () => {
  return (
    <header>
      <img src={profilePicture} alt="Mand Cashin" />
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
