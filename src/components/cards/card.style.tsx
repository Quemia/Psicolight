import styled from "styled-components";

export const CardContainer = styled.div`
  width: 327px;
  height: 115px;
  padding: 16px;

  border: 1px solid #dcdde0;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

  margin-bottom:12px;
`;

export const BoxTaskText = styled.p`
  font: normal 600 12px/140% "Ubuntu", system-ui;
  margin-left: 4px;

`;

export const TaskTitle = styled.h3`
  font: normal 600 16px/140% "Ubuntu", system-ui;
  color: #3f4e67;
  margin-bottom: -10px;
`;

export const TaskTime = styled.p`
  font: normal 400 12px/140% "Ubuntu", system-ui;
  color: #7f8595;
  margin-bottom: -10px;
`;

export const CardBoxEvolution = styled.div`
  display: block;
`;

export const BoxEvolution = styled.circle`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #f1f2ff;

  display: flex;
  display: inline-flex;

  text-align: center;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const BoxEvolutionPercent = styled.circle`
  width: 62.22px;
  height: 62.22px;
  border-radius: 50%;
  border: 6px solid #a4b6f3;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;

  position: absolute;
`;
