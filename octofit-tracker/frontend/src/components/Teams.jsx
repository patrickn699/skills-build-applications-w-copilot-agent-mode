import React, { useEffect, useState } from 'react';
import { API_BASE, extractList } from '../apiConfig';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/teams/`)
      .then((r) => r.json())
      .then((json) => setTeams(extractList(json)))
      .catch((e) => setError(e.message || String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading teams...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((t) => (
          <li key={t._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{t.name}</strong>
              <div className="small">Members: {Array.isArray(t.members) ? t.members.length : t.members}</div>
            </div>
            <span className="badge bg-primary rounded-pill">{t.score ?? 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
