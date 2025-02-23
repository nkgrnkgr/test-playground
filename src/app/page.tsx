import Counter from "./_components/Counter";
import { DataFetch } from "./_components/DataFetch";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Counter />
      <DataFetch todoId={1} />
    </div>
  );
}
