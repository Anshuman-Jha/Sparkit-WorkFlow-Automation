import 'dotenv/config' // Explicitly load .env file
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations", // Assuming this is your migrations folder
  },
  // The database URL is configured here for the CLI commands
  datasource: {
    url: env("DATABASE_URL"),
    // You might also need: shadowDatabaseUrl: env("SHADOW_DATABASE_URL")
  },
});
