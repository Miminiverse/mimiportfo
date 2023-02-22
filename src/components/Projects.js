import React from "react";
import panda from "../assets/panda.png";
import {DiPython, DiHtml5, DiReact, DiDjango} from "react-icons/di";
import { SiJavascript, SiCsswizardry } from "react-icons/si";
import {AiOutlinePlus, AiOutlineGithub} from "react-icons/ai";


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
        <h2 className="text-4xl text-center text-accent">What can I do for you?</h2>

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
          <SiJavascript size={45} /> <DiReact className="ml-4" size={50} />
          </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt="panda"/>
          <div>
          <h6>Technologies & Tools used: </h6>
          <p>Database & Storage: PostgreSQL, SQLite, AWS S3 </p>
          <p>Hosting: Heroku, Digital Ocean, Vercel </p>
          <p>Container: Docker</p>
          <p>APIs: Postman</p>
          <p>Git | GitHub</p>
          <p>Oauth Authentication</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
          <h6> <a href="https://github.com/Miminiverse/mimiportfo" className="text-black" target="_blank" >
          Miminiverse Portfolio Website</a>
          </h6>
          <p>Frontend: ReactJS</p>
          <p>Deploy: Vercel </p>
          <p>Responsive design: Tailwind CSS</p>
          <p>Features: User can search any topics they like & receive 5 suggestion links</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
          <h6> <a href="https://github.com/Miminiverse/django_blog" className=" text-black" target="_blank" >
          Blog App with Google OAuth Login</a>
          </h6>
          <p>Each user has their own view which they can post/edit/delete</p>
          <p>Backend: API from Django Rest Framework </p>
          <p>Frontend: ReactJS</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt="panda"/>
          <div>
          <h6> <a href="https://github.com/Miminiverse/starwars" className=" text-black" target="_blank" >
          Displaying StarWars data</a>
          </h6>
          <p>Frontend: HTML, CSS and JS</p>
          <p>Backend: Node.js</p>
          <p>Data FETCH from an API</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
          <h6> <a href="https://github.com/Miminiverse/mimibose" className=" text-black" target="_blank" >
            Amazon Price Tracking</a>
          </h6>
          <p>Build with Python</p>
          <p>Library: Beautiful Soup</p>
          <p>Automatic email sent to user every day</p>
          <p>Deploy on Digital Ocean</p>
          </div>
        </div>
      </div>
      </div>
      <br />
    </section>
  );
};

export default Projects;