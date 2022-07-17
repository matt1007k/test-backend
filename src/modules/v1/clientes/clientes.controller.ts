import { Request, Response } from "express";
import httpStatus from "http-status";
import { container } from "tsyringe";
import { CreateClientBody } from "./cliente.dto";
import ClientesService from "./clientes.service";

export default class ClientesController {
  async registro(req: Request, res: Response): Promise<Response> {
    const { fname, lname, address, status, birthdate } =
      req.body as CreateClientBody;
    try {
      const clientesService = container.resolve(ClientesService);
      const response = await clientesService.createClient({
        fname,
        lname,
        address,
        status,
        birthdate,
      });
      return res.status(httpStatus.CREATED).json(response);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async listar(req: Request, res: Response): Promise<Response> {
    try {
      const clientesService = container.resolve(ClientesService);
      const response = await clientesService.getAllClients();
      return res.status(httpStatus.OK).json(response);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async detalle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const clientesService = container.resolve(ClientesService);
      const response = await clientesService.getClientById(id);
      return res.status(httpStatus.OK).json(response);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async actualizar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { fname, lname, address, status, birthdate } =
      req.body as CreateClientBody;
    try {
      const clientesService = container.resolve(ClientesService);
      const response = await clientesService.updateClient({
        id,
        fname,
        lname,
        address,
        status,
        birthdate,
      });
      return res.status(httpStatus.CREATED).json(response);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
