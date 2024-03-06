import React from "react";
import { StyledInput } from "./input.style";

export type InputProps = {
  InpuType: string;
  rounded: boolean;
  placeholder: string;
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
        <StyledInput
          {...inputProps}
          type="text"
          placeholder="Nome de usuário ou e-mail"
        />
      );
    }
    case "password": {
      return (
        <StyledInput {...inputProps} type="password" placeholder="Senha" />
      );
    }
  }
};

export { Input };

export default Input;
