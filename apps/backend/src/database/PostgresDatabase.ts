import { Pool } from "pg";
import { config } from "dotenv";

config();

// postgres database client pool
export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE_NAME,
});

console.log(process.env.POSTGRES_USER)

export enum DatabaseTableEnum {
  PRODUCTS = "products",
};
