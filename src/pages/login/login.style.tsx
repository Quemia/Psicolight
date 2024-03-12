import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 375px;
  height: 812px;

  background-color: #fafafa;
  display: block;
  color: #000;
`;

export const LoginBox = styled.div`
  width: 327px;
  height: 390px;
  margin: 0 auto;

  padding: 123px 24px 52px 24px;
  box-shadow: 0 -3px 10px #6c7a8d;
  border-bottom-right-radius: 21px;
  border-bottom-left-radius: 21px;

  text-align: center;
`;

export const LoginHeader = styled.div`
  width: 198px;
  height: 38px;
  margin: 32px auto;

  background-image: url("./Logo Dark.png");
`;

export const InputForm = styled.div`
  margin: 32px auto;
`;

export const ButtonForm = styled.div`
  width: 103px;
  height: 24px;

  text-align: end;
  margin-left: 200px;
  margin-bottom: 24px;
`;

export const ButtonSubmit = styled.div`
  width: 100%;
`;

export const IconFacebook = styled.i`
  font-size: 24px;
  margin-right: -15px;
  position: relative;
  top: 6px;

  color: #315ce0;
`;

export const LineHr = styled.hr`
  margin: 24px auto;
  border: 0;
  border-top: 1px solid #dcdde0;
  height: 1px;
  overflow: visible;
  padding: 0;
  color: #2a3b58;
  text-align: center;

  &:after {
    content: "ou";
    display: inline-block;
    position: relative;
    top: -1em;
    font-size: 14px;
    background: #fff;
    padding: 1px 5px;
  }
`;

export const FinalLine = styled.hr`
  margin-top: 180px;
  color: #c4c6cc;
`;

export const SubmitBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const SubmitText = styled.p`
  font: normal 400 12px/140% "Ubuntu", sans-serif;
  color: #6a7385;
  margin-right: -10px;
`;

export const SubmitFacebook = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
