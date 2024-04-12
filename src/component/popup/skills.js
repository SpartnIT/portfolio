import React from "react";
import Popup from "./base";
import { useState} from "react";

export default function Skills() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <p onClick={() => setButtonPopup(true)}>SKILLS</p>
            <>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div class='popup-inner'>
                    <div class="popup-header">
                        <h1>SKILLS</h1>
                    <div class="project-description">
                        <div class="project-details about">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>REACT</p>
                            <p>DJANGO</p>
                            <p>PYTHON</p>
                            <p>SQL</p>
                        </div>
                    </div>
                    </div>
                </div>
                </Popup>
            </>
        </div>
    )
}