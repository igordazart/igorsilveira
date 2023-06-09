import React from 'react'
import './App.css';
import AboutMe from './componentes/AboutMe';
import Home from './componentes/Home';
import Projects from './componentes/Projects';
import Resume from './componentes/Resume';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Contact from './componentes/Contact';


function App() {


  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact/>
    </main>
  );
}

export default App;
