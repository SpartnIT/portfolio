import React from "react"
import Contact from "../component/popup/contact";
import Projects from "../component/popup/projects";
import About from "../component/popup/about";
import Skills from "./popup/skills";
import menu from '../assets/img/menu1.png';
import menuBtn from "./menu.js";


export default function Nav() {
    return (
            <div class="navbar" id="menuHeader">
                <h1 id="title">PORTFOLIO</h1>
                <img src={menu} alt="" id="menu" onClick={() => menuBtn()}/>
                <div class="nav" id="nav">
                    <>
                    <Projects/>
                    <About/>
                    <Skills/>
                    <Contact/>
                    </>
                </div>
            </div>
    )
}