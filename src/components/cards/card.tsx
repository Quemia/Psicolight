import React from "react";
import { FiBookmark } from "react-icons/fi";
import {
  CardContainer,
  CardBoxText,
  CardBoxEvolution,
  BoxTask,
  BoxTaskText,
} from "./card.style";

export interface CardProps {
  task: string;
  title: string;
  time: string;
}

const Card: React.FC<CardProps> = ({
  task = "Leitura",
  title = "O Milagre do Amanhã",
  time = "30 min durante 15 dias",
}) => {
  return (
    <CardContainer>
      <CardBoxText>
        <BoxTask>
          <FiBookmark />
          <BoxTaskText>{task}</BoxTaskText>
        </BoxTask>
        <h3>{title}</h3>
        <p>{time}</p>
      </CardBoxText>
      <CardBoxEvolution>
        <p>12%</p>
      </CardBoxEvolution>
    </CardContainer>
  );
};

export default Card;
