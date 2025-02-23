import { useContext } from "react";
import { RepositoriesContext } from "./RepositoriesContext";

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);
  if (!context) {
    throw new Error(
      "useRepositories must be used within a RepositoriesProvider",
    );
  }
  return context;
};
