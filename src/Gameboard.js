import React from 'react';
import './Ttt.css';
import Square from './Square'

const Gameboard = (props) => {

    const makeSquare = (i) => {
        console.log(props.threeByThree)
        return (
            < Square value={props.threeByThree[i]} onClick={() => props.onClick(i)} />
        )
    }

    return (
        <div className="board">
            <span role="img" aria-label="">😄😄😄😄😄</span>
            <div className="inner">
                <div className="board-row">
                    {makeSquare(0)}{makeSquare(1)}{makeSquare(2)}
                </div>
                <div className="board-row">
                    {makeSquare(3)}{makeSquare(4)}{makeSquare(5)}
                </div>
                <div className="board-row">
                    {makeSquare(6)}{makeSquare(7)}{makeSquare(8)}
                </div>
            </div>
            <br />


        </div >
    )
}


export default Gameboard;