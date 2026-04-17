// Export the schema for use in the server setup
import { builder } from "./builder";
import "./task";

export const schema = builder.toSchema();