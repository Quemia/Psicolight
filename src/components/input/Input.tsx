import React from "react";

export type InputProps = {
  InpuType: string;
  rounded: boolean;
  placeholder: string;
  type: string;
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
  switch (InpuType) {
    case "form": {
      return (
        <Input
          {...inputProps}
          type="text"
          placeholder="Enter your email adress..."
        />
      );
    }
  }
};

export { Input };

export default Input;
