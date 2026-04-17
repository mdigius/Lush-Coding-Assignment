/**
 * This file defines the GraphQL schema for the Task entity using Pothos.
 * Imports the schema builder from the index file and uses it to create a Task object type.
 * The Task type includes all fields defined in the Prisma schema
 * Used by the GraphQL server to understand the structure of Task data.
 * Defines a query to fetch all tasks and a mutation to add a new task, utilizing Prisma for database interactions.
 */
import { builder } from "./builder";

builder.prismaObject('Task', {
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        completed: t.exposeBoolean("completed"),
        createdAt: t.string({
            resolve: (task) => task.createdAt.toISOString(),
        }),
        updatedAt: t.string({
            resolve: (task) => task.updatedAt.toISOString(),
        }),
    }),
});

builder.queryField("tasks", (t) =>
    t.prismaField({
        type: ["Task"],
        resolve: (query, root, args, context) => {
            return context.prisma.task.findMany({ ...query });
        },
    })
);

builder.mutationField('addTask', (t) =>
  t.prismaField({
    type: 'Task',
    description: 'Create a new task. Defaults to not completed.',
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: (query, _root, args, ctx) =>
      ctx.prisma.task.create({
        ...query,
        data: { title: args.title },
      }),
  }),
);