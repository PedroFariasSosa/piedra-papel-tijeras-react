import React from "react";
import styled from "styled-components";
import Token from './Token'

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 50px;
  background-image: url(${`./images/bg-triangle.svg`});
  background-position: center;
  background-repeat: no-repeat;
  margin: 2em;
  & div:nth-of-type(3) {
    grid-column: span 2
  }
`;

const Table = () => {
    return (
      <TableStyled>
        <Token name="paper" />
        <Token name="scissors" />
        <Token name="rock" />
      </TableStyled>
    );};
export default Table;