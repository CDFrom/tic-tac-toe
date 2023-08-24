import { useEffect, useReducer } from "react";

import GameContext from "./game-context";

const defaultBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const defaultGameState = {
  board: JSON.parse(JSON.stringify(defaultBoard)),
};

const playerHasWon = (board) => {
  const winningBoards = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  const result = winningBoards.some((winningCondition) => {
    return (
      winningCondition[0] !== "" &&
      winningCondition[0] === winningCondition[1] &&
      winningCondition[0] === winningCondition[2]
    );
  });
  return result;
};

const fullBoard = (board) => {
  return (
    !board[0].includes("") && !board[1].includes("") && !board[2].includes("")
  );
};

const gameReducer = (state, action) => {
  if (action.type === "ADD") {
    const cell = action.cell.split("");
    const row = cell[0];
    const col = cell[1];

    let gameOver = false;
    let board = state.board;
    board[row][col] = state.currentPlayer.token;

    if (playerHasWon(board)) {
      gameOver = true;
    }

    if (fullBoard(board)) {
      gameOver = true;
    }

    const updatedBoard = board;
    const updatedPlayer =
      state.currentPlayer === state.player1 ? state.player2 : state.player1;

    if (gameOver) {
      return {
        ...state,
        currentPlayer: updatedPlayer,
        board: updatedBoard,
        gameOver: gameOver,
      };
    }

    return {
      ...state,
      currentPlayer: updatedPlayer,
      board: updatedBoard,
    };
  }
  if (action.type === "RESET") {
    const newBoard = JSON.parse(JSON.stringify(defaultBoard));
    const gameOver = false;
    return {
      ...state,
      board: newBoard,
      gameOver: gameOver,
    };
  }
  if (action.type === "SET_PLAYERS") {
    const player1 = { name: action.player1, token: "X" };
    const player2 = { name: action.player2, token: "O" };
    return {
      ...state,
      player1: player1,
      player2: player2,
      currentPlayer: player1,
    };
  }
  return defaultGameState;
};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  useEffect(() => {
    if (gameState.gameOver === true) {
      let message;

      if (playerHasWon(gameState.board)) {
        if (gameState.currentPlayer === gameState.player2) {
          message = gameState.player1.name;
        } else {
          message = gameState.player2.name;
        }
        message += " is the winner!!";
      } else if (fullBoard(gameState.board)) {
        message = "Draw...";
      }

      setTimeout(() => {
        alert(message);
        dispatchGameAction({ type: "RESET" });
      }, 1);
    }
  }, [gameState.gameOver]);

  const addTokenHandler = (cell) => {
    dispatchGameAction({ type: "ADD", cell: cell });
  };

  const setNamesHandler = (player1, player2) => {
    dispatchGameAction({
      type: "SET_PLAYERS",
      player1: player1,
      player2: player2,
    });
  };

  const gameContext = {
    player1: gameState.player1,
    player2: gameState.player2,
    currentPlayer: gameState.currentPlayer,
    board: gameState.board,
    gameOver: gameState.gameOver,
    addToken: addTokenHandler,
    setNames: setNamesHandler,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
