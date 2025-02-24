"use client";

import { Heading } from "react-aria-components";
import { Button } from "../../../components/Button";
import { ModalDialog } from "../../../components/Dialog";

export const FormDialog = () => {
  return (
    <ModalDialog button={<Button>Open Dialog</Button>}>
      <Heading>Form Dialog</Heading>
    </ModalDialog>
  );
};
