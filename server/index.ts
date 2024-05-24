import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(process.env.POSTGRES_DB!);
const db = drizzle(sql);
