import React, { Component } from 'react';
import classes from './Invalid.css';

class Invalid extends Component {
    componentDidMount () {
        
    }

    render () {
        return (
            <div>
                {/* <p>Invalid Product ID</p> */}
                <h1 className={classes.text}>Invalid Product ID</h1>
            </div>
            
            )
    }
}

export default Invalid;