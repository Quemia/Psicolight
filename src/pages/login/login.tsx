import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { FaFacebook } from "react-icons/fa";
import Input from "../../components/input/Input";
import {
  LoginContainer,
  LoginBox,
  LoginHeader,
  InputForm,
  ButtonForm,
  ButtonSubmit,
  IconFacebook,
  LineHr,
  FinalLine,
  SubmitBox,
  SubmitText,
  SubmitFacebook,
} from "./login.style";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(email);
    console.log(password);

    navigate("/home");
  };

  const handleNewPass = () => {
    console.log("entrei new senha");
  };

  const handleFacebook = () => {
    console.log("entrei facebook");
  };

  const handleRegister = () => {
    console.log("entrei Cadastro");
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginHeader />
        <InputForm>
          <Input
            InpuType="email"
            placeholder="Nome de usuário ou e-mail"
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{email}</p>
        </InputForm>
        <InputForm>
          <Input
            InpuType="password"
            disabled={false}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputForm>
        <ButtonForm onClick={handleNewPass}>
          <Button
            size="smallTransparent"
            disabled={false}
            borderColor={false}
            text="Esqueceu a senha?"
          />
        </ButtonForm>
        <ButtonSubmit onClick={handleSubmit}>
          <Button
            size="middle"
            disabled={false}
            borderColor={false}
            text="Entrar"
          />
        </ButtonSubmit>
        <LineHr />
        <SubmitFacebook onClick={handleFacebook}>
          <IconFacebook>
            <FaFacebook />
          </IconFacebook>
          <Button
            size="largueTransparent"
            disabled={false}
            borderColor={false}
            text="Entrar com o Facebook"
          />
        </SubmitFacebook>
      </LoginBox>
      <FinalLine />
      <SubmitBox onClick={handleRegister}>
        <SubmitText>Não tem uma conta?</SubmitText>
        <Button
          size="smallTransparent"
          disabled={false}
          borderColor={false}
          text="Cadastre-se."
        />
      </SubmitBox>
    </LoginContainer>
  );
};
export default Login;
