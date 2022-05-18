import React from "react";
import "./Main.css";
import banner from "../assets/banner.jpg";

export const Main = () => {
  return (
    <main>
      <div className="content-box">
        <h2>About Me</h2>
        <ul className="about-list">
          <li>True Mancunian. Born and raised in Manchester, England.</li>
          <li>
            My pronouns are She/Her. (Gender diversity in tech is VERY important
            to me.)
          </li>
          <li>
            Fuelled by bubble tea. I know all the best spots for delicious boba!
          </li>
        </ul>
      </div>
      <div className="content-box">
        <h2>Front End Development</h2>
        <p>
          Since 2018, I've been creating beautifully performant websites and
          PWAs. React JS and Tailwind CSS with Storybook is my preferred tech
          stack, however I'm just as comfortable dealing with Vanilla JS or
          JQuery and CSS/Sass.
        </p>
        <p>
          I've spent the last four years working for some of Manchester's finest
          digital agencies, including Code Computerlove, Ampersand, and now
          DEPT®.
        </p>
        <p>
          Take a peek at my{" "}
          <a
            href="https://github.com/RazzBerryMand"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://codepen.io/razzberrymand"
            target="_blank"
            rel="noreferrer"
          >
            Codepen
          </a>{" "}
          if you want to see some examples of my code.
        </p>
      </div>
      <div className="content-box">
        <h2>Giving Back</h2>
        <p>
          During lockdown, I gave my spare time to Code Your Future, where I
          taught refugees and people from underprivileged backgrounds how to
          code. My main goal is to encourage more women, non-binary persons, and
          trans people to pursue careers in tech. I am now a volunteer
          instructor at Code First Girls.
        </p>
        <p>
          Contact me via{" "}
          <a
            href="https://www.linkedin.com/in/mandcashin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          if you have an event or meetup that you'd like me to speak at.
        </p>
      </div>
      <div className="content-box">
        <h2>Special Achievements</h2>
        <img src={banner} alt="Banner" />
      </div>
      <div className="content-box">
        <h2>Pokémon GO</h2>
        <p>
          Please subscribe to my{" "}
          <a
            href="https://www.youtube.com/channel/UCn812ePu4R5pIqEVWaNdHNg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>{" "}
          channel where I vlog about the game and share trainer tips.
        </p>
        <p>Not played PoGo before? You can use my referral code: RDYY7CKK9.</p>
      </div>
    </main>
  );
};
