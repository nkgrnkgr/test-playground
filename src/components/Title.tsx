"use client";

import { Heading } from "react-aria-components";

type Props = {
  children: React.ReactNode;
};

export const Title = ({ children }: Props) => (
  <Heading className="text-3xl font-bold underline mb-4">{children}</Heading>
);
