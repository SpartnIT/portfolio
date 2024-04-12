import React from "react";
import Nav from "./nav";
import Body from "./body";
import crash from '../assets/img/crash-icon.png';
import CloudAnimation from "./cloudAnimation.js";




export default function Homepage() {
    return (
        <div class="deadpage">
            <section>
            <div class="crash-icon">
                <img src={crash} alt=""/>
            </div>
            <div class="crash-text">
                <div>
                    <h1>Aw, Snap!</h1>
                    <p>You crashed into something. Please try again.</p>
                </div>
            </div>
            <div class=" fix-me">
            <a href="#homepage"><button class="btn">Fix Me</button></a>
            </div>
        </section>
           <div class="homepage" id="homepage" >
           <canvas id="canvas"></canvas>
               <>
               <CloudAnimation/>
               <Nav/>
               <Body/>
               </>
            
            </div>
        </div>
    )
}