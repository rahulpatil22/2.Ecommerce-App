import React from 'react'
import styled from 'styled-components'

const WatchesTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Watches: React.FunctionComponent = () => {
    return (
        <WatchesTxt>watches</WatchesTxt>
    )
}

export default Watches