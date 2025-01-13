import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from ".";

const main = async () => {
  console.log("location: lib/db/migrate.ts","migrations running...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("location: lib/db/migrate.ts","migration finishied!!");
};

main().then(() => {
  process.exit();
});
