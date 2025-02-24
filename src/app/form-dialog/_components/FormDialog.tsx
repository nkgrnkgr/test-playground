"use client";

import { Heading } from "react-aria-components";
import { Button } from "../../../components/Button";
import { ModalDialog } from "../../../components/Dialog";

type Props = {
  children: React.ReactNode;
};

export const FormDialog = ({ children }: Props) => {
  return (
    <ModalDialog button={<Button>Open Dialog</Button>}>{children}</ModalDialog>
  );
};
