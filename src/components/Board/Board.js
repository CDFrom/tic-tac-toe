import { useContext, useEffect } from "react";

import GameContext from "../../context/game-context";
import Row from "../Row/Row";

import classes from "./Board.module.css";

const Board = () => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    const inputPlayer1 = prompt("Player 1 name:");
    const inputPlayer2 = prompt("Player 2 name:");

    const player1 =
      inputPlayer1.trim() === ("" || null) ? "Player 1" : inputPlayer1;
    const player2 =
      inputPlayer2.trim() === ("" || null) ? "Player 2" : inputPlayer2;
    gameContext.setNames(player1, player2);
  }, []);

  return (
    <div className={classes.board}>
      <Row className={classes.top} rowNumber='0' />
      <Row className={classes.middle} rowNumber='1' />
      <Row className={classes.bottom} rowNumber='2' />
    </div>
  );
};

export default Board;
