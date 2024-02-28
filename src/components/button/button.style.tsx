import styled from "styled-components";

export type StyledButtonProps = {
  outline: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;

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
  font: normal bold 14px/140% "Ubuntu", "sans-serif";

  &:hover {
    background-color: #2c52c9;
    /* border-color: ##3154CD; */
  }

  /* &:focus {
    background-color: #ececec;
    border-color: #e6e6e6;
    box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
      0 1px 1px rgb(39 44 51 / 8%), 0 0 0 1px rgb(222 222 223 / 50%);
  } */

  &:active {
    background-color: #456ce3;
    /* border-color: #dfdfdf; */
    color: #fff;
  }
`;
