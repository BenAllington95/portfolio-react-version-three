import React, {useState, useEffect} from 'react'
import Project from './Project' 
import projectsData from '../projectsData'  // projects data stored within another file

export default function Projects() {
    const [filter, setFilter] = useState("") // filter button to adjust what projects are requested
    const [visible, setVisible] = useState(false) // animation state for container to fade in 
    
    const filterArray = [
            {id: 0, filter: "", text: "All"},
            {id: 1, filter: "react", text: "React"},
            {id: 2, filter: "javascript", text: "JavaScript"},
            {id: 3, filter: "scss", text: "SCSS"},
            {id: 4, filter: "css", text: "CSS"},
        ]
        
        const shuffledProjects = projectsData.sort(() => Math.random() - 0.5) // shuffle projects array every render
        
        const filteredProjects = shuffledProjects.filter(project => filter === "" || project.category.includes(filter))
        const projectElements = filteredProjects.map(project => <Project key={project.id} {...project} />) // filter that checks the filter button state and matches with category of each project if included in array
        
            
        useEffect(() => {
        const handleScroll = () => {
        const element = document.getElementById("projects-section"); // replace "your-id" with the actual ID of the element you want to check
        if (element && window.pageYOffset > element.offsetTop - 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        
        
        const filterElements = filterArray.map(item => {
            return (
                <div key={item.id}onClick={() => {
                    setFilter(`${item.filter}`)}} 
                    className={`projects-filter-btn ${filter === `${item.filter}` ? "projects-active" : ""}`}>
                        #{item.text}
                </div>                
                )
        })
        
    return (
        <div className="projects" id="projects-section">
                <div className={visible ? "projects-container visible" : "projects-container"}>
                <div>
                    <h2>Projects</h2>
                    <p className="skills-para">Browse my projects</p>
                </div>
                <div className="projects-filter-buttons">
                    {filterElements}
                </div>
                
                <div className="projects-items">
                    {projectElements}
                </div>
                
            </div>
        </div>
    )
}