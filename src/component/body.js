import React from "react";
import user from '../assets/img/Untitled-2.png';


export default function Body() {
    return (
        <div class="intro">
                <div class="description">
                    <h1>DAVIAN KING</h1>
                    <p>I'm a <span class="accents">Web Developer</span> with experience in creating front-end using <span class="accents">REACT.js</span> as well as the backend using <span class="accents">DJANGO</span> and my Knowledge of <span class="accents">REST API</span></p>
                </div>
                <div class="frame">
                    <img src={user} alt=""/>
                </div>
            </div>
    )
}