"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { DataViewer } from "../../../../components/DataViewer";
import { repositories } from "../../../../lib/repositories";

type Props = {
  todoId: number;
};

export const ClientDataFetch = ({ todoId }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["todos", todoId],
    queryFn: () => repositories.fetchTodo(todoId),
  });

  return <DataViewer data={data} />;
};
