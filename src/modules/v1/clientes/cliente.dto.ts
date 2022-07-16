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
