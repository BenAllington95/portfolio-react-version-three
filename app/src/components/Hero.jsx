import React, { useState, useEffect } from 'react'
import profileImg from '../images/profile-img.png'



export default function Hero(props) {

const [subHeading, setSubHeading] = useState(["Front End Developer", "Problem Solver", "UI/UX Enthusiast","Collaborative Team Player", "Mobile Responsive Designer", "Continuous Learner"])
const [currentItem, setCurrentItem] = useState(subHeading[0])

useEffect(() => {
  let index = 0;
  const intervalId = setInterval(() => {
    index = (index + 1) % subHeading.length;
    setCurrentItem(subHeading[index])
  }, 5000);
  return () => clearInterval(intervalId)
}, [subHeading])
    


    
    return (
        <div className="hero" id="hero-section">
            <h1>Hi, I'm <span className="hero-heading-ben">Ben</span>.</h1>
            <p className="hero-subheading">{currentItem}</p>
            <div className="scroll-down-box">
              <p>Scroll Down</p>
              <ion-icon className="arrow-down" name="chevron-down-outline"></ion-icon>
              </div>
        </div>
    )
}