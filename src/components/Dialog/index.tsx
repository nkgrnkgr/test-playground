"use client";

import {
  Dialog,
  type DialogProps,
  DialogTrigger,
  Modal,
} from "react-aria-components";

type Props = {
  button: React.ReactNode;
  children: React.ReactNode;
  dialogProps?: DialogProps;
};

export const ModalDialog = ({ button, children, dialogProps }: Props) => {
  return (
    <DialogTrigger>
      {button}
      <Modal className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <Dialog className="bg-white p-6 rounded shadow-lg" {...dialogProps}>
          {children}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
