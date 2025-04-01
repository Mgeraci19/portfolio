import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Projects} from './components/Projects';
import {Resume} from './components/Resume';
import {Footer} from './components/Footer';
import {GamePage} from './components/GamePage';

function App() {
  console.log('App component rendering');
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/pong" element={<GamePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 