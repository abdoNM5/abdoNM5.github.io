import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/education.css';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  icon: string;
  isFuture?: boolean;
  linkLabel?: string;
  linkUrl?: string;
}

interface CertificationItem {
  id: number;
  title: string;
  provider: string;
  year: string;
  summary: string;
  credentialId?: string;
  link: string;
}

const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    id: 1,
    title: 'Engineering Degree Program – Data Engineering',
    subtitle: 'ENSAH – Graduate Engineering Track',
    period: '2024 – 2027',
    location: 'Al Hoceima, Morocco',
    description:
      'Pursuing the engineering diploma with concentrations in distributed data systems, MLOps, and product-grade analytics solutions.',
    highlights: ['Data engineering major', 'MLOps & cloud tooling', 'Industry-focused labs'],
    icon: '📡',
  },
  {
    id: 2,
    title: 'Integrated Preparatory Cycle',
    subtitle: 'ENSAH – Preparatory Classes for Engineering Studies',
    period: '2022 – 2024',
    location: 'Al Hoceima, Morocco',
    description:
      'Completed the integrated preparatory program covering advanced calculus, physics, and algorithmic foundations while collaborating on maker-lab challenges.',
    highlights: ['Analysis & algebra depth', 'Physics + electronics labs', 'Team-based maker projects'],
    icon: '📘',
  },
  {
    id: 3,
    title: 'Science Mathematics A Baccalaureate',
    subtitle: 'MASSAR AL OMAM High School',
    period: '2019 – 2022',
    location: 'Marrakesh, Morocco',
    description:
      'Graduated with a Science Mathematics A focus, reinforcing analytical rigor through olympiad prep, lab work, and club mentorship.',
    highlights: ['Science Math A track', 'National exam 2022', 'STEM club lead'],
    icon: '🎓',
  },
];

const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    id: 1,
    title: 'AI Engineer Intern',
    subtitle: 'Menara Holding • Digital Innovation',
    period: 'Jul 2025 – Aug 2025',
    location: 'Marrakesh, Morocco',
    description:
      'Architected the entire attendance platform: a full-stack React + FastAPI app featuring computer-vision check-in/out (OpenCV, DeepFace, YOLO) backed by MySQL, plus a LangChain-powered chatbot that lets HR query attendance and personnel insights in real time.',
    highlights: [
      'React + FastAPI stack',
      'OpenCV • DeepFace • YOLO',
      'LangChain HR assistant',
      'MySQL attendance ledger',
    ],
    icon: '🏭',
    linkLabel: 'Company LinkedIn',
    linkUrl: 'https://www.linkedin.com/company/m%C3%A9nara-holding',
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: 'Advanced SQL (Intermediate/Advanced)',
    provider: 'HackerRank',
    year: '2024',
    summary: 'Passed the Advanced SQL challenge covering window functions, analytics, and performance tuning scenarios.',
    credentialId: 'HackerRank ADV-SQL',
    link: '/media/pdfs/hackerrank.pdf',
  },
  {
    id: 2,
    title: 'Oracle Certified Professional: Java SE 17 Developer',
    provider: 'Oracle University',
    year: '2024',
    summary: 'Validated Java SE 17 proficiency across collections, concurrency, functional APIs, and secure deployment practices.',
    credentialId: 'Oracle OCP-Java17',
    link: '/media/pdfs/Java%20SE%20(1).pdf',
  },
  {
    id: 3,
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    provider: 'IBM Skills Network',
    year: '2023',
    summary: 'Completed the IBM deep learning track leveraging Keras for CNNs, RNNs, and transfer learning labs.',
    credentialId: 'IBM DL-Keras',
    link: '/media/pdfs/coursera1.pdf',
  },
];

export const Education: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const completedEducation = EDUCATION_TIMELINE.filter((item) => !item.isFuture).length;
  const activeExperience = EXPERIENCE_TIMELINE.filter((item) => !item.isFuture).length;

  return (
    <div className="education-page">
      <section className="education-hero">
        <div className="education-hero-content" data-aos="fade-up">
          <p className="education-kicker">Education • Experience • Cetrifications</p>
          <h1>Learning Sprints That Ship Real Outcomes</h1>
          <p>
            Every chapter builds toward reliable data products: foundational academics, real-world internships, and verifiable
            certifications backed by deliverables.
          </p>
        </div>

        <div className="education-hero-metrics" data-aos="fade-up" data-aos-delay="100">
          <div className="metric-chip">
            <strong>{completedEducation}</strong>
            <span>Education Stops</span>
          </div>
          <div className="metric-chip">
            <strong>{`${activeExperience}+`}</strong>
            <span>Experience Tracks</span>
          </div>
          <div className="metric-chip">
            <strong>{CERTIFICATIONS.length}</strong>
            <span>Certifications</span>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="education-timeline">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Education Timeline</p>
          <h2>Academic Background</h2>
          <p>From science prep school to a data engineering degree, the line stays open for future diplomas.</p>
        </div>

        <div className="timeline-wrapper">
          {EDUCATION_TIMELINE.map((item, index) => (
            <article
              key={item.id}
              className={`timeline-item ${item.isFuture ? 'timeline-item--future' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="timeline-node">
                <span className="timeline-dot">{item.icon}</span>
                <span className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-location">{item.location}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link"
                  >
                    {item.linkLabel ?? 'Learn more'}
                  </a>
                )}
                <div className="timeline-tags">
                  {item.highlights.map((highlight) => (
                    <span key={`${item.id}-${highlight}`} className="timeline-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="experience-timeline">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Experience Timeline</p>
          <h2>Hands-on Delivery</h2>
          <p>Internships and freelance missions focused on production data work, not just classroom outputs.</p>
        </div>

        <div className="timeline-wrapper timeline-wrapper--experience">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <article
              key={item.id}
              className={`timeline-item ${item.isFuture ? 'timeline-item--future' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <div className="timeline-node">
                <span className="timeline-dot">{item.icon}</span>
                <span className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-location">{item.location}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link"
                  >
                    {item.linkLabel ?? 'Learn more'}
                  </a>
                )}
                <div className="timeline-tags">
                  {item.highlights.map((highlight) => (
                    <span key={`${item.id}-${highlight}`} className="timeline-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications-section" id="certifications">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Verified Credentials</p>
          <h2>Certifications</h2>
          <p>Assessment-backed proof of skills in SQL, enterprise Java, and production-ready deep learning workflows.</p>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <article key={cert.id} className="cert-card" data-aos="fade-up" data-aos-delay={index * 70}>
              <div className="cert-meta">
                <span className="cert-year">{cert.year}</span>
                <span className="cert-provider">{cert.provider}</span>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.summary}</p>
              <div className="cert-footer">
                {cert.credentialId && <span className="cert-id">{cert.credentialId}</span>}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Credential
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-cta">
        <h2 data-aos="fade-up">Let&apos;s Add The Next Milestone</h2>
        <p data-aos="fade-up">
          Whether it is a new internship, research residency, or full-time opportunity, I&apos;m ready to extend this timeline with
          measurable impact.
        </p>
        <a href="/#contact" className="cta-button" data-aos="zoom-in">
          Get In Touch
        </a>
      </section>
    </div>
  );
};