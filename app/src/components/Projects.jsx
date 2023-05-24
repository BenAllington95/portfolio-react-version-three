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
            {id: 5, filter: "tailwind", text: "Tailwind"},
            {id: 6, filter: "bootstrap", text: "Bootstrap"},
        ]
        
        // const shuffledProjects = projectsData.sort(() => Math.random() - 0.5) // shuffle projects array every render
        
        const filteredProjects = projectsData.filter(project => filter === "" || project.category.includes(filter))
        // const projectElements = filteredProjects.map(project => <Project key={project.id} {...project} />) // filter that checks the filter button state and matches with category of each project if included in array
        
        const projectElements = filteredProjects.length === 0
        ? (<h1>No Projects just yet...</h1>)
        : filteredProjects.map(project => <Project key={project.id} {...project} />);

            
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
                <div className="projects-header">
                    <h2>Projects</h2>
                    <div className="line"></div>
                    <p className="projects-para">Browse my projects</p>
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