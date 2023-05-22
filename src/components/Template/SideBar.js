import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nima Dastmalchi</h2>
        <p><a href="mailto:nima.dastmalchi@gmail.com">nima.dastmalchi@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nima. I am a fourth-year computer science major at <a href="https://cs.ucla.edu/">UCLA</a>, graduating summa cum laude in June 2023. Previously,
        I was a software engineering intern at Amazon, where I developed a multithreading library in C++ for app developers on Amazon devices. I was also an Information Technology intern at
        <a href="https://https://dot.ca.gov">Caltrans</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      {/* TODO add contact icons */}
      <p className="copyright">&copy; Nima Dastmalchi.</p>
    </section>
  </section>
);

export default SideBar;
