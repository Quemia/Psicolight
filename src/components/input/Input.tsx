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
    case "email": {
      return (
        <Input
          {...inputProps}
          type="text"
          placeholder="Nome de usuário ou e-mail"
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
