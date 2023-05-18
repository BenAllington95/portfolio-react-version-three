import React, { useState, useEffect } from 'react'

export default function Skills() {
    const [visible, setVisible] = useState(false)
     
    useEffect(() => {
    const handleScroll = () => {
    const element = document.getElementById("skills-section").offsetTop // replace "your-id" with the actual ID of the element you want to check
    if (element && window.pageYOffset > element - 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
    window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  const skillItems = [
    {id: 0, heading: "HTML", icon: "logo-html5"},
    {id: 1, heading: "CSS", icon: "logo-css3"},
    {id: 2, heading: "SCSS", icon: "logo-sass"},
    {id: 3, heading: "JavaScript", icon: "logo-javascript"},
    {id: 4, heading: "React", icon: "logo-react"},
    {id: 5, heading: "Github", icon: "logo-github"},
  ]
  
  const skillElements = skillItems.map(item => {
    return (
      <div key={item.heading} className="skills-item-box">
        <h3>{item.heading}</h3>
        <ion-icon className="skills-item-box-icons" name={item.icon}></ion-icon>
      </div>
    )
  })
      
    return (
      <div className="test">
        <div className="test-img left-box"></div>
        <div className="skills" id="skills-section">
          <div className={visible ? "skills-container visible" : "skills-container"}>
            <div>
                <h2>Skills</h2>
                <p className="skills-para">My current skillset includes</p>
            </div>
            <div className="skills-items">
              {skillElements}
            </div>
          </div>
      </div> 
      </div>
    )
}