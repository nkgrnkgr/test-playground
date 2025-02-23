import { Link } from "./Link";

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full h-20 bg-gray-400 text-white flex justify-center items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
