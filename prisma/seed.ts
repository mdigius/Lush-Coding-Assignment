/**
 * This script seeds the database with initial dummy
 * data for the Task model.
 */

import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const tasks = [
  { title: "Practice the guitar", completed: true },
  { title: "Get groceries", completed: true },
  { title: "Study for cloud computing exam :(", completed: false },
  { title: "Meet up for lunch with friends", completed: false },
  { title: "Capstone meeting at 3PM", completed: false },
];

async function main() {
  await prisma.task.deleteMany();

  for (const task of tasks) {
    await prisma.task.create({ data: task });
  }

  console.log(`Seeded ${tasks.length} tasks.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
