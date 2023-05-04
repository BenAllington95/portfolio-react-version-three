export default function Contact() {
    
    const contactLinks = [
        {id: 0, link: "mailto:benallington1995@gmail.com", icon: "mail-sharp"},
        {id: 1, link: "https://www.linkedin.com/in/ben-allington/com", icon: "logo-linkedin"},
        {id: 2, link: "https://github.com/BenAllington95", icon: "logo-github"},
    ]
    
    const contactElements = contactLinks.map(item => {
        return (
            <li key={item.id}>
                <a href={item.link}>
                    <ion-icon name={item.icon}></ion-icon>
                </a>
            </li>
        )
    })
    
    return (
        <div className="contact" id="contact-section">
            <div className="contact-container">
                <ul>
                    {contactElements}
                </ul>
            </div>
        </div>
    )
}