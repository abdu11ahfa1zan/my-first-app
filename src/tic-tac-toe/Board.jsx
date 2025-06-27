import { useState } from "react";
import "./style.css";

function Square({ valueisnot, onSquareClick }) {
  const [value, setValue] = useState("");

  return (
    <button className="square" onClick={onSquareClick}>
      {valueisnot}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <div className="board-row">
        <Square valueisnot={squares[0]} onSquareClick={} />
        <Square valueisnot={squares[1]} />
        <Square valueisnot={squares[2]} />
      </div>
      <div className="board-row">
        <Square valueisnot={squares[3]} />
        <Square valueisnot={squares[4]} />
        <Square valueisnot={squares[5]} />
      </div>
      <div className="board-row">
        <Square valueisnot={squares[6]} />
        <Square valueisnot={squares[7]} />
        <Square valueisnot={squares[8]} />
      </div>
    </>
  );
}
