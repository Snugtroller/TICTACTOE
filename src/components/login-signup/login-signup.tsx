import React, { useState } from "react";
import './login-signup.css';
import pass_icon from '../assets/padlock.png'
import mail_icon from '../assets/mail.png'
import program_icon from '../assets/user.png'

const LoginSign = ()=>{
    const [action,setAction]=useState("Login");
    return(
        <div className="body">
            <div className="head">
            <div className="title">{action}</div>
            </div>
            <div className="inputs">
                {action=="Login"?<div></div>:<div className="inner">
                    <img src={program_icon}></img>
                    <input type="" placeholder="Name"></input>
                </div>}
                <div className="inner">
                    <img src={mail_icon}></img>
                    <input type="mail" placeholder="Mail"></input>
                </div>
                <div className="inner">
                    <img src={pass_icon}></img>
                    <input type="password" placeholder="Password"></input>
                </div>
                {action=="Sign Up"?<div></div>:<div className="forgot">forgot password</div>}
            </div>
            <div className="submit-container">
            <div className={action=="Login"?"signup grey":"signup"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"signup grey":"signup"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}
export default LoginSign;