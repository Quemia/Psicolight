import React from "react";
import { FiBookmark } from "react-icons/fi";
import {
  CardContainer,
  CardBoxText,
  CardBoxEvolution,
  BoxTask,
  BoxTaskText,
  TaskTitle,
  TaskTime,
  BoxEvolution,
  BoxEvolutionPercent,
} from "./card.style";

export interface CardProps {
  task: string;
  title: string;
  time: string;
}

const Card: React.FC<CardProps> = ({
  task = "Leitura",
  title = "O Milagre da manhã",
  time = "30 min durante 15 dias",
}) => {
  return (
    <CardContainer>
      <CardBoxText>
        <BoxTask>
          <FiBookmark />
          <BoxTaskText>{task}</BoxTaskText>
        </BoxTask>
        <div>
          <TaskTitle>{title}</TaskTitle>
          <TaskTime>{time}</TaskTime>
        </div>
      </CardBoxText>
      <CardBoxEvolution>
        <BoxEvolution>
          <BoxEvolutionPercent />
          12%
        </BoxEvolution>
      </CardBoxEvolution>
    </CardContainer>
  );
};

export default Card;
