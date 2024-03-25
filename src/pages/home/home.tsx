import React from "react";
import Card from "../../components/cards/card";
import {
  Container,
  HomeHeader,
  BoxHeader,
  HeaderTitle,
  HeaderIcon,
  HeaderAvatar,
} from "./home.style";

const Home = () => {
  return (
    <Container>
      <HomeHeader>
        <BoxHeader>
          <HeaderIcon />
          <HeaderTitle>Tarefas diárias</HeaderTitle>
          <HeaderAvatar alt="avatar" src="./Perfil.png" />
        </BoxHeader>
      </HomeHeader>
      <div>
        <Card
          task="Leitura"
          title="O Milagre da manhã"
          time="30 min durante 15 dias"
          disabled={false}
          bgColor={false}
        />
        <Card
          task="Meditação"
          title="Respiração"
          time="5 min de meditação "
          disabled={false}
          bgColor={false}
        />

        <Card
          task="Som para dormir"
          title="Sons relaxantes"
          time="Ouça até adormecer"
          disabled={false}
          bgColor={false}
        />
      </div>
      <div>
        <h2>Tarefas Bloqueadas</h2>
        <Card
          task="Cursos"
          title="Orátoria e dicção"
          time="Diego ainda não avaliou"
          disabled={true}
          bgColor={true}
        />
      </div>
    </Container>
  );
};

export default Home;
