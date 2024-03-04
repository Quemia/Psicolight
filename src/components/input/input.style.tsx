import styled from "styled-components";

export type StyledInputProps = {
  rounded: boolean;
};

export const StyledInput = styled.button<StyledInputProps>`
  background-color: transparent;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: solid 1px #ACAFB8 ;

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  &:active {
    box-shadow: inset 0 3px 5px rgb(39 44 51 / 13%);
  }
`;
