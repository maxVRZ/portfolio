import { Link } from "react-router-dom";
import "./Projects.css";
import calcImg from "../assets/Screenshot 2026-04-09 212625.png"

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <p className="projects-subtitle">A collection of what I've built</p>

            <div className="projects-grid">
                
                <div className="project-card">
                    <div className="project-image">
                        <img src={calcImg} alt="Calculadora App" />
                    </div>
                    
                    <div className="project-content">
                        <h3>Calculator</h3>
                        <p>
                            Completelty functional calculator, handles basic operations, as well as offering a history of operations.
                            Also offers a minimalistic look, great for study nights.
                        </p>
                        
                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        
                        <div className="project-links">
                            <a href="https://github.com/maxVRZ/calculadora" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                GitHub
                            </a>
                           
                        </div>
                    </div>
                </div>

            </div>

            <Link to="/">Home</Link>
        </div>
    );
};

export default Projects;