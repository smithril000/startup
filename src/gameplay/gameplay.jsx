
import React from 'react';
import './gameplay.css';
export function Gameplay() {
    const [text, setText] = React.useState('');
    const [userList, setUserList] = React.useState(localStorage.getItem('userList') || 'null');

    function change(e){
        setText(e.target.value);
    }
    function addPlayer(){
        //localStorage.setItem('userList', null)
        //we only want to do this if they are adding a name
        if(text != ''){
            let list = [];
            if(userList == 'null'){
                //we need to create our list and push
                list = [text];   
                
            }else{
                //we just need to get and push
                list = JSON.parse(userList)
                list.push(text)
            }
            //now push back to memory
            //test
            console.log(JSON.stringify(list))
            setUserList(JSON.stringify(list));
            localStorage.setItem('userList', JSON.stringify(list))
        }
    }

    function removePlayer(index){
        let list = [];
        //first get the list back from json
        list = JSON.parse(userList);
        list.splice(index, 1);
        localStorage.setItem('userList', JSON.stringify(list));
        setUserList(JSON.stringify(list))
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
                    {userList != 'null' && JSON.parse(userList).map((todo, index) => (<li key = {index}>{todo}</li>))}
                </ul>
            </div>
        </div>

        
    </main>
  );
}
