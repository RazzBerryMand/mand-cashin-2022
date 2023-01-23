import React from "react";
import "./Header.css";
import profilePicture from "../assets/img.jpg";

export const Header = () => {
  return (
    <header>
      <div className="layout-container">
        <div className="heading">
          <h1>RazzBerryMand</h1>
          <h2>Mand Cashin (She/Her)</h2>
        </div>
        <div className="profile-box">
          <img src={profilePicture} alt="Mand Cashin" />
          <p>
            Front End JavaScript Developer since 2018 | Pokémon GO player since
            2016 | Manchester, UK
          </p>
        </div>
        <div className="links">
          <ul>
            <li>
              <p>See More:</p>
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
                href="https://codepen.io/razzberrymand"
                target="_blank"
                rel="noreferrer"
              >
                Codepen
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mandcashin/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCn812ePu4R5pIqEVWaNdHNg"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/razzberrymand"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
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
