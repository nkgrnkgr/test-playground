"use client";

import { use } from "react";
import { useRepositories } from "../../../components/RepositoriesContextProvider/useRepositories";

export const WithRepository = () => {
  const { todoRepository } = useRepositories();
  const todo = use(todoRepository(1));
  return <div>{JSON.stringify(todo, null, 2)}</div>;
};
