import React from "react";
import babyyoda from "../assets/babyyoda.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSlackSquare,
} from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { BsWordpress } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-black pt-16 bg-white">
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
            I thrive on turning user’s pain points into tangible solutions.
            Starting with problems, I can conduct user’s interviews, write
            design document, sketch the products on Figma, build responsive
            website with UI/UX in mind, perform and manage beta testing, release
            frequent updates and turn conceptual ideas into a clearly defined
            series of sprints. Happy to connect!
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
          <div className="flex py-1 pl-24 ">
            <a
              target="_blank"
              href="tam.p@devlaunchers.com"
              className="pr-4 inline-block text-accent hover:text-yellow-400"
            >
              {" "}
              <MdOutgoingMail size={40} />{" "}
            </a>
            <p className="italic text-black pt-2"> minhtamphamtol@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
