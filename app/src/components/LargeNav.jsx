
import React, { useEffect , useState } from 'react'
import { Link } from "react-scroll";

export default function LargeNav(props) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

const navItems = [
      {id:"#hero-section", text: "Home"},
      {id:"#about-section", text: "About"},
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
  
  // const navElements = navItems.map(item => {
  //     return (
  //       <a key={item.id} href={item.id} onClick={item.toggleTheme ? props.handleToggleTheme : null}>
  //           <li>{item.text}</li>
  //       </a>
  //     )})

  const navElements = navItems.map(item => {
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
        offset={0.1} // Adjust this value to account for fixed headers or other offsets
      >
        <li>{item.text}</li>
      </Link>
    );
  });
    
    return (
        <div className={`large-nav ${!visible ? "hidden" : ""}`}>
            <ul>
                {navElements}
            </ul>
        </div>
    )
}