import { Outlet, Link } from "react-router-dom";
import "./App.css";
import gameData from "./data.json";
import logo from "./assets/catan-white.svg";

export const getGameScore = (game) => {
  // création d'un tableau d'objets
  const gameScore = [];
  for (const player in game.scores) {
    gameScore.push({
      name: player,
      score: game.scores[player],
      bonus: "",
      general: 0,
    });
  }

  // tri alphabétique puis par score
  gameScore.sort((a, b) => a.name.localeCompare(b.name));
  gameScore.sort((a, b) => b.score - a.score);

  // 4 points au 1er
  gameScore[0].bonus += "🥇";
  gameScore[0].general += 4;

  // 1 point au 2e (attention il peut y avoir des 2e ex aequo)
  gameScore.forEach((player) => {
    if (player.score === gameScore[1].score) {
      player.bonus += "🥈";
      player.general += 1;
    }
  });

  // 0.5 point au 3e (attention il peut y avoir 0, 1 ou plusieurs 3e)
  if (gameScore[2].general === 0) {
    gameScore.forEach((player) => {
      if (player.score === gameScore[2].score) {
        player.bonus += "🥉";
        player.general += 0.5;
      }
    });
  }

  // bonus offensif 1 point
  if (gameScore[1].score <= 7) {
    gameScore[0].bonus += " 🗡️";
    gameScore[0].general += 1;
  }

  // bonus défensif 0.5 point
  gameScore.forEach((player) => {
    if (player.score === 9) {
      player.bonus += " 🛡️";
      player.general += 0.5;
    }
  });
  return gameScore;
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
      if (ranking[player.name]) {
        ranking[player.name].general += player.general;
        ranking[player.name].games += 1;
        ranking[player.name].total += player.score;
      } else {
        ranking[player.name] = {};
        ranking[player.name].general = player.general;
        ranking[player.name].games = 1;
        ranking[player.name].total = player.score;
      }
    });
  });

  const test = [];
  for (const player in ranking) {
    test.push({
      name: player,
      general: ranking[player].general,
      games: ranking[player].games,
      total: ranking[player].total,
    });
  }

  // tri alphabétique puis par score
  test.sort((a, b) => a.name.localeCompare(b.name));
  test.sort((a, b) => (b.total / b.games) - (a.total / a.games));
  console.log(test);
  return test;
};

console.log(getAllScores(gameData));
console.log(getRanking(gameData));

function App() {
  return (
    <>
      <div className="container">
        <header>
          <img className="logo" src={logo} alt="catan" />
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
      </div>
    </>
  );
}

export default App;
