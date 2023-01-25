import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: uilogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },

  ];

  return (
    <section className="bg-primary bg-white text-black px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        
            <div className="relative" >
              <img src={devlog} />
              <div className=" bg-white justify-center  ">
                <p className="py-5 text-center font-bold px-2 ">
                BLOG APP
                </p>

                <div className="mx-auto">
                  <a
                    href="#"
                    className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
                  >
                    Live
                  </a>
                  <a
                    href="#"
                    className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          

      </div>
      <br />
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        
        <div className="relative" >
          <img src={devlog} />
          <div className=" bg-white justify-center  ">
            <p className="py-5 text-center font-bold px-2 ">
             TRACKING APP
            </p>

            <div className="mx-auto">
              <a
                href="#"
                className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
              >
                Live
              </a>
              <a
                href="#"
                className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      

  </div>
  <br />
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        
        <div className="relative" >
          <img src={devlog} />
          <div className=" bg-white justify-center  ">
            <p className="py-5 text-center font-bold px-2 ">
              BLOG APP 
            </p>

            <div className="mx-auto">
              <a
                href="#"
                className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
              >
                Live
              </a>
              <a
                href="#"
                className="no-underline px-5 py-2 bg-yellow-400 mr-5 font-bold text-black"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      

  </div>
    </section>
  );
};

export default Projects;