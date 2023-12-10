import React from "react";
import "./Header.css";
import profilePicture from "../assets/img.jpg";

export const Header = () => {
  return (
    <header>
      <div className="layout-container">
        <div className="heading">
          <h1>Mand Cashin</h1>
          <h2>Front End Developer</h2>
        </div>
        <div className="profile-box">
          <img src={profilePicture} alt="Mand Cashin" />
          <p>Cabin crew career changer 🛫</p>
          <p>Northcoders graduate, 2018 🎓</p>
          <p>6 years of professional experience 👩🏻‍💻</p>
          <p>Based in Manchester, UK 🏡</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <p>See More:</p>
            </li>
            <li>
              <a
                href="https://codepen.io/razzberrymand"
                target="_blank"
                rel="noreferrer"
              >
                CodePen
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RazzBerryMand"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/razzberrymand"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
