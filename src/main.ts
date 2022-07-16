import "reflect-metadata";
import dotenv from "dotenv";
import Server from "./server";

dotenv.config();
const server = new Server();

server.registerRoutes();

server.listen();
