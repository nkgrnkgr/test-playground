import { use } from "react";
import { DataViewer } from "../../components/DataViewer";
import { Title } from "../../components/Title";
import { fetchTodo } from "../../lib/repositories/fetchTodo";

export default function Page() {
  const data = use(fetchTodo(1));

  return (
    <>
      <Title>Server Data Fetch</Title>
      <DataViewer data={data} />
    </>
  );
}
