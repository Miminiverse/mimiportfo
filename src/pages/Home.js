import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Search />
    <Projects />
    <About />
    <Contact />
    </>
  );
};

export default Home;