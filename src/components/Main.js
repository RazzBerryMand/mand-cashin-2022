import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="content-box">
        <h2>About</h2>
        <ul className="about-list">
          <li>
            I'm a Front End Developer. (Probably what's brought you here!)
          </li>
          <li>The rest of my time is spent playing Pokémon GO.</li>
          <li>True Mancunian. Born, raised and living in Manchester, UK.</li>
          <li>My pronouns are She/Her. Always be inclusive and respectful.</li>
        </ul>
      </div>
      <div className="content-box">
        <h2>Skills</h2>
        <p>
          Since 2018, I've been building beautifully performant websites and
          PWAs. My preferred tech stack is React JS/TS with Tailwind CSS and
          Storybook, however I'm just as comfortable dealing with Vanilla JS or
          jQuery and CSS/Sass.
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
        <h2>Outreach</h2>
        <p>
          During lockdown, I gave a lot of my spare time to Code Your Future,
          where I taught refugees and people from underprivileged backgrounds
          how to code. I have also volunteered as an instructor at Code First
          Girls and delivered talks at Code and Stuff.
        </p>
        <p>
          Collectively, we need to encourage more women and enby/trans individuals
          to pursue careers in tech.
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
          if there's a conference or meetup that you'd like me to speak at.
        </p>
      </div>
      <div className="content-box">
        <h2>Vlog</h2>
        <p>
          Please subscribe to my{" "}
          <a
            href="https://www.youtube.com/channel/UCn812ePu4R5pIqEVWaNdHNg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>{" "}
          channel.
        </p>
        <p>
          I create videos to share my tips with other trainers. I try to attend
          all in-person events and ranked PvP tournaments.
        </p>
        <p>
          Not played before? Download the app today and use my referral code:
          RDYY7CKK9.
        </p>
      </div>
    </main>
  );
};
