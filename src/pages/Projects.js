import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import dayjs from 'dayjs';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Nima Dastmalchi's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>Some of my notable projects</p>
        </div>
      </header>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href={"https://github.com/nimadastmalchi/csp-ray-tracer"}>{"Concentrated Solar Power (CSP) Simulation"}</a></h3>
            <time className="published">{dayjs("2020-09-01").format('MMMM, YYYY')}</time>
          </header>
          <a href={"https://github.com/nimadastmalchi/csp-ray-tracer"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/csp-system.jpeg"}`} alt={"Ray tracing simulation"} />
          </a>
          <a href={"https://github.com/nimadastmalchi/csp-ray-tracer"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/csp.jpg"}`} alt={"Ray tracing simulation"} />
          </a>
          <a href={"https://www.honorstransfercouncil.org/_files/ugd/0c62f0_f0806b39d13744dba1d8cf5e34e085b9.pdf"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/poster.png"}`} alt={"Ray tracing simulation"} />
          </a>
          <div className="description">
            <p>{"Concentrated Solar Power (CSP) systems generate solar power by using mirrors or lenses to concentrated a receiver"}</p>
            <p>{"A C++ simulator program utilizes ray-tracing and various concepts from physics (reflection, refraction, snell's law, newton's law of cooling, heat capacity, etc.) to calculate the temperature and power output of a given CSP system."}</p>
            <p>{"Published a research paper on the 2020 edition of UC Berkeley's 'Think You?!' academic journal."}</p>
          </div>
        </article>
        <article className="mini-post">
          <header>
            <h3><a href={"https://github.com/nimadastmalchi/scramboard-app"}>{"Scramboard"}</a></h3>
            <time className="published">{dayjs("2022-03-01").format('MMMM, YYYY')}</time>
          </header>
          <a href={"https://github.com/nimadastmalchi/scramboard-app"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/scramboard.jpg"}`} alt={"Ray tracing simulation"} />
          </a>
          <div className="description">
            <p>{"Inspired by the Reddit Place project, Scramboard provides a collective pixel-board that can be edited in real-time by users logged into the site. Users can edit individual pixels and collectively create pixel art images."}</p>
            <p>{"Used React, Node, Express, Python."}</p>
          </div>
        </article>
        <article className="mini-post">
          <header>
            <h3><a href={"https://github.com/nimadastmalchi/8-ball-pool"}>{"3D 8 Ball Pool"}</a></h3>
            <time className="published">{dayjs("2022-05-01").format('MMMM, YYYY')}</time>
          </header>
          <a href={"https://github.com/nimadastmalchi/8-ball-pool"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/pool.gif"}`} alt={"8 Ball Pool"} />
          </a>
          <div className="description">
            <p>{"Developed an interactive simulation for a pool game that incorporates kinematic equations and collision detection to enable realistic physical motions of the pool balls on the table, while also introducing matrix transformations to support various view angles in 3D space."}</p>
            <p>{"Used JavaScript and concepts from computer graphics: ray tracing, shadow rendering, 3D modeling, texture mapping, etc."}</p>
          </div>
        </article>
        <article className="mini-post">
          <header>
            <h3>{"Multiplanetary System Simulation"}</h3>
            <time className="published">{dayjs("2022-05-01").format('MMMM, YYYY')}</time>
          </header>
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/solar-system.gif"}`} alt={"Multiplanetary System Simulation"} />
          </div>
          <div className="description">
            <p>{"In this project, I created a 3D solar system visualization using WebGL. I implemented various features like a sun with changing size and color, orbiting planets and moons with different properties, custom shaders for planet rings, and camera controls."}</p>
          </div>
        </article>
        <article className="mini-post">
          <header>
            <h3><a href={"https://github.com/nimadastmalchi/particle-collision-simulator"}>{"Particle Collisions Simulator"}</a></h3>
            <time className="published">{dayjs("2022-05-01").format('MMMM, YYYY')}</time>
          </header>
          <a href={"https://github.com/nimadastmalchi/particle-collision-simulator"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/collisions.gif"}`} alt={"Collisions"} />
          </a>
          <div className="description">
            <p>{"A simple Python (using PyGame) simulation of particle collisions using concepts from physics such as kinematics, gravity, and elastic collisions."}</p>
          </div>
        </article>
        <article className="mini-post">
          <header>
            <h3><a href={"https://github.com/nimadastmalchi/simple-router-firmware"}>{"IP Router Firmware"}</a></h3>
            <time className="published">{dayjs("2023-01-01").format('MMMM, YYYY')}</time>
          </header>
          <a href={"https://github.com/nimadastmalchi/simple-router-firmware"} className="image">
            <img src={`${process.env.PUBLIC_URL}${"/images/projects/router.png"}`} alt={"Router"} />
          </a>
          <div className="description">
            <p>{"In this project, I implemented an IP router in C++, which handles forwarding packets from clients to servers, and vice versa."}</p>
            <p>{"Specifically, the router firmware implemented forwarding IP packets, handling ARP protocol (ARP request sending and response receiving), and parsing/generating Ethernet frames and IP packets."}</p>
            <p>{"Using Mininet, I tested the router's functionality by simulating various network traffic and topologies."}</p>
            <p>{"See more here: https://github.com/nimadastmalchi/simple-router-firmware"}</p>
          </div>
        </article>
      </div>
    </article>
  </Main>
);

export default Projects;
