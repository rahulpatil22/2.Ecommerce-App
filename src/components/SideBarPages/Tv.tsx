import React from 'react'
import styled from 'styled-components'

const TvTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Tv: React.FunctionComponent = () => {
    return (
        <TvTxt>Tv</TvTxt>
    )
}

export default Tv;