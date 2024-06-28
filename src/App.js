import React from 'react'
import './App.css';
import AboutMe from './componentes/AboutMe';
import Home from './componentes/Home';
import Projects from './componentes/Projects';
import Resume from './componentes/Resume';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';


function App() {


  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
