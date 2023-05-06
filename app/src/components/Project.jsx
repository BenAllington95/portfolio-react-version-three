import React from 'react';


function Project(props) {
    
    const categoryElements = props.category.map(cat => {
        return (
            <p key={cat}>#{cat.toUpperCase()}</p>
        )
    }) // create new elements for filter buttons
    
  return (
    <div className="projects-items-box">

      <div className="projects-items-box-img">

        <div className="projects-items-box-details-main">
          <h3>{props.title}</h3>
          {categoryElements}
        </div>  

        <p>{props.description}</p>

        <div className="projects-items-box-details-links">
            <a href={props.siteLink} target="_blank" className="projects-items-box-details-links-main">Visit Site</a>
            <a href={props.githubLink} className="projects-items-box-details-links-reverse" target="_blank">View Code</a>
        </div>
        
      </div>
    </div>
  );
}

export default Project;
