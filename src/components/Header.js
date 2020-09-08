import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import Score from './Score'

const HeaderStyled = styled.div`
    color: #fff;
    border-radius: .5em;
    padding: 2em;
    border: 3px solid rgba(255, 255, 255, .29);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 50px;
        height: 60px;
    }
`

const Header = () => {
    return(
        <HeaderStyled>
            <img src={logo} alt="Logo from the aplication" />
            <Score />
        </HeaderStyled>
    )
}
export default Header;