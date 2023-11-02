import gameData from "../data.json";
import { getRanking } from "../App.jsx";

const ranking = getRanking(gameData);

function Ranking() {
  return (
    <>
      <h2>Classement</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Points totaux</th>
            <th>Parties jouées</th>
            <th>Points par partie</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((player) => (
            <tr key={player[0]}>
              <td>{player[0]}</td>
              <td>{player[1].points}</td>
              <td>{player[1].games}</td>
              <td>{+(player[1].points / player[1].games).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Ranking;
