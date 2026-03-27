import { Link } from 'react-router-dom';
import '../styles/footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <span className="logo-text">AK</span>
          </Link>
        </div>
        <div className="footer-links">
          <a href="/#contact">Contact</a>
          <Link to="/education">Education</Link>
          <a href="/#about">About & Skills</a>
          <Link to="/projects">Projects Lab</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Abdelkader Anmira - Data Engineering Portfolio.</p>
      </div>
    </footer>
  );
};
