import React, { useState, useEffect } from 'react'

import Heading from './Heading'

function Skill (props) {
  return (
      <div key={props.item.heading} className="skills-item-box">
          <h3>{props.item.heading}</h3>
          <ion-icon className="skills-item-box-icons" name={props.item.icon}></ion-icon>
      </div>
  );
};

export default function Skills() {


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
      <Skill key={item.heading} item={item} />
    )
  })
      
    return (
        <div className="skills">
          <div className="skills-container">
            <Heading 
              title={"Skills"}
              paragraph={"My current skillset includes"}
            />
            <div className="skills-items">
              {skillElements}
            </div>
        </div>
        </div>
    )
}