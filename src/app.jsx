import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header>
                <h1>Bank - A Dice Game</h1>
                    <nav>
                        <menu>
                            <li><button className="button1" type="button"><a href="index.html">Home</a></button></li>
                            <li><button className="button2" type="button"><a href="scores.html">High Scores</a></button></li>
                        </menu>
                    </nav>

            </header>

        <footer>
                <span>Author: Riley Smith</span>
                <a href="https://github.com/smithril000/startup">My Github</a>
        </footer>
    </div>
  );
}