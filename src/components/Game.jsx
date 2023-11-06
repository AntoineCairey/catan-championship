import { getGameScore } from "../App";

function Game({ game }) {
  const gameScore = getGameScore(game);

  const date = new Date(game.date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <>
      <div className="gamecard">
        <h3>{date.toLocaleString("fr-FR", options)}</h3>
        <table>
          <thead>
            <tr>
              <th>Joueur</th>
              <th>Score</th>
              <th>Bonus</th>
              <th>Général</th>
            </tr>
          </thead>
          <tbody>
            {gameScore.map((player) => (
              <tr key={player.name}>
                <td>{player.name}</td>
                <td>{player.score}</td>
                <td>{player.bonus}</td>
                <td>+{player.general}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Game;
