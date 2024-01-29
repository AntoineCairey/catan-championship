import gameData from "../data.json";
import { getRanking } from "../App.jsx";

const ranking = getRanking(gameData);

function Ranking() {
  return (
    <>
      <h2>Classement</h2>
      <div className="gamecard">
        <table>
          <thead>
            <tr>
              <th>Joueur</th>
              <th>Points par partie</th>
              <th>Total de points</th>
              <th>Parties jouées</th>
              {/* <th>Score général</th>
              <th>Score par partie</th> */}
            </tr>
          </thead>
          <tbody>
            {ranking.map((player) => (
              <tr key={player.name}>
                <td>{player.name}</td>
                <td>{+(player.total / player.games).toFixed(3)}</td>
                <td>{player.total}</td>
                <td>{player.games}</td>
                {/* <td>{player.general}</td>
                <td>{+(player.general / player.games).toFixed(2)}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ranking;
