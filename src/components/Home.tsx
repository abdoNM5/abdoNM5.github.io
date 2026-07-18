import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import 'aos/dist/aos.css';
import '../styles/home.css';

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const featuredProjects = [
    {
      title: 'Data Pipeline Dashboard',
      icon: '📊',
      text: 'Streaming metrics with near real-time monitoring for data operations teams.',
    },
    {
      title: 'ETL Automation System',
      icon: '⚙️',
      text: 'Batch + incremental jobs orchestrated to reduce manual intervention and errors.',
    },
    {
      title: 'Analytics Platform',
      icon: '📈',
      text: 'Cloud analytics workspace for product, finance, and growth reporting.',
    },
  ];

  const signals = [
    'Data Pipelines',
    'Cloud Analytics',
    'Automation',
    'Monitoring',
    'ML Ops',
  ];

  return (
    <>
      <Contact />

      <About />

      <section className="projects-preview">
        <div className="section-title" data-aos="fade-up">
          <div className="hr"></div>
          <h2>Project Lab Preview</h2>
          <div className="hr"></div>
        </div>

        <div className="preview-grid">
          {featuredProjects.map((project) => (
            <article key={project.title} className="preview-card" data-aos="fade-up">
              <span className="preview-icon">{project.icon}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>

        <div className="preview-note" data-aos="fade-up">
          <p>
            In the full projects page, each card keeps a separate action panel to watch media demos or open the GitHub repository.
          </p>
          <Link to="/projects" className="cta-button">Go To Project Lab</Link>
        </div>
      </section>


      <section className="signal-strip" aria-label="core focus areas">
        <div className="signal-track" data-aos="fade-up">
          {signals.map((signal) => (
            <span key={signal} className="signal-item">{signal}</span>
          ))}
        </div>
      </section>
    </>
  );
};
