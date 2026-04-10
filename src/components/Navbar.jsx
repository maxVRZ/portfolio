import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/About">About Me</Link>
          </p>
          <p>
            <Link to="/Projects">Projects</Link>
          </p>
          <p>
            <Link to="/ContactMe">Contact Me</Link>
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;