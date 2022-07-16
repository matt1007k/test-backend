import { Router } from "express";
import ClientesController from "./clientes.controller";

const clientesRouter = Router();
const clienteController = new ClientesController();

clientesRouter.post("/registro", clienteController.registro);

export default clientesRouter;
