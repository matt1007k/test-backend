export interface ClienteDTO {
  id: string;
  created: string;
  updated: string;
  fname: string;
  lname: string;
  status: number | 0 | 1;
  address: string;
  birthdate: string;
}

export type CreateClientBody = Omit<ClienteDTO, "id" | "created" | "updated">;
export type UpdateClientBody = Omit<ClienteDTO, "created" | "updated">;
