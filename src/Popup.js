import React from "react";
import './App.css';

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close d-flex mb-auto p-2" onClick={props.handleClose}></button>
                {props.content}
            </div>
        </div>
    )
}

export default Popup;