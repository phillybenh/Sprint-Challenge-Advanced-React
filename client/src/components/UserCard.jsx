import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: darkgray;
  width: 90%;
  max-width: 600px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  display: flex;
  justify-content: flex-start;
  align-content: center;

`;


const UserData = styled.div`
padding: 0 10px;
`;



const H3 = styled.h3`
  margin: 0;
  font-size: 2.8rem;
`;
const H4 = styled.h4`
  margin: 0;
  font-size: 2rem;
  font-style: italic;
`;

export default function UserCard(props) {
  
    // console.log("Card Data", props.data);
  



  return (
    <CardContainer>
      <UserData>
      <H3>{props.data.name}</H3>
      <H4>{props.data.country}</H4>
      <p>Number of searches: {props.data.searches}</p>
      </UserData>
    </CardContainer>
  );
}
