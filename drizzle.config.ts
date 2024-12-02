//import { Config } from "drizzle-kit";


{/*export default {
  schema: "lib/db/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER ?? "default_user",
    password: process.env.DB_PASSWORD ?? "default_password",
    database: process.env.DB_NAME ?? "default_database",
    ssl: { rejectUnauthorized: false }, // This setting may be required for self-signed certificates; use with caution in production.
  },
  dialect: "postgresql",
} satisfies Config;
*/}

// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER ?? "default_user",
    password: process.env.DB_PASSWORD ?? "default_password",
    database: process.env.DB_NAME ?? "default_database",
    ssl: { rejectUnauthorized: false }, // This setting may be required for self-signed certificates; use with caution in production.
  },
});

