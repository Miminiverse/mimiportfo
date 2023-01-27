import React from "react";
import HeroImg from "../assets/hero-img.png";
import babyyoda from "../assets/babyyoda.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-black pt-32 bg-white">
      <div className=" container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-4xl text-head pl-10">
      WELCOME TO <br /> MIMINIVERSE <br />
            Developer ()
          </h1>            

          <p className="py-3">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-1 pl-10 ">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/"
              className="pr-4 inline-block text-accent hover:text-white"
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