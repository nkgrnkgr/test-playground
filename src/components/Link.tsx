import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const Link = ({ href, children }: Props) => (
  <NextLink className="text-blue-500 hover:underline" href={href}>
    {children}
  </NextLink>
);
