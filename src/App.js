import React, { useState } from 'react';
import Gameboard from './Gameboard'
import './Ttt.css'


const App = () => {

  const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState()//setwinner check for 012 345 678 048 246 036 147 258

  const clickHandler = (i) => {
    //set states here from clicking the squares where i is the index of the grid
    if (boxes[i] === '') {
      turn % 2 === 0 ? boxes[i] = true : boxes[i] = false
    }
    setTurn(turn + 1)
    setBoxes(boxes)
    return ""//console.log(boxes)
  }

  return (
    <div>
      {console.log(boxes, 'boxes')}
      {console.log(turn, 'turn')}
      <h1>hi, this <span className="greenText">is</span> tictactoe.</h1>
      <Gameboard threeByThree={boxes} onClick={(i) => clickHandler(i)} />
    </div >
  )
}

export default App;