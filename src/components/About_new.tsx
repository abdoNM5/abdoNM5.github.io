import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css';
import {
  IconChartDots,
  IconBrain,
  IconCode,
  IconServer,
} from '@tabler/icons-react';

export const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCategories = [
    {
      name: 'Data Analysis & BI',
      icon: <IconChartDots size={24} stroke={1.5} />,
      skills: ['Power BI', 'Advanced SQL', 'DAX', 'Power Query', 'Excel', 'Root Cause Analysis'],
      color: '#FF6B00'
    },
    {
      name: 'Data Engineering',
      icon: <IconServer size={24} stroke={1.5} />,
      skills: ['Python', 'Apache Spark', 'Docker', 'Airflow', 'PostgreSQL', 'Apache Kafka', 'Hadoop', 'Data Warehousing'],
      color: '#00D9FF'
    },
    {
      name: 'AI & Machine Learning',
      icon: <IconBrain size={24} stroke={1.5} />,
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'CrewAI', 'OpenCV', 'PyTorch'],
      color: '#2EC4B6'
    },
    {
      name: 'Software Development',
      icon: <IconCode size={24} stroke={1.5} />,
      skills: ['React', 'TypeScript', 'FastAPI', 'Java', 'Spring', 'Git', 'REST APIs'],
      color: '#A855F7'
    },
  ];

  return (
    <section id="about" className="about-section">
      {/* About Me Section */}
      <div className="about-subsection about-text">
        <div className="section-title" data-aos="fade-up">
          <div className="hr"></div>
          <h2>About Me</h2>
          <div className="hr"></div>
        </div>

        <div className="about-content" data-aos="fade-up">
          <p>
            Hi! I'm <strong>Abdelkader Anmira</strong>, a Data Engineering student with a passion for turning raw data into actionable insights. I specialize in building reliable data pipelines and creating meaningful visualizations that drive business decisions.
          </p>
          <p>
            I bridge the gap between data engineering and business intelligence, ensuring data is clean, structured, and ready for analysis. Whether it's designing ETL pipelines, optimizing queries, or building interactive dashboards, I'm committed to delivering solutions that matter.
          </p>
          <p>
            I'm also exploring machine learning and AI to expand my problem-solving capabilities. Always learning, always building! 🚀
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-subsection skills-section">
        <div className="section-title" data-aos="fade-up">
          <div className="hr"></div>
          <h2>Skills & Expertise</h2>
          <div className="hr"></div>
        </div>

        <div className="skills-grid" data-aos="fade-up">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card" style={{ borderTopColor: category.color }}>
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.name}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag" style={{ borderColor: category.color, color: category.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
