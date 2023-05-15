import React from 'react';



function Project(props) {
    
    const categoryElements = props.category.map(cat => {
        return (
            <p key={cat}>#{cat.toUpperCase()}</p>
        )
    }) // create new elements for filter buttons

    const imgStyle = {
      backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0.1) 100%), url('${props.img}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }

    const darkImgStyle = {
      backgroundImage: `linear-gradient(to top, #12171d 0%, rgba(18, 23, 29, 0.7) 45%, rgba(18, 23, 29, 0.5) 60%, rgba(18, 23, 29, 0.3) 100%), url('${props.img}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      
    }
    
  return (
    <div className="projects-items-box">

      <div style={imgStyle} className="projects-items-box-img">
        <div className="projects-items-box-details-links">
            <a href={props.siteLink} target="_blank" className="projects-items-box-details-links-main">Visit Site</a>
            <a href={props.githubLink} className="projects-items-box-details-links-reverse" target="_blank">View Code</a>
        </div>
      </div>

        <div className="projects-items-box-details-main">
            <h3>{props.title}</h3>
            <div className="projects-items-box-details-main-categories">
              {categoryElements}
            </div>
            <p className="projects-items-box-details-main-description">{props.description}</p>
        </div>  

    </div>
  );
}

export default Project;
