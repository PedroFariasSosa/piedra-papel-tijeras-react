import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 15px solid ${({ color }) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  background-color: #fff;
  box-shadow: 0 5px 0 #${({ color }) => color.border};
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0 -4px 0 #babfd4;
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const colors= {
  paper: {
    base: '#516ef4',
    border: '#2543c3'
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31'
  },
  scissors: {
    base: '#eca81e',
    border: '#c76c14'
  }
}

const Token = ({name}) => {
  return(
    <TokenStyled color={colors[name]}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="Imagen del token" />
      </div>
    </TokenStyled>
  )
}
export default Token;