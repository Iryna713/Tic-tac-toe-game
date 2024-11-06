// import { useState } from 'react';

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // lifting state up

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];

  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button 
                  onClick={() => onSelectSquare(rowIndex, colIndex)} 
                  disabled={playerSymbol !== null ? true :false}>
                    {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>))}
    </ol>
  );
}