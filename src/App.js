import Board from "./components/Board/Board";
import GameProvider from "./context/GameProvider";

const App = () => {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
};

export default App;
