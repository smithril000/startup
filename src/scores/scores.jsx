import React from 'react';
import './scores.css';
export function Scores() {
  const [scores, setScores] = React.useState([]);
  
    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/score')
        .then((response) => response.json())
        .then((scores) => {
          setScores(scores);
        });
    }, []);

    // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  }
  return (
    <main>
            <div className="scoreContainer">
                <h3>High Scores</h3>
                
                    <div className='scoreBoard'>{scoreRows}</div>
                
            </div>
            <div></div>
        </main>
  );
}