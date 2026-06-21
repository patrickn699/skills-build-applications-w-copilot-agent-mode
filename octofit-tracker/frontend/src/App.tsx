import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p>Modern multi-tier workout tracking with a React frontend and Express backend.</p>
      <Link to="/about" className="btn btn-primary">Learn more</Link>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h2>About</h2>
      <p>Track workouts, teams, and leaderboards with a responsive React UI.</p>
      <Link to="/" className="btn btn-secondary">Back</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
