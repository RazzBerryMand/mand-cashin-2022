import React from "react";
import "./Header.css";
import profilePicture from "../assets/IMG_9957.jpg";

export const Header = () => {
  return (
    <header>
      <img src={profilePicture} alt="Mand Cashin" />
      <div className="title-text">
        <h1>Mand Cashin</h1>
        <h2>@RazzBerryMand on everything!</h2>
      </div>
      <p>
        Fancy a chat? Find me on{" "}
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
