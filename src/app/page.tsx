import { Link } from "../components/Link";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/client-data-fetch">Client Data Fetch</Link>
        </li>
        <li>
          <Link href="/server-data-fetch">Server Data Fetch</Link>
        </li>
      </ul>
    </div>
  );
}
