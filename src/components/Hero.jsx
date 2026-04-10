import "./Hero.css"
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <>
            <div>
                <p className="main-text">
                    Professional <br />
                    <span className="secondary-text">Portfolio</span>
                </p>
                <p style={{ maxWidth: "600px", margin: "0 auto", color: "#9ca3af" }}>
                    Full-stack developer specializing in building high-performance, visually
                    stunning web experiences that live at the intersection of design and
                    data.
                </p>
                <div className="btn-container">
                    
                    <Link to="/Projects" className="btn">View Projects</Link>
                    <Link to="/About" className="btn">About me</Link>
                    <Link to="/contactme" className="btn">Contact me</Link>
                    
                </div>
            </div>
        </>
    );
};

export default Hero;