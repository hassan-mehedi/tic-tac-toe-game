import React from "react";

export default function Result(props) {
  const { winner, reset } = props;
  return (
    <div className="result">
      <div>
        {winner === "O" && "Circle is the Winner"}
        {winner === "X" && "Cross is the Winner"}
        {winner === "It's a Tie" && "It's a Tie"}
      </div>
      <div>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}
