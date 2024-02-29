import React from "react";
import { MiddleButton } from "./button.style";

export type InputProps = {
  InpuType: string;
  rounded: boolean;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  InpuType = "form",
  rounded = false,
  placeholder,
}) => {
  const inputProps = {
    InpuType,
    rounded,
    placeholder,
  };
  return <Input {...inputProps} placeholder="Enter your email adress..." />;
};

export { Input };

export default Input;
