import React from 'react'
import styled, { keyframes } from "styled-components";
import { hOffset, vOffset, fallDelay} from './randomValues'

const fallAnimation = keyframes`
    0%{
        top:${vOffset};
    }
    100%{
        top:100%;
    }
`
const shakeAnimation = keyframes`
    0%{
        transform:translateX(0px);
   
    }
    50%{
        transform:translateX(80px);
    }
    100%{
        transform:translateX(0px);
    }
`

const Flake = styled.div`
    position: absolute;
    color: #fff;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 2px #4e4e4e;
    opacity: 0.8;
    z-index: 10;
    user-select:none;
    cursor:default;
    left: ${hOffset};
    top: ${vOffset};
    animation: ${fallAnimation} ,${shakeAnimation};
    animation-duration: 15s,5s;
    animation-iteration-count: infinite,infinite;
    animation-timing-function: linear,ease-in-out;
    animation-play-state:running,running;
    animation-delay: ${fallDelay}
`
const SnowFlake = () => {

    return (
        <Flake>
            <h5>❅</h5>
        </Flake>
    )
}

export default SnowFlake;
