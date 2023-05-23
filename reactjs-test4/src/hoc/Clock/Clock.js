import React, { useState, useEffect } from "react";

const Clock = () => {
    // Initialize the state with the current time
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // Use useEffect to set up an interval that updates the time every second
    useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Use a cleanup function to clear the interval when the component unmounts
    return () => {
    clearInterval(timerID);
    };
    }, []);

    // Define a function that updates the state with the current time
    const tick = () => {
    setTime(new Date().toLocaleTimeString());
    };

    // Return a JSX element that displays the time
    return <li>Time: {time}</li>;
}
 
export default Clock;