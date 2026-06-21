import React, { useEffect, useState } from 'react';
import { API_BASE, extractList } from '../apiConfig';

export default function Workouts() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/workouts/`)
      .then((r) => r.json())
      .then((json) => setList(extractList(json)))
      .catch((e) => setError(e.message || String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading workouts...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Workouts</h2>
      <div className="row">
        {list.map((w) => (
          <div key={w._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{w.title}</h5>
                <p className="card-text">Duration: {w.durationMinutes} min</p>
                <p className="card-text">Calories: {w.caloriesBurned}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
