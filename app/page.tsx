"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching users:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading users...</p>
  }

  return (
    <div>
      <h1>🚀 Users from PostgreSQL</h1>
      {users && users.length > 0 ? (
        <ul>
          {users.map((u: any) => (
            <li key={u.id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  )
}
