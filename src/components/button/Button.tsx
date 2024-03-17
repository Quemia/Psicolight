import React, { ButtonHTMLAttributes } from "react";
import {
  MiddleButton,
  SmallButton,
  LargueButton,
  TransparentButtonLarge,
  TransparentButtonMiddle,
  TransparentButtonSmall,
} from "./button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  text: string;
  borderColor: boolean;
  disabled: boolean;
}

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

    case "largueTransparent": {
      return (
        <TransparentButtonLarge {...buttonProps}>{text}</TransparentButtonLarge>
      );
    }

    case "middleTransparent": {
      return (
        <TransparentButtonMiddle {...buttonProps}>
          {text}
        </TransparentButtonMiddle>
      );
    }

    case "smallTransparent": {
      return (
        <TransparentButtonSmall {...buttonProps}>{text}</TransparentButtonSmall>
      );
    }

    default: {
      return <LargueButton {...buttonProps}>{text}</LargueButton>;
    }
  }
};

export { Button };
export default Button;
