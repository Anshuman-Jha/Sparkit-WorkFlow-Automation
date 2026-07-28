import { defineConfig, env } from "prisma/config";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: env("DATABASE_URL"),
  },
});
