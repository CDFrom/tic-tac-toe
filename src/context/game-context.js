import React from "react";

const GameContext = React.createContext({
  currentPlayer: { name: "", token: "" },
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  gameOver: false,
  addToken: (cell) => {},
});

export default GameContext;
