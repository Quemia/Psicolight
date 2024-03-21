import styled from "styled-components";

export const CardContainer = styled.div`
  width: 327px;
  height: 115px;
  padding: 16px;

  border: 1px solid #dcdde0;
  border-radius: 8px;

  display: flex;
  justify-content: space-around;
`;

export const CardBoxText = styled.div`
  display: block;
`;

export const BoxTask = styled.div`
  width: 80px;
  height: 28px;
  border: transparent;
  border-radius: 24px;

  background-color: #f1f2ff;
  color: #315ce0;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const BoxTaskText = styled.h3`
  font: normal 600 12px/140% "Ubuntu", system-ui;
  margin-left:4px;
`;


export const CardBoxEvolution = styled.div`
  display: block;
`;
