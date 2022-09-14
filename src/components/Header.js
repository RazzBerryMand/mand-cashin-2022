import React from "react";
import "./Header.css";
import profilePicture from "../assets/img.jpg";

export const Header = () => {
  return (
    <header>
      <img src={profilePicture} alt="Mand Cashin" />
      <div className="title-text">
        <h1>RAZZBERRYMAND</h1>
        <h2>Mand Cashin (She/Her)</h2>
      </div>
    </header>
  );
};
