import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ProjectsPage } from './components/ProjectsPage';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
