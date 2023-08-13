import React from "react";
import panda from "../assets/panda.png";
import { DiPython, DiHtml5, DiReact, DiDjango } from "react-icons/di";
import { SiJavascript, SiCsswizardry } from "react-icons/si";
import { AiOutlinePlus, AiOutlineGithub } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      img: panda,
      title: "panda",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
  ];

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-5 mt-32 text-center">
        <h2 className="text-4xl text-center text-accent">
          What can I do for you?
        </h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="" />
            <div>
              <h6>Languages</h6>
              <br />

              <div className="flex">
                <DiHtml5 size={45} />{" "}
                <SiCsswizardry className="ml-4" size={45} />
              </div>
              <br />
              <div className="flex">
                <SiJavascript size={45} />{" "}
                <DiReact className="ml-4" size={50} />
              </div>
              <br />
              <div className="flex items-center justify-center">
                <FaNode size={55} />{" "}
              </div>
              <br />
              <div className="flex">
                <DiPython size={50} /> <DiDjango className="pb-3" size={80} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="panda" />
            <div>
              <h6>Technologies & Tools used: </h6>
              <p>
                Database & Storage: MongoDB, GraphQL/Hygrapgh, PostgreSQL,
                SQLite, AWS S3{" "}
              </p>
              <p>Real-time: Websocket | SocketIO </p>
              <p>Hosting: Heroku, Digital Ocean, Vercel, Netlify, Render </p>
              <p>Container: Docker</p>
              <p>API testing: Postman</p>
              <p>Version & Project management: Git | GitHub | Jira</p>
              <p>Authentication: OAuth, Passport</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="" />
            <div>
              <h6>
                {" "}
                <a
                  href="https://talckatoo.me "
                  className=" text-black"
                  target="_blank"
                >
                  Talckatoo: Real-Time Multilingual Chat Application
                </a>
              </h6>
              <p>Text & Voice messaging with real-time translation</p>
              <p>Voice-To-Text and Text-To-Voice features</p>
              <p>AI-powered “@birdie” bot for user inquiries</p>
              <p>
                Features: User can search any topics they like & receive 5
                suggestion links
              </p>
              <a
                href="https://github.com/Talckatoo/talckatoo_server"
                className=" text-black"
                target="_blank"
              >
                Backend: Node.js, Express.js, MongoDB, SocketIO, Typescript,
                chatGPT, Rapid API
              </a>
              <br />
              <br />
              <a
                href="https://github.com/Talckatoo/talckatoo_client"
                className=" text-black"
                target="_blank"
              >
                Frontend: React, Tailwind CSS, Typescript, WhisperAI
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="" />
            <div>
              <h6>
                {" "}
                <a
                  href="https://github.com/Miminiverse/mimiportfo"
                  className="text-black"
                  target="_blank"
                >
                  Miminiverse Portfolio Website
                </a>
              </h6>
              <p>Frontend: ReactJS</p>
              <p>Deploy: Vercel </p>
              <p>Responsive design: Tailwind CSS</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="panda" />
            <div>
              <h6>
                {" "}
                <a
                  href="https://github.com/Miminiverse/react-cockatoo"
                  className=" text-black"
                  target="_blank"
                >
                  Todo List
                </a>
              </h6>
              <p>User can get, create, edit, delete a note</p>
              <p>User can utilize a hands-free voice-to-text feature</p>
              <p>Frontend: HTML, CSS and JS, React, Typescript</p>
            </div>
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="" />
            <div>
              <h6>
                {" "}
                <a
                  href="https://github.com/Miminiverse/comment-api"
                  className=" text-black"
                  target="_blank"
                >
                  Nested Comment System
                </a>
              </h6>
              <p>User can log in with Google account to create a blog</p>
              <p>Infinite nested comment features</p>
              <a
                href="https://github.com/Miminiverse/comment-api"
                className=" text-black"
                target="_blank"
              >
                Backend: Node.js, Express.js, MongoDB, OAuth with Passport
              </a>
              <br />
              <br />
              <a
                href="https://github.com/Miminiverse/comment-front-end"
                className=" text-black"
                target="_blank"
              >
                Frontend: React, Tailwind CSS, Typescript
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Projects;
