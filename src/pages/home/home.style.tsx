import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 812px;

  background-color: #fafafa;
  display: box;
  color: #000;
`;

export const HomeHeader = styled.div`
  display: flex;
  padding-top: 24px;

  width: 100%;
  height: 128px;
  margin-bottom: 32px;
  justify-content: space-evenly;
  /* align-items: center; */

  background-color: #fafafa;
  border-bottom-right-radius: 21px;
  border-bottom-left-radius: 21px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;

export const HeaderIcon = styled.div`
  width: 63px;
  height: 56px;
  background-image: url("./tarefas.png");
  margin-right:16px;
`;

export const HeaderTitle = styled.h2`
  font: normal 600 22px/140% "Ubuntu", system-ui;
  color: #577ae6;
  margin-right:56px;
`;

export const HeaderAvatar = styled.img`
  width: 50px;
  height: 50px;
`;
