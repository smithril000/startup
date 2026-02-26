import React from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom';

export function Rules(){
    return(
        <main>
            <p>Rules</p>
            <p>The goal of the game is to get the highest score!</p>
            <p>There are 10 rounds in the game</p>
            <p>When you roll the dice the amount rolled is added to the total</p>
            <p>If a dobule is rolled the score doubles</p>
            <p>If a seven is rolled the total goes to 0 and the round ends</p>
            <p>At anytime you can "bank" and keep any points that are currently in the total, but then no more can be added to your score!</p>
            <p>You keep your score after each round ends</p>
        </main>
    )
}