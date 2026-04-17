/**
 * Validation schemas for Task-related data using Zod.
 * These schemas ensure that the input data for Task operations meets 
 * the required criteria before being processed by the GraphQL server.
 */
import z from "zod";

export const taskIdSchema = z
    .string()
    .min(1, "Task ID cannot be empty")
    .max(50, "Task ID cannot exceed 50 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Task ID must be alphanumeric only");

export const taskTitleSchema = z
    .string()
    .min(1, "Task title cannot be empty")
    .max(255, "Task title cannot exceed 255 characters");