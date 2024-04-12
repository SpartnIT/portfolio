import React from "react";
import Popup from "./base";
import { useState} from "react";
import ToDo from "../../assets/img/Todo.png";
import Header from "../../assets/img/Hunger-header.png"
import Body from "../../assets/img/Hunger-body.png"
import Cart from "../../assets/img/Hunger-cart.png"
import SS1 from "../../assets/img/PortfolioSS1.png"
import SS2 from "../../assets/img/PortfolioSS2.png"

export default function Projects() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <p onClick={() => setButtonPopup(true)}>PROJECTS</p>
            <>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div class='popup-inner'>
                        <div class="popup-header">
                            <h1>PROJECTS</h1>
                            <div class="project-header">
                                <h4>Basic ToDo App</h4>
                                <div class="project-description">
                                    <div class="project-img">
                                        <img src={ToDo} alt="" />
                                    </div>
                                    <div class="project-details">
                                        <p>Simple react based app that allows tasks to be added, highlighted when completed and also removed</p>
                                        <a href="https://spartnit-todo-list.netlify.app/" target="_blank" rel="noreferrer noopener"><span class='project-link'>View Project</span></a>
                                        <a href="https://github.com/SpartnIT/Todo-app" target="_blank" rel="noreferrer noopener"><span class='project-link'>View Code</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-header">
                                <h4>Hunger Captain</h4>
                                <div class="project-description">
                                    <div class="project-img">
                                        <img src={Header} href="https://hunger-captian.netlify.app/" alt="" />
                                        <img src={Body} alt="" />
                                        <img src={Cart} alt="" />
                                    </div>
                                    <div class="project-details">
                                        <p>A restaurant web application that allows users to add items to their cart then show the waiter in order to make placing an order simplier. Also has capabiltiy of leaving reviews.</p>
                                        <a href="https://hunger-captian.netlify.app/" target="_blank" rel="noreferrer noopener"><span class='project-link'>View Project</span></a>
                                        <a href="https://github.com/SpartnIT/Hunger_Captain" target="_blank" rel="noreferrer noopener"><span class='project-link'>View Code</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="project-header">
                                <h4>Portfolio Website</h4>
                                <div class="project-description">
                                    <div class="project-img">
                                        <img src={SS1} href="https://hunger-captian.netlify.app/" alt="" />
                                        <img src={SS2} alt="" />
                                    </div>
                                    <div class="project-details">
                                        <p>This is the website you are currently viewing .</p>
                                        <a href="https://github.com/SpartnIT/portfolioWebsite" target="_blank" rel="noreferrer noopener"><span class='project-link'>View Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Popup>
            </>
        </div>
    )
}