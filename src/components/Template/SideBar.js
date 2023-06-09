import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from './ContactIcons';

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
      <p>Hi, I&apos;m Nima. I recently graduated from <a href="https://cs.ucla.edu/">UCLA</a> with a B.S. in computer science in June 2023. Previously, I was a software engineering intern at Amazon, where I developed a multithreading library in modern C++ for app developers on Amazon devices. I was also an Information Technology intern at <a href="https://dot.ca.gov">Caltrans</a>.
      </p>
      <ContactIcons/>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Nima Dastmalchi.</p>
    </section>
  </section>
);

export default SideBar;
