import classes from "./Cell.module.css";

const Cell = (props) => {
  const clickHandler = () => {};

  return (
    <div
      className={`${classes.cell} ${props.className}`}
      onClick={clickHandler}
    >
      X
    </div>
  );
};

export default Cell;
