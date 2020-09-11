import React from 'react'
import styled from 'styled-components'
import Score from './Score'

const HeaderStyled = styled.div`
    color: #fff;
    padding: 12px 12px 12px 23px;
    border-radius: .5em;
    border: 3px solid rgba(255, 255, 255, .29);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 60px;
        height: 70px;
    }
`

const Header = () => {
    return (
      <HeaderStyled>
        <img src={`./images/logo.svg`} alt="Logo from the aplication" />
        <Score />
      </HeaderStyled>
    );
}
export default Header;