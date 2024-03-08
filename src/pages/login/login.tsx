import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {
  LoginContainer,
  LoginBox,
  LoginHeader,
  InputForm,
  ButtonForm,
  ButtonSubmit,
} from "./login.style";

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <LoginHeader />
        <InputForm>
          <Input
            InpuType="email"
            rounded={false}
            placeholder="Nome de usuário ou e-mail"
          />
        </InputForm>
        <InputForm>
          <Input InpuType="password" rounded={false} placeholder="Senha" />
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
      </LoginBox>
    </LoginContainer>
  );
};
export default Login;
