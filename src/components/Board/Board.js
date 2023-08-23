import Row from "../Row/Row";

import classes from "./Board.module.css";

const Board = () => {
  return (
    <div className={classes.board}>
      <Row className={classes.top} />
      <Row className={classes.middle} />
      <Row className={classes.bottom} />
    </div>
  );
};

export default Board;
