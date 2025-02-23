"use client";

import type { ReactNode } from "react";
import { RepositoriesContext, type Todo } from "./RepositoriesContext";

const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const data = await response.json();
  return data as Todo;
};

const fetchUser = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const data = await response.json();
  return data;
};

type Props = {
  children: ReactNode;
};

export const RepositoriesProvider = ({ children }: Props) => {
  return (
    <RepositoriesContext.Provider
      value={{
        todoRepository: fetchTodo,
        userRepository: fetchUser,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};
