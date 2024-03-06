import styled from "styled-components";

export type StyledButtonProps = {
  borderColor: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: #315ce0;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 500px;

  width: 100%;
  height: 48px;

  border: ${(props) => {
    return props.borderColor ? "solid 1px #000" : "transparent";
  }};

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  &:hover {
    background-color: #2c52c9;
  }

  &:active {
    background-color: #456ce3;
    color: #fff;
  }
`;

export const MiddleButton = styled(StyledButton)`
  font: normal 700 14px/140% "Ubuntu", sans-serif;
`;

export const SmallButton = styled(StyledButton)`
  font: normal 700 14px/140% "Ubuntu", sans-serif;
`;

export const LargueButton = styled(StyledButton)`
  background-color: #315ce0;
  font: normal 700 18px/140% "Ubuntu", sans-serif;
`;

////////////////

export const TransparentButtonLarge = styled.button<StyledButtonProps>`
  color: #315ce0;
  background-color: transparent;
  font: normal 400 16px/140% "Ubuntu", sans-serif;
  width: 221px;
  height: 24px;
  border: transparent;

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  &:active {
    box-shadow: inset 0 3px 5px rgb(39 44 51 / 13%);
  }
`;

export const TransparentButtonMiddle = styled(TransparentButtonLarge)`
  font: normal 400 14px/140% "Ubuntu", sans-serif;
  width: max-content;
`;

export const TransparentButtonSmall = styled(TransparentButtonLarge)`
  font: normal 400 12px/140% "Ubuntu", sans-serif;
  width: max-content;
`;
