import { use } from "react";
import { DataViewer } from "../../components/DataViewer";
import { Title } from "../../components/Title";
import { repositories } from "../../lib/repositories";

export default function Page() {
  const data = use(repositories.fetchTodo(1));

  return (
    <>
      <Title>Server Data Fetch</Title>
      <DataViewer data={data} />
    </>
  );
}
