import React, { useState } from "react";
import Square from "./Square";
import Result from "./Result";

export default function TicTacToe() {
  const CROSS = "X";
  const CIRCLE = "O";
  const EMPTY = null;
  const [state, setstate] = useState({
    player: CROSS,
    positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  });

  function whoseTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setstate({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions,
    });
  }

  function resetHandler() {
    setstate({
      player: CROSS,
      positions: [
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
      ],
    });
  }

  const WINNER = winnerHandler(state.positions);

  function winnerHandler(pos) {
    if (pos[0] === CIRCLE && pos[1] === CIRCLE && pos[2] === CIRCLE)
      return CIRCLE;
    if (pos[3] === CIRCLE && pos[4] === CIRCLE && pos[5] === CIRCLE)
      return CIRCLE;
    if (pos[6] === CIRCLE && pos[7] === CIRCLE && pos[8] === CIRCLE)
      return CIRCLE;

    if (pos[0] === CIRCLE && pos[3] === CIRCLE && pos[6] === CIRCLE)
      return CIRCLE;
    if (pos[1] === CIRCLE && pos[4] === CIRCLE && pos[7] === CIRCLE)
      return CIRCLE;
    if (pos[2] === CIRCLE && pos[5] === CIRCLE && pos[8] === CIRCLE)
      return CIRCLE;

    if (pos[0] === CIRCLE && pos[4] === CIRCLE && pos[8] === CIRCLE)
      return CIRCLE;
    if (pos[2] === CIRCLE && pos[4] === CIRCLE && pos[5] === CIRCLE)
      return CIRCLE;

    if (pos[0] === CROSS && pos[1] === CROSS && pos[2] === CROSS) return CROSS;
    if (pos[3] === CROSS && pos[4] === CROSS && pos[5] === CROSS) return CROSS;
    if (pos[6] === CROSS && pos[7] === CROSS && pos[8] === CROSS) return CROSS;

    if (pos[0] === CROSS && pos[3] === CROSS && pos[6] === CROSS) return CROSS;
    if (pos[1] === CROSS && pos[4] === CROSS && pos[7] === CROSS) return CROSS;
    if (pos[2] === CROSS && pos[5] === CROSS && pos[8] === CROSS) return CROSS;

    if (pos[0] === CROSS && pos[4] === CROSS && pos[8] === CROSS) return CROSS;
    if (pos[2] === CROSS && pos[4] === CROSS && pos[6] === CROSS) return CROSS;

    if (pos.every((index) => index !== EMPTY)) {
      return "It's a Tie";
    }
  }

  return (
    <div>
      <div className="box">
        <Square index={0} value={state.positions[0]} whoseTurn={whoseTurn} />
        <Square index={1} value={state.positions[1]} whoseTurn={whoseTurn} />
        <Square index={2} value={state.positions[2]} whoseTurn={whoseTurn} />
        <Square index={3} value={state.positions[3]} whoseTurn={whoseTurn} />
        <Square index={4} value={state.positions[4]} whoseTurn={whoseTurn} />
        <Square index={5} value={state.positions[5]} whoseTurn={whoseTurn} />
        <Square index={6} value={state.positions[6]} whoseTurn={whoseTurn} />
        <Square index={7} value={state.positions[7]} whoseTurn={whoseTurn} />
        <Square index={8} value={state.positions[8]} whoseTurn={whoseTurn} />
      </div>
      {WINNER && <Result winner={WINNER} reset={resetHandler} />}
    </div>
  );
}
