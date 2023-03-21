import React from 'react'
import styled from 'styled-components'

const ShoesTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Shoes: React.FunctionComponent = () => {
    return (
        <ShoesTxt>Tasks</ShoesTxt>
    )
}

export default Shoes;