import { client } from "../../../config/database";
import { ClienteDTO } from "./cliente.dto";
import { v4 } from "uuid";

export default class ClientesService {
  async registrarCliente() {
    try {
      const { rows } = await client.query(
        "SELECT * FROM func_obtener_clientes();"
      );
      //   const { rows } = await client.query("SELECT * FROM clientes");
      return rows;
      //   await client.query(
      //     "INSERT INTO clientes (id, fname, lname, address, status, birthdate, updated) VALUES ($1, $2, $3, $4, $5, $6, NOW())",
      //     [
      //       v4().toString(),
      //       "Other",
      //       "othe p",
      //       "mi direccion 2232",
      //       1,
      //       "11-20-2000",
      //     ]
      //   );
      //   await client.query("CALL proc_registrar_cliente($1, $2, $3, $4, $5, $6)", [
      //     v4().toString(),
      //     "Max",
      //     "Meza p",
      //     "jr lima 2232",
      //     "1",
      //     "09-22-1996",
      //   ]);
      //   return "OK";
    } catch (error) {
      throw error;
    }
  }
}
