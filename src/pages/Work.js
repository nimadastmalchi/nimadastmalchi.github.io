import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Work = () => (
  <Main
    title="Work Experience"
    description="Learn about Nima's work history."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/work">Work Experience</Link></h2>
        </div>
      </header>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href={"https://amazon.com"}>{"Software Engineer Intern @ Amazon"}</a></h3>
            <time className="published">{"June 2022 - September 2022"}</time>
          </header>
          <div className="description">
            <p>{"Our team developed a framework for easier app development on Amazon devices (like the Echo or FireTV)"}</p>
            <p>{"For my project, I created a multithreading library in C++ for app developers to use to increase the performance of apps on Amazon devices."}</p>
            <p>{"I implemented unit tests (using gTest & gMock C++ libraries) and integration tests (using Shell scripts) to root-cause and resolve complex multithreading issues like deadlock and race conditions"}</p>
            <p>{"I got Agile Development experience to meet tight deadlines for the project (we used Jira)."}</p>
          </div>
        </article>
      </div>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href={"https://dot.ca.gov/"}>{"IT intern @ Caltrans"}</a></h3>
            <time className="published">{"July 2019 - April 2021"}</time>
          </header>
          <div className="description">
            <p>{"I was an Information Technology Intern at the California Department of Transportation (Caltrans) during the school year."}</p>
            <p>{"I implemented computer imaging and encryption processes to align with Caltrans' strict security policies."}</p>
          </div>
        </article>
      </div>
    </article>
  </Main>
);

export default Work;
