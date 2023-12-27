import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectedSquare() {
    setGameBoard((prevGameBoard) => {
      // prevGameBoard[rowIndex][colIndex] = 'X'

      // return prevGameBoard
      // Use immutable way
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
      updatedBoard[rowIndex][colIndex] = 'X'

      return updatedBoard
    }) 
  }
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button onClick={handleSelectedSquare}>{ playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );
}
