import { type ButtonProps, Button as Component } from "react-aria-components";

type Props = {
  children: React.ReactNode;
} & ButtonProps;

export const Button = ({ children, ...buttonProps }: Props) => {
  return (
    <Component
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...buttonProps}
    >
      {children}
    </Component>
  );
};
