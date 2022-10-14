import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import  'bootstrap/dist/css/bootstrap.css';
import './../app.css';
import {Chat} from './Chat';

var INFO = [
    { name : 'Adesh', p_id:'F01'},
    { name : 'Mangesh', p_id:'F01'},
    { name : 'Priya', p_id:'F01'},
    { name : 'Aaditya', p_id:'F01'}
]



export const Home = () => {

    const [ActiveChat, setActiveChat] = useState([]);

    

    return (
        <div className="Main">
            <div className="header">
                <h3> WP Clone</h3>
                <h1>  </h1>
                <h5> Login </h5>
            </div>

            <div className="main-body">
                <div className="main-nav">
                    
                    {
                        Object.keys(INFO).map((item, i) => (
                            <button className="nav-btn" onClick={

                                        (e)=>{ 
                                            var value = e.target.getAttribute('val');
                                            ActiveChat.pop();
                                            setActiveChat(  ActiveChat.concat(
                                                <Chat name={  INFO[value].name } p_id={INFO[value].p_id } />
                                            ));
                                        }
                                    }
                                key = {item} val = {item}> {INFO[item].name} </button>
                        ))
                    }



                </div>
                <div className="chat-window" id="window">
                    {ActiveChat}
                </div>
            </div>


        </div>
    )
}
