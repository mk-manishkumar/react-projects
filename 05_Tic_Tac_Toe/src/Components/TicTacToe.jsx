import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] != null || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!isXTurn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return combination[i];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
      {winner && <div style={{ fontSize: "1.5rem", marginTop: "1rem", textAlign: "center" }}>{winner} is the winner of this game!</div>}
    </>
  );
};

export default TicTacToe;
