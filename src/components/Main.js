import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="layout-container">
        <div className="main-subsection">
          <h2>About Me:</h2>
          <div className="content-box">
            <h3>Achievements 🏆</h3>
            <ul>
              <li>
                2022 TalkTalk North West Women in Tech Awards - Mentor of the
                Year Nominee
              </li>
              <li>
                2022 Northern Power Women Awards - Mentor of the Year Shortlist
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Technical Knowledge 🧰</h3>
            <ul>
              <li>
                Skills: React, Next.js, Storybook, Tailwind, Styled Components,
                Netlify, Magento2, Shopify, Contentful, Strapi, Optimizely,
                GraphQL, Jest, Testing Library
              </li>
              <li>
                Tools: VSCode, Figma, Sketch, Git, Jira, Lighthouse, VWO, Adobe
                Target
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Professional Experience 💼</h3>
            <ul>
              <li>Currently working at On the Beach</li>
              <li>
                (Previously Auto Trader, DEPT®, MAG,
                Ampersand, JD Sports and Code Computerlove)
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Community 🌱</h3>
            <ul>
              <li>Volunteered as a mentor at CodeandStuff, CodeYourFuture and Code First Girls</li>
              <li>D&I is important to me and I strive to deliver talks to raise awareness whenever possible</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
