"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { repositories } from "../../../lib/repositories";

type Props = {
  todoId: number;
};

export const DataFetch = ({ todoId }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["todos", todoId],
    queryFn: () => repositories.fetchTodo(todoId),
  });

  return (
    <div>
      <pre
        data-testid="data"
        className="bg-gray-800 text-white p-4 rounded-md overflow-auto"
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
