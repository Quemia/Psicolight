import styled from "styled-components";

export type StyledButtonProps = {
  borderColor: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;

  border: ${(props) => {
    return props.borderColor ? "solid 1px #000" : "transparent";
  }};

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  &:active {
    box-shadow: inset 0 3px 5px rgb(39 44 51 / 13%);
  }
`;

export const MiddleButton = styled(StyledButton)`
  color: #fff;
  background-color: #315ce0;
  font: normal 700 14px/140% "Ubuntu", sans-serif;
  width: 138px;
  height: 48px;
  border-radius: 500px;

  &:hover {
    background-color: #2c52c9;
  }

  &:active {
    background-color: #456ce3;
    color: #fff;
  }
`;

export const SmallButton = styled(StyledButton)`
  color: #fff;
  background-color: #315ce0;
  font: normal 700 14px/140% "Ubuntu", sans-serif;
  width: 68px;
  height: 48px;
  border-radius: 500px;

  &:hover {
    background-color: #2c52c9;
  }

  &:active {
    background-color: #456ce3;
    color: #fff;
  }
`;

export const LargueButton = styled(StyledButton)`
  color: #fff;
  background-color: #315ce0;
  font: normal 700 18px/140% "Ubuntu", sans-serif;
  width: 327px;
  height: 56px;
  border-radius: 500px;

  &:hover {
    background-color: #2c52c9;
  }

  &:active {
    background-color: #456ce3;
    color: #fff;
  }
`;
