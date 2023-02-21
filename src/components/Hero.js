import React from "react";
import babyyoda from "../assets/babyyoda.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSlackSquare,
} from "react-icons/ai";

import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-black pt-32 bg-white">
      <div className=" container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-4xl text-head pl-20">
          Welcome To 
          <br />
          <span className="text-yellow-400">Miminiverse</span>
          
            <TypeAnimation 
            sequence={[
               "Portfolio ()", 2000, "Resume ()", 2000, () => {
                console.log("Done Typing")
              }
            ]}
            cursor={true}
            repeat={Infinity}
            style={{fontSize: '1em'}}
            
            />
          </h1>            

          <p className="py-3 text-accent">
          Dear guest! 
          <br/>
          I'm thrilled to have you here on my first website - 
          think of it as the digital version of my 'baby steps'. 
          I've added some nifty features that even my monkey would be impressed by, 
          and I hope you'll have a blast exploring them.
          </p>

          <div className="flex py-1 pl-24 ">
            <a
              target="_blank"
              href="https://github.com/Miminiverse"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineSlackSquare size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={babyyoda}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;