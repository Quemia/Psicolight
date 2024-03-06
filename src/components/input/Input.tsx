import React from "react";

export type InputProps = {
  InpuType: string;
  rounded: boolean;
  placeholder: string;
  type: string;
};

const Input: React.FC<InputProps> = ({
  InpuType = "email",
  rounded = false,
  placeholder,
}) => {
  const inputProps = {
    InpuType,
    rounded,
    placeholder,
  };
  switch (InpuType) {
    case "email": {
      return (
        <Input
          {...inputProps}
          type="text"
        />
      );
    }
    case "password": {
      return (
        <Input
          {...inputProps}
          type="password"
          placeholder="Senha"
        />
      );
    }
  }
};

export { Input };

export default Input;
