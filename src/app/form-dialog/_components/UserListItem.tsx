import { ListItem } from "../../../components/List/ListItem";
import { FormDialog } from "./FormDialog";
import { FormDialogContent } from "./FormDialogContent";

type Props = {
  userId: number;
  userName: string;
};

export const UserListItem = ({ userId, userName }: Props) => {
  return (
    <ListItem>
      <div className="flex align-baseline justify-between">
        <div>{userName}</div>
        <FormDialog>
          <FormDialogContent userId={userId} />
        </FormDialog>
      </div>
    </ListItem>
  );
};
