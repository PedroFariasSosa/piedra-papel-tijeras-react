import React from 'react';
import styled from 'styled-components'

const ScoreStyled = styled.div`
    background-color: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    width: 80px;
    small {
        text-transform: uppercase;
        color: #2a45c2;
        font-size: 10px;
    }
    p {
        color: #565468;
        font-size: 40px;
        margin: 0;
        font-weight: 700;
    }
`

const Score = () => {
    return(
        <ScoreStyled>
            <small>score</small>
            <p>12</p>
        </ScoreStyled>
    )
}
export default Score;