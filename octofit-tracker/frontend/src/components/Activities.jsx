import React, { useEffect, useState } from 'react';
import { API_BASE, extractList } from '../apiConfig';

export default function Activities() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/activities/`)
      .then((r) => r.json())
      .then((json) => setItems(extractList(json)))
      .catch((e) => setError(e.message || String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading activities...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr><th>User</th><th>Type</th><th>Duration</th><th>Calories</th><th>When</th></tr>
        </thead>
        <tbody>
          {items.map((a) => (
            <tr key={a._id}>
              <td>{a.user}</td>
              <td>{a.type}</td>
              <td>{a.durationMinutes}</td>
              <td>{a.caloriesBurned}</td>
              <td>{new Date(a.happenedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
