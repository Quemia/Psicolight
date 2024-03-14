import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
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
        <StyledInput
          {...inputProps}
          type="password"
          placeholder="Senha"
          value={undefined}
        />
      );
    }
  }
};

export { Input };

export default Input;
