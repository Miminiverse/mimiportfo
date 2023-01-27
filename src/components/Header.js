import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary bg-white text-black fixed w-full z-10">
      <a href="/" className="no-underline logo text-2xl font-bold text-accent">
        
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex pt-3">
          <li>
            <a className="no-underline font-bold  text-accent " href="/#about">About</a>
          </li>
          <li>
            <a className="no-underline font-bold  text-accent" href="/#projects">Projects</a>
          </li>

          <li>
            <a className="no-underline font-bold text-accent" href="/#contact">Contact</a>
          </li>

        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
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

      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;