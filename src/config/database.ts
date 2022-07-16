import { Pool } from "pg";

export const client = new Pool({
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 5432,
  database: process.env.DATABASE_NAME || "test_backend",
  user: process.env.DATABASE_USER || "postgres",
  password: process.env.DATABASE_PASSWORD || "password",
});

export default class Database {
  private db: Pool;

  constructor() {
    this.db = client;
  }

  async connect() {
    try {
      this.db.connect();
      console.log();

      console.log("Connection db successfully");
    } catch (error) {
      console.error("Connection error: " + error);
    }
  }

  async disconnect() {
    try {
      this.db.end();
      console.log("Close connection db");
    } catch (error) {
      console.error("Connection error: " + error);
    }
  }
}
