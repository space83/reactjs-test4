import React, { Component } from 'react';
import classes from './Unauthorized.css';

class Unauthorized extends Component {
    componentDidMount () {
        
    }

    render () {
        return (
            <div>
                <p>Unauthorized</p>
                <h1 className={classes.text}>Unauthorized</h1>
            </div>
            
            )
    }
}

export default Unauthorized;