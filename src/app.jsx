import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Gameplay} from './gameplay/gameplay';
import { Scores } from './scores/scores';
import { Rules } from './rules/rules';
import { AuthState } from './home/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
    <div>
        <header>
            <h1>Bank - A Dice Game</h1>
                <nav>
                    <menu>
                        <li><button className="button1" type="button"><NavLink className="nav-link" to="">Home</NavLink></button></li>
                        <li><button className="button2" type="button"><NavLink className="nav-link" to="/gameplay">Play</NavLink></button></li>
                        <li><button className="button2" type="button"><NavLink className="nav-link" to="scores">High Scores</NavLink></button></li>
                        <li><button className="button2" type="button"><NavLink className="nav-link" to="/rules">Rules</NavLink></button></li>
                    </menu>
                </nav>

        </header>
        <Routes>
            <Route path='/' element={<Home 
                userName2={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}/>} exact />
            <Route path='/gameplay' element={<Gameplay />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/rules' element={<Rules />} />
        </Routes>

        <footer>
                <span>Author: Riley Smith</span>
                <a href="https://github.com/smithril000/startup">My Github</a>
        </footer>
    </div>
    </BrowserRouter>
  );
}