import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css';
import {
  IconChartDots,
  IconBrain,
  IconCode,
  IconServer,
  IconMapPin,
  IconSchool,
  IconTargetArrow,
} from '@tabler/icons-react';

export const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const storyHighlights = [
    {
      label: 'Based In',
      value: 'Marrakesh, Morocco',
      icon: <IconMapPin size={22} stroke={1.5} />,
    },
    {
      label: 'Currently',
      value: 'Data Engineering @ ENSAH',
      icon: <IconSchool size={22} stroke={1.5} />,
    },
    {
      label: 'Focus',
      value: 'Data pipelines + Analytics',
      icon: <IconTargetArrow size={22} stroke={1.5} />,
    },
  ];

  const capabilityZones = [
    {
      name: 'Data Analysis & BI',
      icon: <IconChartDots size={24} stroke={1.5} />,
      summary: 'Executive-ready dashboards, KPI storytelling, and investigations that surface root causes.',
      skills: ['Power BI', 'Advanced SQL', 'DAX', 'Power Query', 'Excel', 'Root Cause Analysis'],
      color: '#FF6B00',
    },
    {
      name: 'Data Engineering',
      icon: <IconServer size={24} stroke={1.5} />,
      summary: 'Modern data stacks, streaming ingestion, and resilient orchestration for analytics teams.',
      skills: ['Python', 'Apache Spark', 'Docker', 'Airflow', 'PostgreSQL', 'Apache Kafka', 'Hadoop', 'Data Warehousing'],
      color: '#00D9FF',
    },
    {
      name: 'AI & Machine Learning',
      icon: <IconBrain size={24} stroke={1.5} />,
      summary: 'Applied computer vision, LLM tooling, and ML experiments that stay tethered to business outcomes.',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'CrewAI', 'OpenCV', 'PyTorch'],
      color: '#2EC4B6',
    },
    {
      name: 'Software Development',
      icon: <IconCode size={24} stroke={1.5} />,
      summary: 'Full-stack product thinking with clean APIs, typed front-ends, and delivery automation.',
      skills: ['React', 'TypeScript', 'FastAPI', 'Java', 'Spring', 'Git', 'REST APIs'],
      color: '#A855F7',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-title" data-aos="fade-up">
        <div className="hr"></div>
        <h2>About Me & Skills</h2>
        <div className="hr"></div>
      </div>

      <div className="about-grid">
        <article className="profile-card" data-aos="fade-up">
          <p className="eyebrow">Bio Snapshot</p>
          <h3>Data engineering student obsessed with useful insights.</h3>
          <p>
            I am a Data Engineering student with a strong passion for data analytics and transforming raw data into meaningful insights.
            I enjoy building efficient data pipelines and solving real-world problems by leveraging tools such as Power BI, Excel,Power Query in ETL process , DAX in measures, Data Modeling  ,and SQL.
          </p>
          <p>
            My work focuses on extracting value from data—whether through analyzing trends, creating interactive dashboards, or optimizing
            data workflows. I am particularly driven by the challenge of turning complex datasets into clear, actionable information.
          </p>
          <p>
            In addition to data engineering, I have a growing interest in Artificial Intelligence, including Machine Learning, Deep Learning,
            Neural Networks, and Computer Vision. I enjoy exploring how predictive models can be used to solve problems and enhance decision-making.
          </p>
          <p>
            I am continuously learning and improving my skills, with the goal of building impactful data-driven solutions.
          </p>
          <div className="profile-highlights">
            {storyHighlights.map((highlight) => (
              <div key={highlight.label} className="profile-highlight">
                <span className="highlight-icon">{highlight.icon}</span>
                <div>
                  <p className="highlight-label">{highlight.label}</p>
                  <p className="highlight-value">{highlight.value}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="skills-section" data-aos="fade-up">
        <div className="skills-header">
          <p className="eyebrow">Capabilities</p>
          <h3>Where I add leverage</h3>
          <p>Systems thinking that spans requirements, infrastructure, and polished delivery.</p>
        </div>
        <div className="skills-grid">
          {capabilityZones.map((category) => (
            <div key={category.name} className="skill-category-card" style={{ borderTopColor: category.color }}>
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <div>
                  <h4>{category.name}</h4>
                  <p className="category-summary">{category.summary}</p>
                </div>
              </div>
              <div className="category-skills">
                {category.skills.map((skill) => (
                  <span key={`${category.name}-${skill}`} className="skill-tag" style={{ borderColor: category.color, color: category.color }}>
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
