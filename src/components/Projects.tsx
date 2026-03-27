import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/projects.css';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: '(eg) Data Pipeline Dashboard',
    description: 'Real-time data processing pipeline with interactive dashboard for monitoring metrics.',
    image: '📊',
    link: '#',
  },
  {
    id: 2,
    title: '(eg) ETL Automation System',
    description: 'Automated ETL system using Python and Apache Spark for large-scale data processing.',
    image: '⚙️',
    link: '#',
  },
  {
    id: 3,
    title: '(eg) Analytics Platform',
    description: 'Cloud-based analytics platform built with AWS and React for data visualization.',
    image: '📈',
    link: '#',
  },
  {
    id: 4,
    title: '(eg) Data Warehouse Project',
    description: 'Designed and implemented a scalable data warehouse solution using SQL.',
    image: '🏢',
    link: '#',
  },
  {
    id: 5,
    title: '(eg) Machine Learning Model',
    description: 'Predictive model trained on large datasets for business intelligence.',
    image: '🤖',
    link: '#',
  },
  {
    id: 6,
    title: '(eg) Data Quality Framework',
    description: 'Framework for automated data quality checks and validation.',
    image: '✅',
    link: '#',
  },
];

export const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-title" data-aos="fade-up">
        <div className="hr"></div>
        <h2>Featured Projects</h2>
        <div className="hr"></div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card" data-aos="fade-up">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
