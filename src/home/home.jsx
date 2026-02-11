import React from 'react';
import './index.css';
export function Home() {
  return (
    <main>
            <h2>Who's playing?</h2>
            <div class="enterName">
                <input type="text" id="inputBox" placeholder="Player name" />
                <button id="addPlayerButton" type="submit">Add player</button>
            </div>
            <div class="listOfPlayers">
                <ul>
                    <li>Riley<button class="removeButton" type="button">remove</button></li>
                    <li>Sarah<button class="removeButton" type="button">remove</button></li>
                    <li>John<button class="removeButton" type="button">remove</button></li>
                    <li>Reed<button class="removeButton" type="button">remove</button></li>
                    <li>Riley<button class="removeButton" type="button">remove</button></li>
                    <li>Riley<button class="removeButton" type="button">remove</button></li>
                    <li>Riley<button class="removeButton" type="button">remove</button></li>
                    <li>Riley<button class="removeButton" type="button">remove</button></li>
                </ul>
            </div>
            <div>
                <a href="gameplay.html"><button class="button3" type="button">Start</button></a>
            </div>
        </main>
  );
}