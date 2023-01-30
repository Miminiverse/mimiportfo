import React from "react";
import HeroImg from "../assets/hero-img.png";
import babyyoda from "../assets/babyyoda.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
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
               "Designer ()", 2000, "Developer ()", 2000, () => {
                console.log("Done Typing")
              }
            ]}
            cursor={true}
            repeat={Infinity}
            style={{fontSize: '1em'}}
            
            />
          </h1>            

          <p className="py-3 text-accent">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-1 pl-24 ">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
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