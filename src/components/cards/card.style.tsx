import styled from "styled-components";

export type StyledCardProps = {
  disabled: boolean;
  bgColor: boolean;
};

export const CardContainer = styled.div<StyledCardProps>`
  width: 327px;
  height: 100px;
  padding: 16px;

  border: 1px solid #dcdde0;
  border-radius: 8px;

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBoxText = styled.div`
  display: block;
`;

export const BoxTask = styled.div<StyledCardProps>`
  max-width: 133px;
  height: 28px;
  border: transparent;
  border-radius: 24px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  margin-bottom: 12px;

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  background-color: ${(props) => {
    return props.bgColor ? "#f4f4f4" : "#fff";
  }};

  /* background-color: #f4f4f4; */
  /* color: #6a7385; */
`;

export const TaskRead = styled(BoxTask)`
  width: 80px;
  color: #315ce0;

  background-color: ${(props) => {
    return props.bgColor ? "#f4f4f4" : "#f1f2ff";
  }};
`;

export const TaskMeditate = styled(BoxTask)`
  width: 99px;
  /* background-color: #ffeda830; */
  color: #bc8321;

  background-color: ${(props) => {
    return props.bgColor ? "#f4f4f4" : "#f1f2ff";
  }};
`;

export const TaskSleepSound = styled(BoxTask)`
  /* color: #f02222; */
  color: #6a7385;

  background-color: ${(props) => {
    return props.bgColor ? "#f4f4f4" : "#ffab9c30";
  }};
`;

export const BoxTaskText = styled.p`
  font: normal 600 12px/140% "Ubuntu", system-ui;
  margin-left: 4px;
  opacity: none;
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
  font: normal 600 12px/140% "Ubuntu", system-ui;
  color: #7e98ec;
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
