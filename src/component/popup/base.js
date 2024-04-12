import React from "react";
import closebtn from "../../assets/img/close-icon.png";
import '../../assets/style.css';

export default function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div class="popup" 
            // onClick={() => props.setTrigger(false)}
            >
                <div class="popup-content">
                    <div class="x">
                    <span id="closebtn" onClick={() => props.setTrigger(false)}><img src={closebtn} alt=""/></span>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}