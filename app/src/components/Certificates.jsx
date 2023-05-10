import React, { useState, useEffect } from 'react'
import images from '../images';

import LargeCertificateImg from './LargeCertificateImg'


export default function Certificates() {
    const [layout, setLayout] = useState("small")
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 762) 
    const [fullscreenIndex, setFullscreenIndex] = useState(null) // will match will the index of certificate data to load image full screen after event click from certificate box icon
    const [isFullscreen, setIsFullscreen] = useState(false)
    
    
    const certificateData = [
        {id: 0, img: images.sassImg, title: "Learn Sass Course - Codecademy"},
        {id: 1, img: images.jsFundaImg, title: "Learn JavaScript - Fundamentals Course"},
        {id: 2, img: images.cssBoxModel, title: "Learn CSS: Box Model and Layout Course"},
        {id: 3, img: images.cssColorDesign, title: "Color Design"},
        {id: 4, img: images.cssIntro, title: "CSS Intro"},
        {id: 5, img: images.htmlForms, title: "HTML Forms"},
        {id: 6, img: images.flexboxAndGrid, title: "Flexbox and Grid"},
        {id: 7, img: images.cssTypographyAndFonts, title: "Typography and Fonts"},
        {id: 8, img: images.navDesign, title: "Navigation Design"},
        {id: 9, img: images.functionsAndScope, title: "Functions and Scope"},
        {id: 10, img: images.learnIterators, title: "Iterators"},
        {id: 11, img: images.objects, title: "Objects"},
        {id: 12, img: images.transitionsAndAnimations, title: "Transitions and Animations"},
    ]
    
    function handleCertificateClick(index) {
        setFullscreenIndex(index)
        setIsFullscreen(true)
    }
    
    function handleArrowClick(direction) {
        if(direction === "back") {
                        
            if (fullscreenIndex === 0) {
                document.getElementById("back-btn").disabled = true;
            } else {
                setFullscreenIndex(prevIndex => prevIndex - 1)
            }
            
        } else {
                        
             if (fullscreenIndex === certificateData.length - 1) {
                document.getElementById("forward-btn").disabled = true;
            } else {
                setFullscreenIndex(prevIndex => prevIndex + 1)
            }
        }
    }
    
    function handleFullScreenCloseToggle() {
        setIsFullscreen(false)
    }
    
    const certificateBoxElements = certificateData.map((item, index) => {
        return (
            <div key={`certificate-${index}`} className="certificate-item-box" style={{
                background: `url(${item.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <ion-icon name="expand-outline" onClick={() => handleCertificateClick(index)} ></ion-icon>
            </div>
        )
    })
    
    useEffect(() => {
        const elements = document.querySelectorAll('.certificate-item-box')
      
        if (!isMobile) {
            elements.forEach(element => {
                if (layout === "small") {
                    element.style.width = 'calc(25% - 10px)'
                    element.style.height = '130px'
                } else if (layout === "large") {
                    element.style.width  = 'calc(50% - 10px)'
                    element.style.height = '250px'
                }}) 
                } else {
                elements.forEach(element => {
                    element.style.width = "100%"
                    element.style.height = "280px"
                })
            } // control size of certificate boxes, depending on screen size
        }, [layout, isMobile])
    
    useEffect(() => {
        const elements = document.querySelectorAll('.certificate-item-box')
        function handleResize() {
            if (window.innerWidth <= 762) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        } // function runs when width of screen is less than 462 pixels
        window.addEventListener("resize", handleResize)
        return () => {
        window.removeEventListener("resize", handleResize)
        }     
    }, [isMobile])
    
    
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
    const handleScroll = () => {
    const element = document.getElementById("certificates-section") // replace "your-id" with the actual ID of the element you want to check
    if (element && window.pageYOffset > element.offsetTop - 500) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [])
    
    
    return (
        <div className="certificates" id="certificates-section">
            <div className={visible ? "certificates-container visible" : "certificates-container"}>
                <div>
                    <h2>Certificates</h2>
                    <p className="skills-para">View my certifications</p>
                </div>
                
                {!isMobile && <div className="certificates-icons">
                    <ion-icon name="grid-sharp" onClick={() => setLayout("small")}></ion-icon>
                    <ion-icon name="list-outline" onClick={() => setLayout("large")}></ion-icon>
                </div>}
                
                <div className="certificate-items">
                    {certificateBoxElements}                  
                </div>
            </div>
            <LargeCertificateImg 
                data={certificateData[fullscreenIndex]} 
                closeFullscreen={handleFullScreenCloseToggle}
                handleArrowClick={handleArrowClick}
                isFullscreen={isFullscreen}/>
        </div>
    )
}