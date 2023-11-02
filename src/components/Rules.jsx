function Rules() {
  return (
    <>
      <h2>Règles</h2>
      <div>
        <ul>
          <li>Victoire : 4 points</li>
          <li>2nde place : 1 point</li>
          <li>3ème place : 0,5 point</li>
          <li>
            Bonus offensif : 1 point en cas de victoire avec le 2nd à 7 points ou moins
          </li>
          <li>Bonus défensif : 0,5 point si défaite avec 9 points</li>
        </ul>
      </div>
    </>
  );
}

export default Rules;
