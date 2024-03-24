import React from "react";
import { FiBookmark } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { LuPlayCircle } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineLock } from "react-icons/md";

import {
  CardContainer,
  CardBoxText,
  CardBoxEvolution,
  TaskRead,
  TaskMeditate,
  TaskSleepSound,
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
  disabled: boolean;
  bgColor: boolean;
}

const Card: React.FC<CardProps> = ({
  task = "Leitura",
  title = "O Milagre da manhã",
  time = "30 min durante 15 dias",
  disabled = false,
  bgColor = false,
}) => {
  const cardProps = {
    disabled,
    bgColor,
  };
  switch (task) {
    case "Leitura":
      return (
        <CardContainer {...cardProps}>
          <CardBoxText>
            <TaskRead {...cardProps}>
              <FiBookmark />
              <BoxTaskText>{task}</BoxTaskText>
            </TaskRead>
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
    case "Meditação":
      return (
        <CardContainer {...cardProps}>
          <CardBoxText>
            <TaskMeditate {...cardProps}>
              <IoSunnyOutline />
              <BoxTaskText>{task}</BoxTaskText>
            </TaskMeditate>
            <div>
              <TaskTitle>{title}</TaskTitle>
              <TaskTime>{time}</TaskTime>
            </div>
          </CardBoxText>
          <CardBoxEvolution>
            <BoxEvolution>
              <BoxEvolutionPercent />
              25%
            </BoxEvolution>
          </CardBoxEvolution>
        </CardContainer>
      );
    case "Som para dormir":
      return (
        <CardContainer {...cardProps}>
          <CardBoxText>
            <TaskSleepSound {...cardProps}>
              <LuPlayCircle />
              <BoxTaskText>{task}</BoxTaskText>
            </TaskSleepSound>
            <div>
              <TaskTitle>{title}</TaskTitle>
              <TaskTime>{time}</TaskTime>
            </div>
          </CardBoxText>
          <CardBoxEvolution>
            <BoxEvolution>
              <BoxEvolutionPercent />
              25%
            </BoxEvolution>
          </CardBoxEvolution>
        </CardContainer>
      );
    case "Cursos":
      return (
        <CardContainer {...cardProps}>
          <CardBoxText>
            <TaskSleepSound {...cardProps}>
              <PiGraduationCap />
              <BoxTaskText>{task}</BoxTaskText>
            </TaskSleepSound>
            <div>
              <TaskTitle>{title}</TaskTitle>
              <TaskTime>
                <MdOutlineLock />
                {time}
              </TaskTime>
            </div>
          </CardBoxText>
          <CardBoxEvolution>
            <BoxEvolution>
              <BoxEvolutionPercent />
              25%
            </BoxEvolution>
          </CardBoxEvolution>
        </CardContainer>
      );
    default: {
      return (
        <CardContainer {...cardProps}>
          <CardBoxText>
            <TaskRead {...cardProps}>
              <FiBookmark />
              <BoxTaskText>{task}</BoxTaskText>
            </TaskRead>
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
    }
  }
};

export default Card;
