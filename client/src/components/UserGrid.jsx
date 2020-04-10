import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

//Hooks
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useDarkMode} from "../hooks/useDarkMode";

const GridContainer = styled.div`
  width: 100%;
  margin: 0;
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
  // console.log(props.playerData);

  const [dark, setDark] = useDarkMode("dark", false); 

  const toggler = (e) => {
    e.preventDefault();
    setDark(!dark);
  };

  return (
    <GridContainer>
      <button onClick={toggler}> Dark Mode</button>

      <H2>Players </H2>
      {props.playerData.map((player) => (
        <UserCard key={player.id} data={player} />
      ))}
    </GridContainer>
  );
}
