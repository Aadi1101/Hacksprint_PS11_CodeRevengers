import React from "react";
import './../app.css';
import {Chat} from './Chat';

export const Home = () => {
    return (
        <div className="Main">
            <div className="header">
                <h3> WP Clone</h3>
                <h1>  </h1>
                <h5> Login </h5>
            </div>

            <div className="main-body">
                <div className="main-nav">
                    <span> Name1 </span>
                    <span> Name1 </span>
                    <span> Name1 </span>
                    <span> Name1 </span>
                    <span> Name1 </span>
                </div>
                <div className="chat-window">
                    <Chat />
                </div>
            </div>


        </div>
    )
}
