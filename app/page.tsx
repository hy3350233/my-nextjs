"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 Next.js + PostgreSQL (Docker)</h1>
      <h2>Users from Database:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
