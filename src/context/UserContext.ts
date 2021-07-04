import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  phone: string;
}

export interface UserForm {
  name: string;
  phone: string;
}

export interface UserContextProps {
  users: User[];
  saveUser: (data: UserForm, callback?: (err: Error | null) => void) => void;
  deleteUser: (userId: string, callback?: (err: Error | null) => void) => void;
}

export const UserContext = createContext({} as UserContextProps);
