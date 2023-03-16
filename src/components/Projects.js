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
          <p>Data: GraphQL, PostgreSQL, SQLite, AWS S3 </p>
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
          <h6> <a href="https://github.com/Miminiverse/graphql-task-app" className=" text-black" target="_blank" >
          GraphQL task app</a>
          </h6>
          <p>Front-end: ReactJS with MaterialUI</p>
          <p>Back-end: GraphQL using Hygraph</p>
          <p>State management: ApolloClient</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightYellow md:w-1/3">
          <img src={panda} className="w-16 -mt-14" alt=""/>
          <div>
          <h6> <a href="https://bore-api.vercel.app/" className=" text-black" target="_blank" >
            What should you do if you are bored?</a>
          </h6>
          <p>Front-end: ReactJS</p>
          <p>Fetching data from boreAPI</p>
          <p>Generate new activities with every click</p>
          <p>A list that user can save up to 3 activities in LocalStorage</p>
          </div>
        </div>
      </div>
      </div>
      <br />
    </section>
  );
};

export default Projects;


// extra1
{/* <div>
<h6> <a href="https://github.com/Miminiverse/boreAPI" className=" text-black" target="_blank" >
  Bore API</a>
</h6>
<p>Getting random activities</p>
<p>Saving in List using LocalStorage</p>
<p>User can remove the activities</p>
<p>Deploy on Digital Ocean</p>
</div> */}

// extra2
{/* <div>
<h6> <a href="https://github.com/Miminiverse/boreAPI" className=" text-black" target="_blank" >
  Bore API</a>
</h6>
<p>Container Tracking (APM terminal)</p>
<p>User enter the container</p>
<p>Returning info of each container</p>

</div> */}

// extra2
{/* <div>
<h6> <a href="https://github.com/Miminiverse/boreAPI" className=" text-black" target="_blank" >
  GraphQL Task App  </a>
</h6>
<p>Container Tracking (APM terminal)</p>
<p>User enter the container</p>
<p>Returning info of each container</p>

</div> */}