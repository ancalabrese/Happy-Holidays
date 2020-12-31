import React from 'react'
import SnowFlake from './SnowFlake/SnowFlake'

const Snow = () => {
    const snowflakes = Array(40);
    for (var i = 0; i < snowflakes.length; i++) {
        snowflakes[i] = <SnowFlake key={i} />
    }

    return (
        <div id="#snow">
            {snowflakes}
        </div>
    )
}

export default Snow;