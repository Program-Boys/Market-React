import React from "react";

interface IButton {
  children: React.ReactNode;
  text: string;
}

const Button = ({ children }: IButton) => {
  return <button>{children}</button>;
};

export default Button;
