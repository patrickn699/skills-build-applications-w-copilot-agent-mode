import React, { useEffect, useState } from 'react';
import { API_BASE, extractList } from '../apiConfig';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/leaderboard`)
      .then((r) => r.json())
      .then((json) => setEntries(extractList(json)))
      .catch((e) => setError(e.message || String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading leaderboard...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol className="list-group list-group-numbered">
        {entries.map((e) => (
          <li key={e._id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{e.team?.name ?? (e.team || 'Team')}</div>
              Points: {e.points}
            </div>
            <span className="badge bg-primary rounded-pill">#{e.rank}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
