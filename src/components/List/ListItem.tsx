type Props = {
  children: React.ReactNode;
};

export const ListItem = ({ children }: Props) => {
  return <li>{children}</li>;
};
