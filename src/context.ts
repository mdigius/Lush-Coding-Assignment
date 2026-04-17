/**
 * Context module for GraphQL resolvers, providing access to the Prisma Client instance.
 * The createContext function initializes and returns the context object with the Prisma Client.
 */

import {prisma} from './db';
import type { PrismaClient } from "./generated/prisma/client";

export interface Context {
    prisma: PrismaClient;
}

export const createContext = (): Context => {
    return { prisma };
}