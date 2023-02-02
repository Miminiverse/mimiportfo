import React from "react";
import panda from "../assets/panda.png";

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
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt="panda"/>
          <p>
          Blog app with Oauth login with Google
          <br />
          Each user has their own view which they can post/edit/delete
          <br />
          Backend: API from Django Rest Framework 
          Frontend: React
          </p>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <p>
        Line 3:8:   'devlog' is defined but never used                                                                         
        Line 4:8:   'getInspirred' is defined but never used                                                                 
        Line 9:9:   'projects' is assigned a value but never used 
          </p>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <p>
          Line 3:8:   'devlog' is defined but never used                                                                        
          Line 4:8:   'getInspirred' is defined but never used                                                                  
          Line 9:9:   'projects' is assigned a value but never used 
          </p>
        </div>
      </div>
      </div>






   






 
      <br />
    </section>
  );
};

export default Projects;