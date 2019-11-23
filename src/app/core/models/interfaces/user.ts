import { UserRole } from "../enums/user-role.enum";

export interface User {
  id: number;
  username: string;
  corporate_id: number;
  email: string;
  password?: string;
  name: string;
  surname: string;
  photo: string;
  role: UserRole;
  token?: string;
}
