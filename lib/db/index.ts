import Pool from "pg-pool";

const pool = new Pool({
  database: "progres",
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  allowExitOnIdle: true,
});
