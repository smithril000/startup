import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Scores } from './scores/scores';

export default function App() {
  return (
    <BrowserRouter>
    <div>
        <header>
            <h1>Bank - A Dice Game</h1>
                <nav>
                    <menu>
                        <li><button className="button1" type="button"><NavLink className="nav-link" to="">Home</NavLink></button></li>
                        <li><button className="button2" type="button"><NavLink className="nav-link" to="scores">High Scores</NavLink></button></li>
                    </menu>
                </nav>

        </header>
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/scores' element={<Scores />} />
        </Routes>

        <footer>
                <span>Author: Riley Smith</span>
                <a href="https://github.com/smithril000/startup">My Github</a>
        </footer>
    </div>
    </BrowserRouter>
  );
}