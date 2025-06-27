import { useState } from "react";
import "./style.css";
const Square = ({ valueisnot }: { valueisnot: string }) => {
  const [value, setValue] = useState("");

  function handleClick() {
    console.log("clicked");
    setValue("x");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square valueisnot="k" />
        <Square valueisnot="k" />
        <Square valueisnot="k" />
      </div>
      <div className="board-row">
        <Square valueisnot="k" />
        <Square valueisnot="k" />
        <Square valueisnot="k" />
      </div>
      <div className="board-row">
        <Square valueisnot="k" />
        <Square valueisnot="k" />
        <Square valueisnot="k" />
      </div>
    </>
  );
};

export const Tick = () => {
  return (
    <>
      <h1>tic-tac-toe</h1>
      <div>
        <Board></Board>
      </div>
    </>
  );
};
