import gameData from "../data.json";
import Game from "./Game";

function Games() {
  gameData.sort((a, b) => new Date(b.date) - new Date(a.date));
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
