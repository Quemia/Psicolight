import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  InpuType: string;
  placeholder: string;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({
  InpuType = "email",
  placeholder,
  disabled = false,
}) => {
  const inputProps = {
    InpuType,
    placeholder,
    disabled,
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
