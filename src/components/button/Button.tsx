import React from "react";
import { MiddleButton, SmallButton, LargueButton } from "./button.style";

export type ButtonProps = {
  size: string;
  text: string;
  borderColor: boolean;
  disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "middle",
  disabled = false,
  borderColor = false,
  text,
}) => {
  const buttonProps = {
    size,
    borderColor,
    disabled,
  };

  switch (size) {
    case "small": {
      return <SmallButton {...buttonProps}>{text}</SmallButton>;
    }

    case "middle": {
      return <MiddleButton {...buttonProps}>{text}</MiddleButton>;
    }

    case "largue": {
      return <LargueButton {...buttonProps}>{text}</LargueButton>;
    }
  }
};

export { Button };
export default Button;
