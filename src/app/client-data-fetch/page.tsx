import { Title } from "../../components/Title";
import { ClientDataFetch } from "./_components/ClientDataFetch";

export default function Page() {
  return (
    <>
      <Title>Client Data Fetch</Title>
      <ClientDataFetch todoId={1} />
    </>
  );
}
