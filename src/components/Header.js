import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary bg-white text-black fixed w-full z-10">
      <a href="/" className="no-underline logo text-2xl text-accent"></a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        <ul className="flex pt-3">
          <li>
            <a
              className="no-underline text-accent hover:text-yellow-400 "
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="no-underline text-accent hover:text-yellow-400 "
              href="/#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="no-underline text-accent hover:text-yellow-400 "
              href="https://minhtampham0703.wordpress.com/"
            >
              Blog
            </a>
          </li>

          <li>
            {/* <a
              target="_blank"
              className="no-underline text-accent hover:text-yellow-400 "
              href="/resume"
            >
              Resume
            </a> */}
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <button
        onClick={handleToggle}
        id="menu-btn"
        className=" block md:hidden focus:outline-none"
      >
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>

      <nav
        className={
          !toggle
            ? "mobile-nav left-[-100%] bg-white"
            : "mobile-nav left-0 bg-white"
        }
      >
        <div className="md:hidden">
          <div
            className="absolute flex flex-col mx-auto items-center
        py-8 space-y-6 self-end mt-10 sm:w-auto sm:self-center
        left-6 right-6 bg-white font-bold drop-shadow-md
        "
          >
            <a
              className="no-underline text-accent hover:text-yellow-400"
              href="#"
            >
              About
            </a>
            <a
              className="no-underline text-accent hover:text-yellow-400"
              href="#"
            >
              Projects
            </a>
            <a
              className="no-underline text-accent hover:text-yellow-400"
              href="https://minhtampham0703.wordpress.com/"
            >
              Blog
            </a>
            {/* <a
              className="no-underline text-accent hover:text-yellow-400"
              href="/resume"
            >
              Resume
            </a> */}
          </div>
        </div>
      </nav>

      {/* <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <div className="bg-white">
        <ul className="flex flex-col">
          <li>
            <a className=" no-underline text-accent" href="/#about">About</a>
          </li>
          <li>
            <a className="no-underline text-accent" href="/#projects">Projects</a>
          </li>
         
          <li>
            <a className="no-underline text-accent"href="/#contact">Contact</a>
          </li>
        
        </ul>
        </div>

      </nav> */}

      {/* Toggle button */}
      {/* <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button> */}
    </header>
  );
};

export default Header;
