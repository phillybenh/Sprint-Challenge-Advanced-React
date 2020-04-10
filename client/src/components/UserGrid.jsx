import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  margin: 0;
  background: dodgerblue;
  padding: 10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;
`;
const H2 = styled.h2`
  margin: 0;
  padding: 20px;
  font-size: 3rem;
  justify-self: start;
`;

export default function UserGrid(props) {
  console.log(props.playerData);

  return (
    <GridContainer>
      <H2>Players </H2>
      {props.playerData.map((player) => (
        <UserCard data={player} />
      ))}
    </GridContainer>
  );
}
