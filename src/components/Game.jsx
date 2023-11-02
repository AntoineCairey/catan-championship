function Game({ game }) {
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
            {scores.map((player) => (
              <tr key={player[0]}>
                <td>{player[0]}</td>
                <td>{player[1]}</td>
                <td>{player[3]}</td>
                <td>+{player[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Game;
