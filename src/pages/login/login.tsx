import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const Login = () => {
  const handleSubmit = () => {
    alert("click");
  };
  return (
    <div className="LoginContainer">
      <div className="LoginBox">
        <div className="LoginHeader">Login</div>
        <div className="Inputs">
          <input className="email" placeholder="Nome de usuário ou e-mail" />
          <Input
            InpuType="form"
            rounded={false}
            type="text"
            placeholder="Enter your email adress..."
          />
          <input className="password" placeholder="Senha" />
        </div>
        <div className="SubmitLogin">
          <Button
            size="middle"
            disabled={false}
            outline={false}
            onClick={handleSubmit}
            text="Entrar"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
