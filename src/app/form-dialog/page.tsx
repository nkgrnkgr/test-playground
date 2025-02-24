import { use } from "react";
import { Title } from "../../components/Title";
import { repositories } from "../../lib/repositories";
import { FormDialog } from "./_components/FormDialog";
import { UserList } from "./_components/UserList";

export default function Page() {
  const users = use(repositories.fetchUsers());
  return (
    <>
      <Title>FormDialog</Title>
      <UserList users={users} />
    </>
  );
}
