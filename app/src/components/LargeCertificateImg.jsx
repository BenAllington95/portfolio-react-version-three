import React, { useState, useEffect } from 'react'

export default function LargeCertificateImg(props) {
    
    const [arrow, setArrow] = useState(null)
    const [visible, setVisible] = useState(false)
    
     useEffect(() => {
         
         if (props.isFullscreen) {
             setVisible(true)
             document.body.classList.add('locked')
         } else if (!props.isFullscreen) {
              setVisible(false)
              document.body.classList.remove('locked')
         }
         
         
    }, [props.isFullscreen])
    
    return (
        <div>
            <div className={visible ? 'large-certificate-img visible' :  'large-certificate-img'}>
            {props.data && 
                    <div className="large-certificate-img-box">
                    <img src={props.data.img}/>
                    {/* <h2>{props.data.title}</h2> */}
                    <div className="arrows">
                        <ion-icon id="back-btn" onClick={() => props.handleArrowClick("back")} name="arrow-back-circle-outline"></ion-icon>
                        <ion-icon id="forward-btn" onClick={() => props.handleArrowClick("forward")}name="arrow-forward-circle-outline"></ion-icon>
                    </div>
                </div>}
                <ion-icon name="close-circle-outline" onClick={props.closeFullscreen}></ion-icon>
            </div>
        </div>
    )
}