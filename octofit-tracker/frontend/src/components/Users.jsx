import React, { useEffect, useState } from 'react';
import { API_BASE, extractList } from '../apiConfig';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/users`)
      .then((r) => r.json())
      .then((json) => setUsers(extractList(json)))
      .catch((e) => setError(e.message || String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u._id} className="list-group-item">
            <strong>{u.name}</strong> — {u.email} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}
