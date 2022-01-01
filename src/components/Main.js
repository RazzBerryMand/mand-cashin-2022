import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="content-box">
        <h2>About</h2>
        <p>I live in Manchester, England. My pronouns are She/Her.</p>
      </div>
      <div className="content-box">
        <h2>Front End Development</h2>
        <p>
          I have roughly 3 years of commercial HTML, CSS, and JS experience. In
          2018, I learned to code at Northcoders and have since worked in-house
          and for digital agencies.
        </p>
        <p>
          React is my preferred tech stack, with an emphasis on site performance
          and a smooth user experience. CRO, accessibility, and agile processes
          also excite me.
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
          if you want to see some examples of my work.
        </p>
      </div>
      <div className="content-box">
        <h2>Giving Back</h2>
        <p>
          I am obsessed with diversity and inclusion. In my spare time I
          volunteer as a mentor at Code Your Future.
        </p>
        <p>
          If you are a member of a minority group and are considering a career
          in tech, send me a message on{" "}
          <a
            href="https://www.linkedin.com/in/mandcashin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          . I will offer my advice and guide you in the direction of some free
          resources to get you started.
        </p>
      </div>
      <div className="content-box">
        <h2>Pokémon GO</h2>
        <p>
          I have a{" "}
          <a
            href="https://www.youtube.com/channel/UCn812ePu4R5pIqEVWaNdHNg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>{" "}
          where I vlog about my adventures and share trainer tips.
        </p>
      </div>
    </main>
  );
};
