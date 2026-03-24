import React from 'react';
import './scores.css';
export function Scores() {
  const [scores, setScores] = React.useState(localStorage.getItem('scores') || 'null');

  setInterval(() => {
  // This will be replaced with WebSocket messages
  const userName = `User-${Math.floor(Math.random() * 100)}`;
  const score = Math.floor(Math.random() * 10000);
  updateScores(userName, score);
  }, 1000);


  function updateScores(username, score){
    
  }
  return (
    <main>
            <div className="scoreContainer">
                <h3>High Scores</h3>
                <ul className="scoreBoard">
                    {scores != 'null' && JSON.parse(scores).map((todo, index) => (<li key = {index}>{todo} ... {JSON.parse(scores)[index][0]}</li>))}
                </ul>
            </div>
            <div></div>
        </main>
  );
}