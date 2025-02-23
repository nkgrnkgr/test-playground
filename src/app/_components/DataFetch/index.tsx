"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../../lib/repositories/fetchTodo";

type Props = {
  todoId: number;
};

export const DataFetch = ({ todoId }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["todos", todoId],
    queryFn: () => fetchTodo(todoId),
  });

  return (
    <div>
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
