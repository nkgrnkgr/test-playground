type Props = {
  children: React.ReactNode;
};

export const List = ({ children }: Props) => {
  return <ul className="flex flex-col gap-1">{children}</ul>;
};
