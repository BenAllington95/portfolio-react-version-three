import React, { useState, useEffect } from 'react';

export default function About(props) {
    const [visible, setVisible] = useState(false);
    
    const heroParagraph = [
        `Hi, I'm Ben. A self-taught front-end developer from the UK with a keen eye for design and a passion for coding, and strong problem-solving skills. I've been honing my skills for two years, and I'm excited to share my portfolio with you.`,
        `I've completed various courses and gained proficiency in HTML, SCSS/CSS, JavaScript, and React, and have put my knowledge into practice by building an array of projects. You can see some of my work in the Projects section of this site.`, 
        `I'm always eager to learn and grow as a developer, and I'm confident that I can provide high-quality work and bring a fresh perspective to any project.`, 
        `In my free time, I enjoy playing and watching sports, including football, basketball, and F1. My experience in sports has taught me valuable lessons in teamwork, perseverance, and hard work, which I apply to everything I do.`, 
        `If you are interested in working with me or have any inquiries, please feel free to reach out to me at benallington1995@gmail.com.`
        ]
    
    const heroParaphHtml = heroParagraph.map((para, index) => {
        return <p className="about-text" key={`hero-para-${index}`}>{para}</p>})
        
    useEffect(() => {
    const handleScroll = () => {
    const element = document.getElementById("about-section"); // replace "your-id" with the actual ID of the element you want to check
    if (element && window.pageYOffset > element.offsetTop - 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
        
    return (
        <div className="test">
        <div className="about" id={props.id}>
            <div className={visible ? "about-items visible" : "about-items"}>
                <h2>About</h2>
                <div className="about-paragraph">
                {heroParaphHtml}
                </div>
            </div>
        </div>   
        <div className="test-img right-box"></div>
        </div>
             
    )
}