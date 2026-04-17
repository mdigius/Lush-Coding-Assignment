/**
 * This file sets up the Pothos GraphQL schema builder with Prisma integration.
 * It imports the Prisma Client instance and configures the builder to use it for database interactions.
 * The builder is then used in other schema files (like task.ts) to define object types, queries, and mutations.
 * Finally, the configured builder is exported for use in generating the GraphQL schema.
 */

import SchemaBuilder from "@pothos/core";
import { prisma } from "../db";
import PrismaPlugin from "@pothos/plugin-prisma";
import type { Context } from '../context';
import PrismaTypes from "@pothos/plugin-prisma/generated";

const runtimeDataModel = (prisma as unknown as {
  _runtimeDataModel: { models: unknown; enums: unknown; types: unknown };
})._runtimeDataModel;

export const builder = new SchemaBuilder<{
    Context: Context;
    PrismaTypes: PrismaTypes;
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma,
        dmmf: {datamodel: runtimeDataModel},
        exposeDescriptions: true,
        filterConnectionTotalCount: true,
    },
});

builder.queryType({});
builder.mutationType({});