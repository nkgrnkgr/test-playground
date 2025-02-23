type Props = {
  children: React.ReactNode;
};

export const Title = ({ children }: Props) => (
  <h1 className="text-3xl font-bold underline mb-4">{children}</h1>
);
