import React from "react";
import panda from "../assets/panda.png";
import { DiPython, DiHtml5, DiReact, DiDjango } from "react-icons/di";
import { SiJavascript, SiCsswizardry, SiTypescript } from "react-icons/si";
import { AiOutlinePlus, AiOutlineGithub } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      img: panda,
      title: "panda",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
    },
  ];

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-5 mt-32 text-center">
        <h2 className="text-4xl text-center text-accent">Projects</h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
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
          <br />
          <br />

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="panda" />
            <div>
              <h6>
                {" "}
                <a
                  href="https://mentorup-81w4.onrender.com "
                  className=" text-black"
                  target="_blank"
                >
                  MentorUp: Class Management System
                </a>
              </h6>
              <p>Tailored roles: administrators, mentors, and students </p>
              <p>
                Enhanced security: employs refresh tokens for added security
              </p>
              <p>Email Notifications upon successful registration</p>
              <p>
                Google Integration: securely sign in Google accounts and utilize
                Google Calendar to manage class schedules
              </p>
              <p>
                Slack Integration: empowers administrators to handle member
                profiles and customize private and public channels for seamless
                communication.
              </p>
              <a
                href="https://github.com/Mentor-Up/server"
                className=" text-black"
                target="_blank"
              >
                Backend: Node.js, Express.js, MongoDB, Google OAuth, SlackAPI
              </a>
              <br />
              <br />
              <a
                href="https://github.com/Mentor-Up/client"
                className=" text-black"
                target="_blank"
              >
                Frontend: React, MatetialUI
              </a>
            </div>
          </div>

          <br />
          <br />
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
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

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <br />

          <br />

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
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

          <br />
          <br />

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
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

          <div className="flex flex-col items-center  p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3">
            <img src={panda} className="w-16 -mt-14" alt="" />
            <div>
              <h6>Languages/Frameworks</h6>
              <br />

              <div className="flex">
                <DiHtml5 className="ml-7" size={45} />{" "}
                <SiCsswizardry className="ml-4" size={45} />
              </div>
              <br />
              <div className="flex">
                <SiJavascript className="ml-7" size={45} />
                <DiReact className="ml-4" size={50} />
              </div>
              <br />
              <div className="flex">
                <FaNode className="ml-7" size={55} />
                <SiTypescript className="ml-3" size={45} />{" "}
              </div>
              <br />
              <div className="flex">
                <DiPython className="ml-7" size={50} />{" "}
                <DiDjango className="pb-3" size={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Projects;
