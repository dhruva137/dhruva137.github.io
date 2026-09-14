import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import ResearchIndex from './pages/ResearchIndex';
import ResearchDetail from './pages/ResearchDetail';
import ProjectIndex from './pages/ProjectIndex';
import ProjectDetail from './pages/ProjectDetail';

// Placeholder for Writings and Random
const Writings = () => (
  <div className="font-mono text-sm border-2 border-black p-4 bg-yellow-100 shadow-[4px_4px_0_0_#000]">
    <h1 className="text-2xl font-bold bg-black text-white p-2 inline-block mb-4">WRITINGS.TXT</h1>
    <p>&gt; NO ENTRIES FOUND.</p>
    <p>&gt; CHECK BACK LATER.</p>
  </div>
);

const Random = () => (
  <div className="font-mono text-sm border-2 border-black p-4 bg-pink-100 shadow-[4px_4px_0_0_#000]">
    <h1 className="text-2xl font-bold bg-black text-white p-2 inline-block mb-4">RANDOM_STUFF.EXE</h1>
    <p>&gt; NO ENTRIES FOUND.</p>
    <p>&gt; CHECK BACK LATER.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="research" element={<ResearchIndex />} />
          <Route path="research/:id" element={<ResearchDetail />} />
          <Route path="projects" element={<ProjectIndex />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="writings" element={<Writings />} />
          <Route path="random" element={<Random />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
