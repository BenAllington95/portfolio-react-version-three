import React, { useState, useEffect } from 'react';

import LargeNav from './components/LargeNav'
import HamburgerNav from './components/HamburgerNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'

import Projects from './components/Projects'
import Contact from './components/Contact'
import Modal from './components/Modal'
import Carousel from './components/Carousel';


function App() {

  const [navbarActive, setNavbarActive] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [scrollPosition, setScrollPosition] = useState(0);

  const [currentSection, setCurrentSection] = useState(0);
  
  const sectionIds = ['hero-section', 'about-section', 'certificates-section', 'projects-section', 'contact-section'];

  const getCurrentSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const element = document.getElementById(sectionIds[i]);
      const rect = element.getBoundingClientRect();
      // Check if any part of the section is within the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        return i;
      }
    }
    return 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      setCurrentSection(getCurrentSection());
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClick = () => {
    if (currentSection < sectionIds.length - 1) {
      const nextSectionId = sectionIds[currentSection + 1];
      const element = document.getElementById(nextSectionId);
      if (element) {
        const newPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: newPosition,
          behavior: 'smooth',
        });
        // Delay state update until after the scroll animation has completed
        setTimeout(() => {
          setCurrentSection(currentSection + 1);
        }, 500);  // Adjust this delay as needed
      }
    } else {
      // Scroll to the top when at the last section
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      // Delay state update until after the scroll animation has completed
      setTimeout(() => {
        setCurrentSection(0);  // Reset current section to the top
      }, 500);  // Adjust this delay as needed
    }
  };
  
  
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
      <About id="about-section"/>
      <Certificates id="certificates-section" />
      {/* <Skills id="skills-section" /> */}
      <Projects id="projects-section" />
      <h1 onClick={handleClick}className="arrow-down"> <ion-icon name={currentSection < sectionIds.length - 1 ? "chevron-down-outline" : "chevron-up-outline"}></ion-icon></h1>
      <Contact id="contact-section" />
      

      

    </div>
  )
}

export default App
