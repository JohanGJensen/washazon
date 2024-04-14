import { Pool } from "pg";

// postgres database client pool
export const pool = new Pool({
  user: 'root',
  password: 'pass',
  host: 'localhost',
  port: 5432,
  database: 'washazon'
});
