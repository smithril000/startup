import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useNavigate} from 'react-router-dom';
import {AuthState} from './authState'

export function Home({ userName2, authState, onAuthChange }) {
    const [userName, setUserName] = React.useState(userName2);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    console.log("test - we are in auth", authState)
    console.log("test - the user is ", userName)
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
            onAuthChange(userName, AuthState.Authenticated)
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    async function logout(){
        fetch(`/api/auth/logout`, {
        method: 'delete',
        })
        .catch(() => {
            // Logout failed. Assuming offline
        })
        .finally(() => {
        localStorage.removeItem('userName');
        onAuthChange(userName, AuthState.Unauthenticated)
        });
    }

    return (
    
        <main>
                
            <div id="popupContainer" className="popup-container">
                {authState === AuthState.Unauthenticated && <div className="popup-content">

                    <div>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                    </div>
                    <div>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    </div>
                    <button type="submit" onClick={login}>Login</button>
                    <button type="submit" onClick={reg}>Create</button>
                </div>}
                {authState === AuthState.Authenticated && <div className = "popup-content">
                    <div>Playing as:</div>
                    <div>{userName}</div>
                    <button type="submit" onClick={logout}>Logout</button>
                    </div>}
            </div>
        </main>
  );
}