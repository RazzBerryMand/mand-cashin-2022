import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="layout-container">
        <div className="main-subsection">
          <h2>About Me:</h2>
          <div className="content-box">
            <h3>Achievements</h3>
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
            <h3>Skills</h3>
            <ul>
              <li>
                Tech: React, Next.js, Storybook, Tailwind, Styled Components,
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
            <h3>Jobs</h3>
            <ul>
              <li>Currently working at Auto Trader UK</li>
              <li>
                Previous employers include: DEPT®, MAG (Airports Group),
                Ampersand, JD Sports Fashion plc, and Code Computerlove
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Mentoring</h3>
            <ul>
              <li>Currently mentoring at CodeandStuff</li>
              <li>
                Previous volunteer roles include: CodeYourFuture and Code First
                Girls
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
