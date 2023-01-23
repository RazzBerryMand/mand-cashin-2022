import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div className="layout-container">
        <div className="main-subsection">
          <h2>Professional Info</h2>
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
            <h3>Achievements</h3>
            <ul>
              <li>
                2022 TalkTalk North West Women in Tech Awards - Mentor of the
                Year Nominee
              </li>
              <li>
                2022 Northen Power Women Awards - Mentor of the Year Shortlist
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Experience</h3>
            <ul>
              <li>Currently working at Auto Trader UK</li>
              <li>
                Previous employers include: DEPT®, MAG (Airports Group),
                Ampersand, JD Sports Fashion plc and Code Computerlove
              </li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Mentoring</h3>
            <ul>
              <li>Currently mentoring at CodeandStuff Manchester</li>
              <li>
                Previous volunteer roles include: CodeYourFuture and Code First
                Girls
              </li>
            </ul>
          </div>
        </div>
        <div className="main-subsection">
          <h2>Trainer Info</h2>
          <div className="content-box">
            <h3>About</h3>
            <ul>
              <li>Level: 50</li>
              <li>Team: Valor</li>
              <li>Region: Garden</li>
            </ul>
          </div>
          <div className="content-box">
            <h3>Attended</h3>
            <ul>
              <li>2023 Pokémon GO Regional Championships - Liverpool</li>
              <li>2022 Pokémon GO Fest - Berlin</li>
              <li>2022 Pokémon GO Safari Zone - Seville</li>
              <li>2021 Pokémon GO Safari Zone - Liverpool</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
