import React, { Component, useState, useEffect } from "react";
import classes from './Popup.css';

const Popup = () => {
    // Create a state variable to control the visibility of the popup
    const [showPopup, setShowPopup] = useState(false);

    // Use useEffect to show the popup when the component mounts
    useEffect(() => {
        setShowPopup(true);
        }, []);

    const handleShow = () => 
    {
        setShowPopup(false);
    }

    return (
        <div>     
            <div className={ showPopup ? classes.Popup : classes.PopupClosed} >
                <h1>WARNING</h1>   
                <button onClick={handleShow}>Close</button>
            </div>
        </div>
    );
}
 
export default Popup;