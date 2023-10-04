import React from "react";
import babyyoda from "../assets/babyyoda.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSlackSquare,
} from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-black pt-32 bg-white">
      <div className=" container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-4xl text-head pl-20">
            <span>Tam Pham</span>
            <TypeAnimation
              sequence={[
                "Builder ()",
                2000,
                "Creator ()",
                2000,
                () => {
                  console.log("Done Typing");
                },
              ]}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h1>

          <p className="py-3 pl-20 text-accent">
            I thrive on turning user pain points into tangible solutions.
            Starting with problems, I can write design document, sketch the
            products on Figma and turn conceptual ideas into a clearly defined
            series of sprints.
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
            <p className="italic text-black pt-2">Github repositories</p>
          </div>
          <div className="flex py-1 pl-24 ">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/minh-tam-pham-8b6ba2200/"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <p className="italic text-black pt-2">LinkedIn</p>
          </div>
          <div className="flex py-1 pl-24 ">
            <a
              target="_blank"
              href="https://minhtampham0703.wordpress.com/"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <BsWordpress size={40} />{" "}
            </a>
            <p className="italic text-black pt-2">Tam's Pham Blog</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
