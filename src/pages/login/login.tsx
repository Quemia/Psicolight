import React, { useState } from "react";
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

  const handleChange = () => {
    console.log("email", email);
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
          />
        </ButtonForm>
        <ButtonSubmit>
          <Button
            size="middle"
            disabled={false}
            borderColor={false}
            text="Entrar"
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
          onClick={handleChange()}
        />
      </SubmitBox>
    </LoginContainer>
  );
};
export default Login;
