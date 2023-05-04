
import React, { useEffect , useState } from 'react'

export default function LargeNav(props) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

const navItems = [
      {id:"#hero-section", text: "Home"},
      {id:"#about-section", text: "About"},
      {id:"#skills-section", text: "Skills"},
      {id:"#certificates-section", text: "Certificates"},
      {id:"#projects-section", text: "Projects"},
      {id: null, toggleTheme: true, text: (<ion-icon name={props.isDarkMode ? "moon" : "sunny"}></ion-icon>)},
  ]

useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [prevScrollPos, visible]);
  
  const navElements = navItems.map(item => {
      return (
        <a key={item.id} href={item.id} onClick={item.toggleTheme ? props.handleToggleTheme : null}>
            <li>{item.text}</li>
        </a>
      )})
    
    return (
        <div className={`large-nav ${!visible ? "hidden" : ""}`}>
            <ul>
                {navElements}
            </ul>
        </div>
    )
}