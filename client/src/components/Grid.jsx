import React from "react";
import Card from "./Card";

import styled from "styled-components";

//Hooks
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

export default function Grid(props) {
  // console.log(props.playerData);

  const [dark, setDark] = useDarkMode("dark", false); 

  const toggler = (e) => {
    e.preventDefault();
    setDark(!dark);
  };

  return (
    <GridContainer data-testid="grid">
      <button data-testid="darkBTN" onClick={toggler}>
        {" "}
        Dark Mode
      </button>

      <H2>Players </H2>
      {props.playerData.map((player) => (
        <Card key={player.id} data={player} />
      ))}
    </GridContainer>
  );
}
