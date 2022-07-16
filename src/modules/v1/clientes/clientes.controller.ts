import { Request, Response } from "express";
import { container } from "tsyringe";
import ClientesService from "./clientes.service";

export default class ClientesController {
  async registro(req: Request, res: Response) {
    const { fname, lname } = req.body;
    try {
      const clientesService = container.resolve(ClientesService);
      const response = await clientesService.registrarCliente();
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
}
