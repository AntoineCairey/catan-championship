function Rules() {
  return (
    <>
      <h2>Règles</h2>
      <div className="gamecard">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Points</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Victoire</td>
              <td>+ 4 points</td>
            </tr>
            <tr>
              <td>🥈 2nde place</td>
              <td>+ 1 point</td>
            </tr>
            <tr>
              <td>🥉 3ème place</td>
              <td>+ 0,5 point</td>
            </tr>
            <tr>
              <td>🗡️ Bonus offensif</td>
              <td>+ 1 point</td>
              <td>victoire avec le 2nd à 7 points ou moins</td>
            </tr>
            <tr>
              <td>🛡️ Bonus défensif</td>
              <td>+ 0,5 point</td>
              <td>défaite avec 9 points</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Rules;
