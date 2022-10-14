import React from "react";
import './../app.css';
import user from './../assets/user.svg';
import magnifier from './../assets/mag.svg';
import other from './../assets/other.svg';

export const Chat = ( {name, p_id} ) =>{
    return (
        <div className="chat-page">
            <div className="chat-header">
                <img src= {user} alt= "usr" className="big-svg"/>

                <h1> {name} </h1>
                
                <img src= {magnifier} alt= "%" className="small-svg"/>
                <img src= {other} alt= ":" className="small-svg more-options"/>
            </div>
            <div className=" chat-wrapper ">
                <div className="chat-content">
                    <p> </p>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder='Enter: ' ></input>
                    <button className="btn btn-primary"> Send </button>
                    <button className="btn btn-success"> Encrypt & Send</button>
                </div>
            </div>
        </div>
    )
}