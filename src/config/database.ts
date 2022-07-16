import { Pool } from "pg";

export const client = new Pool({
  host: "localhost",
  port: 5432,
  database: "test_backend",
  user: "postgres",
  password: "password",
});

export default class Database {
  private db: Pool;

  constructor() {
    this.db = client;
  }

  async connect() {
    try {
      this.db.connect();
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
