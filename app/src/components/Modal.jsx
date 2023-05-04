import React, { useState, useEffect } from 'react';

export default function Modal (props) {
    
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        let randomNumber
        do {
        randomNumber = Math.floor(Math.random() * 120000)
        } while (randomNumber < 45000) // value/count for when the popup will appear
        
        const timer = setTimeout(() => {
            setModalActive(true) // change to true so the popup appears
        }, randomNumber)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    function lockScreen() {
        if (modalActive) {
            document.body.classList.add('locked')
        } else if (!modalActive) {
            document.body.classList.remove('locked')
        }
    } // lock screen when the modal popup is active, until closed
  
    lockScreen()
    
    return (
        <div>
            <div className={modalActive ? "modal visible" : "modal"}>
                <div className="modal-box">
                    <ion-icon name="close-sharp" onClick={() => setModalActive(false)}></ion-icon>
                    <div className="modal-box-text-details">
                        <h2>Like What You See?</h2>
                        <div>
                            <p>Please don't hesitate to get in touch via email at <a href="mailto:benallington1995@gmail.com"
                            onClick={() => setModalActive(false)}>benallington1995@gmail.com</a> or on <a href="https://www.linkedin.com/in/ben-allington/" target="_blank" onClick={() => setModalActive(false)}>LinkedIn</a> to discuss inquiries and collaborations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}