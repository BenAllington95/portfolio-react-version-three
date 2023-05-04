import React, { useState } from 'react';

import LargeNav from './components/LargeNav'
import HamburgerNav from './components/HamburgerNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'

import Projects from './components/Projects'
import Contact from './components/Contact'
import Modal from './components/Modal'


function App() {

  const [navbarActive, setNavbarActive] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div id={isDarkMode ? "dark-theme" : "light-theme"}>

<Modal />
      <LargeNav 
        handleToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
      />
      <HamburgerNav 
        navbarActive={navbarActive}
        setNavbarActive={setNavbarActive}
        handleToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
       />
      <Hero id="hero-section" /> 
       
      <div className="test">
        <About id="about-section" />
        <div className="test-img right-box"></div>
      </div>
      <Certificates id="certificates-section" />      
       <div className="test">
        <div className="test-img left-box"></div>
         <Skills id="skills-section" />
      </div>
      <Projects id="projects-section" />
      <Contact id="contact-section" /> 
      

    </div>
  )
}

export default App
