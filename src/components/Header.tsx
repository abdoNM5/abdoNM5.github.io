import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navi">
      <div className="logo">
        <Link to="/" title="home">
          <span className="logo-text">AK</span>
        </Link>
      </div>

      <button
        className="hamb-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`sect ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><Link to="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><a href="/#about" onClick={() => setIsOpen(false)}>About & Skills</a></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects Lab</Link></li>
        </ul>
      </nav>

      <div className="nav-actions">
        <div className="nav-social">
          <a
            href="https://www.linkedin.com/in/abdelkader-anmira4"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/abdoNM5"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nmiraabdellader@gmail.com"
            title="Email"
            aria-label="Send an email"
          >
            <FaEnvelope />
          </a>
        </div>
        <a href="/#contact" className="nav-cta">Get In Touch</a>
      </div>
    </header>
  );
};
