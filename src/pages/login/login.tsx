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

  const onSubmit = () => {
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

  return (
    <LoginContainer onSubmit={() => onSubmit()}>
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
        <ButtonForm>
          <Button
            size="smallTransparent"
            disabled={false}
            borderColor={false}
            text="Esqueceu a senha?"
            onClick={handleNewPass}
          />
        </ButtonForm>
        <ButtonSubmit>
          <Button
            size="middle"
            disabled={false}
            borderColor={false}
            text="Entrar"
            type="submit"
          />
        </ButtonSubmit>
        <LineHr />
        <SubmitFacebook>
          <IconFacebook>
            <FaFacebook />
          </IconFacebook>
          <Button
            size="largueTransparent"
            disabled={false}
            borderColor={false}
            text="Entrar com o Facebook"
            onClick={handleFacebook}
          />
        </SubmitFacebook>
      </LoginBox>
      <FinalLine />
      <SubmitBox>
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
