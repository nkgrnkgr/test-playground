import { Link } from "../components/Link";
import { Title } from "../components/Title";
import Counter from "./_components/Counter";

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <Counter />
      <Link href="/client-data-fetch">Client Data Fetch</Link>
    </div>
  );
}
