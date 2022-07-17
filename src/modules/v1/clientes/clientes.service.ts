import { client } from "../../../config/database";
import { CreateClientBody, UpdateClientBody } from "./cliente.dto";
import { v4 as uuid } from "uuid";
import { format } from "date-and-time";

export default class ClientesService {
  async createClient({
    fname,
    lname,
    address,
    status,
    birthdate,
  }: CreateClientBody) {
    try {
      await client.query(
        "CALL proc_registrar_cliente($1, $2, $3, $4, $5, $6)",
        [uuid().toString(), fname, lname, address, status, birthdate]
      );
      return "OK";
    } catch (error) {
      throw error;
    }
  }

  async getAllClients() {
    try {
      const response = await client.query(
        "SELECT * FROM func_obtener_clientes();"
      );
      return response.rows;
    } catch (error) {
      throw error;
    }
  }

  async getClientById(id: string) {
    try {
      const response = await client.query(
        "SELECT * FROM func_obtener_un_cliente($1);",
        [id]
      );
      return response.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateClient({
    id,
    fname,
    lname,
    address,
    status,
    birthdate,
  }: UpdateClientBody) {
    try {
      await client.query(
        "CALL proc_actualizar_un_cliente($1, $2, $3, $4, $5, $6);",
        [id, fname, lname, address, status, birthdate]
      );
      return "OK";
    } catch (error) {
      throw error;
    }
  }
}
