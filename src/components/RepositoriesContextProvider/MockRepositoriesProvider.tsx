import type { ReactNode } from "react";
import {
  RepositoriesContext,
  type RepositoriesContextProps,
  type Todo,
  type User,
} from "./RepositoriesContext";

const fetchTodoMock = (id: number) =>
  new Promise<Todo>((resolve) =>
    resolve({
      id: 1,
      title: "Todo Title",
      completed: false,
      userId: 1,
    }),
  );

const fetchUserMock = (id: number) =>
  new Promise<User>((resolve) =>
    resolve({
      id: 1,
      name: "User Name",
      username: "user",
      email: "user@user.com",
    }),
  );

type Props = {
  children: ReactNode;
  mockedRepositories: Partial<RepositoriesContextProps>;
};

export const MockRepositoriesProvider = ({
  children,
  mockedRepositories,
}: Props) => {
  return (
    <RepositoriesContext.Provider
      value={{
        todoRepository: fetchTodoMock,
        userRepository: fetchUserMock,
        ...mockedRepositories,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};
