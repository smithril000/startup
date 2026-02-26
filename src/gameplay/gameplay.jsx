
import React from 'react';
import './gameplay.css';
export function Gameplay() {
    const [text, setText] = React.useState('');
    const [userList, setUserList] = React.useState(localStorage.getItem('userList') || 'null');
    const [scoreList, setScoreList] = React.useState(localStorage.getItem('scoreList') || 'null');

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
            <div className="gameplay">
                <p className ="score">Score: 1024</p>
                <img src="dice_image.png" alt="dice image" id="imageContainer" ></img>
            
                <button id="roll" type="input">Roll!</button>
            </div>
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
