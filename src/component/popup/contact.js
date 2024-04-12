import React from "react";
import Popup from "./base";
import { useState} from "react";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";

export default function Contact() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <p onClick={() => setButtonPopup(true)}>CONTACT</p>
            <>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div class='popup-inner'>
                    <div class="popup-header">
                        <h1>CONTACT</h1>
                        <div class="project-description">
                            <div class="project-details about contact">
                                <p>EMAIL: kdavian6@gmail.com</p>
                                <div class="contact-links">
                                    <a href="https://github.com/SpartnIT" target="_blank" rel="noreferrer noopener"><img src={github} alt="" /><p>GitHub</p></a>
                                    <a href="https://www.linkedin.com/in/davian-king-/" target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="" /><p>LinkedIn</p></a>
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