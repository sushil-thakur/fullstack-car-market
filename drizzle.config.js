import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_bES2rCXD7LKF@ep-cold-recipe-a4s5a1d9-pooler.us-east-1.aws.neon.tech/Cae-marketplace?sslmode=require",
  },
});