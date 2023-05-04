import React, { useState, useEffect } from 'react'

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
            <h1>Hi, I'm <span className="hero-heading-ben">Ben</span></h1>
            {/* <p>{currentItem}</p> */}
        </div>
    )
}