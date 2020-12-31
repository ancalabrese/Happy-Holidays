import React from 'react'
import styled from 'styled-components'
import { vOffset, hOffset, bubbleType } from './RandomOffsets'

const FilledBubble = styled.div`
    position:absolute;
    left:${hOffset};
    top:${vOffset};
    background-color:#900000;
    z-index:0;
    width:5px;
    height:5px;
    border-radius:50%;
`
const EmptyBubble = styled.div`
    position:absolute;
    left:${hOffset};
    top:${vOffset};
    background-color:transparent;
    z-index:0;
    width:6px;
    height:6px;
    border: 2px solid red;
    border-radius:50%;
`
const BigFilledBubble = styled.div`
    position:absolute;
    left:${hOffset};
    top:${vOffset};
    background-color:#ff0000;
    z-index:0;
    width:9px;
    height:9px;
    border-radius:50%;
`

const BigEmptyBubble = styled.div`
    position:absolute;
    left:${hOffset};
    top:${vOffset};
    background-color:transparent;
    z-index:0;
    width:10px;
    height:10px;
    border: 2px solid #c12828;
    border-radius:50%;
`

const Bubble = () => {
    let bubble;
    const bType = bubbleType()
    if (bType === 1) {
        bubble = <FilledBubble />
    } else if (bType === 2) {
        bubble = <EmptyBubble />
    } else if (bType === 3) {
        bubble = <BigEmptyBubble />
    } else {
        bubble = <BigFilledBubble />
    }

    return (
        { ...bubble }
    )
}

export default Bubble