import { Outlet, Link } from "react-router-dom";
import "./App.css";
import gameData from "./data.json";

const getGameScore = (game) => {
  const scores = Object.entries(game.scores);
  // tri alphabétique puis par score
  scores.sort((a, b) => a[0].localeCompare(b[0]));
  scores.sort((a, b) => b[1] - a[1]);

  scores.forEach((player) => player.push(0, ""));

  // 4 points au 1er
  scores[0][2] += 4;
  scores[0][3] += "🥇";

  // 1 point au 2e (attention il peut y avoir des ex aequo)
  scores.forEach((player) => {
    if (player[1] === scores[1][1]) {
      player[2] += 1;
      player[3] += "🥈";
    }
  });

  // 0.5 point au 3e (si pas de 2e ex aequo)
  if (scores[2][2] === 0) {
    scores[2][2] += 0.5;
    scores[2][3] += "🥉";
  }

  // bonus offensif
  if (scores[1][1] <= 7) {
    scores[0][2] += 1;
    scores[0][3] += " 🗡️";
  }
  // bonus défensif
  scores.forEach((player) => {
    if (player[1] === 9) {
      player[2] += 0.5;
      player[3] += " 🛡️";
    }
  });
  return scores;
};

const getAllScores = (gameData) => {
  return gameData.map((game) => {
    return { date: game.date, scores: getGameScore(game) };
  });
};

export const getRanking = (gameData) => {
  const allScores = getAllScores(gameData);
  const ranking = {};
  allScores.forEach((game) => {
    game.scores.forEach((player) => {
      if (ranking[player[0]]) {
        ranking[player[0]].points += player[2];
        ranking[player[0]].games += 1;
      } else {
        ranking[player[0]] = {};
        ranking[player[0]].points = player[2];
        ranking[player[0]].games = 1;
      }
    });
  });
  console.log(ranking);
  const sortedRanking = Object.entries(ranking);
  // tri alphabétique puis par score
  sortedRanking.sort((a, b) => a[0].localeCompare(b[0]));
  sortedRanking.sort((a, b) => b[1].points - a[1].points);
  return sortedRanking;
};

console.log(getAllScores(gameData));
console.log(getRanking(gameData));

function App() {
  return (
    <>
      <header>
        <img className="logo" src="./src/assets/catan-white.svg" alt="catan" />
        <h1>Championship</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <nav>
        <Link to="/" className="menu-item">
          <span className="material-symbols-outlined">trophy</span>
          <span>Classement</span>
        </Link>
        <Link to="/games" className="menu-item">
          <span className="material-symbols-outlined">strategy</span>
          <span>Parties</span>
        </Link>
        <Link to="/rules" className="menu-item">
          <span className="material-symbols-outlined">menu_book</span>
          <span>Règles</span>
        </Link>
      </nav>
    </>
  );
}

export default App;
