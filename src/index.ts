import {prisma} from './db';

async function main() {
    // Create a new task
    const task = await prisma.task.create({
        data: {
            title: 'My first task'},
        });
    // Log all tasks in the database
    const allTasks = await prisma.task.findMany();
    console.log(allTasks);
}

main();