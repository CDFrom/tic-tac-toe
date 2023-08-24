import { useRef, useContext } from "react";

import classes from "./Cell.module.css";
import GameContext from "../../context/game-context";

const Cell = (props) => {
  const cellRef = useRef();
  const gameContext = useContext(GameContext);

  const cellNumber = props.cellNumber.split("");
  const row = cellNumber[0];
  const col = cellNumber[1];

  const placeTokenHandler = () => {
    const cell = cellRef.current;
    if (cell.innerHTML) {
      return;
    }
    gameContext.addToken(cell.id);
  };

  return (
    <div
      className={`${classes.cell} ${props.className}`}
      onClick={placeTokenHandler}
      ref={cellRef}
      id={`${props.cellNumber}`}
    >
      {gameContext.board[row][col]}
    </div>
  );
};

export default Cell;
