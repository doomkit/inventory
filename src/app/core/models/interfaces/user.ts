import { UserRole } from '../enums/user-role.enum';

export interface User {
  id: number; // UNIQUE
  corporate_id: number; // UNIQUE
  email: string; // UNIQUE
  password?: string; // Registration only
  name: string;
  surname: string;
  photo: string;
  role: UserRole;
  token?: string;
}
