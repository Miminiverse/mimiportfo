import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Projects />
    <About />
    <Contact />
    </>
  );
};

export default Home;