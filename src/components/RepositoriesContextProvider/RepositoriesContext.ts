import { createContext } from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export interface RepositoriesContextProps {
  todoRepository: (id: number) => Promise<Todo>;
  userRepository: (id: number) => Promise<User>;
}

export const RepositoriesContext = createContext<
  RepositoriesContextProps | undefined
>(undefined);
