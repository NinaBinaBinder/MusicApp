import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const globalQueryClient = global as unknown as {
  queryClient?: postgres.Sql;
};

const databaseUrl = process.env.DATABASE_URL;

const queryClient =
  globalQueryClient.queryClient ?? postgres(databaseUrl!, { max: 12 });

if (process.env.NODE_ENV === "development")
  globalQueryClient.queryClient = queryClient;
export const db = drizzle(queryClient);
