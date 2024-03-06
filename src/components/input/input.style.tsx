import styled from "styled-components";

export type StyledInputProps = {
  rounded: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  background-color: transparent;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: transparent;
  border-bottom: solid 1px #acafb8;

  text-align: left;
  color: #9498a4;
  font: normal 400 14px/140% "Ubuntu", sans-serif;

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};


  &:focus-visible {
    outline: transparent;
    border-bottom: 2px #315ce0 solid;
  }
`;