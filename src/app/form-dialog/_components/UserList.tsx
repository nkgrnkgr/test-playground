import { List } from "../../../components/List";
import type { User } from "../../../lib/repositories/fetchUsers";
import { UserListItem } from "./UserListItem";

type Props = {
  users: User[];
};

export const UserList = ({ users }: Props) => {
  return (
    <List>
      {users.map((user) => (
        <UserListItem key={user.id} userId={user.id} userName={user.name} />
      ))}
    </List>
  );
};
