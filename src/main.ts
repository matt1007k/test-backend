import "reflect-metadata";
import Server from "./server";

const server = new Server();

server.registerRoutes();

server.listen();
