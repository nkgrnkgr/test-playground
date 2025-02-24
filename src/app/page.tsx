import { Link } from "../components/Link";
import { List } from "../components/List";
import { ListItem } from "../components/List/ListItem";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <ListItem>
          <Link href="/counter">Counter</Link>
        </ListItem>
        <ListItem>
          <Link href="/client-data-fetch">Client Data Fetch</Link>
        </ListItem>
        <ListItem>
          <Link href="/server-data-fetch">Server Data Fetch</Link>
        </ListItem>
      </List>
    </div>
  );
}
