import React from "react";
import panda from "../assets/panda.png";
import {DiPython, DiHtml5, DiReact, DiDjango} from "react-icons/di";
import { SiJavascript, SiCsswizardry } from "react-icons/si";
import {AiOutlinePlus} from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      img: panda,
      title: "panda",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    }

  ];

  return (
    <section id="projects">

      <div className="max-w-6xl mx-auto px-5 mt-32 text-center">
        <h2 className="text-4xl text-center text-accent"> Let's take a Look</h2>

      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
            <h6>Languages</h6>
            <br />
          <div className="flex">
              <DiPython size={50} /> <DiDjango className="pb-3"size={80} />
          </div>
          <div className="flex">
              <DiHtml5 size={45} /> <SiCsswizardry className="ml-4" size={45} />
          </div>
          <br />
          <div className="flex">
          <SiJavascript size={45} /> <DiReact className="ml-4" size={45} />
          </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt="panda"/>
          <p>
          <h6>Tools and Tech Stack familiar: </h6>
          <p>Database: PostgreSQL, SQLite </p>
          <p>Storage: AWS S3</p>
          <p>Deployment: Heroku, Digital Ocean, Vercel </p>
          <p>Git, GitHub, Docker </p>
          <p>API Postman</p>
          <p>Oauth authentication</p>
          </p>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <h6> <a href="https://github.com/Miminiverse/mimibose" className="no-underline text-black" target="_blank" >
            Amazon Price Tracking</a>
          </h6>
          <p>Build in Python</p>
          <p>Library: Beautiful Soup</p>
          <p>Automatic email sent to user every day</p>
          <p>Deploy on Digital Ocean</p>
        </div>
      </div>

      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
          <h6> <a href="https://github.com/Miminiverse/starwars" className="no-underline text-black" target="_blank" >
          Displaying StarWars data</a>
          </h6>
          <p>Frontend: pure HTML, CSS and JS</p>
          <p>Backend: Node.js</p>
          <p>Data FETCH from an API</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt="panda"/>
          <p>
          <h6>Miminiverse Portfolio Website</h6>
          <p>Frontend: ReactJS</p>
          <p>Deploy: Vercel </p>
          <p>Features: User can search any topics they like & receive 5 suggestion links</p>
          </p>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <h6>Blog app with Oauth Google Login</h6>
          <p>Each user has their own view which they can post/edit/delete</p>
          <p>Backend: API from Django Rest Framework </p>
          <p>Frontend: React</p>
        </div>
      </div>

      </div>
      <br />
    </section>
  );
};

export default Projects;