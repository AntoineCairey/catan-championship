import gameData from "../data.json";
import Game from "./Game";

function Games() {
  return (
  <>
    <h2>Parties</h2>
    <div>
      {gameData.map((game) => (
        <Game key={game.date} game={game} />
      ))}
    </div>
  </>
  );
}

export default Games;
