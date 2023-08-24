import Cell from "../Cell/Cell";

import classes from "./Row.module.css";

const Row = (props) => {
  return (
    <div className={classes.row}>
      <Cell
        className={`${props.className} ${classes.first}`}
        cellNumber={props.rowNumber + "0"}
      />
      <Cell className={props.className} cellNumber={props.rowNumber + "1"} />
      <Cell
        className={`${props.className} ${classes.third}`}
        cellNumber={props.rowNumber + "2"}
      />
    </div>
  );
};

export default Row;
