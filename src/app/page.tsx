import Counter from "./_components/Counter";
import { WithRepository } from "./_components/WithRepository";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Counter />
      <WithRepository />
    </div>
  );
}
