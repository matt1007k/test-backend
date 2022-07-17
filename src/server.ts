import express from "express";
import bodyParser from "body-parser";

import { errors } from "celebrate";

import Database from "./config/database";

import routerV1 from "./modules/v1";

export default class Server {
  private app: express.Application;
  private port: string = process.env.PORT || "3000";
  private db: Database;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.registerRoutes();

    this.app.use(errors());
    this.db = new Database();
  }

  async registerRoutes() {
    this.app.use("/api/v1", routerV1);
  }

  listen() {
    try {
      this.app.listen(this.port, () => {
        this.db.connect();
        console.log("Listening on http://localhost:" + this.port);
      });
    } catch (error) {
      this.db.disconnect;
    }
  }
}
