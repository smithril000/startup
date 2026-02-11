import React from 'react';
import './scores.css';
export function Scores() {
  return (
    <main>
            <div className="scoreContainer">
                <h3>High Scores</h3>
                <ul className="scoreBoard">
                    <li>Riley.....626</li>
                    <li>Sarah.....1023</li>
                    <li>John.....63</li>
                </ul>
            </div>
        </main>
  );
}