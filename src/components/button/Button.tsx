import React from "react";
import { MiddleButton } from "./button.style";

export type ButtonProps = {
  size: string;
  text: string;
  outline: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
};

const Button: React.FC<ButtonProps> = ({
  size = "middle",
  disabled = false,
  outline = false,
  onClick,
  text,
}) => {
  const buttonProps = {
    size,
    disabled,
    outline,
    onClick,
  };

  switch (size) {
    case "small": {
      return <button>small</button>;
    }

    case "middle": {
      return <MiddleButton {...buttonProps}>{text}</MiddleButton>;
    }

    case "big": {
      return <button>small</button>;
    }
  }
};

export { Button };
export default Button;
