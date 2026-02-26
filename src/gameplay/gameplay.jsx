
import React from 'react';
import './gameplay.css';
export function Gameplay() {
    const [text, setText] = React.useState('');
    const [userList, setUserList] = React.useState(localStorage.getItem('userList') || 'null');
    const [scoreList, setScoreList] = React.useState(localStorage.getItem('scoreList') || 'null');
    const [score, updateScore] = React.useState(localStorage.getItem('score') || '0');
    const [roll, setRoll] = React.useState('');
    const [round, setRound] = React.useState(localStorage.getItem('round')|| '0');
    const [state, setState] = React.useState(localStorage.getItem('state') || 'true');
    
    function change(e){
        setText(e.target.value);
    }
    function addPlayer(){
        //localStorage.setItem('userList', null)
        //we only want to do this if they are adding a name
        if(text != ''){
            let list = [];
            let scoreList = [[]];
            if(userList == 'null'){
                //we need to create our list and push
                list = [text];   
                scoreList = [[0, false]]
            }else{
                //we just need to get and push
                list = JSON.parse(userList)
                scoreList = JSON.parse(localStorage.getItem('scoreList'))
                list.push(text)
                scoreList.push([0, false])
            }
            //now push back to memory
            setUserList(JSON.stringify(list));
            localStorage.setItem('userList', JSON.stringify(list))
            //we also will add an index to our scores list
            setScoreList(JSON.stringify(scoreList))
            localStorage.setItem('scoreList', JSON.stringify(scoreList))
        }
    }

    function removePlayer(index){
        let list = [];
        //first get the list back from json
        list = JSON.parse(userList);
        list.splice(index, 1);
        localStorage.setItem('userList', JSON.stringify(list));
        setUserList(JSON.stringify(list))
        //we also need to do this for our score list'
        let scoreList = [[]];
        scoreList = JSON.parse(localStorage.getItem('scoreList'))
        scoreList.splice(index, 1);
        localStorage.setItem('scoreList', JSON.stringify(scoreList));
        setScoreList(JSON.stringify(scoreList));
    }
    function bankPlayer(index){
        let scoreList = [[]];
        scoreList = JSON.parse(localStorage.getItem('scoreList'))
        scoreList[index][1] = true
        localStorage.setItem('scoreList', JSON.stringify(scoreList))
        setScoreList(JSON.stringify(scoreList))
        //we also want to check if both players have banked
        allBanked();
    }
    function allBanked(){
        let check = true;
        let list = [[]]
        list = JSON.parse(localStorage.getItem('scoreList'));
        
        for(const thing of list){
            console.log(thing);
            if(thing[1] == false){
                check = false;
            }
        }
        console.log("check is ", check);
        if(check){
            //everyone has banked
            //set score and round changes
            localStorage.setItem('round', parseInt(round) + 1)
            setRound(parseInt(round) + 1);
            localStorage.setItem('score', 0);
            updateScore(0);
            //now revert everyone to unbanked
            //i will put this in other func so it can be called elsewhere
            allUnBank();
            if(parseInt(localStorage.getItem('round')) >= 10){
                localStorage.setItem('state', false);
                setState(false);
            }
        }
    }
    function allUnBank(){
        let check = true;
        let list = [[]]
        list = JSON.parse(scoreList);
        for(const thing of list){
            thing[1] = false;
        }
        //now to return the list
        localStorage.setItem('scoreList', JSON.stringify(list));
        setScoreList(JSON.stringify(list));
    }
    function rollDice(){
        let dice1 = 0;
        let dice2 = 0;
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        setRoll(dice1+dice2);
        console.log(roll);
        if(dice1+dice2 == 7){
            //score resets, people lose points
            console.log("found a seven")
            updateScores(parseInt(localStorage.getItem('score')) * -1);
            localStorage.setItem('score', 0);
            updateScore(0);
            //this also ends the round
            localStorage.setItem('round', parseInt(round) + 1);
            setRound(parseInt(round) + 1);
        }else if(dice1==dice2){
            updateScores(parseInt(localStorage.getItem('score')) * 2 - parseInt(localStorage.getItem('score')));
            localStorage.setItem('score', ((parseInt(score) * 2)) + ' Doubled!!!');
            updateScore((parseInt(score) + (parseInt(score) * 2)));
        }
        else{
            updateScores(dice1+dice2);
            //localStorage.setItem('score', score)
            //now we need to update individual scores
            localStorage.setItem('score', dice1+dice2 + parseInt(score));
            updateScore(dice1+dice2 + parseInt(score));
        }
        updateScore(localStorage.getItem('score'));
        console.log("setting the score to", localStorage.getItem('score'));
        

        function updateScores(amount){
            let list = [[]]
            list = JSON.parse(scoreList)
            for(const thing of list){
                if(thing[1] == false){
                    thing[0] = thing[0] + amount;
                }
            }
            //return the list
            setScoreList(JSON.stringify(list));
            localStorage.setItem('scoreList', JSON.stringify(list));
        }
        //now check if we hit round 10
        if(parseInt(localStorage.getItem('round')) >= 10){
            localStorage.setItem('state', false);
            setState(false);
        }
    }
    function restart(){
        localStorage.setItem('score', 0);
        updateScore(0);
        localStorage.setItem('state', 'true');
        setState('true');
        localStorage.setItem('round', 0);
        setRound(0);
        //keep users but reset their score
        let list = [[]];
        list = JSON.parse(localStorage.getItem('scoreList'))
        for(const thing of list){
            thing[0] = 0;

        }
        localStorage.setItem('scoreList', JSON.stringify(list));
        setScoreList(JSON.stringify(list));
    }

    //document.getElementById("removeButton").onclick = removePlayer;
  return (
    <main>
        <div className="gamearea">
            <div className = "addPlayerArea">
                <h2>Who's playing?</h2>
                <div className="enterName">
                    <input type="text" id="inputBox" onChange={change} placeholder="Player name" />
                    <button id="addPlayerButton" onClick={addPlayer} type="submit">Add player</button>
                </div>
                <div className="listOfPlayers">
                    <ul id="myList">
                        {userList != 'null' && JSON.parse(userList).map((todo, index) => (<li key = {index}>{todo}<button className="removeButton" type="button" onClick={ () => removePlayer(index)}>remove</button></li>))}
                    </ul>
                </div>
            </div>
            {state =='true' && <div className="gameplay">
                <div>Round: {localStorage.getItem('round')}</div>
                <p className ="score">Score: {localStorage.getItem('score')}</p>
                <img src="dice_image.png" alt="dice image" id="imageContainer" ></img>
            
                <button id="roll" type="input" onClick={rollDice}>Roll!</button>
                {roll != '' && <div>You Rolled a {roll}</div>}
            </div>}
            {localStorage.getItem('state') == 'false' && <div className="gameplay">
                    <p className ="score">Game Over</p>
                    <button className="removeButton" type="button" onClick={restart}>Restart</button>
                </div>}
            <div className="scoreboard">
                <h3>Players</h3>
                <ul className ="playerList">
                    {userList != 'null' && JSON.parse(userList).map((todo, index) => (<li key = {index}>{todo} - {
                        JSON.parse(localStorage.getItem('scoreList'))[index][0] }
                        {JSON.parse(localStorage.getItem('scoreList'))[index][1] == false && <button className="removeButton" type="button" onClick={ () => bankPlayer(index)}> Bank </button>}</li>))}
                </ul>
            </div>
        </div>

        
    </main>
  );
}
