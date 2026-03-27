import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/projects-page.css';
import { FaEye, FaGithub, FaTimes } from 'react-icons/fa';

type ProjectMediaItem =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string };

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  videoUrl?: string;
  images?: string[];
  videos?: string[];
  mediaItems?: ProjectMediaItem[];
  githubUrl: string;
  category: 'Pipelines' | 'Analytics' | 'Cloud' | 'ML' | 'Tooling' | 'Software';
  date: string;
  profile: 'DATA ENG' | 'SOFTWARE ENG' | 'DATA ANALYSIS';
}

const FILTERS = ['All', 'Software', 'Pipelines', 'Analytics', 'Cloud', 'ML', 'Tooling'] as const;
type FilterLabel = (typeof FILTERS)[number];

const PROJECTS: ProjectItem[] = [
  {
    id: 7,
    title: 'SBA Risk & Economic ROI Dashboard',
    description: 'Forensic analysis of $112B SBA lending portfolio. Spark-based ETL cleaned 900K+ loan records into star schema for Power BI, revealing $13B systematic loss linked to short-term revolving credit and high-risk lenders.',
    image: '/media/images/usba1.jpeg',
    link: '#',
    tags: ['Apache Spark', 'Python', 'PySpark', 'Jupyter', 'Pandas', 'Power BI', 'Hadoop', 'Star Schema', 'ETL', 'Forensic Analytics'],
    images: ['/media/images/usba4.jpeg','/media/images/usba1.jpeg', '/media/images/usba2.jpeg', '/media/images/usba3.jpeg'],
    githubUrl: 'https://github.com/abdoNM5/USBA-BANKING',
    category: 'Analytics',
    date: '2026-02',
    profile: 'DATA ANALYSIS',
  },
  {
    id: 9,
    title: 'HR Attrition & Retention Strategy: Stopping a $1M Monthly Talent Leak',
    description: 'HR analytics platform identifying 16% workforce attrition ($1M monthly leak). Engineered risk-scoring DAX measures discovering 32.32% resignation spike within first year of new managers and burnout thresholds. Delivered predictive watchlist flagging at-risk employees for proactive intervention.',
    image: '/media/images/HR_PROBLEM.jpeg',
    link: '#',
    tags: ['Power BI', 'Power Query', 'DAX', 'Risk Scoring', 'Survival Analysis', 'Hypothesis Testing', 'HR Analytics', 'Predictive Modeling', 'Data Storytelling'],
    images: ['/media/images/HR_PROBLEM.jpeg', '/media/images/HR_PROB2.jpeg', '/media/images/HR_PROB3.jpeg', '/media/images/HR_PROB4.jpeg', '/media/images/HR_prob5.jpeg'],
    githubUrl: 'https://github.com/abdoNM5/HR_PROBLEM',
    category: 'Analytics',
    date: '2026-02',
    profile: 'DATA ANALYSIS',
  },
  {
    id: 8,
    title: 'Global Liquidity & AR Risk Dashboard',
    description: 'AR diagnostic for $1.14B invoice pipeline. Advanced DAX measures uncovered $673.5M overdue AR (94.6% of pipeline) and $310.5M credit limit breaches from rogue sales operations. Delivered executive dashboard with intervention strategy.',
    image: '/media/images/cisco1.jpeg',
    link: '#',
    tags: ['Power BI', 'Power Query', 'DAX', 'Star Schema', 'Dimensional Modeling', 'SUMX', 'Financial Analytics', 'JSON Theme Customization', 'Data Storytelling'],
    images: ['/media/images/cisco1.jpeg', '/media/images/cisco2.jpeg', '/media/images/cisco3.jpeg'],
    githubUrl: 'https://github.com/abdoNM5/DELAYED_CASH',
    category: 'Analytics',
    date: '2026-03',
    profile: 'DATA ANALYSIS',
  },
  {
    id: 10,
    title: 'Olist E-Commerce Review Score Root Cause Analysis',
    description: 'E-commerce analytics platform analyzing 98K+ orders to identify root causes of low review scores. Built star schema with forensic DAX metrics: logistics penalty (1.73 rating drop for late deliveries), seller defect scoring (14.69% platform rate, peak 81% for high-volume sellers), product quality gaps. Delivered operational hit lists and logistics renegotiation strategy.',
    image: '/media/images/olist1.jpeg',
    link: '#',
    tags: ['Power BI', 'Power Query', 'DAX', 'Root Cause Analysis', 'MECE Framework', 'Forensic Analytics', 'Operational Intelligence', 'Star Schema'],
    images: ['/media/images/olist1.jpeg', '/media/images/olist2.jpeg', '/media/images/olist3.jpeg'],
    githubUrl: 'https://github.com/abdoNM5/LOW_RATING_PROBLEM',
    category: 'Analytics',
    date: '2026-03',
    profile: 'DATA ANALYSIS',
  },
  {
    id: 5,
    title: 'Skamira Forecast',
    description: 'End-to-end stock market intelligence platform combining GRU forecasting, vector similarity search, automated Airflow pipelines, and an interactive Streamlit dashboard for market analytics.',
    image: '/media/images/skamira3.jpeg',
    link: '#',
    tags: ['Python', 'TensorFlow', 'Keras', 'Qdrant', 'Airflow', 'PostgreSQL', 'Streamlit', 'MLflow', 'Docker'],
    mediaItems: [
      { type: 'video', src: '/media/videos/skamira_vid.mp4' },
      { type: 'image', src: '/media/images/forcast1.jpeg' },
      { type: 'image', src: '/media/images/forcast2.jpeg' },
    ],
    githubUrl: 'https://github.com/abdoNM5/forcasting',
    category: 'ML',
    date: '2025-12',
    profile: 'DATA ENG',
  },
  {
    id: 6,
    title: 'Aviation Data Pipeline',
    description: 'Airflow-based aviation data pipeline that ingests, cleans, and warehouses flight data for the final Power BI dashboard.',
    image: '/media/images/aviationstack.png',
    link: '#',
    tags: ['Apache Airflow', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Power BI'],
    images: ['/media/images/AVIATION.png', '/media/images/aviation2.jpeg', '/media/images/aviation3.jpeg'],
    githubUrl: 'https://github.com/abdoNM5/aviation_stack',
    category: 'Pipelines',
    date: '2026-01',
    profile: 'DATA ENG',
  },
  {
    id: 4,
    title: 'Match Detector',
    description: 'AI-powered football match analysis system that automatically detects and tracks players, classifies teams using visual embeddings, and transforms camera perspective to pitch coordinates. Generates annotated videos with tactical formations and synchronized radar (top-down) view for comprehensive match visualization and analysis.',
    image: '/media/images/match1.jpeg',
    link: '#',
    tags: ['Roboflow', 'PyTorch', 'SigLIP', 'ByteTrack', 'OpenCV', 'Supervision', 'scikit-learn', 'NumPy'],
    videos: ['/media/videos/ai1.mp4', '/media/videos/ai2.mp4'],
    githubUrl: 'https://github.com/abdoNM5/match_detector',
    category: 'ML',
    date: '2025-10',
    profile: 'DATA ANALYSIS',
  },
  {
    id: 3,
    title: 'Smart HR Manager',
    description: 'AI-powered workforce management solution featuring face recognition attendance system using OpenCV, LLM-powered chatbot built with LangChain and Groq for intelligent data queries, HR employee management interface, and interactive analytics dashboard with real-time attendance tracking and department insights.',
    image: '/media/images/rh_manager.jpeg',
    link: '#',
    tags: ['React', 'FastAPI', 'LangChain', 'OpenCV', 'DOCKER', 'MySQL', 'TypeScript','DeepFace'],
    videoUrl: '/media/videos/rh_manager.mp4',
    githubUrl: 'https://github.com/abdoNM5/rh_manager',
    category: 'ML',
    date: '2025-08',
    profile: 'SOFTWARE ENG',
  },
  {
    id: 2,
    title: 'SmartHome Multi-AI Agents',
    description: 'Advanced FastAPI web application leveraging CrewAI and Google Gemini to intelligently discover and format service providers. Features multi-agent AI orchestration for web scraping with Selenium, dual authentication via Oracle DB and Google OAuth, and AI-powered data cleaning for business listings.',
    image: '/media/images/ai_agent3.jpg',
    link: '#',
    tags: ['FastAPI', 'CrewAI', 'DOCKER', 'Selenium', 'Oracle DB', 'Google OAuth'],
    images: ['/media/images/ai_agent1.jpg', '/media/images/ai_agent2.jpg', '/media/images/ai_agent3.jpg', '/media/images/ai_agent4.jpg', '/media/images/ai_agent5.jpg', '/media/images/ai_agent6.jpg'],
    githubUrl: 'https://github.com/abdoNM5/smartHome',
    category: 'Software',
    date: '2025-05',
    profile: 'SOFTWARE ENG',
  },
  {
    id: 1,
    title: 'Hospital Management Desktop Application',
    description: 'Comprehensive PyQt5 desktop application for hospital management with three main modules: patient information management with search and condition-based adjustments, data visualization dashboard showing analytics by department, disease, and conditions, and worker scheduling with shift management and time-off requests.',
    image: '/media/images/hospital.jpeg',
    link: '/media/images/hospital.jpeg',
    tags: ['PyQt5', 'Python', 'Pandas', 'NumPy', 'Data Visualization'],
    videoUrl: '/media/videos/hospital.mp4',
    githubUrl: 'https://github.com/abdoNM5/hospital-application',
    category: 'Software',
    date: '2024-02',
    profile: 'SOFTWARE ENG',
  },
];

export const ProjectsPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [selectedVideos, setSelectedVideos] = useState<string[] | null>(null);
  const [selectedMediaItems, setSelectedMediaItems] = useState<ProjectMediaItem[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterLabel>('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const profileTrackCount = new Set(PROJECTS.map((project) => project.profile)).size;

  const handleVideoClose = () => {
    setSelectedVideo(null);
  };

  const handleImagesOpen = (images: string[]) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
  };

  const handleImagesClose = () => {
    setSelectedImages(null);
    setCurrentImageIndex(0);
  };

  const handleVideosOpen = (videos: string[]) => {
    setSelectedVideos(videos);
    setCurrentVideoIndex(0);
  };

  const handleVideosClose = () => {
    setSelectedVideos(null);
    setCurrentVideoIndex(0);
  };

  const handleMediaOpen = (mediaItems: ProjectMediaItem[]) => {
    setSelectedMediaItems(mediaItems);
    setCurrentMediaIndex(0);
  };

  const handleMediaClose = () => {
    setSelectedMediaItems(null);
    setCurrentMediaIndex(0);
  };

  const goToPreviousImage = () => {
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1));
    }
  };

  const goToNextImage = () => {
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1));
    }
  };

  const goToPreviousVideo = () => {
    if (selectedVideos) {
      setCurrentVideoIndex((prev) => (prev === 0 ? selectedVideos.length - 1 : prev - 1));
    }
  };

  const goToNextVideo = () => {
    if (selectedVideos) {
      setCurrentVideoIndex((prev) => (prev === selectedVideos.length - 1 ? 0 : prev + 1));
    }
  };

  const goToPreviousMedia = () => {
    if (selectedMediaItems) {
      setCurrentMediaIndex((prev) => (prev === 0 ? selectedMediaItems.length - 1 : prev - 1));
    }
  };

  const goToNextMedia = () => {
    if (selectedMediaItems) {
      setCurrentMediaIndex((prev) => (prev === selectedMediaItems.length - 1 ? 0 : prev + 1));
    }
  };

  const handleDescriptionClose = () => {
    setSelectedProjectId(null);
  };

  const getProjectDescription = (projectId: number) => {
    if (projectId === 10) {
      return {
        title: 'Olist E-Commerce Review Score Root Cause Analysis',
        sections: [
          {
            title: '💰 Problem',
            content: 'Olist, a major Brazilian marketplace, was stuck at a 4.09/5 review score. Needed to pinpoint the true drivers of low ratings across 98K+ orders.'
          },
          {
            title: '🌳 Approach (MECE Framework)',
            content: 'Split the investigation into logistics, seller quality, and product category hypotheses to isolate specific causes.'
          },
          {
            title: '🚚 Logistics Impact',
            items: [
              'Late deliveries drag ratings from 4.2 -> 2.5',
              'Quantified a 1.73-point delivery penalty'
            ]
          },
          {
            title: '👥 Seller Quality',
            items: [
              'Overall defect rate of 14.7% but concentrated among a few sellers',
              'High-volume sellers spike to 80%+ defect rates'
            ]
          },
          {
            title: '📦 Product Categories',
            items: [
              'Children\'s items, diapers, and fashion consistently underperform',
              'Category-level quality gaps suppress global scores'
            ]
          },
          {
            title: '🎯 Impact',
            items: [
              'Proved ratings drop due to three converging drivers',
              'Surfaced high-risk sellers/categories for targeted cleanups',
              'Enabled prioritized hit lists for operations and logistics teams'
            ]
          },
          {
            title: '🛠️ Tech Stack',
            content: 'Power BI • Power Query • Advanced DAX • Star Schema • Root Cause Analysis • MECE Framework'
          }
        ]
      };
    }

    if (projectId === 9) {
      return {
        title: 'HR Attrition & Retention Strategy',
        sections: [
          {
            title: '💰 Problem',
            content: '16% attrition was driving $1M+ salary loss per month. Needed to uncover real resignation triggers and predict who leaves next.'
          },
          {
            title: '🌳 Approach',
            content: 'Hypothesis-driven analysis across compensation, burnout, and leadership to isolate dominant drivers.'
          },
          {
            title: '📊 Key Insights',
            items: [
              'Salary isn\'t the lever; low entry-level pay drives attrition, not raises',
              'Burnout matters: low satisfaction plus overtime creates ~30% attrition risk',
              'Managers matter most: 32% leave within a year of manager change',
              'Growth gaps push specialists out when promotion paths are unclear'
            ]
          },
          {
            title: '🎯 Impact',
            items: [
              'Built a predictive 0-100 Survival Score risk model',
              'Created a real-time watchlist for high-risk employees',
              'Enabled proactive HR interventions before resignations occur'
            ]
          },
          {
            title: '🛠️ Skills',
            content: 'Power BI • DAX • Data Modeling • Predictive Analytics'
          }
        ]
      };
    }

    if (projectId === 8) {
      return {
        title: 'Global Liquidity & AR Risk Dashboard',
        sections: [
          {
            title: '💰 Problem',
            content: 'A $1.14B B2B receivables portfolio lacked visibility into blocked liquidity, overdue accounts, and failing collections.'
          },
          {
            title: '🔍 Approach',
            content: 'Built an advanced Power BI risk dashboard with DAX KPIs and a star schema to diagnose liquidity and collection gaps.'
          },
          {
            title: '📊 Key Metrics Built',
            items: [
              'Weighted Avg Days Late with high-value invoice penalty logic',
              'Collection Effectiveness Index benchmarked vs. 85% goal',
              'Credit limit breach exposure tracking'
            ]
          },
          {
            title: '📉 Key Findings',
            items: [
              '$673M+ receivables overdue (94.6% of AR)',
              '$365M+ stuck in the 90+ day bucket',
              '$239M tied up in disputes plus $310M linked to rogue sales behavior',
              'CEI at 37% vs. 85% target'
            ]
          },
          {
            title: '🎯 Impact',
            items: [
              'Identified root causes of trapped liquidity',
              'Exposed high-risk sales and credit behaviors',
              'Enabled focused actions (credit controls, dispute fixes, process changes) to unlock cash'
            ]
          },
          {
            title: '🛠️ Tech Stack',
            content: 'Power BI • Power Query • Advanced DAX • Star Schema • Time-Series Analysis • Data Modeling'
          }
        ]
      };
    }

    if (projectId === 7) {
      return {
        title: 'SBA Loan Default Risk Analysis (1990–2014)',
        sections: [
          {
            title: '💰 Problem',
            content: '$112B in SBA-backed loans suffered an 18% default rate, creating $13B in losses. Needed to spot high-risk patterns across 900K+ loans.'
          },
          {
            title: '🔧 Data & Modeling',
            items: [
              'Cleansed 899K -> 610K records with PySpark',
              'Built a Power BI star schema with one fact table and five dimensions'
            ]
          },
          {
            title: '🧠 Analysis Approach',
            items: [
              'Portfolio risk trends over time',
              'Loan structure risk (revolving/short-term credit)',
              'Borrower size vs. default rates',
              'Lender and geographic risk profiling'
            ]
          },
          {
            title: '📊 Key Findings',
            items: [
              'Short-term loans carry ~30% higher default risk',
              'Some lenders exceed 60% default rates',
              'Medium businesses are ~5x more stable than micro firms',
              'Specific franchise types repeatedly fail'
            ]
          },
          {
            title: '🎯 Impact',
            items: [
              'Flagged high-risk loan categories and lenders',
              'Proposed tighter rules for revolving credit',
              'Shifted focus toward higher-density, more stable borrowers'
            ]
          },
          {
            title: '🛠️ Tech Stack',
            content: 'PySpark • Python • Power BI • Hadoop • Star Schema • ETL Pipeline'
          }
        ]
      };
    }

    if (projectId === 6) {
      return {
        title: 'Aviation Data Pipeline',
        sections: [
          {
            title: '🛫 Overview',
            content: 'End-to-end Apache Airflow pipeline automating ingestion, transformation, and delivery of aviation data into a Power BI-ready warehouse.'
          },
          {
            title: '🔄 Pipeline Orchestration (Airflow)',
            items: [
              'Designed DAGs to coordinate multi-stage workflows',
              'Ingested raw flight and reference datasets with automated dependencies',
              'Ensured reliable, repeatable processing runs'
            ]
          },
          {
            title: '🗄️ Data Engineering & Warehouse Layer',
            items: [
              'Transformed aviation data with Python + SQLAlchemy',
              'Standardized flight records before loading to PostgreSQL',
              'Modeled relational tables for analytics integrity'
            ]
          },
          {
            title: '📊 Analytics & Reporting Layer',
            items: [
              'Connected warehouse outputs directly to Power BI',
              'Built dashboards for performance, delays, and traffic patterns',
              'Delivered near real-time operational insights'
            ]
          },
          {
            title: '⚙️ Tech Stack',
            content: 'Apache Airflow • Python • PostgreSQL • SQLAlchemy • Docker • Power BI'
          }
        ]
      };
    }

    if (projectId === 5) {
      return {
        title: 'Skamira Forecast',
        sections: [
          {
            title: '📊 Overview',
            content: 'AI-powered stock market platform for 7-day forecasting, historical pattern matching, and performance tracking in one interactive dashboard.'
          },
          {
            title: '📈 Forecasting Engine',
            items: [
              'GRU-based ensemble predicts short-term stock price movement',
              'Trained on historical market time-series with backtesting for accuracy',
              'Ensemble setup improves stability across volatile conditions'
            ]
          },
          {
            title: '🔎 Pattern Search System',
            items: [
              'Qdrant similarity search converts price sequences into vector embeddings',
              'Finds matching historical market conditions',
              'Surfaces past outcomes to compare against current trends'
            ]
          },
          {
            title: '📊 Dashboard',
            items: [
              'Streamlit UI visualizes price trends, volatility, and correlations',
              'Compares predictions versus actual performance for quick validation'
            ]
          },
          {
            title: '⚙️ Tech Stack',
            content: 'Python • TensorFlow/Keras • Airflow • PostgreSQL • Qdrant • Streamlit • MLflow • Docker'
          }
        ]
      };
    }

    if (projectId === 4) {
      return {
        title: 'Match Detector',
        sections: [
          {
            title: 'System Overview',
            content: 'AI-powered football analysis system detecting players, classifying teams, and generating synchronized tactical videos.'
          },
          {
            title: '🎯 Object Detection & Recognition',
            items: [
              'Detects players, goalkeepers, referees, and ball using Roboflow models',
              'Tracks identities over time with ByteTrack'
            ]
          },
          {
            title: '👥 AI Team Classification',
            items: [
              'Generates SigLIP embeddings for player crops',
              'Clusters embeddings with KMeans to separate teams'
            ]
          },
          {
            title: '🎬 Video Generation',
            items: [
              'Annotated broadcast with team-colored ellipses and tactics overlays',
              'Radar view using homography-transformed pitch coordinates',
              'Outputs synchronized side-by-side videos'
            ]
          },
          {
            title: '📐 Perspective Transformation',
            items: [
              'Detects pitch corners to build homography matrix',
              'Maps camera coordinates to top-down pitch space'
            ]
          },
          {
            title: 'Tech Stack',
            content: 'Roboflow • PyTorch • SigLIP • ByteTrack • OpenCV • Supervision • scikit-learn (UMAP, KMeans) • NumPy'
          }
        ]
      };
    }

    if (projectId === 3) {
      return {
        title: 'Smart HR Manager',
        sections: [
          {
            title: '📊 Overview',
            content: 'AI-powered HR automation platform combining computer vision attendance, LLM-based data querying, and real-time analytics to modernize workforce operations.'
          },
          {
            title: '📸 Face Recognition Attendance',
            items: [
              'OpenCV + LBPH contactless check-in/out system',
              'Real-time attendance tracking without manual input'
            ]
          },
          {
            title: '🤖 AI HR Assistant',
            items: [
              'LangChain + Groq chatbot converts natural-language questions into SQL',
              'Automatically returns structured employee and attendance insights'
            ]
          },
          {
            title: '📊 Analytics Dashboard',
            items: [
              'React + Chart.js UI tracks daily attendance KPIs',
              'Visualizes department distribution, hours, and live logs'
            ]
          },
          {
            title: '🔐 Security & Architecture',
            items: [
              'JWT auth with role-based access',
              'FastAPI backend with MySQL/MariaDB data layer'
            ]
          },
          {
            title: '⚙️ Tech Stack',
            content: 'React (TypeScript) • FastAPI • OpenCV • LangChain • Groq API • MySQL/MariaDB • Chart.js • JWT • Pandas • NumPy'
          }
        ]
      };
    }

    if (projectId === 2) {
      return {
        title: 'SmartHome Multi-AI Agents',
        sections: [
          {
            title: 'System Overview',
            content: 'AI-powered service discovery portal leveraging CrewAI and Gemini to rank local providers.'
          },
          {
            title: '🔐 Authentication',
            items: [
              'Supports worker ID/password login plus Google OAuth 2.0',
              'FastAPI middleware manages secure sessions'
            ]
          },
          {
            title: '🔍 Service Search',
            items: [
              'Category dropdown + location input (Maps or manual)',
              'Recent search caching for quick recall'
            ]
          },
          {
            title: '🤖 CrewAI Agent Processing',
            items: [
              'Research agent scrapes Yellow Pages/Yelp via Selenium',
              'Data analyst agent cleans/validates results',
              'Formatter agent uses Gemini to structure ranked outputs'
            ]
          },
          {
            title: 'Tech Stack',
            content: 'FastAPI • CrewAI • Google Gemini • Selenium • Pandas • Oracle DB • Docker'
          }
        ]
      };
    }

    if (projectId === 1) {
      return {
        title: 'Hospital Management System',
        sections: [
          {
            title: 'System Overview',
            content: 'PyQt5 desktop platform covering patient records, analytics, and staff scheduling.'
          },
          {
            title: '🏥 Patient Management',
            items: [
              'Registration and search flows with condition-based updates',
              'Comprehensive medical record storage',
              'Sortable interface for rapid lookup'
            ]
          },
          {
            title: '📊 Data Dashboard',
            items: [
              'Department analytics, disease breakdowns, and condition monitoring',
              'Interactive charts for performance tracking'
            ]
          },
          {
            title: '👥 Scheduling & Shift Management',
            items: [
              'Weekly calendar for assignments and shift swaps',
              'Time-off requests with real-time availability view'
            ]
          },
          {
            title: 'Tech Stack',
            content: 'PyQt5 • Python 3.x • Pandas • NumPy • Data Visualization'
          }
        ]
      };
    }

    return null;
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content" data-aos="fade-up">
          <p className="hero-kicker">Project Lab</p>
          <h1>Interactive Builds and Case Studies</h1>
          <p>
            Every card keeps the split action you liked: watch media walkthroughs or jump directly to the GitHub repository.
          </p>
        </div>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-chip">
            <strong>{PROJECTS.length}</strong>
            <span>Featured Projects</span>
          </div>
          <div className="stat-chip">
            <strong>{profileTrackCount}</strong>
            <span>Profile Tracks</span>
          </div>
          <div className="stat-chip">
            <strong>2</strong>
            <span>Actions per Project</span>
          </div>
        </div>
      </section>

      <section className="projects-controls" data-aos="fade-up">
        <div className="controls-head">
          <h2>Browse by Track</h2>
          <p>Filter by project focus and explore the portfolio as a curated lab.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Project filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-container">
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card-page" data-aos="fade-up">
              <div className="project-image-page">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  project.image
                )}
              </div>

              <div className="project-overlay">
                <div className="overlay-line"></div>
                <div className="overlay-left">
                  <button 
                    className="overlay-btn video-btn"
                    onClick={() => {
                      if (project.mediaItems) {
                        handleMediaOpen(project.mediaItems);
                      } else if (project.videos) {
                        handleVideosOpen(project.videos);
                      } else if (project.images) {
                        handleImagesOpen(project.images);
                      } else if (project.videoUrl) {
                        setSelectedVideo(project.videoUrl);
                      }
                    }}
                    title="Watch Project Media"
                  >
                    <FaEye size={24} />
                    <span>Watch Media</span>
                  </button>
                </div>
                <div className="overlay-right">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="overlay-btn code-btn"
                    title="View Code on GitHub"
                  >
                    <FaGithub size={24} />
                    <span>Open Repo</span>
                  </a>
                </div>
              </div>

              <div className="project-content-page">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-profile">{project.profile}</span>
                </div>
                <span className="project-date">{project.date}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProjectId(project.id)}
                  className="project-link-btn"
                  style={{ cursor: 'pointer' }}
                >
                  Open Project Description
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="empty-state">No projects available for this track yet.</p>
        )}
      </section>

      <section className="projects-cta">
        <h2 data-aos="fade-up">Need Similar Work?</h2>
        <p data-aos="fade-up">Let&apos;s design a data project with the same execution quality.</p>
        <a href="/#contact" className="cta-button" data-aos="zoom-in">
          Start a Project
        </a>
      </section>

      {selectedVideo && (
        <div className="video-modal-backdrop" onClick={handleVideoClose}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleVideoClose}>
              <FaTimes size={28} />
            </button>
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {selectedMediaItems && (
        <div className="video-modal-backdrop" onClick={handleMediaClose}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleMediaClose}>
              <FaTimes size={28} />
            </button>
            <div className="image-carousel-container">
              {selectedMediaItems[currentMediaIndex].type === 'video' ? (
                <video
                  className="carousel-image"
                  controls
                  src={selectedMediaItems[currentMediaIndex].src}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMediaItems[currentMediaIndex].src}
                  alt={`Media ${currentMediaIndex + 1}`}
                  className="carousel-image"
                />
              )}
              {selectedMediaItems.length > 1 && (
                <>
                  <button className="carousel-btn carousel-prev" onClick={goToPreviousMedia}>
                    &#10094;
                  </button>
                  <button className="carousel-btn carousel-next" onClick={goToNextMedia}>
                    &#10095;
                  </button>
                </>
              )}
              <div className="carousel-indicator">
                {currentMediaIndex + 1} / {selectedMediaItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedVideos && (
        <div className="video-modal-backdrop" onClick={handleVideosClose}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleVideosClose}>
              <FaTimes size={28} />
            </button>
            <div className="video-container">
              <video 
                width="100%"
                height="100%"
                controls
                src={selectedVideos[currentVideoIndex]}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {selectedVideos.length > 1 && (
              <>
                <button className="carousel-btn carousel-prev" onClick={goToPreviousVideo}>
                  &#10094;
                </button>
                <button className="carousel-btn carousel-next" onClick={goToNextVideo}>
                  &#10095;
                </button>
                <div className="carousel-indicator">
                  {currentVideoIndex + 1} / {selectedVideos.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {selectedImages && (
        <div className="video-modal-backdrop" onClick={handleImagesClose}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleImagesClose}>
              <FaTimes size={28} />
            </button>
            <div className="image-carousel-container">
              <img 
                src={selectedImages[currentImageIndex]} 
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="carousel-image"
              />
              <button className="carousel-btn carousel-prev" onClick={goToPreviousImage}>
                &#10094;
              </button>
              <button className="carousel-btn carousel-next" onClick={goToNextImage}>
                &#10095;
              </button>
              <div className="carousel-indicator">
                {currentImageIndex + 1} / {selectedImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProjectId && getProjectDescription(selectedProjectId) && (
        <div className="video-modal-backdrop" onClick={handleDescriptionClose}>
          <div className="description-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleDescriptionClose}>
              <FaTimes size={28} />
            </button>
            <div className="description-scroll-container">
              <h2 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>
                {getProjectDescription(selectedProjectId)?.title}
              </h2>
              {getProjectDescription(selectedProjectId)?.sections.map((section: any, idx: number) => (
                <div key={idx} style={{ marginBottom: '2rem' }} className="desc-section">
                  <h3 style={{ color: '#FF6B00', marginBottom: '0.75rem' }}>
                    {section.title}
                  </h3>
                  {section.content && (
                    <p style={{ color: '#E5E5E5', lineHeight: '1.7', marginBottom: '1rem' }}>
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul style={{ color: '#E5E5E5', marginLeft: '1.5rem', lineHeight: '1.7' }}>
                      {section.items.map((item: string, i: number) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
