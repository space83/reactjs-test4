import React, { useState, useEffect } from "react";
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

    const popupTrigger = {
        display: showPopup ? "block" : "none"
    };

    return (
        <div>     
        <div className={classes.Popup} style={popupTrigger}>
        <h1>WARNING</h1>   
        <button onClick={handleShow}>Close</button>
        </div>
        </div>
        );
}
 
export default Popup;