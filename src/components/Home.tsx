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

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Apache Spark', icon: '⚡' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Git', icon: '🔧' },
  ];

  const workflow = [
    {
      step: '01',
      title: 'Understand the Problem',
      text: 'Map business goals first, then define the data contract and quality checks.',
    },
    {
      step: '02',
      title: 'Build Reliable Pipelines',
      text: 'Design ingestion and transformation paths that stay fast, observable, and stable.',
    },
    {
      step: '03',
      title: 'Ship Actionable Insight',
      text: 'Deliver dashboards and models that answer clear questions for real decisions.',
    },
  ];

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
      <section id="home" className="home">
        <div className="home-container">
          <div className="hero-panel" data-aos="fade-up">
            <p className="eyebrow">Data Engineer Student Portfolio</p>
            <h1 className="hero-title">
              Building data systems that turn raw information into clear decisions.
            </h1>
            <p className="hero-description">
              I design pipeline-first products: robust ingestion, clean modeling, and dashboards that teams can trust.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button">Start Conversation</a>
              <Link to="/projects" className="cta-button secondary">Open Project Lab</Link>
            </div>
          </div>

          <div className="hero-side" data-aos="zoom-in">
            <div className="hero-badge">Abdelkader Anmira</div>
            <h2 className="hero-role">Data Engineer & Analyst</h2>
            <div className="metric-list">
              <div className="metric-card">
                <strong>8+</strong>
                <span>Core Technologies</span>
              </div>
              <div className="metric-card">
                <strong>9</strong>
                <span>Portfolio Projects</span>
              </div>
              <div className="metric-card">
                <strong>100%</strong>
                <span>Learning Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="education-preview">
        <div className="section-title" data-aos="fade-up">
          <div className="hr"></div>
          <h2>Education & Experience</h2>
          <div className="hr"></div>
        </div>
        <div className="education-preview-card" data-aos="fade-up">
          <p>
            Dive into my academic timeline, internships, and certifications—all organized with milestones, highlights, and verified credentials.
          </p>
          <div className="education-preview-meta">
            <div>
              <strong>3+</strong>
              <span>Education stops</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Experience track</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Certifications</span>
            </div>
          </div>
          <Link to="/education" className="cta-button">Open Education Journey</Link>
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
