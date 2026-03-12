import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useNavigate} from 'react-router-dom';

export function Home(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    async function login(){
        loginOrReg('/api/auth/login')
    }
    async function reg(){
        loginOrReg('/api/auth/create')
    }
    async function loginOrReg(endpoint){
        console.log("test - username and pass is" , userName, password);
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    return (
    
        <main>
                
            <div id="popupContainer" className="popup-container">
                <div className="popup-content">

                    <div>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                    </div>
                    <div>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    </div>
                    <button type="submit" onClick={login}>Login</button>
                    <button type="submit" onClick={reg}>Create</button>
                </div>
            </div>
        </main>
  );
}