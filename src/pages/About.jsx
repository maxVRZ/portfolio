import { Link } from "react-router-dom";
import "./About.css";
import perfilImg from "../assets/1774638460989.jpeg";


const About = () => {
    return (
        <>
        
            <div className="about-container">
                <h1>Maximliano Villegas Ruiz</h1>
                <h2>About Me</h2>

                <div className="profile-section">
                    <img
                        src={perfilImg}
                        alt="Mi foto de perfil"
                        className="profile-img"
                />

                    <div className="profile-text">
                        <h2>Hey! I'm Max</h2>
                        <p>Future software engineer currently studying at Tecnológico de Monterrey. I approach challenges with determination and adaptability, consistently finding ways to deliver results. Even if I must learn something new along the way.</p>

                    </div>
                </div>

                <h2>My skills</h2>
                <div className="skills-grid">
                    <div className="skill-box">C++</div>
                    <div className="skill-box">Python</div>
                    <div className="skill-box">HTML / CSS</div>
                    <div className="skill-box">React</div>
                </div>
            

            

            <p>
                <Link to ="/">Home</Link>
            </p>
            </div>
        </>
    );
};

export default About;