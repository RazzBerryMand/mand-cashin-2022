import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <div className="main-container">
          <h2>About</h2>
          <p>I am based in Manchester, UK. My pronouns are She/Her.</p>
        </div>
        <div className="main-container">
          <h2>Front End Development</h2>
          <p>
            I have around 3 years commercial experience in HTML, CSS and JS. I
            learnt to code at Northcoders in 2018 and have since worked both in
            house and for digital agencies.
          </p>
          <p>
            My prefered tech stack is React with a focus on site performance and
            slick looking UX. I also get excited about CRO, accessibility and
            agile processes.
          </p>
          <p>
            If you'd like to see examples of my work, you can take a look at my
            GitHub and Codepen.
          </p>
        </div>
        <div className="main-container">
          <h2>Giving Back</h2>
          <p>
            I am obsessed with diversity and inclusion and in my spare time I
            volunteer as a mentor at Code Your Future.
          </p>
          <p>
            If you consider yourself to be of a minority background and are
            looking to start a career in tech, please reach out to me on
            LinkedIn and I will offer my advice and point you in the direction
            of some free resources.
          </p>
        </div>
        <div className="main-container">
          <h2>Pokémon GO</h2>
          <p>
            I have a YouTube channel where I share my adventures and trainer
            tips. Please take a moment to subscribe.
          </p>
        </div>
      </div>
    </main>
  );
};
