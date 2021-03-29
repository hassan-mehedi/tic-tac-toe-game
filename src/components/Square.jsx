import React from "react";
import Circle from "./Circle";
import Cross from "./Cross";

export default function Square(props) {
  const { index, value, whoseTurn } = props;

  function playerhandler() {
    if (value === null) {
      whoseTurn(index);
    }
  }

  return (
    <div className="square" onClick={playerhandler}>
      {value === "O" && <Circle />}
      {value === "X" && <Cross />}
    </div>
  );
}
