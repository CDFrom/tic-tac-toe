import Cell from "../Cell/Cell";

import classes from "./Row.module.css";

const Row = (props) => {
  return (
    <div className={classes.row}>
      <Cell className={`${props.className} ${classes.first}`} />
      <Cell className={props.className} />
      <Cell className={`${props.className} ${classes.third}`} />
    </div>
  );
};

export default Row;
