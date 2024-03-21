import React from "react";
import { CardContainer, CardBoxText, CardBoxEvolution } from "./card.style";

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
        <div>
          <p>{task}</p>
        </div>
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
