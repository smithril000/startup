import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useNavigate} from 'react-router-dom';

export function Home() {
    const [userName, setUser] = React.useState(localStorage.getItem('user'))
    const [text, setText] = React.useState("")
    const navigate = useNavigate();

    function loginUser(){
        setUser(text);
        localStorage.setItem('user', text)
        navigate('/gameplay')
    }
    function textChange(e){
        setText(e.target.value)
    }

    return (
    
        <main>
                
            <div id="popupContainer" className="popup-container">
                <div className="popup-content">

                    <div>
                        <input type="text" onChange={textChange} placeholder="your@email.com" />
                    </div>
                    <div>
                        <input type="password" placeholder="password" />
                    </div>
                    <button type="submit" onClick={loginUser}>Login</button>
                    <button type="submit">Create</button>
                </div>
            </div>
        </main>
  );
}