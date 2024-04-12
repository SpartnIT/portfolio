import React from "react";
import Popup from "./base";
import { useState} from "react";

export default function Contact() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <p onClick={() => setButtonPopup(true)}>ABOUT</p>
            <>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div class='popup-inner'>
                    <div class="popup-header">
                        <h1>ABOUT</h1>
                        <div class="project-description">
                            <div class="project-details about">
                                <p><span class="highlight">S</span>pending most of my time growing around computers and other forms of tech, whether it be by gaming or pulling things apart, I've found a passion for being in the technology field. There's always new emerging technologies and advancements to be discovered and explored. Upon leaving highschool I felt a bit lost as i wasn't sure which career path to persue. That is, until i was introduced to coding by a childhood friend. At first it seemed to make no sense whatsoever but as time passed, I found my self getting more intrigued and eager to learn more. Fast forward to current day,I am a graduate of the TECH I.S. Bootcamp studying Web Development with hopes of potentially branching off into software engineering in the future.</p>
                            </div>
                         </div>
                    </div>
                </div>
                </Popup>
            </>
        </div>
    )
}