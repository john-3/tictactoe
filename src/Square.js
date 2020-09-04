import React from 'react';

const Square = (props) => {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value === true ? "O" : props.value === false ? 'X' : '🦍'}
        </button >
    )
}

export default Square;