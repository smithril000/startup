import React from 'react';
import './index.css';
export function Home() {
  return (
    <main>
            
            <div id="popupContainer" className="popup-container">
            <div className="popup-content">

                <div>
                    <input type="text" placeholder="your@email.com" />
                </div>
                <div>
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Create</button>
            </div>
        </div>
        </main>
  );
}