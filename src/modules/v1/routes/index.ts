import { Router } from "express";
import clientesRouter from "../clientes/clientes.route";

const routerV1 = Router();

routerV1.use("/clientes", clientesRouter);

export default routerV1;
