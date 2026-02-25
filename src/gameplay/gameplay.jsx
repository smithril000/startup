
import React from 'react';
import './gameplay.css';
export function Gameplay() {
    const [text, setText] = React.useState('');
    const [userList, setUserList] = React.useState('');

    function change(e){
        setText(e.target.value);
    }

  return (
    <main>
        <div className="gamearea">
            <div className = "addPlayerArea">
                <h2>Who's playing?</h2>
                <div className="enterName">
                    <input type="text" id="inputBox" onChange={change} placeholder="Player name" />
                    <button id="addPlayerButton" type="submit">Add player</button>
                </div>
                <div className="listOfPlayers">
                    <ul>
                        <li>Riley<button className="removeButton" type="button">remove</button></li>
                        <li>{text}</li>
                    </ul>
                </div>
            </div>
            <div className="gameplay">
                <p className ="score">Score: 1024</p>
                <img src="dice_image.png" alt="dice image" id="imageContainer" ></img>
            
                <button id="roll" type="input">Roll!</button>
            </div>
            <div className="scoreboard">
                <h3>Players</h3>
                <ul className ="playerList">
                    <li>Riley...44</li>
                    <li>Sarah...126</li>
                </ul>
            </div>
        </div>

        
    </main>
  );
}
