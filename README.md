# Lush Task List API

A GraphQL API for managing a simple task list, built with TypeScript, GraphQL, Yoga, Pothos, Zod and Prisma.

## Prerequisites

- Node.js 22 or later
- npm

## Getting Started

```bash
npm install
npx prisma migrate deploy
npm run dev
```

The server runs at `http://localhost:4000/graphql` with Yoga's built in IDE.

## Available Scripts

- `npm run dev` — start the server
- `npm run db:seed` — populate the database with sample tasks
- `npx prisma studio` — inspect the database in a browser UI

## API

The API exposes the following operations on a `Task` type (`id`, `title`, `completed`, `createdAt`, `updatedAt`).

**Queries**
- `tasks(completed: Boolean)` — list all tasks, optionally filtered by completion status
- `task(id: ID!)` — fetch a single task by ID

**Mutations**
- `addTask(title: String!)` — create a new task
- `updateTitle(id: ID!, title: String!)` — update a task's title
- `toggleTask(id: ID!)` — toggle a task's completed status
- `deleteTask(id: ID!)` - delete a task

All inputs are validated with Zod. Validation errors are returned as GraphQL errors.
