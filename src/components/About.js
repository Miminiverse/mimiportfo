import React from "react";
import { Link } from "react-router-dom";
import { FcIdea } from "react-icons/fc";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-5 mt-10 text-center">
        <br />
        <div>
          {/* <a
            href="public/resume.pdf" // Make sure the path is correct
            download
            className="no-underline pr-4 inline-block text-accent text-yellow-400 text-center"
          >
            <div className="flex flex-row items-center text-black">
              <FcIdea size={20} />{" "}
              <span>
                <strong>Click me for resume, please!</strong>
              </span>{" "}
              <FcIdea size={20} />
            </div>
          </a> */}
          {/* 
          <br />
          <br /> */}
          {/* <p>
            I dedicate most of my free time building website with{" "}
            <strong className="underline decoration-yellow-400">
              Express.js
            </strong>{" "}
            , <strong className="underline decoration-yellow-400">React</strong>{" "}
            and{" "}
            <strong className="underline decoration-yellow-400">
              Typescript
            </strong>{" "}
          </p> */}
          <br />
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default About;
