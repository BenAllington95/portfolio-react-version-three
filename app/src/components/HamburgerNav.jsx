import React, { useState, useEffect } from 'react'

import { Link } from "react-scroll";

export default function HamburgerNav(props) {
        
    function toggleMenu() {
        props.setNavbarActive(!props.navbarActive)
        // if (props.navbarActive) {
        //     document.body.classList.add('locked')
        // } else {
        //     document.body.classList.remove('locked')
        // }
    } // toggle the boolean of props.navbarActive - to open and close the hamburger nav
    
    
    useEffect(() => {
        function handleResize() {
      if (window.innerWidth <= 768) {
        props.setNavbarActive(false)
      }
    } // function runs when width of screen is less than 462 pixels

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
        
    }, [])
    
    function removeScrollLock() {
        props.setNavbarActive(false)
        document.body.classList.remove('locked')
    }
    
    function lockScreen() {
        if (props.navbarActive) {
            document.body.classList.add('locked')
        } else if (!props.navbarActive) {
            document.body.classList.remove('locked')
        }
    } // lock screen when the modal popup is active, until closed
  
    lockScreen()
    
    const navItems = [
      {id:"#hero-section", text: "Home"},
      {id:"#about-section", text: "About"},
      {id:"#skills-section", text: "Skills"},
      {id:"#certificates-section", text: "Certificates" },
      {id:"#projects-section", text: "Projects"},
      {id: null, toggleTheme: true, text: (<ion-icon name={props.isDarkMode ? "moon" : "sunny"}></ion-icon>)},      
  ]
  
//   const hamburgerNavElements = navItems.map(item => {
//       return (
//             <a key={item.id} href={item.id} onClick={item.toggleTheme ? props.handleToggleTheme : removeScrollLock}>
//                 <li>{item.text}</li>
//             </a>
//       )
//   })
    
const hamburgerNavElements = navItems.map(item => {
    if (item.toggleTheme) {
      return (
        <a key={item.id} onClick={props.handleToggleTheme}>
          <li>{item.text}</li>
        </a>
      );
    }
  
    return (
      <Link
        key={item.id}
        to={item.id.substring(1)}
        smooth={true}
        duration={1000}
        offset={0} // Adjust this value to account for fixed headers or other offsets
        onClick={removeScrollLock}
      >
        <li>{item.text}</li>
      </Link>
    );
  });
    
    
    return (
        <nav>
            <button onClick={toggleMenu}><ion-icon name="menu-outline"></ion-icon></button>
            <ul className={`menu ${props.navbarActive ? "active" : ""}`}>
                <button onClick={toggleMenu}><ion-icon name="close-sharp"></ion-icon></button>
                {hamburgerNavElements}
            </ul>
        </nav>
    )
}