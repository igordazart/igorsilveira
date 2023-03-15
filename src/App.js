import React from 'react'
import './App.css';
import AboutMe from './componentes/AboutMe';
import Home from './componentes/Home';
import Projects from './componentes/Projects';
import Resume from './componentes/Resume';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <main className="main">
      
      <Home/>
      <AboutMe/>
      <Projects/>
      <Resume />
    </main>
  );
}

export default App;
