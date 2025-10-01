import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🚀 Next.js + PostgreSQL (Docker)</h1>
      <h2>Users in Database:</h2>
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
