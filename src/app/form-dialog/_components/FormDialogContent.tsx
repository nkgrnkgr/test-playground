import { use } from "react";
import { DataViewer } from "../../../components/DataViewer";
import { repositories } from "../../../lib/repositories";

type Props = {
  userId: number;
};

export const FormDialogContent = ({ userId }: Props) => {
  const user = use(repositories.fetchUser(userId));
  return (
    <div>
      <h2>{user.name}</h2>
      <DataViewer data={user} />
    </div>
  );
};
