import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
