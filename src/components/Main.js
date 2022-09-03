import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="content-box">
        <h2>About Me</h2>
        <ul className="about-list">
          <li>Front End Developer with four years' experience.</li>
          <li>True Mancunian, born, raised and residing in Manchester, UK.</li>
          <li>Proud to be inclusive and respectful of others.</li>
          <li>Level 50 Pokémon GO player and PVP enthusiast.</li>
        </ul>
      </div>
      <div className="content-box">
        <h2>Front End Development</h2>
        <p>
          I love building beautifully performant websites and PWAs. Although
          React JS/TS with Tailwind CSS and Storybook is my preferred tech
          stack, I'm equally at ease using Vanilla JS or jQuery and CSS/Sass.
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
        <h2>Tech Community Presence</h2>
        <p>
          Teaching people from underprivileged and minority backgrounds how to
          code has been a rewarding volunteer experience for me. Collectively,
          we need to encourage more women and enby/trans individuals to pursue
          careers in tech.
        </p>
        <p>
          To share my knowledge with others, I enjoy delivering talks. Contact
          me via{" "}
          <a
            href="https://www.linkedin.com/in/mandcashin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          if you'd like me to attend at your meet-up.
        </p>
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
          channel where I post videos with advice for fellow trainers. I attend
          in-game events all throughout Europe and compete in ranked in-person
          PVP tournaments in Manchester.
        </p>
        <p>Download the app today and use my referral code: RDYY7CKK9.</p>
      </div>
    </main>
  );
};
